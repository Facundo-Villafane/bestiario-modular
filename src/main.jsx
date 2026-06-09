import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Copy, Dices, Download, Lock, LogIn, LogOut, RefreshCcw, Save, Sparkles, Unlock, UserCircle } from "lucide-react";
import {
  anthroAnatomy,
  anthroAppeal,
  anthroBodyTypes,
  anthroHooks,
  anthroPalettes,
  anthroPersonalities,
  anthroPoses,
  anthroSpecies,
  anthroStyle,
  bodyPartLabels,
  ecoregions,
  elements,
  magicalTraits,
  mythicBehaviors,
  partTemplates,
  temperaments,
  visualOddities,
  weaknesses
} from "./data";
import "./styles.css";

const STORAGE_KEY = "bestiario-argentino:vite:v1";
const regionIds = Object.keys(ecoregions);
const partKeys = Object.keys(bodyPartLabels);
const tabs = {
  bestiary: "Bestiario",
  anthro: "Anthro"
};

function App() {
  const [activeTab, setActiveTab] = useStored("activeTab", "bestiary");
  const [regionId, setRegionId] = useStored("regionId", "ibera");
  const [elementId, setElementId] = useStored("elementId", "any");
  const [locked, setLocked] = useStored("locked", {});
  const [saved, setSaved] = useStored("saved", []);
  const [creature, setCreature] = useStored("creature", () => generateCreature({ regionId: "ibera", elementId: "any" }));
  const [anthro, setAnthro] = useStored("anthro", () => generateAnthroCharacter());
  const [enhanced, setEnhanced] = useStored("enhanced", "");
  const [enhancing, setEnhancing] = useState(false);
  const [enhanceError, setEnhanceError] = useState("");
  const [cloudLoading, setCloudLoading] = useState(false);
  const [cloudError, setCloudError] = useState("");
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [toast, setToast] = useState("");

  const region = ecoregions[regionId];
  const allowedElements = region.elements;
  const effectiveElementId = elementId === "any" || allowedElements.includes(elementId) ? elementId : "any";

  const availableElementOptions = useMemo(() => {
    return ["any", ...allowedElements];
  }, [allowedElements]);

  useEffect(() => {
    let unsubscribe = () => {};
    import("./firebase")
      .then(({ subscribeToAuth }) => {
        unsubscribe = subscribeToAuth((nextUser) => {
          setUser(nextUser);
          setAuthReady(true);
          if (nextUser) {
            refreshCloud(nextUser);
          } else {
            setSaved([]);
          }
        });
      })
      .catch((error) => {
        setAuthReady(true);
        setCloudError(error.message || "No se pudo iniciar Firebase.");
      });
    return () => unsubscribe();
  }, []);

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

  function regenerateAnthro() {
    setAnthro(generateAnthroCharacter());
    notify("Personaje anthro generado.");
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

  async function saveCreature() {
    if (!user) {
      notify("Inicia sesion con Google para guardar.");
      return;
    }
    setCloudLoading(true);
    setCloudError("");
    try {
      const { saveCreatureToCloud } = await import("./firebase");
      const savedCreature = await saveCreatureToCloud(creature, enhanced);
      setSaved([savedCreature, ...saved.filter((item) => item.id !== savedCreature.id)]);
      notify("Criatura guardada en Firebase.");
    } catch (error) {
      setCloudError(error.message || "No se pudo guardar en Firebase.");
    } finally {
      setCloudLoading(false);
    }
  }

  async function refreshCloud(activeUser = user) {
    if (!activeUser) {
      setSaved([]);
      return;
    }
    setCloudLoading(true);
    setCloudError("");
    try {
      const { loadCloudCreatures } = await import("./firebase");
      const cloudCreatures = await loadCloudCreatures();
      setSaved(cloudCreatures);
    } catch (error) {
      setCloudError(error.message || "No se pudieron cargar criaturas de Firebase.");
    } finally {
      setCloudLoading(false);
    }
  }

  async function removeSaved(item) {
    if (!user) {
      notify("Inicia sesion con Google para borrar.");
      return;
    }
    setCloudLoading(true);
    setCloudError("");
    try {
      const { deleteCloudCreature } = await import("./firebase");
      await deleteCloudCreature(item.id);
    } catch (error) {
      setCloudError(error.message || "No se pudo borrar en Firebase.");
      setCloudLoading(false);
      return;
    }
    setCloudLoading(false);
    setSaved(saved.filter((savedItem) => savedItem.id !== item.id));
    notify("Criatura borrada.");
  }

  async function loginGoogle() {
    setAuthLoading(true);
    setCloudError("");
    try {
      const { signInWithGoogle } = await import("./firebase");
      await signInWithGoogle();
      notify("Sesion iniciada.");
    } catch (error) {
      setCloudError(error.message || "No se pudo iniciar sesion con Google.");
    } finally {
      setAuthLoading(false);
    }
  }

  async function logoutGoogle() {
    setAuthLoading(true);
    setCloudError("");
    try {
      const { signOutGoogle } = await import("./firebase");
      await signOutGoogle();
      notify("Sesion cerrada.");
    } catch (error) {
      setCloudError(error.message || "No se pudo cerrar sesion.");
    } finally {
      setAuthLoading(false);
    }
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
    const payload = activeTab === "anthro" ? anthro : { ...creature, enhanced };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${slug(payload.name)}.json`;
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
    <main className="min-h-screen overflow-x-hidden bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-4 px-3 py-3 sm:px-5 2xl:grid-cols-[320px_minmax(0,1fr)] lg:py-5">
        <aside className="space-y-3 2xl:sticky 2xl:top-5 2xl:self-start">
          <section className="surface p-4">
            <p className="text-xs font-black uppercase tracking-normal text-amber-300">Bestiario</p>
            <h1 className="mt-1 text-2xl font-black leading-tight text-stone-50">Fantastico Argentino</h1>
            <p className="copy-text mt-2 text-sm leading-6 text-stone-400">
              Entidades inventadas a partir de habitats argentinos, elementos y rarezas de bestiario.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg border border-stone-700 bg-stone-950 p-1">
              {Object.entries(tabs).map(([id, label]) => (
                <button
                  key={id}
                  className={activeTab === id ? "tab-active" : "tab"}
                  onClick={() => setActiveTab(id)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-stone-700 bg-stone-950 p-3">
              {user ? (
                <div className="flex items-center gap-3">
                  {user.photoURL ? (
                    <img className="h-9 w-9 rounded-full" src={user.photoURL} alt="" referrerPolicy="no-referrer" />
                  ) : (
                    <UserCircle className="h-9 w-9 text-stone-400" />
                  )}
                  <div className="min-w-0 flex-1">
                    <strong className="block truncate text-sm text-stone-100">{user.displayName || "Cuenta Google"}</strong>
                    <span className="block truncate text-xs text-stone-500">{user.email}</span>
                  </div>
                  <button className="icon-btn" title="Cerrar sesion" onClick={logoutGoogle} disabled={authLoading}>
                    <LogOut size={16} />
                  </button>
                </div>
              ) : (
                <button className="btn w-full" onClick={loginGoogle} disabled={!authReady || authLoading}>
                  <LogIn size={18} /> {authLoading ? "Conectando..." : "Entrar con Google"}
                </button>
              )}
            </div>
          </section>

          {activeTab === "bestiary" ? (
            <section className="surface p-4">
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
          ) : (
            <section className="surface p-4">
              <p className="text-xs font-black uppercase tracking-normal text-amber-300">Anthro Character</p>
              <p className="copy-text mt-2 text-sm leading-6 text-stone-400">
                Personajes adultos furry/anthro con anatomia expresiva, diversidad corporal y atractivo visual sugerente no explicito.
              </p>
            </section>
          )}

          <section className="surface p-4">
            <div className="grid gap-2">
              {activeTab === "bestiary" ? (
                <>
                  <button className="btn-primary" onClick={() => regenerate()}><Dices size={18} /> Randomizar</button>
                  <button className="btn" onClick={() => regenerate({ onlyUnlocked: true })}><RefreshCcw size={18} /> Solo desbloqueados</button>
                  <button className="btn" onClick={saveCreature} disabled={!user || cloudLoading}><Save size={18} /> {cloudLoading ? "Sincronizando..." : "Guardar"}</button>
                  <button className="btn" onClick={refreshCloud} disabled={!user || cloudLoading}><RefreshCcw size={18} /> Cargar Firebase</button>
                  <button className="btn" onClick={() => copyText(formatSheet(creature, enhanced), "Ficha copiada.")}><Copy size={18} /> Copiar ficha</button>
                </>
              ) : (
                <>
                  <button className="btn-primary" onClick={regenerateAnthro}><Dices size={18} /> Randomizar anthro</button>
                  <button className="btn" onClick={() => copyText(formatAnthroSheet(anthro), "Ficha anthro copiada.")}><Copy size={18} /> Copiar ficha</button>
                </>
              )}
              <button className="btn" onClick={downloadJson}><Download size={18} /> JSON</button>
            </div>
          </section>
        </aside>

        {activeTab === "bestiary" ? (
        <section className="min-w-0 space-y-4">
          <section className="surface p-4 sm:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-normal text-amber-300">{region.label} / {elements[creature.elementId].label}</p>
                <h2 className="copy-text mt-2 text-3xl font-black leading-none text-stone-50 sm:text-5xl">{creature.name}</h2>
              </div>
              <button className="btn-primary w-full md:w-auto" onClick={() => copyText(creature.description, "Descripcion copiada.")}>
                <Copy size={18} /> Copiar descripcion
              </button>
            </div>

            <p className="copy-text mt-5 max-w-4xl text-lg leading-8 text-stone-200">{creature.description}</p>

            <div className="mt-5 grid min-w-0 gap-2 lg:grid-cols-2 2xl:grid-cols-4">
              <Fact label="Habitat" value={creature.habitat} />
              <Fact label="Ataque" value={creature.attack} />
              <Fact label="Defensa" value={creature.defense} />
              <Fact label="Debilidad" value={creature.weakness} />
              <Fact label="Rareza" value={creature.magicalTrait} />
              <Fact label="Origen" value={creature.elementOrigin} />
              <Fact label="Conducta" value={creature.mythicBehavior} />
              <Fact label="Silueta" value={creature.visualOddity} />
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
            {enhanceError ? <p className="mt-3 rounded-lg border border-red-500 bg-red-950 p-3 text-sm text-red-200">{enhanceError}</p> : null}
            {enhanced ? (
              <article className="mt-5 rounded-lg border border-emerald-700 bg-emerald-950 p-4">
                <p className="text-xs font-black uppercase tracking-normal text-emerald-300">Ficha mejorada por IA</p>
                <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-7 text-stone-200">{enhanced}</pre>
              </article>
            ) : null}
          </section>

          <section className="grid min-w-0 gap-3 lg:grid-cols-2 2xl:grid-cols-4">
            {partKeys.map((key) => (
              <article key={key} className="surface p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-normal text-stone-500">{bodyPartLabels[key]}</p>
                    <h3 className="copy-text mt-1 text-base font-bold leading-6 text-stone-100">{creature.parts[key].text}</h3>
                  </div>
                  <div className="flex gap-1">
                    <button className="icon-btn" title="Randomizar parte" onClick={() => rerollPart(key)}><RefreshCcw size={16} /></button>
                    <button className="icon-btn" title="Bloquear parte" onClick={() => setLocked({ ...locked, [key]: !locked[key] })}>
                      {locked[key] ? <Lock size={16} /> : <Unlock size={16} />}
                    </button>
                  </div>
                </div>
                <p className="copy-text mt-3 text-sm text-stone-400">Anatomia fantastica generada para esta criatura.</p>
              </article>
            ))}
          </section>

          <section className="surface p-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-black">Guardadas</h2>
              <span className="text-sm text-stone-500">{cloudLoading ? "sync" : saved.length}</span>
            </div>
            {cloudError ? <p className="mt-3 rounded-lg border border-red-500 bg-red-950 p-3 text-sm text-red-200">{cloudError}</p> : null}
            <div className="mt-3 grid min-w-0 gap-2 md:grid-cols-2">
              {!user ? <p className="copy-text text-sm text-stone-500">Inicia sesion con Google para ver tus criaturas guardadas.</p> : saved.length === 0 ? <p className="copy-text text-sm text-stone-500">Todavia no hay criaturas guardadas.</p> : saved.slice(0, 12).map((item) => (
                <article key={item.id} className="min-w-0 overflow-hidden rounded-lg border border-stone-700 bg-stone-950 p-3">
                  <button className="w-full text-left" onClick={() => {
                    setCreature(item);
                    setEnhanced(item.enhanced || "");
                  }}>
                    <strong className="copy-text block text-stone-100">{item.name}</strong>
                    <span className="copy-text mt-1 block text-sm text-stone-500">{ecoregions[item.regionId]?.label || "Ecorregion"} / {elements[item.elementId]?.label || "Elemento"}</span>
                  </button>
                  <button className="mt-3 text-xs font-bold text-red-300 hover:text-red-200" onClick={() => removeSaved(item)}>Borrar</button>
                </article>
              ))}
            </div>
          </section>
        </section>
        ) : (
        <AnthroPanel anthro={anthro} copyText={copyText} regenerateAnthro={regenerateAnthro} />
        )}
      </div>
      {toast ? (
        <div className="fixed bottom-4 left-1/2 max-w-[calc(100vw-24px)] -translate-x-1/2 rounded-lg border border-amber-500 bg-stone-900 px-4 py-3 text-sm">
          {toast}
        </div>
      ) : null}
    </main>
  );
}

function Fact({ label, value }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-lg border border-stone-700 bg-stone-950 p-3">
      <strong className="block text-xs uppercase tracking-normal text-amber-300">{label}</strong>
      <span className="copy-text mt-1 block text-sm leading-5 text-stone-300">{value}</span>
    </div>
  );
}

function AnthroPanel({ anthro, copyText, regenerateAnthro }) {
  return (
    <section className="min-w-0 space-y-4">
      <section className="surface p-4 sm:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-normal text-amber-300">Anthro / Non-explicit appeal</p>
            <h2 className="copy-text mt-2 text-3xl font-black leading-none text-stone-50 sm:text-5xl">{anthro.name}</h2>
          </div>
          <button className="btn-primary w-full md:w-auto" onClick={() => copyText(anthro.description, "Descripcion anthro copiada.")}>
            <Copy size={18} /> Copiar descripcion
          </button>
        </div>

        <p className="copy-text mt-5 max-w-4xl text-lg leading-8 text-stone-200">{anthro.description}</p>

        <div className="mt-5 grid min-w-0 gap-2 lg:grid-cols-2 2xl:grid-cols-4">
          <Fact label="Base" value={anthro.species} />
          <Fact label="Cuerpo" value={anthro.bodyType} />
          <Fact label="Anatomia" value={anthro.anatomy} />
          <Fact label="Estilo" value={anthro.style} />
          <Fact label="Appeal" value={anthro.appeal} />
          <Fact label="Personalidad" value={anthro.personality} />
          <Fact label="Pose" value={anthro.pose} />
          <Fact label="Paleta" value={anthro.palette} />
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button className="btn-primary" onClick={regenerateAnthro}>
            <Dices size={18} /> Randomizar anthro
          </button>
          <button className="btn" onClick={() => copyText(formatAnthroSheet(anthro), "Ficha anthro copiada.")}>
            <Copy size={18} /> Copiar ficha
          </button>
        </div>
      </section>

      <section className="grid min-w-0 gap-3 lg:grid-cols-2 2xl:grid-cols-3">
        <article className="surface p-4">
          <p className="text-xs font-black uppercase tracking-normal text-stone-500">Silueta</p>
          <h3 className="copy-text mt-1 text-base font-bold leading-6 text-stone-100">{anthro.bodyType}</h3>
          <p className="copy-text mt-3 text-sm text-stone-400">{anthro.anatomy}</p>
        </article>
        <article className="surface p-4">
          <p className="text-xs font-black uppercase tracking-normal text-stone-500">Visual Appeal</p>
          <h3 className="copy-text mt-1 text-base font-bold leading-6 text-stone-100">{anthro.appeal}</h3>
          <p className="copy-text mt-3 text-sm text-stone-400">Sugerente por pose, expresion y diseno; no explicito.</p>
        </article>
        <article className="surface p-4">
          <p className="text-xs font-black uppercase tracking-normal text-stone-500">Prompt base</p>
          <h3 className="copy-text mt-1 text-base font-bold leading-6 text-stone-100">{anthro.imagePrompt}</h3>
        </article>
      </section>
    </section>
  );
}

function generateCreature({ regionId, elementId, previous = null, locked = {}, forcePart = null }) {
  const region = ecoregions[regionId];
  const resolvedElementId = elementId === "any" || !region.elements.includes(elementId) ? random(region.elements) : elementId;
  const element = elements[resolvedElementId];

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
    parts[key] = {
      text: random(partTemplates[key])
    };
  });

  const name = makeName();
  const habitat = random(region.habitats);
  const attack = random(element.attacks);
  const defense = random(element.defenses);
  const mark = random(element.marks);
  const elementOrigin = random(element.origins);
  const magicalTrait = random(magicalTraits);
  const mythicBehavior = random(mythicBehaviors);
  const visualOddity = random(visualOddities);
  const temperament = random(temperaments);
  const palette = random(region.palette);
  const weakness = random(weaknesses[resolvedElementId]);

  const description = `${name} es una entidad fantastica de ${region.label}: su forma nace del habitat, el elemento y una logica de bestiario magico. Tiene ${parts.body.text}, ${parts.head.text}, ${parts.legs.text} y ${parts.tail.text}; ademas presenta ${visualOddity}. Su cubierta es ${parts.hide.text} y manifiesta energia de tipo ${element.label.toLowerCase()}: ${mark}. Esa energia se explica porque ${elementOrigin}. Vive en ${habitat}, se comporta de forma ${temperament} y suele ${mythicBehavior}. Como rasgo sobrenatural, ${magicalTrait}. Ataca con ${attack}, se protege mediante ${defense} y su punto debil es ${weakness}. Paleta sugerida: ${palette}.`;

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
    elementOrigin,
    magicalTrait,
    mythicBehavior,
    visualOddity,
    parts,
    description
  };
}

function makeName() {
  const prefixes = ["Aru", "Kai", "Tala", "Nac", "Piru", "Cura", "Yasi", "Puel", "Kalen", "Ner", "Trem", "Oru", "Mav", "Sile", "Vek", "Iru"];
  const middles = ["m", "l", "r", "sh", "k", "v", "n", "z", "t", "y"];
  const endings = ["bo", "len", "cur", "rai", "tar", "ken", "vil", "mar", "puk", "yen", "sai", "vor", "nel", "ruk"];
  const titles = ["Velado", "Torcido", "Hueco", "Mudo", "Doble", "Errante", "Hundido", "Liminal", "Oblicuo", "Sinfrente", "De Muchos", "Vuelto"];
  return `${random(prefixes)}${random(middles)}${random(endings)} ${random(titles)}`;
}

function makeAnthroName() {
  const prefixes = ["Vara", "Riven", "Koa", "Milo", "Sasha", "Niko", "Lior", "Zara", "Kael", "Runa", "Tavi", "Eron", "Mara", "Lux", "Noa", "Vesper"];
  const surnames = ["Velvet", "Cross", "Nox", "Vale", "Rook", "Fable", "Sable", "Cinder", "Morrow", "Vance", "Kissel", "Dusk", "Aster", "Wilde"];
  return `${random(prefixes)} ${random(surnames)}`;
}

function generateAnthroCharacter() {
  const name = makeAnthroName();
  const species = random(anthroSpecies);
  const bodyType = random(anthroBodyTypes);
  const anatomy = random(anthroAnatomy);
  const style = random(anthroStyle);
  const appeal = random(anthroAppeal);
  const personality = random(anthroPersonalities);
  const pose = random(anthroPoses);
  const hook = random(anthroHooks);
  const palette = random(anthroPalettes);
  const description = `${name} es un personaje anthro adulto: ${species}, ${bodyType}. Su anatomia expresiva destaca por ${anatomy}. Viste ${style}. Su atractivo visual es sugerente pero no explicito: ${appeal}. Tiene una personalidad ${personality} y funciona como ${hook}. Pose sugerida: ${pose}. Paleta: ${palette}.`;
  const imagePrompt = `adult anthro ${species}, expressive anatomy, ${bodyType}, ${anatomy}, ${style}, ${appeal}, ${pose}, non-explicit, stylish character design, palette ${palette}`;

  return {
    id: crypto.randomUUID(),
    type: "anthro",
    name,
    species,
    bodyType,
    anatomy,
    style,
    appeal,
    personality,
    pose,
    hook,
    palette,
    description,
    imagePrompt
  };
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

## Rasgos fantasticos
- Rareza: ${creature.magicalTrait || ""}
- Origen elemental: ${creature.elementOrigin || ""}
- Conducta: ${creature.mythicBehavior || ""}
- Silueta: ${creature.visualOddity || ""}
${enhancedSection}
`;
}

function formatAnthroSheet(anthro) {
  return `# ${anthro.name}

${anthro.description}

## Rasgos
- Base: ${anthro.species}
- Cuerpo: ${anthro.bodyType}
- Anatomia expresiva: ${anthro.anatomy}
- Estilo: ${anthro.style}
- Appeal visual: ${anthro.appeal}
- Personalidad: ${anthro.personality}
- Rol/Hook: ${anthro.hook}
- Pose: ${anthro.pose}
- Paleta: ${anthro.palette}

## Prompt visual
${anthro.imagePrompt}
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
