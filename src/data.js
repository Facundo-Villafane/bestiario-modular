export const elements = {
  fire: {
    label: "Fuego",
    attacks: ["aliento de zonda caliente", "brasas que prenden pasto seco", "anillo de ceniza viva"],
    defenses: ["piel carbonizada que absorbe calor", "nube de ceniza que borra rastros"],
    marks: ["ojos como brasa baja", "vetas rojizas bajo la piel", "aliento con olor a jarilla quemada"]
  },
  water: {
    label: "Agua",
    attacks: ["chorro de agua de deshielo", "niebla que desorienta", "mordida cubierta de espuma fria"],
    defenses: ["capa de barro humedo regenerativo", "piel que refleja como laguna quieta"],
    marks: ["barbas mojadas", "membranas translúcidas", "branquias externas"]
  },
  plant: {
    label: "Planta",
    attacks: ["raices de ceibo que atrapan", "semillas explosivas", "espinas de tala que brotan del suelo"],
    defenses: ["corteza flexible", "polen somnifero", "camuflaje de hojas secas"],
    marks: ["flores pequeñas en el lomo", "musgo entre placas", "olor a savia dulce"]
  },
  rock: {
    label: "Roca",
    attacks: ["placas de piedra que se disparan", "golpe de pezuña mineral", "estacas de salitre"],
    defenses: ["caparazon de laja", "piel con cristales incrustados"],
    marks: ["grietas brillantes", "cuernos de piedra", "polvo mineral al respirar"]
  },
  ice: {
    label: "Hielo",
    attacks: ["escarcha austral en las garras", "agujas de hielo fino", "vaho que congela barro"],
    defenses: ["pelaje aislante", "costra de escarcha regenerativa"],
    marks: ["hocico blanco", "pestañas congeladas", "piel azulada"]
  },
  wind: {
    label: "Viento",
    attacks: ["corte de pampero", "silbido que empuja", "remolino de polvo seco"],
    defenses: ["salto impulsado por viento", "desvio de proyectiles con aire caliente"],
    marks: ["plumas largas", "orejas como velas", "cola en forma de veleta"]
  },
  storm: {
    label: "Rayo",
    attacks: ["descarga por las patas", "chispa de tormenta seca", "trueno corto que aturde"],
    defenses: ["pelaje cargado de electricidad", "campo magnetico nervioso"],
    marks: ["rayas luminosas", "antenas chispeantes", "olor a ozono"]
  },
  mud: {
    label: "Barro",
    attacks: ["pared de barro vivo", "salpicadura pegajosa", "mordida que endurece lodo"],
    defenses: ["cuerpo que se hunde y reaparece", "costra de barro regenerativo"],
    marks: ["piel terrosa", "huellas que se cierran solas", "barro bajo las uñas"]
  },
  salt: {
    label: "Sal",
    attacks: ["nube de sal que irrita", "estacas de salina", "saliva que reseca piel"],
    defenses: ["caparazon salino", "circulo de sal defensivo"],
    marks: ["costras blancas", "ojos lechosos", "cristales en articulaciones"]
  },
  shadow: {
    label: "Sombra",
    attacks: ["sombra que apaga sonido", "mordida sin reflejo", "velo oscuro que confunde"],
    defenses: ["desaparece en sombra baja", "copia siluetas de otras especies"],
    marks: ["lomo negro mate", "ojos sin brillo", "contorno borroso"]
  },
  metal: {
    label: "Metal",
    attacks: ["cola magnetica", "garras de meteorito", "chirrido que oxida"],
    defenses: ["placas metalicas flexibles", "piel que desvía filos"],
    marks: ["brillo de hierro viejo", "dientes oscuros", "olor a lluvia sobre metal"]
  },
  spore: {
    label: "Espora",
    attacks: ["nube de esporas somniferas", "hongos rapidos en heridas", "polvo de liquen alucinatorio"],
    defenses: ["colonias de hongos aliadas", "piel que se recompone con micelio"],
    marks: ["sombrerillos en el cuello", "olor a tierra mojada", "polvo verde en el pelaje"]
  }
};

export const ecoregions = {
  ibera: {
    label: "Esteros del Ibera",
    elements: ["water", "mud", "plant", "spore", "shadow"],
    habitats: ["lagunas con camalotes", "bañados de embalsados flotantes", "juncales correntinos"],
    species: ["carpincho", "yacare overo", "ciervo de los pantanos", "lobito de rio", "boa curiyu", "chaja"],
    palette: ["verde camalote, barro negro y marfil", "ocre mojado y azul laguna", "verde oscuro con reflejos dorados"]
  },
  yungas: {
    label: "Yungas",
    elements: ["plant", "water", "spore", "shadow", "storm"],
    habitats: ["selva montana de neblina", "quebradas humedas", "laderas con helechos gigantes"],
    species: ["tapir", "mono cai", "yaguarete", "corzuela", "rana marsupial", "tucan"],
    palette: ["verde profundo y amarillo fruta", "barro rojo y sombra azul", "negro selva con manchas hojas"]
  },
  paranaense: {
    label: "Selva Paranaense",
    elements: ["plant", "water", "spore", "shadow", "rock"],
    habitats: ["selva misionera de tierra colorada", "tacuarales cerrados", "saltos con niebla roja"],
    species: ["yaguarete", "tapir", "oso hormiguero", "yarara", "tucan", "coatí"],
    palette: ["tierra colorada, verde brillante y negro", "ocre rojo y amarillo pico", "verde oscuro con blanco hueso"]
  },
  chaco: {
    label: "Chaco",
    elements: ["plant", "rock", "fire", "shadow", "storm"],
    habitats: ["monte de quebrachos", "palmares secos", "isletas de algarrobo"],
    species: ["tatu carreta", "pecari quimilero", "oso hormiguero", "aguara guazu", "carancho", "boa lampalagua"],
    palette: ["madera seca, cobre y negro", "amarillo pasto y gris corteza", "rojo tierra y verde quimil"]
  },
  pampa: {
    label: "Pampa",
    elements: ["wind", "storm", "plant", "mud", "rock"],
    habitats: ["pastizales abiertos", "lagunas bajas con juncales", "campos bajo pampero"],
    species: ["ñandu", "hornero", "vizcacha", "mulita pampeana", "lechucita vizcachera", "chaja"],
    palette: ["pasto seco, cielo gris y barro", "ocre claro y blanco tiza", "marron vizcacha y azul tormenta"]
  },
  espinal: {
    label: "Espinal",
    elements: ["plant", "wind", "fire", "rock", "shadow"],
    habitats: ["bosques de calden", "algarrobales abiertos", "espinales secos"],
    species: ["zorro gris", "cardenal amarillo", "vizcacha", "puma", "tordo renegrido", "lagarto overo"],
    palette: ["ambar, calden y gris humo", "amarillo cardenal y marron seco", "verde opaco y rojo arcilla"]
  },
  monte: {
    label: "Monte",
    elements: ["salt", "rock", "fire", "wind", "shadow"],
    habitats: ["jarillales del monte", "cañadones secos", "salitrales cuyanos"],
    species: ["mara patagonica", "guanaco", "zorro colorado", "lagarto overo", "tortuga terrestre", "piche"],
    palette: ["salitre, jarilla y rojo piedra", "arena palida y sombra violeta", "ocre seco y negro zorro"]
  },
  puna: {
    label: "Puna y Altos Andes",
    elements: ["rock", "salt", "ice", "wind", "storm"],
    habitats: ["salares de altura", "vegas puneñas", "laderas frias bajo cielo limpio"],
    species: ["vicuña", "flamenco austral", "condor andino", "gato andino", "guanaco", "suri cordillerano"],
    palette: ["sal blanco, rosa flamenco y azul altura", "gris piedra y dorado vicuña", "violeta sombra y nieve"]
  },
  patagonia: {
    label: "Estepa Patagonica",
    elements: ["wind", "ice", "rock", "shadow", "storm"],
    habitats: ["mesetas de coiron", "cañadones frios", "estepa ventosa"],
    species: ["guanaco", "mara patagonica", "choique", "puma", "zorro colorado", "peludo patagonico"],
    palette: ["gris coiron, rojo cañadon y blanco frio", "ocre viento y azul sombra", "marron guanaco y plata"]
  },
  bosquePatagonico: {
    label: "Bosques Patagonicos",
    elements: ["plant", "ice", "water", "spore", "rock"],
    habitats: ["bosques de lenga y coihue", "lagos frios", "mallines entre arrayanes"],
    species: ["huemul", "pudu", "maca tobiano", "carpintero gigante", "puma", "monito del monte"],
    palette: ["verde lenga, nieve y cobre arrayan", "azul lago y marron corteza", "negro carpintero y rojo cresta"]
  },
  marArgentino: {
    label: "Mar Argentino",
    elements: ["water", "ice", "salt", "wind", "shadow"],
    habitats: ["restingas frias", "kelp submarino austral", "plataforma marina"],
    species: ["ballena franca austral", "tonina overa", "pinguino de Magallanes", "lobo marino", "petrel", "cormoran"],
    palette: ["azul profundo, espuma y negro", "gris ballena y blanco sal", "verde kelp y plata fria"]
  },
  antartida: {
    label: "Antartida e islas australes",
    elements: ["ice", "water", "wind", "shadow", "rock"],
    habitats: ["playas de roca negra y nieve", "hielos costeros", "islas de viento blanco"],
    species: ["pinguino emperador", "petrel gigante", "foca de Weddell", "orca", "skua", "albatros"],
    palette: ["blanco hielo, negro roca y azul frio", "gris foca y celeste glacial", "negro ala y plata"]
  }
};

export const bodyPartLabels = {
  body: "Cuerpo",
  head: "Cabeza",
  legs: "Patas",
  tail: "Cola",
  hide: "Cubierta",
  crest: "Rasgo visible",
  sense: "Sentido",
  movement: "Movimiento"
};

export const partTemplates = {
  body: ["cuerpo robusto de", "torso bajo de", "lomo arqueado de", "pecho profundo de", "silueta pesada de"],
  head: ["cabeza alerta de", "hocico de", "craneo ancho de", "pico modificado de", "rostro vigilante de"],
  legs: ["patas veloces de", "garras excavadoras de", "zancadas de", "dedos palmeados de", "apoyos firmes de"],
  tail: ["cola de", "apendice posterior inspirado en", "timón de", "cola defensiva de", "rastro de"],
  hide: ["cubierta basada en", "pelaje/escamas de", "piel adaptada de", "placas de", "membrana de"],
  crest: ["cresta tomada de", "marca visible de", "ornamento de", "silueta secundaria de", "señal territorial de"],
  sense: ["olfato de", "oido de", "vision de", "percepcion de", "instinto de"],
  movement: ["se mueve como", "acecha como", "huye como", "gira como", "avanza como"]
};

export const temperaments = [
  "territorial pero no cruel", "curiosa y dificil de domesticar", "silenciosa hasta que cambia el clima",
  "protectora de su zona de cria", "solitaria salvo durante tormentas", "astuta y memoriosa",
  "paciente, casi ceremonial", "nerviosa cuando cambia el viento", "mansa con quien respeta su territorio"
];

export const weaknesses = {
  fire: ["lluvia sostenida", "barro frio", "falta de oxigeno"],
  water: ["sequedad prolongada", "sal excesiva", "frio repentino"],
  plant: ["heladas fuertes", "fuego continuo", "suelos esteriles"],
  rock: ["raices invasivas", "golpes repetidos", "agua acida"],
  ice: ["calor de zonda", "salmuera", "sol directo"],
  wind: ["cuevas cerradas", "bosques densos", "peso extra"],
  storm: ["suelo aislante", "sequedad total", "minerales no conductivos"],
  mud: ["salitre", "congelamiento", "superficies de piedra lisa"],
  salt: ["lluvia dulce", "vegetacion espesa", "humedad constante"],
  shadow: ["luz plana de mediodia", "superficies reflectantes", "fuego bajo"],
  metal: ["agua salada", "campos magneticos ajenos", "oxido acelerado"],
  spore: ["viento seco", "frio extremo", "fuego controlado"]
};
