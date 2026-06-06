const STORAGE_KEY = "bestiario-modular:v1";

const modes = [
  { id: "wild", label: "Salvaje" },
  { id: "elegant", label: "Elegante" },
  { id: "abyssal", label: "Abisal" },
  { id: "insectoid", label: "Insectoide" },
  { id: "mineral", label: "Mineral" },
  { id: "domestic", label: "Domestico" }
];

const modules = [
  {
    id: "archetype",
    title: "Arquetipo",
    description: "Base biologica o conceptual.",
    values: [
      "mamifero anfibio", "reptil plumado", "insecto ceremonial", "molusco terrestre", "ave sin vuelo",
      "pez de aire", "crustaceo de bosque", "hongo ambulante", "planta depredadora", "roedor acorazado",
      "gusano colonial", "anfibio transparente", "ser mineral vivo", "parasito simbiotico", "bestia domestica rara",
      "depredador nocturno", "herbivoro gigante", "carroñero social", "guardian territorial", "criatura de cueva"
    ]
  },
  {
    id: "body",
    title: "Cuerpo",
    description: "Silueta y estructura principal.",
    values: [
      "torso bajo y ancho como una mesa", "columna flexible con costillas externas", "cuerpo esferico suspendido",
      "abdomen segmentado y brillante", "lomo arqueado con placas superpuestas", "tronco alargado y blando",
      "cuerpo plano que se pega al suelo", "pecho estrecho con caja toracica visible", "masa vegetal con cavidades",
      "caparazon abierto como flor", "estructura de tres torsos unidos", "cuerpo triangular con vientre pesado",
      "forma de campana con organos colgantes", "silueta de cervido con abdomen de insecto",
      "cuerpo cubico de placas biologicas", "cuerpo serpentino con patas cortas"
    ]
  },
  {
    id: "head",
    title: "Cabeza",
    description: "Forma craneal y rostro.",
    values: [
      "craneo alargado con frente hundida", "cabeza pequeña bajo una cresta enorme", "rostro plano sin nariz",
      "mascara osea natural", "doble mandibula lateral", "cabeza de flor cerrada", "hocico tubular",
      "placa facial lisa con ranuras", "craneo transparente con luz interna", "cabeza invertida bajo el pecho",
      "cuatro mandibulas finas como pinzas", "corona de antenas carnosas", "rostro cubierto por un velo de piel",
      "pico flexible dividido en tres", "cabeza cubierta de ojos falsos", "craneo mineral con grietas"
    ]
  },
  {
    id: "eyes",
    title: "Ojos",
    description: "Vision o percepcion visual.",
    values: [
      "dos ojos negros demasiado grandes", "muchos ojos pequeños en linea", "un ojo vertical cubierto por membrana",
      "ojos laterales como cuentas de vidrio", "sin ojos visibles", "ojos que flotan sobre tallos",
      "pupilas cuadradas luminosas", "ojos compuestos con reflejo metalico", "ocelos falsos en el lomo",
      "cuencas vacias que perciben calor", "ojos bajo placas translucidas", "tres ojos asimetricos",
      "iris con forma de estrella", "ojos que cambian de lugar durante el sueño"
    ]
  },
  {
    id: "mouth",
    title: "Boca",
    description: "Mandibulas, dientes o alimentacion.",
    values: [
      "boca circular con dientes internos", "mandibulas de tijera", "lengua prensil cubierta de fibras",
      "pico de hueso blando", "boca oculta bajo el cuello", "proboscide enrollada",
      "dientes planos para moler piedra", "labios gruesos con ventosas", "mandibula inferior partida",
      "boca sin dientes que secreta resina", "placas trituradoras como molino", "colmillos huecos",
      "garganta visible que vibra al respirar", "boca secundaria en el abdomen"
    ]
  },
  {
    id: "skin",
    title: "Piel o cubierta",
    description: "Superficie, textura y material.",
    values: [
      "piel humeda con manchas iridiscentes", "escamas secas como ceramica", "pelaje corto con musgo",
      "placas de quitina azulada", "corteza viva con savia oscura", "cristales pequeños incrustados",
      "membrana transparente", "barro endurecido que se regenera", "plumas rigidas como hojas",
      "piel rugosa con poros luminosos", "caparazon de sal", "lana aceitosa repelente al agua",
      "piel de aspecto porcelana agrietada", "espinas blandas sensibles al sonido"
    ]
  },
  {
    id: "limbs",
    title: "Extremidades",
    description: "Patas, brazos, manos o soportes.",
    values: [
      "seis patas finas con articulaciones altas", "dos brazos largos y cuatro patas cortas",
      "patas palmeadas con uñas de piedra", "extremidades delanteras como palas", "manos pequeñas bajo el pecho",
      "patas traseras enormes para saltar", "tentaculos musculares con dedos", "patas de insecto cubiertas de pelo",
      "apoyos oseos como zancos", "aletas que funcionan como manos", "garras retráctiles en forma de peine",
      "raices moviles que se enrollan al descansar", "piernas invertidas de carrera lenta", "brazos vestigiales decorativos"
    ]
  },
  {
    id: "tail",
    title: "Cola o apendice",
    description: "Elemento posterior o extra.",
    values: [
      "cola larga con campanas oseas", "aguijon flexible sin veneno", "cola plana usada como timon",
      "apendice luminoso que atrae presas", "cola dividida en tres látigos", "racimo de vejigas flotantes",
      "cola cubierta de hojas sensoriales", "cola corta con martillo de hueso", "filamento casi invisible",
      "apendice que imita una cria", "cola mineral demasiado pesada", "pluma unica de equilibrio",
      "saco de tinta seco", "cola enrollada que guarda objetos"
    ]
  },
  {
    id: "extras",
    title: "Rasgos extra",
    description: "Detalles memorables.",
    values: [
      "cuernos blandos que cambian de color", "branquias externas en forma de encaje", "bolsas de aire bajo la piel",
      "alas inutiles usadas para intimidar", "antenas que imitan ramas", "barbas sensoriales largas",
      "espinas que suenan como madera", "placas dorsales con patrones de mapa", "hilos de seda pegajosa",
      "pequeños organismos viviendo en su lomo", "crestas que producen vapor", "anillos oseos flotantes",
      "sacos de polen defensivo", "marcas naturales parecidas a escritura"
    ]
  },
  {
    id: "movement",
    title: "Movimiento",
    description: "Como se desplaza.",
    values: [
      "camina con pausas muy calculadas", "se arrastra y salta de golpe", "flota a pocos centimetros del suelo",
      "trepa usando la boca", "corre lateralmente", "se desplaza por vibraciones del suelo",
      "rueda cerrando su cuerpo", "nada en aire humedo", "avanza como si midiera el terreno",
      "se mueve solo cuando no lo miran", "usa la cola como tercer apoyo", "planea de sombra en sombra",
      "excava y emerge bajo presion", "camina en circulos antes de atacar"
    ]
  },
  {
    id: "senses",
    title: "Sentidos",
    description: "Percepcion especial.",
    values: [
      "detecta electricidad muscular", "huele minerales bajo tierra", "ve el calor residual",
      "escucha cambios de presion", "percibe emociones como temperatura", "lee vibraciones en plantas",
      "reconoce patrones de respiracion", "siente campos magneticos", "detecta mentiras por olor",
      "percibe agua a kilometros", "ve en la oscuridad pero no de dia", "recuerda sonidos durante años",
      "detecta enfermedades en la piel", "siente la edad de los objetos"
    ]
  },
  {
    id: "behavior",
    title: "Conducta",
    description: "Temperamento y habitos.",
    values: [
      "curiosa pero territorial", "paciente hasta que se le bloquea el camino", "protege objetos brillantes",
      "imita rutinas humanas", "vive en parejas silenciosas", "forma colonias con jerarquia suave",
      "huye si escucha su propio eco", "duerme de pie en grupos", "adopta criaturas mas pequeñas",
      "colecciona huesos que no son suyos", "solo caza durante tormentas", "negocia comida con sonidos",
      "marca territorio con patrones geometricos", "sigue a viajeros sin atacar"
    ]
  },
  {
    id: "habitat",
    title: "Habitat",
    description: "Entorno natural.",
    values: [
      "pantanos de agua negra", "cuevas con raices colgantes", "bosques de niebla baja", "arrecifes subterraneos",
      "desiertos de sal fria", "ruinas cubiertas de liquen", "montañas con tormentas secas",
      "costas de barro brillante", "jardines abandonados", "minas inundadas", "campos de hongos altos",
      "islas de piedra porosa", "rios termales", "bosques quemados que rebrotan"
    ]
  },
  {
    id: "diet",
    title: "Dieta",
    description: "Que consume o absorbe.",
    values: [
      "raices fermentadas", "insectos que encuentra bajo piedras", "minerales blandos", "hongos venenosos",
      "madera podrida", "peces pequeños atrapados en charcos", "polen nocturno", "huesos viejos",
      "sal y algas", "savia dulce", "calor corporal residual", "plumas caidas",
      "arcilla humeda", "frutas que solo abre con sus cuernos"
    ]
  },
  {
    id: "defense",
    title: "Defensa",
    description: "Proteccion o ataque.",
    values: [
      "emite un chillido paralizante", "se cubre con barro toxico", "libera polvo que causa sueño",
      "endurece la piel por segundos", "finge estar muerto y cambia de olor", "proyecta espinas blandas",
      "infla el cuerpo hasta parecer mayor", "se camufla con patrones del suelo", "escupe resina pegajosa",
      "rompe una placa para distraer", "usa descargas electricas leves", "crea un circulo de sal",
      "vibra hasta quebrar objetos fragiles", "muerde y no suelta hasta oir agua"
    ]
  },
  {
    id: "oddity",
    title: "Rareza",
    description: "Regla extra o detalle extraño.",
    values: [
      "nace con una piedra que nunca abandona", "cambia de forma segun la estacion", "su sombra apunta al agua",
      "olvida rutas que ya uso", "sus crias parecen plantas", "solo canta antes de llover",
      "las marcas de su piel predicen mudas", "no puede cruzar lineas rectas", "duerme colgado de sonidos",
      "su olor cambia con la luna", "guarda objetos en una bolsa externa", "aprende nombres pero no voces",
      "cada muda deja una mascara perfecta", "crece mas lento si vive en grupo"
    ]
  },
  {
    id: "palette",
    title: "Paleta",
    description: "Color y lectura visual.",
    values: [
      "verde musgo, hueso y negro humedo", "azul petroleo con naranja opaco", "gris mineral con vetas doradas",
      "blanco sucio y rojo interno", "violeta oscuro con puntos amarillos", "marron corteza y verde acido",
      "ocre, sal y azul palido", "negro mate con brillo nacarado", "rosa apagado y gris piedra",
      "turquesa profundo con manchas crema", "ambar, cobre y verde seco", "marfil con sombras azuladas"
    ]
  },
  {
    id: "scale",
    title: "Escala",
    description: "Tamaño relativo.",
    values: [
      "del tamaño de una mano", "como un gato grande", "del tamaño de una persona agachada",
      "como un caballo bajo", "del tamaño de una puerta", "tan largo como una canoa",
      "pequeño pero muy pesado", "alto como dos personas", "del tamaño de un armario",
      "colonial: muchos cuerpos pequeños conectados", "juvenil diminuto, adulto enorme", "cambia de tamaño al hidratarse"
    ]
  }
];

const seedProfiles = {
  pantano: {
    habitat: ["pantanos de agua negra", "costas de barro brillante", "rios termales"],
    skin: ["piel humeda con manchas iridiscentes", "barro endurecido que se regenera"],
    movement: ["se arrastra y salta de golpe", "nada en aire humedo"]
  },
  insecto: {
    archetype: ["insecto ceremonial", "crustaceo de bosque", "gusano colonial"],
    body: ["abdomen segmentado y brillante", "silueta de cervido con abdomen de insecto"],
    eyes: ["ojos compuestos con reflejo metalico", "muchos ojos pequeños en linea"]
  },
  dragon: {
    archetype: ["reptil plumado", "depredador nocturno", "guardian territorial"],
    extras: ["alas inutiles usadas para intimidar", "crestas que producen vapor"],
    defense: ["emite un chillido paralizante", "endurece la piel por segundos"]
  },
  oceanico: {
    habitat: ["arrecifes subterraneos", "costas de barro brillante", "minas inundadas"],
    limbs: ["aletas que funcionan como manos", "patas palmeadas con uñas de piedra"],
    senses: ["percibe agua a kilometros", "escucha cambios de presion"]
  },
  mineral: {
    archetype: ["ser mineral vivo", "criatura de cueva"],
    skin: ["cristales pequeños incrustados", "caparazon de sal", "piel de aspecto porcelana agrietada"],
    diet: ["minerales blandos", "sal y algas", "arcilla humeda"]
  },
  elegante: {
    palette: ["marfil con sombras azuladas", "gris mineral con vetas doradas", "negro mate con brillo nacarado"],
    behavior: ["camina con pausas muy calculadas", "vive en parejas silenciosas"],
    extras: ["branquias externas en forma de encaje", "marcas naturales parecidas a escritura"]
  },
  guardian: {
    archetype: ["guardian territorial", "herbivoro gigante", "bestia domestica rara"],
    behavior: ["protege objetos brillantes", "sigue a viajeros sin atacar"],
    defense: ["crea un circulo de sal", "infla el cuerpo hasta parecer mayor"]
  }
};

const modeBias = {
  elegant: seedProfiles.elegante,
  abyssal: seedProfiles.oceanico,
  insectoid: seedProfiles.insecto,
  mineral: seedProfiles.mineral,
  domestic: {
    archetype: ["bestia domestica rara", "herbivoro gigante", "roedor acorazado"],
    behavior: ["adopta criaturas mas pequeñas", "sigue a viajeros sin atacar", "negocia comida con sonidos"],
    scale: ["como un gato grande", "del tamaño de una persona agachada", "como un caballo bajo"]
  }
};

const state = loadState();
let locked = state.locked || {};
let saved = state.saved || [];
let mode = state.mode || "wild";
let favorite = state.favorite || false;
let creature = state.creature || buildCreature({});

const $ = (selector) => document.querySelector(selector);
const elements = {
  modeGrid: $("#modeGrid"),
  randomAllButton: $("#randomAllButton"),
  randomUnlockedButton: $("#randomUnlockedButton"),
  saveButton: $("#saveButton"),
  copyButton: $("#copyButton"),
  downloadButton: $("#downloadButton"),
  expandSeedButton: $("#expandSeedButton"),
  seedInput: $("#seedInput"),
  seedChips: $("#seedChips"),
  creatureName: $("#creatureName"),
  creaturePitch: $("#creaturePitch"),
  favoriteButton: $("#favoriteButton"),
  statGrid: $("#statGrid"),
  partsGrid: $("#partsGrid"),
  savedCount: $("#savedCount"),
  searchInput: $("#searchInput"),
  historyList: $("#historyList"),
  toast: $("#toast")
};

init();

function init() {
  elements.seedInput.value = state.seed || "";
  bindEvents();
  render();
}

function bindEvents() {
  elements.randomAllButton.addEventListener("click", () => randomize({ respectLocks: false, useSeed: false }));
  elements.randomUnlockedButton.addEventListener("click", () => randomize({ respectLocks: true, useSeed: false }));
  elements.expandSeedButton.addEventListener("click", () => randomize({ respectLocks: true, useSeed: true }));
  elements.saveButton.addEventListener("click", saveCreature);
  elements.copyButton.addEventListener("click", () => copyText(buildSheet(creature), "Ficha copiada."));
  elements.downloadButton.addEventListener("click", downloadJson);
  elements.favoriteButton.addEventListener("click", () => {
    favorite = !favorite;
    creature.favorite = favorite;
    persist();
    render();
  });
  elements.searchInput.addEventListener("input", renderHistory);
  elements.seedInput.addEventListener("input", () => {
    renderSeedChips();
    persist();
  });
}

function randomize({ respectLocks, useSeed }) {
  const parts = { ...creature.parts };
  const profile = useSeed ? analyzeSeed(elements.seedInput.value) : {};
  modules.forEach((module) => {
    if (respectLocks && locked[module.id]) return;
    parts[module.id] = pick(module.id, profile);
  });
  favorite = false;
  creature = buildCreature(parts);
  persist();
  render();
  toast(useSeed ? "Criatura expandida desde semilla." : "Criatura randomizada.");
}

function randomizePart(id) {
  const parts = {
    ...creature.parts,
    [id]: pick(id, analyzeSeed(elements.seedInput.value))
  };
  favorite = false;
  creature = buildCreature(parts);
  persist();
  render();
}

function buildCreature(parts) {
  const filled = { ...parts };
  modules.forEach((module) => {
    if (!filled[module.id]) filled[module.id] = pick(module.id, {});
  });

  const name = makeName(filled);
  return {
    id: createId(),
    name,
    favorite,
    createdAt: new Date().toISOString(),
    parts: filled,
    pitch: `${name} es un ${filled.archetype} de ${filled.scale}, con ${filled.body}. Tiene ${filled.head}, ${filled.eyes} y ${filled.mouth}. Su cubierta es ${filled.skin}; se mueve asi: ${filled.movement}. Habita en ${filled.habitat}, donde suele ser ${filled.behavior}. Su defensa principal: ${filled.defense}. Rareza biologica: ${filled.oddity}.`
  };
}

function makeName(parts) {
  const rootsA = ["Moro", "Kael", "Vadra", "Numa", "Talo", "Iscar", "Bruma", "Silex", "Orna", "Vel"];
  const rootsB = ["drio", "nix", "manta", "cor", "luma", "sauro", "quero", "vex", "lirio", "gante"];
  const suffix = parts.archetype.includes("mineral") || parts.skin.includes("cristales") ? " de veta" : "";
  return `${randomItem(rootsA)}${randomItem(rootsB)}${suffix}`;
}

function pick(id, profile) {
  const exact = profile[id];
  if (exact?.length && Math.random() < 0.82) return randomItem(exact);
  const bias = modeBias[mode]?.[id];
  if (bias?.length && Math.random() < 0.66) return randomItem(bias);
  return randomItem(modules.find((module) => module.id === id).values);
}

function analyzeSeed(seed) {
  const text = normalize(seed);
  const profile = {};
  Object.entries(seedProfiles).forEach(([key, values]) => {
    if (!text.includes(key)) return;
    Object.entries(values).forEach(([id, options]) => {
      profile[id] = [...(profile[id] || []), ...options];
    });
  });
  modules.forEach((module) => {
    module.values.forEach((value) => {
      if (text.includes(normalize(value))) {
        profile[module.id] = [value, ...(profile[module.id] || [])];
      }
    });
  });
  return profile;
}

function render() {
  renderModes();
  renderSeedChips();
  renderCreature();
  renderParts();
  renderHistory();
}

function renderModes() {
  elements.modeGrid.innerHTML = "";
  modes.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `mode-option ${item.id === mode ? "active" : ""}`;
    button.textContent = item.label;
    button.addEventListener("click", () => {
      mode = item.id;
      persist();
      renderModes();
      toast(`Modo: ${item.label}.`);
    });
    elements.modeGrid.append(button);
  });
}

function renderSeedChips() {
  const text = normalize(elements.seedInput.value);
  const matches = Object.keys(seedProfiles).filter((key) => text.includes(key));
  elements.seedChips.innerHTML = "";
  matches.forEach((match) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = match;
    elements.seedChips.append(chip);
  });
}

function renderCreature() {
  elements.creatureName.textContent = creature.name;
  elements.creaturePitch.textContent = creature.pitch;
  elements.favoriteButton.textContent = favorite ? "★" : "☆";
  const stats = [
    ["Silueta", creature.parts.body],
    ["Habitat", creature.parts.habitat],
    ["Conducta", creature.parts.behavior],
    ["Paleta", creature.parts.palette]
  ];
  elements.statGrid.innerHTML = "";
  stats.forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "stat";
    item.innerHTML = `<strong>${label}</strong><span>${value}</span>`;
    elements.statGrid.append(item);
  });
}

function renderParts() {
  elements.partsGrid.innerHTML = "";
  modules.forEach((module) => {
    const card = document.createElement("article");
    card.className = `part-card ${locked[module.id] ? "locked" : ""}`;

    const top = document.createElement("div");
    top.className = "part-top";

    const copy = document.createElement("div");
    copy.innerHTML = `<h3>${module.title}</h3><p>${module.description}</p>`;

    const actions = document.createElement("div");
    actions.className = "part-actions";

    const reroll = document.createElement("button");
    reroll.className = "icon-button";
    reroll.type = "button";
    reroll.title = `Randomizar ${module.title}`;
    reroll.textContent = "↻";
    reroll.addEventListener("click", () => randomizePart(module.id));

    const lock = document.createElement("button");
    lock.className = "icon-button";
    lock.type = "button";
    lock.title = locked[module.id] ? `Desbloquear ${module.title}` : `Bloquear ${module.title}`;
    lock.textContent = locked[module.id] ? "●" : "○";
    lock.addEventListener("click", () => {
      locked[module.id] = !locked[module.id];
      persist();
      renderParts();
    });

    actions.append(reroll, lock);
    top.append(copy, actions);

    const value = document.createElement("div");
    value.className = "part-value";
    value.textContent = creature.parts[module.id];

    card.append(top, value);
    elements.partsGrid.append(card);
  });
}

function renderHistory() {
  const query = normalize(elements.searchInput.value);
  const items = saved.filter((item) => normalize(`${item.name} ${item.pitch} ${Object.values(item.parts).join(" ")}`).includes(query));
  elements.savedCount.textContent = String(saved.length);
  elements.historyList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No hay criaturas guardadas.";
    elements.historyList.append(empty);
    return;
  }

  items.forEach((item) => {
    const button = document.createElement("button");
    button.className = "history-item";
    button.type = "button";
    button.innerHTML = `<h3>${item.favorite ? "★ " : ""}${item.name}</h3><p>${item.parts.archetype} · ${item.parts.habitat}</p>`;
    button.addEventListener("click", () => {
      creature = structuredClone(item);
      favorite = Boolean(item.favorite);
      persist();
      render();
      toast("Criatura cargada.");
    });
    elements.historyList.append(button);
  });
}

function saveCreature() {
  const item = {
    ...structuredClone(creature),
    id: createId(),
    favorite,
    createdAt: new Date().toISOString()
  };
  saved = [item, ...saved];
  persist();
  renderHistory();
  toast("Criatura guardada.");
}

function buildSheet(item) {
  return `# ${item.name}

${item.pitch}

## Partes
${modules.map((module) => `- ${module.title}: ${item.parts[module.id]}`).join("\n")}
`;
}

async function copyText(text, message) {
  await navigator.clipboard.writeText(text);
  toast(message);
}

function downloadJson() {
  const blob = new Blob([JSON.stringify(creature, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeFile(creature.name)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast("JSON descargado.");
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    creature,
    locked,
    saved,
    mode,
    favorite,
    seed: elements.seedInput?.value || ""
  }));
}

function toast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => elements.toast.classList.remove("visible"), 1800);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function createId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalize(value = "") {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function safeFile(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "criatura";
}
