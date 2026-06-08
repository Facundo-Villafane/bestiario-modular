export const elements = {
  fire: {
    label: "Fuego",
    attacks: ["aliento de zonda caliente", "brasas que prenden pasto seco", "anillo de ceniza viva", "chispa al chasquear colmillos", "llama azul que solo quema sombras"],
    defenses: ["piel carbonizada que absorbe calor", "nube de ceniza que borra rastros", "costillas que se abren como brasero", "sangre espesa que se vuelve carbon al tocar el aire"],
    marks: ["ojos como brasa baja", "vetas rojizas bajo la piel", "aliento con olor a jarilla quemada", "melena de humo tibio", "huellas con borde incandescente"],
    origins: ["fermenta resinas de jarilla en una camara interna y las enciende con placas minerales", "guarda calor solar en escamas oscuras y lo libera como un horno vivo", "aloja bacterias luminicas que producen chispas cuando se asusta"]
  },
  water: {
    label: "Agua",
    attacks: ["chorro de agua de deshielo", "niebla que desorienta", "mordida cubierta de espuma fria", "latigazo de agua pesada", "canto que atrae lluvia chica"],
    defenses: ["capa de barro humedo regenerativo", "piel que refleja como laguna quieta", "bolsa dorsal que infla con agua robada al ambiente", "doble parpado que proyecta espejismos liquidos"],
    marks: ["barbas mojadas", "membranas translucidas", "branquias externas", "gotas suspendidas alrededor del hocico", "ojos con reflejo de laguna"],
    origins: ["filtra humedad por pliegues de la piel y la concentra en sacos bajo las costillas", "convierte grasa salobre en agua dulce durante la noche", "vive con algas internas que condensan niebla alrededor del cuerpo"]
  },
  plant: {
    label: "Planta",
    attacks: ["raices de ceibo que atrapan", "semillas explosivas", "espinas de tala que brotan del suelo", "lianas nerviosas que obedecen silbidos", "polen que hace olvidar caminos"],
    defenses: ["corteza flexible", "polen somnifero", "camuflaje de hojas secas", "brotes que cierran heridas como costuras verdes", "espinas retractiles con savia amarga"],
    marks: ["flores pequenas en el lomo", "musgo entre placas", "olor a savia dulce", "ramitas que cambian con la estacion", "hojas que tiemblan aunque no haya viento"],
    origins: ["sus vasos sanguineos funcionan como raices y beben minerales del suelo", "mantiene un injerto vivo de plantas nativas sobre la columna", "su piel hace fotosintesis y guarda luz en nudos vegetales"]
  },
  rock: {
    label: "Roca",
    attacks: ["placas de piedra que se disparan", "golpe de pezuna mineral", "estacas de salitre", "rugido que fisura laja", "mandibula que mastica guijarros y escupe metralla"],
    defenses: ["caparazon de laja", "piel con cristales incrustados", "huesos huecos rellenos de arena compactada", "placas que se acomodan como un muro"],
    marks: ["grietas brillantes", "cuernos de piedra", "polvo mineral al respirar", "cristales opacos en los nudillos", "sombra con forma de cerro"],
    origins: ["se alimenta de arcillas y reorganiza minerales sobre la piel", "sus huesos atraen particulas de roca como un coral terrestre", "un liquen interno endurece sus escamas hasta volverlas laja"]
  },
  ice: {
    label: "Hielo",
    attacks: ["escarcha austral en las garras", "agujas de hielo fino", "vaho que congela barro", "chillido que hace cristalizar la humedad", "mordida que deja flores de hielo"],
    defenses: ["pelaje aislante", "costra de escarcha regenerativa", "sangre anticongelante que enfria el aire cercano", "capucha de nieve compacta"],
    marks: ["hocico blanco", "pestanas congeladas", "piel azulada", "cuernos con escarcha interna", "vapor frio que cae en vez de subir"],
    origins: ["evapora agua por glandulas frias y la congela con sales internas", "aloja cristales microscopicos que roban calor del aire", "respira en dos tiempos: uno absorbe calor y el otro libera escarcha"]
  },
  wind: {
    label: "Viento",
    attacks: ["corte de pampero", "silbido que empuja", "remolino de polvo seco", "golpe invisible de presion", "aullido que desarma fogones"],
    defenses: ["salto impulsado por viento", "desvio de proyectiles con aire caliente", "sacos de aire que lo vuelven liviano", "pelaje orientable que rompe su silueta"],
    marks: ["plumas largas", "orejas como velas", "cola en forma de veleta", "bigotes que vibran antes del viento", "paso sin polvo"],
    origins: ["comprime aire en bolsas toracicas y lo expulsa por ranuras oseas", "sus plumas generan microremolinos al rozarse", "lee cambios de presion con organos huecos en el craneo"]
  },
  storm: {
    label: "Rayo",
    attacks: ["descarga por las patas", "chispa de tormenta seca", "trueno corto que aturde", "latigo electrico entre cuernos", "mordida que deja luz bajo la piel"],
    defenses: ["pelaje cargado de electricidad", "campo magnetico nervioso", "placas aislantes bajo el vientre", "descarga de advertencia en forma de corona"],
    marks: ["rayas luminosas", "antenas chispeantes", "olor a ozono", "ojos que parpadean como relampago", "pelos erizados aun dormido"],
    origins: ["acumula electricidad por friccion de placas internas", "digiere minerales conductivos y carga sus nervios como una bateria", "sus organos laterales funcionan como electrolitos vivientes"]
  },
  mud: {
    label: "Barro",
    attacks: ["pared de barro vivo", "salpicadura pegajosa", "mordida que endurece lodo", "lengua que sella patas al suelo", "oleada de barro tibio con olor a estero"],
    defenses: ["cuerpo que se hunde y reaparece", "costra de barro regenerativo", "piel blanda que absorbe golpes", "falso cadaver de lodo que deja como distraccion"],
    marks: ["piel terrosa", "huellas que se cierran solas", "barro bajo las unas", "ojos como burbujas oscuras", "lomo con islas de musgo"],
    origins: ["mezcla saliva mineral y arcilla hasta formar barro sensible", "vive con microorganismos que reparan su piel como adobe", "su cuerpo retiene agua y tierra en capas musculares"]
  },
  salt: {
    label: "Sal",
    attacks: ["nube de sal que irrita", "estacas de salina", "saliva que reseca piel", "latido que agrieta charcos", "colmillos con salmuera corrosiva"],
    defenses: ["caparazon salino", "circulo de sal defensivo", "cristales que rompen mordidas", "sudor que deja una barrera blanca"],
    marks: ["costras blancas", "ojos lechosos", "cristales en articulaciones", "lengua de sal rosa", "rastro que brilla de noche"],
    origins: ["concentra sales en glandulas y las cristaliza al defenderse", "filtra agua salobre hasta fabricar agujas minerales", "su sangre forma salmuera cuando sube la temperatura"]
  },
  shadow: {
    label: "Sombra",
    attacks: ["sombra que apaga sonido", "mordida sin reflejo", "velo oscuro que confunde", "zarpazo que enfria la memoria", "silbido que oscurece el borde de la vista"],
    defenses: ["desaparece en sombra baja", "copia siluetas de otras especies", "piel que absorbe luz rasante", "doble sombra que distrae perseguidores"],
    marks: ["lomo negro mate", "ojos sin brillo", "contorno borroso", "reflejo que llega tarde", "manchas que se mueven solas"],
    origins: ["su pelaje absorbe luz con pigmentos imposibles", "vive asociado a hongos oscuros que apagan reflejos", "sus escamas dispersan la luz y vuelven incierto el contorno"]
  },
  spore: {
    label: "Espora",
    attacks: ["nube de esporas somniferas", "hongos rapidos en heridas", "polvo de liquen alucinatorio", "tos de esporas que provoca visiones de monte", "micelio que ata tobillos"],
    defenses: ["colonias de hongos aliadas", "piel que se recompone con micelio", "duplicados blandos hechos de hongo", "olor que vuelve irreconocible su rastro"],
    marks: ["sombrerillos en el cuello", "olor a tierra mojada", "polvo verde en el pelaje", "ojos moteados como liquen", "pequenas setas que se abren al dormir"],
    origins: ["mantiene una colonia de hongos en simbiosis con su sistema nervioso", "esporula cuando se asusta y usa esas nubes como lenguaje", "sus heridas cierran con micelio antes que con piel"]
  }
};

export const ecoregions = {
  ibera: {
    label: "Esteros del Ibera",
    elements: ["water", "mud", "plant", "spore", "shadow"],
    habitats: ["lagunas con camalotes", "banados de embalsados flotantes", "juncales correntinos", "islas de vegetacion que cambian de lugar", "orillas donde el agua parece respirar"],
    species: ["carpincho", "yacare overo", "ciervo de los pantanos", "lobito de rio", "boa curiyu", "chaja", "aguara guazu", "tordo amarillo"],
    palette: ["verde camalote, barro negro y marfil", "ocre mojado y azul laguna", "verde oscuro con reflejos dorados", "gris tormenta, junco seco y ojo ambar"]
  },
  yungas: {
    label: "Yungas",
    elements: ["plant", "water", "spore", "shadow", "storm"],
    habitats: ["selva montana de neblina", "quebradas humedas", "laderas con helechos gigantes", "senderos tapados por vapor tibio", "copas donde nunca llega sol directo"],
    species: ["tapir", "mono cai", "yaguarete", "corzuela", "rana marsupial", "tucan", "oso melero", "pava de monte"],
    palette: ["verde profundo y amarillo fruta", "barro rojo y sombra azul", "negro selva con manchas hojas", "turquesa humedad y naranja tucan"]
  },
  paranaense: {
    label: "Selva Paranaense",
    elements: ["plant", "water", "spore", "shadow", "rock"],
    habitats: ["selva misionera de tierra colorada", "tacuarales cerrados", "saltos con niebla roja", "paredones cubiertos de raices", "claros donde las piedras transpiran"],
    species: ["yaguarete", "tapir", "oso hormiguero", "yarara", "tucan", "coati", "mono caraya", "harpia"],
    palette: ["tierra colorada, verde brillante y negro", "ocre rojo y amarillo pico", "verde oscuro con blanco hueso", "rojo laterita y azul sombra"]
  },
  chaco: {
    label: "Chaco",
    elements: ["plant", "rock", "fire", "shadow", "storm"],
    habitats: ["monte de quebrachos", "palmares secos", "isletas de algarrobo", "picadas con tierra partida", "nidos abandonados bajo calor inmovil"],
    species: ["tatu carreta", "pecari quimilero", "oso hormiguero", "aguara guazu", "carancho", "boa lampalagua", "charata", "pichi ciego"],
    palette: ["madera seca, cobre y negro", "amarillo pasto y gris corteza", "rojo tierra y verde quimil", "humo bajo y miel oscura"]
  },
  pampa: {
    label: "Pampa",
    elements: ["wind", "storm", "plant", "mud", "rock"],
    habitats: ["pastizales abiertos", "lagunas bajas con juncales", "campos bajo pampero", "tapiales viejos mordidos por viento", "cuchillas donde el cielo pesa"],
    species: ["nandu", "hornero", "vizcacha", "mulita pampeana", "lechucita vizcachera", "chaja", "zorro pampeano", "venado de las pampas"],
    palette: ["pasto seco, cielo gris y barro", "ocre claro y blanco tiza", "marron vizcacha y azul tormenta", "verde cardo y plata lluvia"]
  },
  espinal: {
    label: "Espinal",
    elements: ["plant", "wind", "fire", "rock", "shadow"],
    habitats: ["bosques de calden", "algarrobales abiertos", "espinales secos", "sombra rota entre ramas duras", "claros con semillas que crujen"],
    species: ["zorro gris", "cardenal amarillo", "vizcacha", "puma", "tordo renegrido", "lagarto overo", "monterita", "comadreja overa"],
    palette: ["ambar, calden y gris humo", "amarillo cardenal y marron seco", "verde opaco y rojo arcilla", "negro tordo y oro viejo"]
  },
  monte: {
    label: "Monte",
    elements: ["salt", "rock", "fire", "wind", "shadow"],
    habitats: ["jarillales del monte", "canadones secos", "salitrales cuyanos", "arenales con piedras calientes", "ramblas donde el agua aparece una vez al ano"],
    species: ["mara patagonica", "guanaco", "zorro colorado", "lagarto overo", "tortuga terrestre", "piche", "choique", "matuasto"],
    palette: ["salitre, jarilla y rojo piedra", "arena palida y sombra violeta", "ocre seco y negro zorro", "cobre, hueso y verde jarilla"]
  },
  puna: {
    label: "Puna y Altos Andes",
    elements: ["rock", "salt", "ice", "wind", "storm"],
    habitats: ["salares de altura", "vegas punenas", "laderas frias bajo cielo limpio", "apachetas que silban al anochecer", "lagunas altas con espuma mineral"],
    species: ["vicuna", "flamenco austral", "condor andino", "gato andino", "guanaco", "suri cordillerano", "chinchillon", "lagartija punena"],
    palette: ["sal blanco, rosa flamenco y azul altura", "gris piedra y dorado vicuna", "violeta sombra y nieve", "turquesa laguna y negro condor"]
  },
  patagonia: {
    label: "Estepa Patagonica",
    elements: ["wind", "ice", "rock", "shadow", "storm"],
    habitats: ["mesetas de coiron", "canadones frios", "estepa ventosa", "cuevas con pinturas casi borradas", "bardas donde el viento canta bajo"],
    species: ["guanaco", "mara patagonica", "choique", "puma", "zorro colorado", "peludo patagonico", "loica", "lagartija de las rocas"],
    palette: ["gris coiron, rojo canadon y blanco frio", "ocre viento y azul sombra", "marron guanaco y plata", "rojo loica y negro piedra"]
  },
  bosquePatagonico: {
    label: "Bosques Patagonicos",
    elements: ["plant", "ice", "water", "spore", "rock"],
    habitats: ["bosques de lenga y coihue", "lagos frios", "mallines entre arrayanes", "troncos caidos con hongos brillantes", "orillas donde el bosque toca nieve"],
    species: ["huemul", "pudu", "maca tobiano", "carpintero gigante", "puma", "monito del monte", "ranita de Darwin", "chucao"],
    palette: ["verde lenga, nieve y cobre arrayan", "azul lago y marron corteza", "negro carpintero y rojo cresta", "musgo, hielo y rosa hongo"]
  },
  marArgentino: {
    label: "Mar Argentino",
    elements: ["water", "ice", "salt", "wind", "shadow"],
    habitats: ["restingas frias", "kelp submarino austral", "plataforma marina", "cuevas de espuma bajo acantilados", "playas donde la marea deja luces"],
    species: ["ballena franca austral", "tonina overa", "pinguino de Magallanes", "lobo marino", "petrel", "cormoran", "elefante marino", "pez gallo"],
    palette: ["azul profundo, espuma y negro", "gris ballena y blanco sal", "verde kelp y plata fria", "ocre arena y violeta abisal"]
  },
  antartida: {
    label: "Antartida e islas australes",
    elements: ["ice", "water", "wind", "shadow", "rock"],
    habitats: ["playas de roca negra y nieve", "hielos costeros", "islas de viento blanco", "grietas azules que suenan de noche", "colonias abandonadas bajo aurora"],
    species: ["pinguino emperador", "petrel gigante", "foca de Weddell", "orca", "skua", "albatros", "leopardo marino", "kril antartico"],
    palette: ["blanco hielo, negro roca y azul frio", "gris foca y celeste glacial", "negro ala y plata", "azul aurora y rojo tenue"]
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
  body: ["cuerpo robusto de", "torso bajo de", "lomo arqueado de", "pecho profundo de", "silueta pesada de", "cuerpo alargado y casi ceremonial de", "masa compacta con proporciones de"],
  head: ["cabeza alerta de", "hocico de", "craneo ancho de", "pico modificado de", "rostro vigilante de", "mandibula exagerada de", "frente abovedada inspirada en"],
  legs: ["patas veloces de", "garras excavadoras de", "zancadas de", "dedos palmeados de", "apoyos firmes de", "extremidades demasiado largas de", "manos prensiles derivadas de"],
  tail: ["cola de", "apendice posterior inspirado en", "timon de", "cola defensiva de", "rastro de", "cola bifurcada basada en", "latigo caudal de"],
  hide: ["cubierta basada en", "pelaje/escamas de", "piel adaptada de", "placas de", "membrana de", "manto irregular de", "coraza viva inspirada en"],
  crest: ["cresta tomada de", "marca visible de", "ornamento de", "silueta secundaria de", "senal territorial de", "mascara natural de", "aureola organica basada en"],
  sense: ["olfato de", "oido de", "vision de", "percepcion de", "instinto de", "sentido vibratorio de", "memoria espacial de"],
  movement: ["se mueve como", "acecha como", "huye como", "gira como", "avanza como", "desaparece como", "se balancea como"]
};

export const temperaments = [
  "territorial pero no cruel", "curiosa y dificil de domesticar", "silenciosa hasta que cambia el clima",
  "protectora de su zona de cria", "solitaria salvo durante tormentas", "astuta y memoriosa",
  "paciente, casi ceremonial", "nerviosa cuando cambia el viento", "mansa con quien respeta su territorio",
  "caprichosa como animal de cuento", "rencorosa con quienes pronuncian mal su nombre", "juguetona pero peligrosa",
  "devota de objetos brillantes", "asustadiza hasta que percibe mentira", "orgullosa de su guarida"
];

export const magicalTraits = [
  "tiene un segundo par de ojos que solo se abre con luna nueva",
  "sus crias nacen dentro de frutos duros como mates",
  "su sombra se adelanta unos pasos cuando presiente amenaza",
  "duerme de pie y suena con voces humanas prestadas",
  "puede cambiar una parte del cuerpo durante la muda estacional",
  "deja pequenos amuletos naturales donde marca territorio",
  "sus huesos suenan como bombo leguero cuando corre",
  "imita llamados de animales reales para atraer curiosos",
  "envejece hacia atras durante una semana despues de cada tormenta",
  "reconoce nombres propios y los guarda como si fueran olores",
  "sus cicatrices forman mapas incompletos de la ecorregion",
  "aparece siempre acompanada por un cambio raro de temperatura"
];

export const mythicBehaviors = [
  "roba brasas, plumas o piedras pequenas para construir nidos rituales",
  "protege senderos perdidos y confunde a quien entra sin permiso",
  "se deja ver solo en el borde entre dos habitats",
  "adopta objetos humanos abandonados y les da uso biologico",
  "marca pactos con tres vueltas alrededor de su visitante",
  "cambia de canto segun la estacion y el peligro cercano",
  "guarda memoria de inundaciones, incendios y nevadas antiguas",
  "persigue reflejos porque cree que son presas del mundo de abajo",
  "apaga fogones si detecta codicia o ruido excesivo",
  "conduce a los perdidos hacia agua, sombra o altura, pero cobra algo a cambio"
];

export const visualOddities = [
  "cornamenta asimetrica con brotes minerales",
  "mascara facial parecida a pintura ceremonial natural",
  "lomo con pequenas protuberancias como altares",
  "cola bifurcada que se mueve con intencion propia",
  "membranas con dibujos que parecen mapas fluviales",
  "pupilas en forma de media luna",
  "crestas que tintinean como semillas secas",
  "placas dorsales que se abren como abanico",
  "bigotes largos con nudos de barro, sal o polen",
  "un aro de pelo, pluma o escama alrededor del cuello"
];

export const weaknesses = {
  fire: ["lluvia sostenida", "barro frio", "falta de oxigeno", "cantos de agua quieta"],
  water: ["sequedad prolongada", "sal excesiva", "frio repentino", "recipientes de hierro cerrados"],
  plant: ["heladas fuertes", "fuego continuo", "suelos esteriles", "silencio total de insectos"],
  rock: ["raices invasivas", "golpes repetidos", "agua acida", "vibraciones ritmicas"],
  ice: ["calor de zonda", "salmuera", "sol directo", "piedras negras calentadas"],
  wind: ["cuevas cerradas", "bosques densos", "peso extra", "campanas graves"],
  storm: ["suelo aislante", "sequedad total", "minerales no conductivos", "lana mojada"],
  mud: ["salitre", "congelamiento", "superficies de piedra lisa", "hierbas absorbentes"],
  salt: ["lluvia dulce", "vegetacion espesa", "humedad constante", "barro vivo"],
  shadow: ["luz plana de mediodia", "superficies reflectantes", "fuego bajo", "nombres dichos en voz alta"],
  spore: ["viento seco", "frio extremo", "fuego controlado", "perfume de flores citricas"]
};
