import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Copy, Dices, Download, Lock, RefreshCcw, Save, Sparkles, Unlock } from "lucide-react";
import {
  bodyPartLabels,
  ecoregions,
  elements,
  partTemplates,
  temperaments,
  weaknesses
} from "./data";
import "./styles.css";

const STORAGE_KEY = "bestiario-argentino:vite:v1";
const regionIds = Object.keys(ecoregions);
const elementIds = Object.keys(elements);
const partKeys = Object.keys(bodyPartLabels);

function App() {
  const [regionId, setRegionId] = useStored("regionId", "ibera");
  const [elementId, setElementId] = useStored("elementId", "any");
  const [locked, setLocked] = useStored("locked", {});
  const [saved, setSaved] = useStored("saved", []);
  const [creature, setCreature] = useStored("creature", () => generateCreature({ regionId: "ibera", elementId: "any" }));
  const [enhanced, setEnhanced] = useStored("enhanced", "");
  const [enhancing, setEnhancing] = useState(false);
  const [enhanceError, setEnhanceError] = useState("");
  const [toast, setToast] = useState("");

  const region = ecoregions[regionId];
  const allowedElements = region.elements;
  const effectiveElementId = elementId === "any" || allowedElements.includes(elementId) ? elementId : "any";

  const availableElementOptions = useMemo(() => {
    return ["any", ...allowedElements];
  }, [allowedElements]);

  function notify(message) {
    setToast(message);
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => setToast(""), 1800);
  }

  function regenerate({ onlyUnlocked = false } = {}) {
    const next = generateCreature({
      regionId,
      elementId: effectiveElementId,
      previous: onlyUnlocked ? creature : null,
      locked
    });
    setCreature(next);
    setEnhanced("");
    setEnhanceError("");
    notify("Criatura generada.");
  }

  function rerollPart(partKey) {
    const next = generateCreature({
      regionId,
      elementId: effectiveElementId,
      previous: creature,
      locked: { ...locked, [partKey]: false },
      forcePart: partKey
    });
    setCreature(next);
    setEnhanced("");
    setEnhanceError("");
  }

  async function copyText(text, message) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.append(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    notify(message);
  }

  function saveCreature() {
    setSaved([{ ...creature, enhanced, id: crypto.randomUUID(), savedAt: new Date().toISOString() }, ...saved]);
    notify("Criatura guardada.");
  }

  async function enhanceCreature() {
    setEnhancing(true);
    setEnhanceError("");
    try {
      const response = await fetch("/api/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ creature })
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "No se pudo mejorar la ficha.");
      setEnhanced(payload.text);
      notify("Ficha mejorada con IA.");
    } catch (error) {
      setEnhanceError(error.message || "Error al conectar con Groq.");
    } finally {
      setEnhancing(false);
    }
  }

  function downloadJson() {
    const blob = new Blob([JSON.stringify({ ...creature, enhanced }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${slug(creature.name)}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function handleRegion(value) {
    setRegionId(value);
    const nextRegion = ecoregions[value];
    if (elementId !== "any" && !nextRegion.elements.includes(elementId)) {
      setElementId("any");
      notify("Elemento ajustado por compatibilidad de ecorregion.");
    }
  }

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-4 px-3 py-3 sm:px-5 lg:grid-cols-[320px_minmax(0,1fr)] lg:py-5">
        <aside className="space-y-3 lg:sticky lg:top-5 lg:self-start">
          <section className="rounded-lg border border-stone-700/80 bg-stone-900/85 p-4 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-normal text-amber-300">Bestiario</p>
            <h1 className="mt-1 text-2xl font-black leading-tight text-stone-50">Fantastico Argentino</h1>
            <p className="mt-2 text-sm leading-6 text-stone-400">
              Criaturas inventadas a partir de fauna local, ecorregiones y elementos compatibles.
            </p>
          </section>

          <section className="rounded-lg border border-stone-700/80 bg-stone-900/85 p-4">
            <label className="label" htmlFor="region">Ecorregion</label>
            <select id="region" className="select" value={regionId} onChange={(event) => handleRegion(event.target.value)}>
              {regionIds.map((id) => <option key={id} value={id}>{ecoregions[id].label}</option>)}
            </select>

            <label className="label mt-4" htmlFor="element">Elemento</label>
            <select id="element" className="select" value={effectiveElementId} onChange={(event) => setElementId(event.target.value)}>
              {availableElementOptions.map((id) => <option key={id} value={id}>{id === "any" ? "Cualquiera compatible" : elements[id].label}</option>)}
            </select>

            <div className="mt-4 flex flex-wrap gap-2">
              {allowedElements.map((id) => <span className="pill" key={id}>{elements[id].label}</span>)}
            </div>
          </section>

          <section className="rounded-lg border border-stone-700/80 bg-stone-900/85 p-4">
            <div className="grid gap-2">
              <button className="btn-primary" onClick={() => regenerate()}><Dices size={18} /> Randomizar</button>
              <button className="btn" onClick={() => regenerate({ onlyUnlocked: true })}><RefreshCcw size={18} /> Solo desbloqueados</button>
              <button className="btn" onClick={saveCreature}><Save size={18} /> Guardar</button>
              <button className="btn" onClick={() => copyText(formatSheet(creature, enhanced), "Ficha copiada.")}><Copy size={18} /> Copiar ficha</button>
              <button className="btn" onClick={downloadJson}><Download size={18} /> JSON</button>
            </div>
          </section>
        </aside>

        <section className="space-y-4">
          <section className="rounded-lg border border-stone-700/80 bg-gradient-to-br from-stone-900 to-stone-950 p-4 shadow-2xl sm:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-normal text-amber-300">{region.label} / {elements[creature.elementId].label}</p>
                <h2 className="mt-2 text-3xl font-black leading-none text-stone-50 sm:text-5xl">{creature.name}</h2>
              </div>
              <button className="btn-primary w-full md:w-auto" onClick={() => copyText(creature.description, "Descripcion copiada.")}>
                <Copy size={18} /> Copiar descripcion
              </button>
            </div>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-stone-200">{creature.description}</p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
              <Fact label="Habitat" value={creature.habitat} />
              <Fact label="Ataque" value={creature.attack} />
              <Fact label="Defensa" value={creature.defense} />
              <Fact label="Debilidad" value={creature.weakness} />
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <button className="btn-primary" onClick={enhanceCreature} disabled={enhancing}>
                <Sparkles size={18} /> {enhancing ? "Mejorando..." : "Enhance IA"}
              </button>
              {enhanced ? (
                <button className="btn" onClick={() => copyText(enhanced, "Ficha IA copiada.")}>
                  <Copy size={18} /> Copiar IA
                </button>
              ) : null}
            </div>
            {enhanceError ? <p className="mt-3 rounded-lg border border-red-500/40 bg-red-950/40 p-3 text-sm text-red-200">{enhanceError}</p> : null}
            {enhanced ? (
              <article className="mt-5 rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-4">
                <p className="text-xs font-black uppercase tracking-normal text-emerald-300">Ficha mejorada por IA</p>
                <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-7 text-stone-200">{enhanced}</pre>
              </article>
            ) : null}
          </section>

          <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {partKeys.map((key) => (
              <article key={key} className="rounded-lg border border-stone-700/80 bg-stone-900/80 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-normal text-stone-500">{bodyPartLabels[key]}</p>
                    <h3 className="mt-1 text-base font-bold text-stone-100">{creature.parts[key].text}</h3>
                  </div>
                  <div className="flex gap-1">
                    <button className="icon-btn" title="Randomizar parte" onClick={() => rerollPart(key)}><RefreshCcw size={16} /></button>
                    <button className="icon-btn" title="Bloquear parte" onClick={() => setLocked({ ...locked, [key]: !locked[key] })}>
                      {locked[key] ? <Lock size={16} /> : <Unlock size={16} />}
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm text-stone-400">Inspirado en: {creature.parts[key].animal}</p>
              </article>
            ))}
          </section>

          <section className="rounded-lg border border-stone-700/80 bg-stone-900/80 p-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-black">Guardadas</h2>
              <span className="text-sm text-stone-500">{saved.length}</span>
            </div>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              {saved.length === 0 ? <p className="text-sm text-stone-500">Todavia no hay criaturas guardadas.</p> : saved.slice(0, 8).map((item) => (
                <button key={item.id} className="rounded-lg border border-stone-700 bg-stone-950 p-3 text-left hover:border-amber-400" onClick={() => {
                  setCreature(item);
                  setEnhanced(item.enhanced || "");
                }}>
                  <strong className="block text-stone-100">{item.name}</strong>
                  <span className="mt-1 block text-sm text-stone-500">{ecoregions[item.regionId].label} / {elements[item.elementId].label}</span>
                </button>
              ))}
            </div>
          </section>
        </section>
      </div>
      <div className={`fixed bottom-4 left-1/2 max-w-[calc(100vw-24px)] -translate-x-1/2 rounded-lg border border-amber-400/50 bg-stone-900 px-4 py-3 text-sm shadow-2xl transition ${toast ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        {toast}
      </div>
    </main>
  );
}

function Fact({ label, value }) {
  return (
    <div className="rounded-lg border border-stone-700 bg-stone-950/70 p-3">
      <strong className="block text-xs uppercase tracking-normal text-amber-300">{label}</strong>
      <span className="mt-1 block text-sm leading-5 text-stone-300">{value}</span>
    </div>
  );
}

function generateCreature({ regionId, elementId, previous = null, locked = {}, forcePart = null }) {
  const region = ecoregions[regionId];
  const resolvedElementId = elementId === "any" || !region.elements.includes(elementId) ? random(region.elements) : elementId;
  const element = elements[resolvedElementId];
  const animals = region.species;

  const parts = {};
  partKeys.forEach((key) => {
    if (previous && locked[key] && !forcePart) {
      parts[key] = previous.parts[key];
      return;
    }
    if (previous && locked[key] && forcePart !== key) {
      parts[key] = previous.parts[key];
      return;
    }
    const animal = random(animals);
    parts[key] = {
      animal,
      text: `${random(partTemplates[key])} ${animal}`
    };
  });

  const name = makeName(parts, resolvedElementId);
  const habitat = random(region.habitats);
  const attack = random(element.attacks);
  const defense = random(element.defenses);
  const mark = random(element.marks);
  const temperament = random(temperaments);
  const palette = random(region.palette);
  const weakness = random(weaknesses[resolvedElementId]);

  const description = `${name} es una criatura inventada de ${region.label}, no una especie real: combina ${parts.body.text}, ${parts.head.text}, ${parts.legs.text} y ${parts.tail.text}. Su ${parts.hide.text} expresa una adaptacion de tipo ${element.label.toLowerCase()}: ${mark}. Vive en ${habitat}, se comporta de forma ${temperament}, ataca con ${attack} y se protege mediante ${defense}. Su punto debil natural es ${weakness}. Paleta sugerida: ${palette}.`;

  return {
    id: crypto.randomUUID(),
    name,
    regionId,
    elementId: resolvedElementId,
    habitat,
    attack,
    defense,
    weakness,
    palette,
    parts,
    description
  };
}

function makeName(parts, elementId) {
  const syllables = ["Aru", "Kai", "Tala", "Ñac", "Piru", "Curá", "Yasi", "Puel", "Iber", "Kalen", "Ner", "Trem"];
  const endings = ["mbo", "len", "curu", "ray", "tari", "ken", "vilo", "mara", "puk", "yen"];
  const elementTags = { fire: "zonda", water: "ibera", plant: "ceibo", rock: "laja", ice: "austral", wind: "pampero", storm: "trueno", mud: "barro", salt: "sal", shadow: "umbra", metal: "fierro", spore: "micelio" };
  return `${random(syllables)}${random(endings)} ${elementTags[elementId]}`;
}

function formatSheet(creature, enhanced = "") {
  const partLines = partKeys.map((key) => `- ${bodyPartLabels[key]}: ${creature.parts[key].text}`).join("\n");
  const enhancedSection = enhanced ? `\n## Ficha IA\n${enhanced}\n` : "";
  return `# ${creature.name}

${creature.description}

## Partes
${partLines}

## Combate
- Ataque: ${creature.attack}
- Defensa: ${creature.defense}
- Debilidad: ${creature.weakness}
${enhancedSection}
`;
}

function random(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function slug(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function useStored(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}:${key}`);
      if (saved) return JSON.parse(saved);
    } catch {
      localStorage.removeItem(`${STORAGE_KEY}:${key}`);
    }
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });
  React.useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}:${key}`, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

createRoot(document.getElementById("root")).render(<App />);
