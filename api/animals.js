const INATURALIST_URL = "https://api.inaturalist.org/v1/taxa/autocomplete";
const FALLBACK_ANIMALS = [
  "aguila", "alce", "ardilla", "armadillo", "ballena", "buho", "burro", "caballo",
  "cabra", "camaleon", "cangrejo", "canguro", "caracol", "carnero", "castor",
  "cerdo", "ciervo", "cisne", "cocodrilo", "comadreja", "conejo", "cuervo",
  "delfin", "elefante", "erizo", "foca", "gallo", "gato", "guepardo",
  "halcon", "hiena", "huron", "jabali", "koala", "lagarto", "lemur", "leon",
  "leopardo", "liebre", "lobo", "loro", "mapache", "mono", "murcielago",
  "nutria", "orca", "oso", "panda", "pantera", "pavo real", "perro", "pulpo",
  "rana", "rata", "raton", "rinoceronte", "salamandra", "serpiente", "tiburon",
  "tigre", "toro", "tortuga", "zorrino", "zorro"
];

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Metodo no permitido." });
    return;
  }

  try {
    const animals = await enrichAnimals(FALLBACK_ANIMALS);
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=604800");
    res.status(200).json({
      source: "iNaturalist con fallback curado",
      updatedAt: new Date().toISOString(),
      animals
    });
  } catch (error) {
    res.status(200).json({
      source: "fallback curado",
      warning: error.message || "No se pudo consultar iNaturalist.",
      updatedAt: new Date().toISOString(),
      animals: FALLBACK_ANIMALS.map((label) => ({ label, source: "fallback" }))
    });
  }
}

async function enrichAnimals(labels) {
  const settled = await Promise.allSettled(labels.map((label) => fetchTaxon(label)));
  return settled
    .map((result, index) => {
      if (result.status === "fulfilled" && result.value) return result.value;
      return { label: labels[index], source: "fallback" };
    })
    .sort((a, b) => a.label.localeCompare(b.label, "es"));
}

async function fetchTaxon(label) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3500);
  const params = new URLSearchParams({
    q: label,
    locale: "es",
    per_page: "1"
  });

  try {
    const response = await fetch(`${INATURALIST_URL}?${params}`, {
      headers: { Accept: "application/json" },
      signal: controller.signal
    });
    if (!response.ok) throw new Error(`iNaturalist ${response.status}`);
    const payload = await response.json();
    const taxon = payload.results?.[0];
    if (!taxon) return { label, source: "fallback" };

    return {
      label,
      source: "iNaturalist",
      taxonId: taxon.id,
      scientificName: taxon.name,
      rank: taxon.rank,
      group: taxon.iconic_taxon_name
    };
  } finally {
    clearTimeout(timeout);
  }
}
