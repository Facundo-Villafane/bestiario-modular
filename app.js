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

const extraOptions = {
  archetype: [
    "equino cavernario", "anfibio de sal", "ave carroñera muda", "felino micotico", "mantarraya terrestre",
    "lagarto de cristal", "larva gigante domesticable", "primado nocturno", "pez fosil ambulante", "colonia de crustaceos unidos"
  ],
  body: [
    "cuerpo alto sostenido por tendones tensos", "vientre translucido con organos visibles", "torax blindado y cintura muy estrecha",
    "cuerpo dividido en modulos que se separan", "silueta jorobada con hombros enormes", "cuerpo de manta con patas ocultas",
    "estructura hueca que silba con el viento", "espalda cóncava que acumula agua", "cuerpo cubierto de nudos musculares",
    "forma de gota invertida con base pesada"
  ],
  head: [
    "cabeza en forma de pala con ojos hundidos", "rostro de pico ancho cubierto de cicatrices naturales",
    "craneo dividido por una cresta de cartilago", "cabeza sin mandibula visible", "hocico doble con canales de respiracion",
    "frente abovedada con placas moviles", "cara asimetrica con un lado blindado", "mandibulas cubiertas por bigotes rigidos"
  ],
  eyes: [
    "ojos lechosos que miran en direcciones opuestas", "pupilas horizontales como rendijas de cerradura",
    "ojos ocultos bajo piel fina", "pequeños puntos luminosos alrededor de la boca", "un anillo de ojos en el cuello",
    "ojos que reflejan el cielo aunque este bajo tierra", "cuatro ojos principales y muchos falsos", "vision ciega basada en humedad"
  ],
  mouth: [
    "placas bucales que se abren como persianas", "dientes de queratina reemplazables", "mandibula elastica que se desencaja",
    "boca vertical en el rostro", "tubo alimenticio que sale del pecho", "lengua plana usada como sensor",
    "dos bocas pequeñas en lugar de una grande", "dientes externos que nunca cierran del todo"
  ],
  skin: [
    "piel cubierta de liquenes simbioticos", "escamas transparentes con bordes oscuros", "pelaje largo que retiene semillas",
    "placas negras con brillo aceitoso", "membranas secas como pergamino", "piel granulada similar a piedra volcanica",
    "capa de algas vivas adheridas", "quitina blanca con manchas de oxido", "piel azulada cubierta de cicatrices circulares",
    "caparazon flexible parecido a cuero viejo"
  ],
  limbs: [
    "patas delanteras muy largas con muñecas dobles", "ocho patas cortas que se mueven por oleadas",
    "brazos excavadores con dedos planos", "patas finas terminadas en ventosas", "piernas con membranas entre articulaciones",
    "garras curvas pensadas para colgarse", "extremidades que se repliegan dentro del cuerpo", "manos con tres dedos desiguales"
  ],
  tail: [
    "cola con una pala de hueso al final", "apendice doble que marca rastros en el suelo", "cola cubierta de sensores tactiles",
    "filamento que vibra cuando detecta presas", "cola corta con bolsa de grasa", "cola segmentada como cadena",
    "cola que se desprende y sigue moviendose", "apendice dorsal que parece una segunda cabeza"
  ],
  extras: [
    "crestas de sal que se disuelven con lluvia", "bolsas transparentes llenas de esporas", "dientes decorativos fuera de la boca",
    "patrones de muda como mapas topograficos", "pequeñas aletas respiratorias en las patas", "nidos de insectos aliados en el cuello",
    "placas que producen chasquidos de comunicacion", "membranas que cambian de tension segun el clima"
  ],
  movement: [
    "avanza hundiendo y levantando el cuerpo como una bomba", "se desliza sobre una pelicula de mucosa",
    "salta hacia atras antes de avanzar", "camina apoyando solo tres patas a la vez", "se cuelga de superficies verticales",
    "gira el torso antes de cambiar de direccion", "se desplaza en zigzag para confundir rastros", "permanece inmovil y luego acelera de golpe"
  ],
  senses: [
    "detecta cambios de salinidad", "percibe sombras aunque no vea luz", "huele sangre vieja en piedra",
    "nota variaciones minimas de humedad", "escucha raices creciendo", "distingue individuos por su pulso",
    "detecta metales enterrados", "siente corrientes de aire con la cola", "percibe feromonas de miedo",
    "recuerda rutas por sabor del suelo"
  ],
  behavior: [
    "evita conflictos salvo si protegen crias", "rodea a intrusos durante horas", "se comunica golpeando piedras",
    "prefiere observar antes de acercarse", "es social solo durante la muda", "abandona comida como señuelo",
    "sigue cursos de agua aunque esten secos", "esconde partes de su cuerpo para parecer menor",
    "forma alianzas temporales con otras especies", "se vuelve dócil si se le ofrece sal"
  ],
  habitat: [
    "manglares de raices negras", "glaciares con cuevas azules", "azoteas abandonadas cubiertas de nidos",
    "selvas de hojas gigantes", "pantanos salobres", "barrancos de arcilla roja", "volcanes apagados",
    "acantilados con niebla constante", "alcantarillas colonizadas por musgo", "cenotes profundos",
    "bosques de bambu seco", "playas de vidrio molido", "templos hundidos", "llanuras de pasto plateado"
  ],
  diet: [
    "salitre de rocas costeras", "larvas escondidas en madera", "algas negras", "flores nocturnas",
    "musgo mineralizado", "pequeños crustaceos terrestres", "sangre seca de presas antiguas",
    "resina de arboles enfermos", "semillas duras que tritura con paciencia", "huevos abandonados",
    "hongos que crecen en metal", "agua atrapada en hojas"
  ],
  defense: [
    "expulsa una nube de sal que irrita ojos", "se cubre con placas levantadas como cuchillas",
    "lanza un zumbido que desorienta", "libera olor a depredador mayor", "se parte visualmente en falsos cuerpos",
    "oscurece su piel para absorber calor", "golpea el suelo para llamar a su colonia", "vomita una espuma amarga",
    "usa la cola para borrar sus huellas", "enciende puntos luminosos para cegar"
  ],
  oddity: [
    "adopta el color del ultimo lugar donde durmio", "sus huesos crecen en espiral", "no envejece mientras este mojada",
    "solo se reproduce despues de incendios", "puede vivir meses sin cerrar los ojos", "cada individuo tiene una marca irrepetible",
    "su canto atrae lluvia fina", "muda la piel en forma de mapa", "aprende caminos siguiendo estrellas",
    "su cuerpo genera calor cuando esta asustado"
  ],
  palette: [
    "verde botella, cobre viejo y crema", "negro humedo con lineas celestes", "gris ceniza y rojo arcilla",
    "azul profundo con blanco calcico", "amarillo seco y marron quemado", "verde algas y plata opaca",
    "violeta hematoma y hueso", "arena, coral viejo y azul verdoso", "negro azulado con puntos leche",
    "gris pizarra y naranja oxidado"
  ],
  scale: [
    "del tamaño de un cuervo", "como una mochila pesada", "tan alto como una mesa", "del largo de una escalera",
    "del tamaño de un ternero", "como una persona de pie", "puede caber en una caja grande",
    "tan ancho como una cama", "adulto pequeño pero con cola enorme", "varia entre cachorro y adulto segun humedad"
  ]
};

Object.entries(extraOptions).forEach(([id, options]) => {
  const module = modules.find((item) => item.id === id);
  if (module) module.values.push(...options);
});

const habitatChoices = [
  { id: "any", label: "Cualquiera" },
  { id: "swamp", label: "Pantano" },
  { id: "forest", label: "Bosque" },
  { id: "cave", label: "Cueva" },
  { id: "desert", label: "Desierto" },
  { id: "ocean", label: "Oceanico" },
  { id: "mountain", label: "Montaña" },
  { id: "ruins", label: "Ruinas" },
  { id: "urban", label: "Urbano abandonado" },
  { id: "volcanic", label: "Volcanico" }
];

const habitatProfiles = {
  swamp: {
    habitat: ["pantanos de agua negra", "pantanos salobres", "manglares de raices negras", "costas de barro brillante"],
    archetype: ["mamifero anfibio", "anfibio transparente", "molusco terrestre", "planta depredadora"],
    skin: ["piel humeda con manchas iridiscentes", "barro endurecido que se regenera", "capa de algas vivas adheridas"],
    limbs: ["patas palmeadas con uñas de piedra", "patas finas terminadas en ventosas", "tentaculos musculares con dedos"],
    movement: ["se arrastra y salta de golpe", "se desliza sobre una pelicula de mucosa", "nada en aire humedo"],
    senses: ["detecta cambios de salinidad", "nota variaciones minimas de humedad", "percibe agua a kilometros"],
    diet: ["algas negras", "raices fermentadas", "peces pequeños atrapados en charcos"],
    defense: ["se cubre con barro toxico", "vomita una espuma amarga", "libera olor a depredador mayor"],
    palette: ["verde musgo, hueso y negro humedo", "verde algas y plata opaca", "negro humedo con lineas celestes"]
  },
  forest: {
    habitat: ["bosques de niebla baja", "selvas de hojas gigantes", "bosques de bambu seco", "bosques quemados que rebrotan"],
    archetype: ["hongo ambulante", "planta depredadora", "felino micotico", "herbivoro gigante"],
    skin: ["pelaje corto con musgo", "corteza viva con savia oscura", "piel cubierta de liquenes simbioticos"],
    extras: ["antenas que imitan ramas", "pelaje largo que retiene semillas", "sacos de polen defensivo"],
    movement: ["trepa usando la boca", "se cuelga de superficies verticales", "avanza como si midiera el terreno"],
    senses: ["lee vibraciones en plantas", "escucha raices creciendo", "recuerda rutas por sabor del suelo"],
    diet: ["savia dulce", "larvas escondidas en madera", "frutas que solo abre con sus cuernos"],
    palette: ["marron corteza y verde acido", "verde botella, cobre viejo y crema", "ambar, cobre y verde seco"]
  },
  cave: {
    habitat: ["cuevas con raices colgantes", "arrecifes subterraneos", "minas inundadas", "cenotes profundos"],
    archetype: ["criatura de cueva", "ser mineral vivo", "pez fosil ambulante", "depredador nocturno"],
    eyes: ["sin ojos visibles", "cuencas vacias que perciben calor", "vision ciega basada en humedad"],
    skin: ["membrana transparente", "cristales pequeños incrustados", "piel granulada similar a piedra volcanica"],
    movement: ["excava y emerge bajo presion", "se desplaza por vibraciones del suelo", "permanece inmovil y luego acelera de golpe"],
    senses: ["escucha cambios de presion", "detecta metales enterrados", "huele sangre vieja en piedra"],
    diet: ["minerales blandos", "hongos que crecen en metal", "musgo mineralizado"],
    palette: ["gris mineral con vetas doradas", "negro mate con brillo nacarado", "gris pizarra y naranja oxidado"]
  },
  desert: {
    habitat: ["desiertos de sal fria", "barrancos de arcilla roja", "playas de vidrio molido", "llanuras de pasto plateado"],
    archetype: ["anfibio de sal", "lagarto de cristal", "roedor acorazado", "ave carroñera muda"],
    skin: ["escamas secas como ceramica", "caparazon de sal", "membranas secas como pergamino"],
    movement: ["rueda cerrando su cuerpo", "se desplaza en zigzag para confundir rastros", "camina apoyando solo tres patas a la vez"],
    senses: ["siente corrientes de aire con la cola", "ve el calor residual", "detecta cambios de salinidad"],
    diet: ["salitre de rocas costeras", "arcilla humeda", "semillas duras que tritura con paciencia"],
    defense: ["expulsa una nube de sal que irrita ojos", "oscurece su piel para absorber calor", "se camufla con patrones del suelo"],
    palette: ["ocre, sal y azul palido", "amarillo seco y marron quemado", "gris ceniza y rojo arcilla"]
  },
  ocean: {
    habitat: ["arrecifes subterraneos", "templos hundidos", "costas de barro brillante", "islas de piedra porosa"],
    archetype: ["pez de aire", "molusco terrestre", "mantarraya terrestre", "crustaceo de bosque"],
    skin: ["membrana transparente", "capa de algas vivas adheridas", "escamas transparentes con bordes oscuros"],
    limbs: ["aletas que funcionan como manos", "patas palmeadas con uñas de piedra", "piernas con membranas entre articulaciones"],
    tail: ["cola plana usada como timon", "racimo de vejigas flotantes", "saco de tinta seco"],
    senses: ["percibe agua a kilometros", "escucha cambios de presion", "detecta cambios de salinidad"],
    diet: ["sal y algas", "algas negras", "pequeños crustaceos terrestres"],
    palette: ["azul profundo con blanco calcico", "turquesa profundo con manchas crema", "arena, coral viejo y azul verdoso"]
  },
  mountain: {
    habitat: ["montañas con tormentas secas", "acantilados con niebla constante", "glaciares con cuevas azules"],
    archetype: ["reptil plumado", "ave sin vuelo", "equino cavernario", "guardian territorial"],
    skin: ["plumas rigidas como hojas", "lana aceitosa repelente al agua", "piel azulada cubierta de cicatrices circulares"],
    movement: ["planea de sombra en sombra", "camina con pausas muy calculadas", "salta hacia atras antes de avanzar"],
    senses: ["siente campos magneticos", "ve el calor residual", "siente corrientes de aire con la cola"],
    defense: ["emite un chillido paralizante", "lanza un zumbido que desorienta", "usa descargas electricas leves"],
    palette: ["marfil con sombras azuladas", "azul profundo con blanco calcico", "gris mineral con vetas doradas"]
  },
  ruins: {
    habitat: ["ruinas cubiertas de liquen", "templos hundidos", "jardines abandonados", "volcanes apagados"],
    archetype: ["guardian territorial", "parasito simbiotico", "ser mineral vivo", "bestia domestica rara"],
    skin: ["piel de aspecto porcelana agrietada", "corteza viva con savia oscura", "quitina blanca con manchas de oxido"],
    behavior: ["protege objetos brillantes", "imita rutinas humanas", "marca territorio con patrones geometricos"],
    oddity: ["cada muda deja una mascara perfecta", "muda la piel en forma de mapa", "aprende nombres pero no voces"],
    diet: ["huesos viejos", "musgo mineralizado", "resina de arboles enfermos"],
    palette: ["marfil con sombras azuladas", "gris pizarra y naranja oxidado", "ambar, cobre y verde seco"]
  },
  urban: {
    habitat: ["azoteas abandonadas cubiertas de nidos", "alcantarillas colonizadas por musgo", "jardines abandonados"],
    archetype: ["bestia domestica rara", "roedor acorazado", "parasito simbiotico", "ave carroñera muda"],
    behavior: ["imita rutinas humanas", "sigue a viajeros sin atacar", "abandona comida como señuelo"],
    skin: ["placas negras con brillo aceitoso", "pelaje corto con musgo", "caparazon flexible parecido a cuero viejo"],
    senses: ["detecta mentiras por olor", "distingue individuos por su pulso", "recuerda sonidos durante años"],
    diet: ["madera podrida", "huevos abandonados", "hongos que crecen en metal"],
    defense: ["libera olor a depredador mayor", "usa la cola para borrar sus huellas", "se parte visualmente en falsos cuerpos"],
    palette: ["negro azulado con puntos leche", "gris pizarra y naranja oxidado", "negro mate con brillo nacarado"]
  },
  volcanic: {
    habitat: ["volcanes apagados", "barrancos de arcilla roja", "playas de vidrio molido"],
    archetype: ["ser mineral vivo", "lagarto de cristal", "depredador nocturno"],
    skin: ["piel granulada similar a piedra volcanica", "cristales pequeños incrustados", "placas negras con brillo aceitoso"],
    movement: ["permanece inmovil y luego acelera de golpe", "excava y emerge bajo presion", "gira el torso antes de cambiar de direccion"],
    senses: ["ve el calor residual", "huele minerales bajo tierra", "detecta metales enterrados"],
    diet: ["minerales blandos", "arcilla humeda", "calor corporal residual"],
    defense: ["vibra hasta quebrar objetos fragiles", "oscurece su piel para absorber calor", "endurece la piel por segundos"],
    palette: ["gris ceniza y rojo arcilla", "negro mate con brillo nacarado", "gris pizarra y naranja oxidado"]
  }
};

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
let selectedHabitat = state.selectedHabitat || "any";
let favorite = state.favorite || false;
let creature = state.creature || buildCreature({});

const $ = (selector) => document.querySelector(selector);
const elements = {
  modeGrid: $("#modeGrid"),
  habitatSelect: $("#habitatSelect"),
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
  renderHabitatSelect();
  render();
}

function bindEvents() {
  elements.randomAllButton.addEventListener("click", () => randomize({ respectLocks: false, useSeed: false }));
  elements.randomUnlockedButton.addEventListener("click", () => randomize({ respectLocks: true, useSeed: false }));
  elements.expandSeedButton.addEventListener("click", () => randomize({ respectLocks: true, useSeed: true }));
  elements.habitatSelect.addEventListener("change", () => {
    selectedHabitat = elements.habitatSelect.value;
    persist();
    toast(`Habitat base: ${habitatChoices.find((item) => item.id === selectedHabitat).label}.`);
  });
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
  const profile = getGenerationProfile(useSeed);
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
    [id]: pick(id, getGenerationProfile(true))
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
    pitch: `${name} es una criatura de base ${filled.archetype}, de ${filled.scale}, con ${filled.body}. Tiene ${filled.head}, ${filled.eyes} y ${filled.mouth}. Su cubierta es ${filled.skin}; se mueve asi: ${filled.movement}. Habita en ${filled.habitat} y su conducta principal es: ${filled.behavior}. Su defensa principal: ${filled.defense}. Rareza biologica: ${filled.oddity}.`
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
  const habitat = selectedHabitat !== "any" ? habitatProfiles[selectedHabitat]?.[id] : null;
  if (habitat?.length && Math.random() < 0.74) return randomItem(habitat);
  const bias = modeBias[mode]?.[id];
  if (bias?.length && Math.random() < 0.66) return randomItem(bias);
  return randomItem(modules.find((module) => module.id === id).values);
}

function getGenerationProfile(useSeed) {
  const profile = {};
  if (selectedHabitat !== "any") mergeProfile(profile, habitatProfiles[selectedHabitat]);
  if (useSeed) mergeProfile(profile, analyzeSeed(elements.seedInput.value));
  return profile;
}

function mergeProfile(target, source = {}) {
  Object.entries(source).forEach(([id, options]) => {
    target[id] = [...(target[id] || []), ...options];
  });
  return target;
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
  renderHabitatSelect();
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

function renderHabitatSelect() {
  elements.habitatSelect.innerHTML = "";
  habitatChoices.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.label;
    elements.habitatSelect.append(option);
  });
  elements.habitatSelect.value = selectedHabitat;
}

function renderSeedChips() {
  const text = normalize(elements.seedInput.value);
  const matches = Object.keys(seedProfiles).filter((key) => text.includes(key));
  elements.seedChips.innerHTML = "";
  if (selectedHabitat !== "any") {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = habitatChoices.find((item) => item.id === selectedHabitat).label;
    elements.seedChips.append(chip);
  }
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
    selectedHabitat,
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
