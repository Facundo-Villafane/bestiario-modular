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
    defenses: ["desaparece en sombra baja", "copia siluetas imposibles", "piel que absorbe luz rasante", "doble sombra que distrae perseguidores"],
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
    palette: ["verde camalote, barro negro y marfil", "ocre mojado y azul laguna", "verde oscuro con reflejos dorados", "gris tormenta, junco seco y ojo ambar"]
  },
  yungas: {
    label: "Yungas",
    elements: ["plant", "water", "spore", "shadow", "storm"],
    habitats: ["selva montana de neblina", "quebradas humedas", "laderas con helechos gigantes", "senderos tapados por vapor tibio", "copas donde nunca llega sol directo"],
    palette: ["verde profundo y amarillo fruta", "barro rojo y sombra azul", "negro selva con manchas hojas", "turquesa humedad y naranja tucan"]
  },
  paranaense: {
    label: "Selva Paranaense",
    elements: ["plant", "water", "spore", "shadow", "rock"],
    habitats: ["selva misionera de tierra colorada", "tacuarales cerrados", "saltos con niebla roja", "paredones cubiertos de raices", "claros donde las piedras transpiran"],
    palette: ["tierra colorada, verde brillante y negro", "ocre rojo y amarillo pico", "verde oscuro con blanco hueso", "rojo laterita y azul sombra"]
  },
  chaco: {
    label: "Chaco",
    elements: ["plant", "rock", "fire", "shadow", "storm"],
    habitats: ["monte de quebrachos", "palmares secos", "isletas de algarrobo", "picadas con tierra partida", "nidos abandonados bajo calor inmovil"],
    palette: ["madera seca, cobre y negro", "amarillo pasto y gris corteza", "rojo tierra y verde quimil", "humo bajo y miel oscura"]
  },
  pampa: {
    label: "Pampa",
    elements: ["wind", "storm", "plant", "mud", "rock"],
    habitats: ["pastizales abiertos", "lagunas bajas con juncales", "campos bajo pampero", "tapiales viejos mordidos por viento", "cuchillas donde el cielo pesa"],
    palette: ["pasto seco, cielo gris y barro", "ocre claro y blanco tiza", "marron vizcacha y azul tormenta", "verde cardo y plata lluvia"]
  },
  espinal: {
    label: "Espinal",
    elements: ["plant", "wind", "fire", "rock", "shadow"],
    habitats: ["bosques de calden", "algarrobales abiertos", "espinales secos", "sombra rota entre ramas duras", "claros con semillas que crujen"],
    palette: ["ambar, calden y gris humo", "amarillo cardenal y marron seco", "verde opaco y rojo arcilla", "negro tordo y oro viejo"]
  },
  monte: {
    label: "Monte",
    elements: ["salt", "rock", "fire", "wind", "shadow"],
    habitats: ["jarillales del monte", "canadones secos", "salitrales cuyanos", "arenales con piedras calientes", "ramblas donde el agua aparece una vez al ano"],
    palette: ["salitre, jarilla y rojo piedra", "arena palida y sombra violeta", "ocre seco y negro zorro", "cobre, hueso y verde jarilla"]
  },
  puna: {
    label: "Puna y Altos Andes",
    elements: ["rock", "salt", "ice", "wind", "storm"],
    habitats: ["salares de altura", "vegas punenas", "laderas frias bajo cielo limpio", "apachetas que silban al anochecer", "lagunas altas con espuma mineral"],
    palette: ["sal blanco, rosa flamenco y azul altura", "gris piedra y dorado vicuna", "violeta sombra y nieve", "turquesa laguna y negro condor"]
  },
  patagonia: {
    label: "Estepa Patagonica",
    elements: ["wind", "ice", "rock", "shadow", "storm"],
    habitats: ["mesetas de coiron", "canadones frios", "estepa ventosa", "cuevas con pinturas casi borradas", "bardas donde el viento canta bajo"],
    palette: ["gris coiron, rojo canadon y blanco frio", "ocre viento y azul sombra", "marron guanaco y plata", "rojo loica y negro piedra"]
  },
  bosquePatagonico: {
    label: "Bosques Patagonicos",
    elements: ["plant", "ice", "water", "spore", "rock"],
    habitats: ["bosques de lenga y coihue", "lagos frios", "mallines entre arrayanes", "troncos caidos con hongos brillantes", "orillas donde el bosque toca nieve"],
    palette: ["verde lenga, nieve y cobre arrayan", "azul lago y marron corteza", "negro carpintero y rojo cresta", "musgo, hielo y rosa hongo"]
  },
  marArgentino: {
    label: "Mar Argentino",
    elements: ["water", "ice", "salt", "wind", "shadow"],
    habitats: ["restingas frias", "kelp submarino austral", "plataforma marina", "cuevas de espuma bajo acantilados", "playas donde la marea deja luces"],
    palette: ["azul profundo, espuma y negro", "gris ballena y blanco sal", "verde kelp y plata fria", "ocre arena y violeta abisal"]
  },
  antartida: {
    label: "Antartida e islas australes",
    elements: ["ice", "water", "wind", "shadow", "rock"],
    habitats: ["playas de roca negra y nieve", "hielos costeros", "islas de viento blanco", "grietas azules que suenan de noche", "colonias abandonadas bajo aurora"],
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
  body: [
    "cuerpo alto y hueco, con costillas visibles como arcos de una capilla salvaje",
    "torso bajo y ancho, cubierto de pliegues que parecen mapas de barro seco",
    "silueta alargada, casi flotante, sostenida por una columna que brilla desde dentro",
    "masa compacta de lomo curvo, con bolsas luminosas bajo la piel",
    "cuerpo dividido en tres segmentos que se acomodan como piedras vivas",
    "pecho profundo con una cavidad central donde late su elemento",
    "tronco asimetrico, como si hubiera sido modelado por viento, agua y maldicion",
    "cuerpo en espiral, con organos visibles girando lentamente bajo una piel translucida",
    "torso doble unido por una cintura estrecha que puede girar en sentidos opuestos",
    "vientre suspendido en una membrana tensa, como si llevara una pequena tormenta dentro",
    "caja corporal sin frente claro, capaz de orientarse hacia varias direcciones a la vez",
    "cuerpo bajo con una segunda columna externa que se arquea sobre el lomo como una raiz"
  ],
  head: [
    "cabeza triangular sin hocico claro, con una corona de ojos pequenos",
    "rostro cubierto por una mascara natural de hueso oscuro",
    "craneo ancho con mandibula partida en dos placas moviles",
    "frente transparente donde se ven destellos de su energia interna",
    "cabeza baja con cuernos blandos que cambian de posicion",
    "rostro sin boca visible hasta que ataca",
    "cara larga, casi humana de lejos, pero imposible de sostener con la mirada",
    "tres rostros incompletos que comparten una sola boca vertical",
    "craneo sin ojos frontales, con doce ojos pequenos alrededor del cuello",
    "doble mandibula: una habla con chasquidos y la otra muerde en silencio",
    "cinco narices flexibles que prueban aire, agua, tierra, miedo y memoria",
    "cabeza partida por una grieta luminosa que se abre como parpado central",
    "rostro liso con bocas falsas que solo sirven para respirar"
  ],
  legs: [
    "cuatro patas finas que pisan sin doblar la hierba",
    "seis extremidades cortas con articulaciones invertidas",
    "dos patas principales y dos brazos menores que salen del pecho",
    "apoyos anchos como raices, capaces de cerrarse alrededor del suelo",
    "piernas demasiado largas, con rodillas altas y andar ceremonial",
    "garras blandas que dejan marcas circulares en vez de huellas",
    "extremidades que se repliegan bajo el cuerpo cuando quiere deslizarse",
    "nueve patas desiguales que se turnan para tocar el suelo",
    "patas delanteras sin hueso, utiles para abrazar piedras, ramas o presas",
    "zancos organicos que se acortan cuando entra en agua o barro",
    "dedos laterales que caminan solos unos segundos antes del cuerpo",
    "articulaciones dobles que le permiten avanzar de costado sin girar la cabeza"
  ],
  tail: [
    "cola bifurcada que se mueve aun cuando el cuerpo esta quieto",
    "apendice largo con nudos de luz en la punta",
    "rastro caudal hecho de fibras, humo o barro suspendido",
    "cola corta cubierta de campanillas organicas mudas",
    "latigo posterior que dibuja simbolos en el aire",
    "cola pesada como un ancla ritual",
    "apendice transparente donde se acumula el color del habitat",
    "tres colas finas, cada una con un pulso distinto",
    "cola hueca que respira por la punta y detecta peligro desde atras",
    "apendice enrollado con dientes pequenos en el borde interno",
    "cola plana como una vela, usada para regular temperatura y humor",
    "rastro posterior que se desprende y vuelve al cuerpo despues de unos pasos"
  ],
  hide: [
    "piel de textura cambiante, entre corteza, cuero viejo y vidrio opaco",
    "manto de placas irregulares que se abren cuando respira",
    "cubierta blanda con vetas luminosas bajo la superficie",
    "pelaje corto mezclado con polvo, sal, polen o ceniza",
    "membrana humeda que refleja un paisaje distinto al real",
    "coraza viva que crece en patrones distintos cada vez",
    "capa exterior con pequenas grietas por donde sale vapor elemental",
    "piel con parpados diminutos repartidos por todo el lomo",
    "cubierta de pequenas bolsas que se inflan segun el peligro cercano",
    "manto de escamas blandas que cambian de orden durante la noche",
    "piel con poros grandes que exhalan sonidos en lugar de vapor",
    "coraza incompleta, dejando ver luces internas que no coinciden con sus movimientos"
  ],
  crest: [
    "aureola organica de espinas, semillas y fragmentos minerales",
    "cresta dorsal que se despliega como un estandarte",
    "anillo de protuberancias alrededor del cuello",
    "marca luminosa que cambia segun su humor",
    "hilera de pequenas torres oseas sobre el lomo",
    "velo de fibras colgantes que cubre parte del rostro",
    "ornamento lateral que parece una pieza de altar abandonado",
    "racimo de ojos dormidos que despiertan de a uno",
    "tres narices secundarias creciendo sobre la frente",
    "cresta con pequenos organos que giran como veletas vivas",
    "aro flotante de piel endurecida que no toca el cuerpo",
    "protuberancias blandas que imitan piedras, frutos o huesos segun el habitat"
  ],
  sense: [
    "percibe nombres propios como vibraciones en el suelo",
    "detecta miedo por cambios de temperatura",
    "ve rastros de humedad, sombra o electricidad en el aire",
    "escucha promesas rotas a gran distancia",
    "huele metal, lluvia o ceniza antes de que aparezcan",
    "lee movimientos del habitat por la piel",
    "siente cuando alguien cruza un limite invisible",
    "usa sus ojos secundarios para mirar atras, abajo y dentro del agua",
    "sus narices laterales separan olores reales de olores magicos",
    "detecta heridas antiguas en el paisaje como si fueran calor",
    "escucha con la cavidad del pecho y responde con temblores",
    "percibe intenciones por la forma en que se mueve la sombra ajena"
  ],
  movement: [
    "avanza por tirones suaves, como si el suelo lo llamara",
    "se desplaza sin mover todas sus patas a la vez",
    "gira alrededor de su objetivo antes de decidir si atacarlo",
    "desaparece detras de elementos del paisaje demasiado pequenos para ocultarlo",
    "salta en silencio y cae con un sonido que llega tarde",
    "se balancea como una rama pesada bajo viento inexistente",
    "camina dejando una estela breve de su elemento",
    "camina hacia adelante mientras sus ojos miran en direcciones contradictorias",
    "se parte visualmente en dos durante un salto y vuelve a unirse al caer",
    "retrocede mejor de lo que avanza, como si recordara el camino antes de hacerlo",
    "desplaza primero sus organos sensoriales y despues arrastra el cuerpo hacia ellos",
    "trepa superficies lisas usando ventosas que aparecen solo cuando las necesita"
  ]
};

export const temperaments = [
  "territorial pero no cruel", "curiosa y dificil de domesticar", "silenciosa hasta que cambia el clima",
  "protectora de su zona de cria", "solitaria salvo durante tormentas", "astuta y memoriosa",
  "paciente, casi ceremonial", "nerviosa cuando cambia el viento", "mansa con quien respeta su territorio",
  "caprichosa como entidad de cuento", "rencorosa con quienes pronuncian mal su nombre", "juguetona pero peligrosa",
  "devota de objetos brillantes", "asustadiza hasta que percibe mentira", "orgullosa de su guarida"
];

export const magicalTraits = [
  "tiene un segundo par de ojos que solo se abre con luna nueva",
  "posee siete ojos funcionales y cada uno ve una version distinta del peligro",
  "tiene varias narices pequenas alrededor del cuello para oler clima, mentira y sangre",
  "sus bocas falsas respiran mientras la boca verdadera permanece escondida",
  "puede cerrar partes del cuerpo como parpados para proteger organos sensibles",
  "un ojo interior se abre dentro del pecho cuando detecta magia cercana",
  "sus organos sensoriales se reordenan despues de cada pelea",
  "sus crias nacen con demasiadas extremidades y pierden algunas al elegir habitat",
  "sus crias nacen dentro de frutos duros como mates",
  "su sombra se adelanta unos pasos cuando presiente amenaza",
  "duerme de pie y suena con voces humanas prestadas",
  "puede cambiar una parte del cuerpo durante la muda estacional",
  "deja pequenos amuletos naturales donde marca territorio",
  "sus huesos suenan como bombo leguero cuando corre",
  "imita voces lejanas para atraer curiosos",
  "envejece hacia atras durante una semana despues de cada tormenta",
  "reconoce nombres propios y los guarda como si fueran olores",
  "sus cicatrices forman mapas incompletos de la ecorregion",
  "aparece siempre acompanada por un cambio raro de temperatura"
];

export const mythicBehaviors = [
  "roba brasas, plumas o piedras pequenas para construir nidos rituales",
  "protege senderos perdidos y confunde a quien entra sin permiso",
  "se deja ver solo en el borde entre dos habitats",
  "adopta objetos humanos abandonados y les da un uso ritual",
  "marca pactos con tres vueltas alrededor de su visitante",
  "cambia de canto segun la estacion y el peligro cercano",
  "guarda memoria de inundaciones, incendios y nevadas antiguas",
  "persigue reflejos porque cree que son presas del mundo de abajo",
  "apaga fogones si detecta codicia o ruido excesivo",
  "conduce a los perdidos hacia agua, sombra o altura, pero cobra algo a cambio"
];

export const visualOddities = [
  "cornamenta asimetrica con brotes minerales",
  "siete ojos de tamanos distintos repartidos entre rostro, cuello y flancos",
  "cinco narices flexibles, cada una orientada hacia un punto cardinal distinto",
  "dos bocas falsas sobre el pecho y una boca real escondida bajo la mandibula",
  "parpados en los hombros que se abren cuando se siente observado",
  "un ojo grande bajo una membrana del vientre, usado para orientarse en oscuridad",
  "extremidades secundarias pequenas que ordenan la cubierta mientras camina",
  "dientes externos que funcionan como antenas tactiles",
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

export const anthroSpecies = [
  "felino de orejas largas", "canido de hocico fino", "zorro urbano", "lobo de pelaje pesado",
  "ciervo nocturno", "conejo atletico", "murcielago elegante", "reptil de escamas suaves",
  "dragon menor", "ave rapaz antropomorfa", "caballo estilizado", "cabra de cuernos curvos",
  "nutria de rio", "mapache de fantasia", "hiena sonriente", "pantera de salon"
];

export const anthroGenders = [
  "femenino", "masculino", "no binario", "androgino", "genderfluid",
  "agenero", "transfemenino", "transmasculino", "masc suave", "femme fuerte",
  "presentacion ambigua", "presentacion glam"
];

export const anthroBodyTypes = [
  "alto y esbelto, con extremidades largas y postura relajada",
  "compacto y fuerte, con hombros marcados y centro de gravedad bajo",
  "curvilineo y suave, con cintura definida y presencia escenica",
  "robusto y acolchado, con silueta amable y poderosa",
  "delgado y nervioso, con articulaciones expresivas y manos inquietas",
  "musculatura elegante, mas de bailarin que de guerrero",
  "figura triangular, espalda amplia y caderas estrechas",
  "figura de reloj suave, balanceada y segura de si misma",
  "bajito, atletico y muy expresivo en cola y orejas",
  "alto, pesado y ceremonial, con movimientos lentos pero precisos"
];

export const anthroAnatomy = [
  "cola larga que actua como contrapeso emocional",
  "orejas enormes que delatan cada cambio de humor",
  "manos grandes con almohadillas visibles y dedos expresivos",
  "piernas digitigradas elegantes, pensadas para poses dinamicas",
  "melena gruesa que cae sobre un hombro",
  "escamas finas en cuello, claviculas y antebrazos",
  "garras cortas cuidadas, mas esteticas que amenazantes",
  "cola doble, una juguetona y otra casi siempre quieta",
  "ojos grandes con parpados pesados y mirada teatral",
  "hocico corto con sonrisa lateral dificil de leer"
];

export const anthroExtraTraits = [
  "sin rasgos extra",
  "cuernos cortos y pulidos",
  "cuernos largos y elegantes",
  "alas pequenas decorativas",
  "alas grandes plegadas",
  "cola secundaria",
  "orejas extra expresivas",
  "marcas luminosas en el pelaje",
  "mechon o melena muy marcada",
  "cicatrices esteticas suaves",
  "escamas parciales sobre hombros y cuello",
  "antenas finas y expresivas"
];

export const anthroClothingCoverage = [
  "poca ropa, con fur visible y cobertura no explicita",
  "ropa ligera que deja ver brazos, hombros, abdomen o piernas con buen gusto",
  "ropa media, equilibrando silueta, fur visible y accesorios",
  "ropa ajustada no reveladora, enfocada en silueta y pose",
  "ropa completa, elegante y estructurada",
  "capas y accesorios, con menos enfasis en fur visible"
];

export const anthroStyle = [
  "top corto, shorts altos, guantes y botas, dejando bastante fur visible sin desnudez",
  "arnes decorativo sobre top seguro, pantalon bajo y accesorios de escenario",
  "ropa deportiva ligera con top ajustado, shorts y vendas decorativas",
  "streetwear nocturno con chaqueta corta abierta, top simple y botas pesadas",
  "traje de escenario ajustado, elegante y no revelador",
  "ropa deportiva retro con colores contrastados y fur visible en brazos y piernas",
  "abrigo largo abierto sobre prendas simples y bien entalladas",
  "look de club de jazz: guantes, cuello alto y accesorios dorados",
  "ropa de aventurero urbano con cinturones, bolsillos y telas gastadas",
  "conjunto minimalista de tela elastica, pensado para movimiento",
  "uniforme fantastico reinterpretado como moda de pasarela",
  "camisa amplia metida a medias, pantalon alto y botas limpias",
  "capas livianas que enfatizan silueta sin mostrar de mas"
];

export const anthroAppeal = [
  "atractivo por seguridad corporal y lenguaje de mirada",
  "sugerente por postura confiada, sin desnudez ni explicitud",
  "encanto visual basado en contraste entre elegancia y peligro suave",
  "appeal de personaje carismatico: sonrisa medida, pose estable y presencia fuerte",
  "sensualidad sutil en la forma de apoyar peso y mover la cola",
  "atractivo de silueta clara, gestos limpios y ropa que acompana el cuerpo",
  "magnetismo por expresion tranquila y ojos atentos",
  "energia coqueta pero controlada, mas insinuada que mostrada",
  "presencia escenica de alguien que sabe que lo estan mirando",
  "belleza rara, expresiva y un poco intimidante"
];

export const anthroPersonalities = [
  "coqueto, rapido para bromear y dificil de impresionar",
  "sereno, protector y con humor seco",
  "dramatico, teatral y muy consciente de su imagen",
  "timido al hablar, pero audaz al moverse",
  "competitivo, elegante y algo vanidoso",
  "dulce, intenso y con mirada demasiado directa",
  "misterioso, de pocas palabras y gestos calculados",
  "jugueton, impulsivo y facil de querer",
  "sofisticado, observador y un poco peligroso",
  "calido, fisico y expresivo con orejas, cola y manos"
];

export const anthroPoses = [
  "apoyado contra una pared, una mano en el bolsillo y la cola marcando ritmo",
  "mirando por encima del hombro con una sonrisa apenas insinuada",
  "sentado de lado, espalda recta y piernas cruzadas con naturalidad",
  "de pie bajo una luz lateral, mostrando una silueta muy clara",
  "ajustandose un guante mientras evita mirar de frente",
  "en medio paso, como si acabara de girar al escuchar su nombre",
  "con brazos cruzados y orejas orientadas hacia quien observa",
  "sosteniendo un accesorio pequeno que revela su oficio",
  "inclinando la cabeza, entre desafio y curiosidad",
  "relajado, con peso sobre una pierna y expresion de confianza"
];

export const anthroHooks = [
  "cantante", "mensajero", "duelista", "mecanico", "bailarin", "guardaespaldas elegante",
  "ilusionista", "capitan", "ladron con codigo moral", "modelo de moda", "chef nocturno", "detective"
];

export const anthroPalettes = [
  "negro tinta, crema y dorado viejo", "gris humo, azul petroleo y blanco frio",
  "cobre, chocolate y verde neon suave", "lavanda oscuro, plata y rosa apagado",
  "rojo vino, marfil y sombra violeta", "naranja quemado, negro mate y turquesa",
  "arena, carbon y amarillo electrico", "azul noche, perla y cuero marron",
  "verde botella, hueso y bronce", "blanco calido, cereza oscura y grafito"
];
