/*
 * MÓDULO · PARTE III · Organización social (capítulos 8-11)
 * Fuente: Miller (2011), pp. 227-346. Redacción propia; las páginas remiten al manual.
 * Mismo esquema que parte-1.js.
 */
ATLAS.registrarModulo({
  id: "parte-3",
  parte: 3,
  titulo: "Organización social",
  capitulos: [
    {
      n: 8,
      titulo: "Parentesco y vida doméstica",
      paginas: "229-259",
      preguntas: [
        "¿Cómo crean las culturas lazos de parentesco?",
        "¿Cuáles son las pautas transculturales del hogar y la vida doméstica?",
        "¿Cómo cambian los hogares y el parentesco?"
      ],
      glosario: [
        { t: "Parentesco", d: "Sentimiento de estar emparentado con otras personas, construido culturalmente a partir de tres elementos: descendencia, compartir y matrimonio.", p: "230-231" },
        { t: "Descendencia unilineal / bilateral", d: "La unilineal traza el parentesco por una sola línea (paterna o materna); la bilateral, por ambas. La unilineal es más frecuente en el mundo, y dentro de ella la patrilineal.", p: "231-234" },
        { t: "Patrilineal / matrilineal", d: "Sistemas en que pertenencia, herencia y a menudo residencia siguen la línea masculina o la femenina, con efectos distintos sobre el estatus de mujeres y hombres.", p: "232-234" },
        { t: "Parentesco basado en compartir", d: "Lazos creados al transferir niños (adopción, acogida), alimento (incluida la lactancia) o vínculos rituales como el padrinazgo.", p: "234-236" },
        { t: "Acogida", d: "Traslado temporal o duradero de un niño a otro hogar, frecuente en el África subsahariana para facilitar su educación o aprendizaje de un oficio.", p: "235" },
        { t: "Matrimonio", d: "Unión socialmente reconocida, presente en todas las culturas con definiciones muy variables y reglas de exclusión y preferencia para elegir cónyuge.", p: "238-246" },
        { t: "Matrimonio entre primos cruzados", d: "Unión preferente con hijos del hermano de la madre o de la hermana del padre, como en el sur de la India.", p: "242-243" },
        { t: "Grupo doméstico nuclear / extenso / troncal", d: "El nuclear reúne a una pareja con o sin hijos; el extenso, a más de un núcleo; el troncal, variante del extenso, a un hijo (normalmente el mayor) que permanece con sus padres.", p: "247-250" },
        { t: "Dinámica intradoméstica", d: "Relaciones de poder, cooperación y, a veces, violencia entre los miembros de un hogar.", p: "250-254" }
      ],
      recorrido: {
        intro: "Cómo se fabrica el parentesco y cómo se organiza la casa: términos, nombres, linajes, matrimonios y hogares que cambian con la migración y la globalización.",
        casos: ["c8-tory", "c8-ha-tsuen", "c8-minangkabau", "c8-accra", "c8-chennai", "c8-kentucky", "c8-kelabit", "c8-nadia"]
      },
      test: [
        { q: "En la isla de Tory la misma palabra significa «amigo» y «pariente» porque…", o: ["el gaélico carece de sinónimos", "en una población pequeña casi todos están emparentados", "la amistad está prohibida", "se trata de un préstamo del inglés"], c: 1, e: "El vocabulario de parentesco refleja el contexto social (p. 230)." },
        { q: "Entre los minangkabau, el poder de las mujeres se basa sobre todo en…", o: ["el control de la tierra del linaje y su producción", "su papel religioso", "el empleo industrial", "la residencia neolocal"], c: 0, e: "La herencia pasa de madres a hijas y la mujer de más edad decide en el hogar (pp. 240-241)." },
        { q: "En Ha Tsuen (Hong Kong), el sistema de nombres refleja…", o: ["la igualdad de género", "el poder y la autonomía de los varones del patrilinaje", "una herencia matrilineal", "la influencia británica"], c: 1, e: "Los varones acumulan nombres a lo largo de la vida; las mujeres, muchos menos (pp. 236-237)." },
        { q: "El estudio de Websdale en el Kentucky rural identifica como factor clave de la violencia doméstica…", o: ["el exceso de servicios sociales", "varias formas de aislamiento, empezando por el físico", "la residencia matrilocal", "la ausencia de armas"], c: 1, e: "Distancia, falta de transporte y teléfono dificultan pedir ayuda (pp. 252-253)." },
        { q: "El grupo doméstico troncal es…", o: ["una pareja sin hijos", "una variante del extenso en que un hijo permanece con sus padres", "un hogar unipersonal", "un hogar de cohabitantes no emparentados"], c: 1, e: "Es más común en Extremo Oriente (p. 258)." }
      ]
    },
    {
      n: 9,
      titulo: "Grupos sociales y estratificación social",
      paginas: "261-289",
      preguntas: [
        "¿Qué son los grupos sociales y cómo varían transculturalmente?",
        "¿Qué es la estratificación social?",
        "¿Qué es la sociedad civil?"
      ],
      glosario: [
        { t: "Grupo social", d: "Conjunto de personas que interactúan y se identifican entre sí; varía en tamaño, en el contacto cara a cara y en el grado de formalidad de su organización.", p: "262-263" },
        { t: "Adscripción / logro", d: "Criterios de pertenencia o estatus: los adscritos se tienen por nacimiento (sexo, casta); los adquiridos se ganan por mérito o elección.", p: "262, 272" },
        { t: "Amistad", d: "Vínculo voluntario de apoyo mutuo entre iguales, estructurado culturalmente por género, clase o «raza».", p: "264-266" },
        { t: "Banda juvenil", d: "Grupo de jóvenes, sobre todo urbanos, que adultos y autoridades suelen ver como problema social; su formalidad es muy variable.", p: "267-268" },
        { t: "Cooperativa", d: "Grupo económico que reparte beneficios entre sus miembros y decide por el principio «una persona, un voto».", p: "270-271" },
        { t: "Estratificación social", d: "Relaciones jerárquicas entre grupos según un estatus culturalmente definido (clase, «raza», etnicidad, género, edad, capacidades).", p: "272-282" },
        { t: "Apartheid", d: "Segregación legalmente sancionada de los blancos dominantes sobre la mayoría no blanca en Sudáfrica.", p: "276-277" },
        { t: "Sistema de castas / dalit", d: "Estratificación ligada al hinduismo y basada en el grupo de nacimiento. «Dalit» (oprimidos) es el nombre preferido por los grupos considerados más bajos.", p: "280-282" },
        { t: "Diáspora", d: "Grupo disperso que vive fuera de su patria de origen.", p: "280" },
        { t: "Sociedad civil", d: "Grupos y organizaciones ajenos al gobierno que cumplen funciones económicas, políticas o sociales, apoyando u oponiéndose a sus políticas.", p: "282-287" }
      ],
      recorrido: {
        intro: "De la amistad y las bandas juveniles a las cooperativas, y de ahí a las jerarquías de «raza», casta y etnicidad y a los movimientos que las desafían.",
        casos: ["c9-guyana", "c9-jamaica", "c9-flats", "c9-honiara", "c9-maharashtra", "c9-kuna", "c9-bangladesh", "c9-haiti", "c9-sudafrica", "c9-india", "c9-roma", "c9-vancouver"]
      },
      test: [
        { q: "En los bares de ron de Guyana, el «turno de palabra» entre amigos sirve para…", o: ["designar un líder", "mantener la igualdad y la solidaridad del grupo", "excluir a los recién llegados", "fijar precios"], c: 1, e: "Todos narran por turnos y así representan su igualdad (p. 265)." },
        { q: "Los Masta Liu de Honiara se caracterizan sobre todo por…", o: ["su jerarquía rígida y ritos de iniciación", "estar en paro y haber huido del trabajo agrícola bajo control de los mayores", "su pertenencia a una casta", "su organización cooperativa"], c: 1, e: "Es un grupo juvenil informal, sin liderazgo formal ni iniciación (pp. 267-268)." },
        { q: "Las molas kuna muestran que una cooperativa puede…", o: ["eliminar el mercado", "dar a las artesanas posición en el mercado mundial y habilidades de liderazgo", "sustituir a la familia", "imponer la religión cristiana"], c: 1, e: "La venta de molas es hoy parte importante de los ingresos domésticos (pp. 270-271)." },
        { q: "En Haití, según Trouillot, la clasificación racial combina…", o: ["solo el color de la piel", "rasgos físicos con ingresos, educación, origen social y parentesco", "la religión y la lengua", "la casta de nacimiento"], c: 1, e: "La misma apariencia puede leerse de forma distinta según la posición económica (p. 276)." },
        { q: "La discriminación por casta en la India…", o: ["es legal y reconocida", "está prohibida por la Constitución, aunque persiste", "desapareció con la independencia", "solo afecta a los brahmanes"], c: 1, e: "Como el racismo en otros contextos, sigue existiendo pese a ser ilegal (p. 288)." }
      ]
    },
    {
      n: 10,
      titulo: "Política y liderazgo",
      paginas: "291-318",
      preguntas: [
        "¿De qué se ocupa la antropología política?",
        "¿Cuáles son las principales formas de organización política y liderazgo?",
        "¿Cómo están cambiando la política y la organización política?"
      ],
      glosario: [
        { t: "Antropología política", d: "Estudio transcultural de las relaciones de poder en la esfera pública y de su cambio.", p: "292-293" },
        { t: "Poder / autoridad / influencia", d: "El poder impone la propia voluntad, incluso por la fuerza; la autoridad se basa en el reconocimiento legítimo; la influencia, en la persuasión.", p: "292-293" },
        { t: "Banda", d: "Organización política mínima de los cazadores-recolectores, con pertenencia flexible y liderazgo informal.", p: "294-296" },
        { t: "Tribu", d: "Grupo político de varias bandas o linajes con lengua y modo de vida similares, cada uno con su territorio; el jefe tribal se apoya en la persuasión.", p: "296-297" },
        { t: "Modelo segmentario", d: "Organización en que unidades pequeñas se unen ante una amenaza exterior y se dispersan cuando desaparece.", p: "296-297" },
        { t: "Gran hombre / gran mujer", d: "Liderazgo personal, a caballo entre la tribu y la jefatura, basado en lazos personales, redistribución y grandes fiestas.", p: "297-299" },
        { t: "Jefatura", d: "Organización de varias aldeas con rango hereditario y división social entre linajes de jefes y el resto.", p: "299-300" },
        { t: "Estado", d: "Organización con burocracia e instituciones diversificadas que controla un territorio, define la ciudadanía y recauda impuestos.", p: "300-305" },
        { t: "Facción", d: "Grupo político movilizado por un líder con lazos de lealtad personales, sin reglas formales de sucesión.", p: "305-306" },
        { t: "Estado fallido o inestable", d: "Gobierno incapaz de mantener el orden, prestar servicios y conservar la lealtad de su población.", p: "309-312" }
      ],
      recorrido: {
        intro: "De la tribu y el gran hombre a la jefatura y el estado: cómo se gana, se hereda y se disputa el poder, y qué ocurre cuando los estados fallan o se desbordan.",
        casos: ["c10-kayapo", "c10-melanesia", "c10-nez-perce", "c10-belice", "c10-yonne", "c10-tisza", "c10-kurdos", "c10-puerto-rico"]
      },
      test: [
        { q: "Un jefe tribal se apoya sobre todo en…", o: ["la fuerza militar", "la autoridad y la persuasión entre parientes", "la burocracia", "el voto secreto"], c: 1, e: "Su liderazgo es a tiempo parcial y basado en lealtades de parentesco (p. 297)." },
        { q: "El gran hombre melanesio consigue prestigio mediante…", o: ["la herencia del cargo", "la redistribución y las grandes fiestas basadas en lazos personales", "las elecciones", "la conquista territorial"], c: 1, e: "Su base son los parientes, ampliada por redes personales (pp. 297-299)." },
        { q: "En Belice, Moberg encontró facciones en Charleston y no en Mt. Hope porque…", o: ["Mt. Hope era más pobre", "la prosperidad citrícola de Mt. Hope la hacía menos dependiente del favor estatal", "Charleston no tenía partidos", "en Mt. Hope estaban prohibidas"], c: 1, e: "La dependencia económica del patronazgo favorece las facciones (pp. 305-306)." },
        { q: "El caso de Puerto Rico se cita para…", o: ["ilustrar un estado fallido", "repensar el concepto de estado ante la migración circular y el estatus cuasicolonial", "describir una jefatura", "explicar el modelo segmentario"], c: 1, e: "No es estado de EE. UU. ni unidad autónoma; casi tantos puertorriqueños viven fuera como dentro (p. 309)." },
        { q: "El vertido de cianuro del año 2000 en el Tisza se analiza en el capítulo como ejemplo de…", o: ["política ambiental en contextos postsocialistas", "intercambio equilibrado", "liderazgo de gran hombre", "jefatura hereditaria"], c: 0, e: "El gobierno húngaro tardó en reclamar responsabilidades por el desastre (p. 303)." }
      ]
    },
    {
      n: 11,
      titulo: "Control social y conflicto social",
      paginas: "319-346",
      preguntas: [
        "¿Cómo mantienen el control social las diferentes culturas?",
        "¿Cuáles son las pautas transculturales de la violencia y el conflicto social?",
        "¿Cómo pueden contribuir la cultura y la antropología al orden y la paz?"
      ],
      glosario: [
        { t: "Antropología legal", d: "Estudio transcultural del orden y el conflicto social. La primera fue funcionalista; la crítica examina cómo la ley sirve a los intereses del poder.", p: "320-321" },
        { t: "Control social", d: "Proceso por el que las personas mantienen el orden en la vida en grupo: normas, socialización y formas de tratar a quien las incumple.", p: "321-322" },
        { t: "Norma / ley", d: "La norma es un principio de conducta, generalmente no escrito, presente en toda cultura; la ley es una norma obligatoria con sanciones formales, propia de sociedades amplias.", p: "322-324" },
        { t: "Bandidaje", d: "Robo socialmente pautado, practicado a menudo por personas marginales, que puede ligarse a identidad, estatus y alianzas.", p: "329-332" },
        { t: "Venganza", d: "Agresión intergrupal en respuesta a un daño previo, capaz de prolongarse durante décadas.", p: "332" },
        { t: "Conflicto étnico", d: "Violencia entre grupos que se identifican étnicamente; con frecuencia encubre disputas por tierra, agua u otros recursos.", p: "334-335" },
        { t: "Revolución", d: "Acción ilegal y generalmente violenta de un grupo subordinado para alterar el statu quo; muchas tuvieron base rural.", p: "334-336" },
        { t: "Genocidio / etnocidio", d: "Eliminación física de un grupo, o destrucción de su cultura, por parte de un grupo dominante.", p: "334" },
        { t: "Terapia narrativa", d: "Tratamiento que pide a supervivientes de violencia relatar en un entorno seguro lo vivido; su eficacia depende del contexto cultural.", p: "336-337" }
      ],
      recorrido: {
        intro: "Cómo se ordena la vida social y cómo se rompe: de las disputas vecinales y el robo de ovejas a los conflictos étnicos, la guerra y la reconstrucción.",
        casos: ["c11-gwembe", "c11-houston", "c11-mantes", "c11-creta", "c11-maori", "c11-asia-central", "c11-yanomami", "c11-bosnia", "c11-costa-rica", "c11-berkeley"]
      },
      test: [
        { q: "La antropología legal crítica se pregunta sobre todo…", o: ["cómo la ley promueve la cohesión social", "cómo la ley y la justicia sirven a los intereses del poder", "cómo codificar normas tribales", "cuántos jueces hay por habitante"], c: 1, e: "Desplaza el foco funcionalista hacia la desigualdad (p. 321)." },
        { q: "En Creta, según Herzfeld, el robo de ovejas…", o: ["es solo un delito económico", "forma parte de la construcción de la masculinidad y de las alianzas entre hombres", "está controlado por la Iglesia", "lo practican sobre todo las mujeres"], c: 1, e: "El primer robo marca la entrada en la hombría y genera ciclos de reciprocidad y mediación (p. 332)." },
        { q: "Según el manual, muchos conflictos «étnicos» de Asia Central…", o: ["tienen únicamente causas religiosas", "encubren competencia por recursos de base regional", "son conflictos entre estados", "carecen de causas materiales"], c: 1, e: "Uzbekistán concentra ciudades y regadío; otros territorios, el agua (pp. 334-335)." },
        { q: "El Tribunal de Waitangi atiende…", o: ["delitos comunes", "reclamaciones maoríes por actos contrarios al Tratado de 1840", "conflictos laborales", "disputas entre estados"], c: 1, e: "Creado en 1975, tiene una composición paritaria maorí y pakeha (pp. 330-331)." },
        { q: "El recuadro sobre los yanomami invita a…", o: ["aceptar sin crítica la imagen de «pueblo feroz»", "examinar cómo una etnografía construye la imagen de un pueblo y sus efectos", "eliminar la investigación de campo", "estudiar solo la guerra"], c: 1, e: "Es un ejercicio de pensamiento crítico sobre la representación (pp. 338-339)." }
      ]
    }
  ],

  casos: [
    /* ------------------------- CAPÍTULO 8 ------------------------- */
    {
      id: "c8-tory", cap: 8, nombre: "Amigo y pariente", lugar: "Isla de Tory (Irlanda)", lat: 55.27, lon: -8.23,
      conceptos: ["Terminología de parentesco"],
      sintesis: "Robin Fox comparó el vocabulario de parentesco de la isla con el inglés: hay paralelismos, como muintir (gente, los míos) o gaolta (parientes, amabilidad), pero la palabra para «amigo» es la misma que para «pariente». En una población tan pequeña, casi todos lo son.",
      estudio: { quien: "Robin Fox", anio: "1995 [1978]" }, p: "230",
      pensar: "¿Qué palabras de parentesco usas para personas que no son familia?"
    },
    {
      id: "c8-ha-tsuen", cap: 8, nombre: "¿Qué hay en un nombre?", lugar: "Ha Tsuen, Nuevos Territorios (Hong Kong)", lat: 22.44, lon: 113.99,
      conceptos: ["Patrilinaje", "Residencia patrilocal", "Género"],
      sintesis: "Todos los varones del pueblo pertenecen al patrilinaje Teng, fundado en el siglo XII. Las hijas se casan fuera y no poseen propiedades. El sistema de nombres lo expresa: los varones acumulan nombres a lo largo de la vida, con ceremonias y banquetes, mientras que las mujeres reciben muchos menos.",
      estudio: { quien: "Rubie Watson", anio: "1986" }, p: "236-237",
      pensar: "¿Qué dice tu nombre de tu familia y de tu posición en ella?"
    },
    {
      id: "c8-minangkabau", cap: 8, nombre: "Los minangkabau", lugar: "Sumatra Occidental (Indonesia)", lat: -0.3, lon: 100.37,
      conceptos: ["Matrilinealidad", "Género y poder"],
      sintesis: "La mayor cultura matrilineal del mundo, con 4 o 5 millones de personas. La tierra y la casa del linaje pasan de madres a hijas, la mujer de más edad decide en lo legal y lo ceremonial, y el varón mayor solo representa al sublinaje ante otros grupos.",
      estudio: { quien: "Peggy Reeves Sanday; Culturama", anio: "2002" }, p: "240-241",
      pensar: "¿Es lo mismo matrilinealidad que matriarcado?"
    },
    {
      id: "c8-accra", cap: 8, nombre: "Niños en acogida", lugar: "Accra (Ghana)", lat: 5.6, lon: -0.19,
      conceptos: ["Parentesco basado en compartir", "Acogida"],
      sintesis: "En el África subsahariana es común enviar a los hijos a otros hogares para que estudien o aprendan un oficio, normalmente del campo a la ciudad y de casas pobres a más ricas. El trabajo de campo de Sanjek en un barrio de Accra documenta la vida de estos niños.",
      estudio: { quien: "Roger Sanjek", anio: "1990" }, p: "235",
      pensar: "¿Qué formas de crianza compartida existen en tu entorno?",
      critica: "El manual remite aquí al Mapa 8.4 (minangkabau); el de Ghana es el 8.3."
    },
    {
      id: "c8-chennai", cap: 8, nombre: "Primos cruzados", lugar: "Chennai / Madrás (India)", lat: 13.08, lon: 80.27,
      conceptos: ["Matrimonio preferente", "Primos cruzados"],
      sintesis: "Los hindúes del sur de la India prefieren el matrimonio con el primo cruzado de la línea materna, aunque en Chennai solo una cuarta parte de los matrimonios se ajusta a ese ideal. Un estudio de miles de uniones halló una diferencia pequeña en problemas congénitos respecto a culturas sin esa práctica.",
      estudio: { quien: "Armes, Srikumari y Sukumar; Sundar Rao", anio: "1989; 1983" }, p: "242-243",
      pensar: "¿Qué reglas, explícitas o no, limitan la elección de pareja en tu cultura?"
    },
    {
      id: "c8-kentucky", cap: 8, nombre: "Aislamiento y maltrato", lugar: "Este rural de Kentucky (EE. UU.)", lat: 37.5, lon: -83.0, aprox: true,
      conceptos: ["Dinámica intradoméstica", "Antropología aplicada"],
      sintesis: "Entrevistas con 50 mujeres maltratadas, policías y trabajadores sociales revelaron tres formas de aislamiento que dificultan la prevención; la primera, la física: casas a millas del asfalto, sin transporte público y a menudo sin teléfono, que los agresores aprovechan.",
      estudio: { quien: "Neil Websdale", anio: "1995" }, p: "252-253",
      pensar: "¿Qué recursos de prevención funcionan en el medio rural de tu región?"
    },
    {
      id: "c8-kelabit", cap: 8, nombre: "Del longhouse a la casa familiar", lugar: "Tierras altas kelabit, Sarawak (Malasia)", lat: 3.75, lon: 115.48,
      conceptos: ["Cambio doméstico", "Globalización"],
      sintesis: "Las grandes casas largas de veinte familias dan paso a casas largas más pequeñas y, desde los años noventa, a viviendas unifamiliares. El caso ilustra la tendencia hacia hogares nucleares asociada a la industrialización.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "256-257",
      pensar: "¿Cómo ha cambiado la vivienda de tu familia en tres generaciones?"
    },
    {
      id: "c8-nadia", cap: 8, nombre: "El caso Nadia", lugar: "Noruega y Marruecos", lat: 59.91, lon: 10.75,
      conceptos: ["Migración", "Conflicto intergeneracional"],
      sintesis: "En 1997, unos padres llevaron a Marruecos y retuvieron a su hija de 18 años, ciudadana noruega, para concertar su matrimonio. El conflicto enfrentaba el control familiar con la autonomía personal. Los tribunales noruegos no encarcelaron a los padres, y Nadia sufrió el estigma de su comunidad.",
      estudio: { quien: "Ejemplo del manual", anio: "1997" }, p: "256-257",
      pensar: "¿Cómo equilibrar los derechos individuales y el respeto a la diversidad cultural?"
    },

    /* ------------------------- CAPÍTULO 9 ------------------------- */
    {
      id: "c9-guyana", cap: 9, nombre: "Amigos en el bar de ron", lugar: "Guyana", lat: 6.8, lon: -58.15, aprox: true,
      conceptos: ["Amistad", "Igualdad"],
      sintesis: "Hombres indoguyaneses que se conocen desde la infancia se reúnen a diario en el rumshop a comer, beber y narrar. El «turno de palabra» asegura que todos cuenten, representa su igualdad y sostiene una red de ayuda económica, política y ritual.",
      estudio: { quien: "Sydney", anio: "2000" }, p: "265",
      pensar: "¿Qué rituales mantienen la igualdad en tu grupo de amigos?"
    },
    {
      id: "c9-jamaica", cap: 9, nombre: "El móvil como red", lugar: "Kingston y Jamaica rural", lat: 17.99, lon: -76.79,
      conceptos: ["Amistad", "Tecnología"],
      sintesis: "Los jamaicanos de bajos ingresos cuidan su lista de contactos y la frecuencia de las llamadas: amigos, posibles parejas, gente de la iglesia y parientes. El teléfono amplía la red de personas a las que recurrir en caso de necesidad.",
      estudio: { quien: "Heather Horst y Daniel Miller", anio: "2005" }, p: "265",
      pensar: "¿Para qué usas tú tu lista de contactos más allá de comunicarte?"
    },
    {
      id: "c9-flats", cap: 9, nombre: "Redes de supervivencia", lugar: "«The Flats», Medio Oeste (EE. UU.)", lat: 40.1, lon: -88.2, aprox: true,
      conceptos: ["Amistad", "Intercambio", "Pobreza"],
      sintesis: "Carol Stack mostró que, en un barrio afroamericano pobre, sobre todo las mujeres intercambian alimentos, ropa, cuidado de niños y dinero con amigas a las que llaman con términos de parentesco. Frente a las teorías de la desintegración social, la pobreza genera estrategias y lazos.",
      estudio: { quien: "Carol Stack", anio: "1974" }, p: "265-266",
      pensar: "¿Qué redes informales sostienen a las familias en dificultades en tu entorno?",
      critica: "«The Flats» es un seudónimo; la ubicación del atlas es aproximada."
    },
    {
      id: "c9-honiara", cap: 9, nombre: "Masta Liu", lugar: "Honiara (Islas Salomón)", lat: -9.43, lon: 159.95,
      conceptos: ["Banda juvenil", "Migración"],
      sintesis: "Jóvenes en paro que han dejado el campo para huir del trabajo bajo el control de los mayores. Sin líder ni iniciación, vagan por la ciudad en grupos de hasta diez, mirando tiendas y carteles de cine que no pueden pagar.",
      estudio: { quien: "Christine Jourdan", anio: "1995" }, p: "267-268",
      pensar: "¿Por qué los adultos ven a menudo a los grupos juveniles como un problema?"
    },
    {
      id: "c9-maharashtra", cap: 9, nombre: "Cooperativas azucareras", lugar: "Maharashtra (India)", lat: 18.5, lon: 74.5, aprox: true,
      conceptos: ["Cooperativa", "Agencia"],
      sintesis: "Pequeños campesinos con una o dos hectáreas poseen y gestionan una industria azucarera casi tan grande como la siderurgia estatal. Como la maquinaria solo es rentable a plena capacidad, la cooperativa depende de que los pequeños productores estén satisfechos, lo que limita el poder de los grandes.",
      estudio: { quien: "Donald Attwood", anio: "1992" }, p: "270-271",
      pensar: "¿Qué condiciones hacen que una cooperativa reparta de verdad el poder?"
    },
    {
      id: "c9-kuna", cap: 9, nombre: "Molas kuna", lugar: "Islas de San Blas / Guna Yala (Panamá)", lat: 9.55, lon: -78.85,
      conceptos: ["Cooperativa", "Arte y mercado", "Género"],
      sintesis: "Las mujeres kuna tejen molas para su propio vestido y, desde los años sesenta, para turistas y el mercado mundial. Su venta es hoy parte importante del ingreso familiar y las cooperativas les han dado posición económica y experiencia de liderazgo.",
      estudio: { quien: "Karin Tice", anio: "1995" }, p: "270-271",
      pensar: "¿Qué cambia en un objeto cuando pasa del uso propio al mercado turístico?",
      actualizacion: { texto: "La comarca se denomina oficialmente Guna Yala desde comienzos de la década de 2010, y el etnónimo «guna» se usa hoy en la documentación oficial panameña.", fuentes: [] }
    },
    {
      id: "c9-bangladesh", cap: 9, nombre: "Microcréditos", lugar: "Bangladesh", lat: 23.8, lon: 90.4,
      conceptos: ["Grupos sociales", "Sociedad civil"],
      sintesis: "En un país donde los grupos sociales más allá del parentesco eran raros, el Grameen Bank alcanzó fama internacional organizando grupos locales de microcrédito para que personas pobres iniciaran pequeños negocios.",
      estudio: { quien: "Miller y Khan", anio: "1986" }, p: "263",
      pensar: "¿Qué ventajas y riesgos tiene endeudar a los pobres para combatir la pobreza?",
      actualizacion: { texto: "El Grameen Bank y su fundador, Muhammad Yunus, recibieron el Premio Nobel de la Paz en 2006. El balance del microcrédito es hoy objeto de un amplio debate académico.", fuentes: [] }
    },
    {
      id: "c9-haiti", cap: 9, nombre: "Color y estatus", lugar: "Haití", lat: 18.54, lon: -72.34,
      conceptos: ["«Raza»", "Estratificación"],
      sintesis: "Las categorías raciales haitianas combinan textura y tono de la piel, cabello y rasgos faciales con ingresos, origen social, educación, carácter y parentesco. Dos personas con la misma apariencia pueden recibir un «color» distinto según su riqueza.",
      estudio: { quien: "Michel-Rolph Trouillot", anio: "1994" }, p: "276",
      pensar: "¿Qué rasgos no físicos influyen en cómo se clasifica a las personas en tu sociedad?"
    },
    {
      id: "c9-sudafrica", cap: 9, nombre: "Apartheid y movilización", lugar: "Soweto, Johannesburgo (Sudáfrica)", lat: -26.27, lon: 27.86,
      conceptos: ["Apartheid", "Sociedad civil"],
      sintesis: "La dominación blanca, iniciada con la colonización del siglo XIX, culminó en la segregación legal del apartheid sobre una mayoría negra. Su memoria alimenta hoy movimientos como la Treatment Action Campaign, que desde 2003 exige un plan público contra el VIH/sida con la imagen de Hector Pieterson.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "276-277",
      pensar: "¿Debe el Estado asumir la prevención y el tratamiento de una epidemia?",
      critica: "El manual escribe «Hector Peterson»; el nombre habitual es Hector Pieterson, muerto en Soweto en 1976."
    },
    {
      id: "c9-india", cap: 9, nombre: "Castas y dalits", lugar: "India", lat: 24.5, lon: 80.5, aprox: true,
      conceptos: ["Sistema de castas", "Dalit", "Adscripción"],
      sintesis: "Estratificación basada en el grupo de nacimiento y legitimada por antiguas escrituras hindúes. La Constitución india prohíbe la discriminación por casta, pero persiste. Los grupos situados en la base prefieren llamarse dalit, «oprimidos».",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "280-282",
      pensar: "¿Qué jerarquías de nacimiento sobreviven en sociedades que se dicen igualitarias?"
    },
    {
      id: "c9-roma", cap: 9, nombre: "Los roma", lugar: "Svinia (Eslovaquia)", lat: 49.03, lon: 21.13,
      conceptos: ["Diáspora", "Discriminación étnica"],
      sintesis: "La mayor minoría de Europa, con entre 7 y 9 millones de personas, procede de migraciones desde el norte de la India entre los siglos IX y XIV. En Svinia, unos 700 roma se apiñan en una hectárea pantanosa mientras 670 eslovacos poseen unas 1.400.",
      estudio: { quien: "David Scheffel; Culturama", anio: "2004" }, p: "278-280",
      pensar: "¿Cómo se ha tratado históricamente al pueblo gitano en España?",
      critica: "El manual usa «roma» y explica que «gitanos» se considera peyorativo en su contexto; en España, «gitano» es la autodenominación habitual del pueblo gitano y la usan sus propias organizaciones."
    },
    {
      id: "c9-vancouver", cap: 9, nombre: "Indocanadienses", lugar: "Vancouver (Canadá)", lat: 49.25, lon: -123.1,
      conceptos: ["Diáspora", "Discriminación"],
      sintesis: "En una muestra de unos 300 indocanadienses, la mitad declaró discriminación reciente, más los hombres (54 %) que las mujeres (45 %), sobre todo maltrato verbal. Los sijs nacidos en la India percibían más discriminación.",
      estudio: { quien: "Nodwell y Guppy", anio: "1992" }, p: "280",
      pensar: "¿Por qué la discriminación percibida puede diferir de la experimentada?"
    },

    /* ------------------------- CAPÍTULO 10 ------------------------- */
    {
      id: "c10-kayapo", cap: 10, nombre: "Los kayapó", lugar: "Xingu, Mato Grosso y Pará (Brasil)", lat: -7.5, lon: -52.0, aprox: true,
      conceptos: ["Tribu", "Movilización indígena"],
      sintesis: "Unas 7.000 personas en aldeas autónomas, cada una con su jefe. Han unido fuerzas y aplicado sus habilidades políticas tradicionales para enfrentarse a la tala, la minería y los proyectos hidroeléctricos.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "296-297",
      pensar: "¿Qué ocurre cuando una organización tribal negocia con un estado y con empresas globales?"
    },
    {
      id: "c10-melanesia", cap: 10, nombre: "Grandes hombres", lugar: "Melanesia", lat: -8.0, lon: 152.0, aprox: true,
      conceptos: ["Gran hombre", "Redistribución"],
      sintesis: "Sahlins describió un liderazgo personal que se gana con redistribución y grandes fiestas y que se extiende a varias aldeas. El gran hombre es más rico, pero debe ser generoso; regula plantaciones, fiestas, comercio y guerra.",
      estudio: { quien: "Marshall Sahlins", anio: "1963" }, p: "297-299",
      pensar: "¿Reconoces liderazgos de tipo «gran hombre» en la política o en la empresa de tu entorno?"
    },
    {
      id: "c10-nez-perce", cap: 10, nombre: "El jefe Joseph", lugar: "Valle de Wallowa, Oregón (EE. UU.)", lat: 45.4, lon: -117.2,
      conceptos: ["Jefatura", "Colonialismo"],
      sintesis: "Hin-mah-too-yah-lat-kekt, nacido en 1840, heredó la jefatura nez perce cuando el gobierno, tras hallar oro, recortó la reserva que su padre había pactado. Las jefaturas combinan criterios de nacimiento y de logro personal.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "300",
      pensar: "¿Qué pesa más en la elección de líderes en tu sociedad: el origen o el mérito?"
    },
    {
      id: "c10-belice", cap: 10, nombre: "Facciones en Belice", lugar: "Sur de Belice", lat: 16.6, lon: -88.5, aprox: true,
      conceptos: ["Facción", "Patronazgo"],
      sintesis: "Mt. Hope, próspera gracias a los cítricos y a la tierra del gobierno, no tiene facciones; Charleston, de pescadores dependientes del favor estatal, se divide en facciones que compiten por ayudas de los partidos nacionales.",
      estudio: { quien: "Mark Moberg", anio: "1991" }, p: "305-306",
      pensar: "¿Qué condiciones económicas favorecen el clientelismo?"
    },
    {
      id: "c10-yonne", cap: 10, nombre: "Política local en Francia", lugar: "Yonne, Borgoña (Francia)", lat: 47.8, lon: 3.57,
      conceptos: ["Estado", "Liderazgo local"],
      sintesis: "Marc Abélès entrevistó a políticos, asistió a plenos y siguió elecciones para entender cómo se llega a alcalde o concejal: los lazos y la reputación familiar pesan en el acceso a los cargos de las comunas rurales.",
      estudio: { quien: "Marc Abélès", anio: "1991" }, p: "306-307",
      pensar: "¿Influye el apellido en la política municipal de tu localidad?"
    },
    {
      id: "c10-tisza", cap: 10, nombre: "Cianuro en el Tisza", lugar: "Río Tisza (Hungría)", lat: 47.17, lon: 20.18,
      conceptos: ["Estado", "Política ambiental"],
      sintesis: "En enero de 2000 se rompió en Rumanía una balsa de residuos de una mina de oro. El cianuro y los metales pesados mataron miles de toneladas de peces en el Tisza húngaro. El gobierno tardó en exigir responsabilidades y el activismo ambiental se convirtió en tema político.",
      estudio: { quien: "Krista Harper", anio: "2005" }, p: "303",
      pensar: "¿Quién responde de un daño ambiental que cruza fronteras?"
    },
    {
      id: "c10-kurdos", cap: 10, nombre: "Los kurdos", lugar: "Kurdistán (Turquía, Irán, Irak, Siria)", lat: 37.5, lon: 43.5,
      conceptos: ["Política etnonacional", "Estado"],
      sintesis: "Entre 20 y 30 millones de personas, mayoritariamente suníes y de parentesco patrilineal. Las fronteras trazadas tras la Primera Guerra Mundial cortaron sus rutas de pastoreo. Aspiran desde hace décadas a un estado propio y han sufrido una dura represión.",
      estudio: { quien: "Culturama", anio: "" }, p: "310-311",
      pensar: "¿Debe toda nación tener un estado?",
      critica: "El pie del Mapa 10.6 afirma que la mitad de los kurdos vive en Armenia; el propio Culturama indica que la mitad vive en Turquía. Es un error del pie de mapa.",
      actualizacion: { texto: "La Constitución iraquí de 2005 reconoce la Región del Kurdistán como entidad federal con gobierno propio. Situación política perecedera.", fuentes: [] }
    },
    {
      id: "c10-puerto-rico", cap: 10, nombre: "Una nación en vaivén", lugar: "Puerto Rico", lat: 18.22, lon: -66.5,
      conceptos: ["Estado", "Migración circular"],
      sintesis: "Ni estado de EE. UU. ni unidad soberana: a finales de los noventa casi tantos puertorriqueños vivían fuera como en la isla, y llegaban también dominicanos y cubanos. Su caso obliga a repensar el estado y la nación.",
      estudio: { quien: "Jorge Duany", anio: "2000" }, p: "309, 313",
      pensar: "¿Puede existir una nación sin territorio compartido?"
    },

    /* ------------------------- CAPÍTULO 11 ------------------------- */
    {
      id: "c11-gwembe", cap: 11, nombre: "Diarios de disputas", lugar: "Valle de Gwembe (Zambia)", lat: -17.0, lon: 27.6,
      conceptos: ["Conflicto interpersonal", "Métodos longitudinales"],
      sintesis: "Desde los años setenta, vecinos del valle llevan diarios con datos económicos y demográficos y con las disputas locales. Las disputas aumentan, por el acceso a la cerveza y las armas o por mayor disposición a airearlas, pero sus temas se mantienen: ganado, tierra, herencia, matrimonio, brujería.",
      estudio: { quien: "Elizabeth Colson", anio: "1995" }, p: "328-329",
      pensar: "¿Qué ventajas tienen los datos registrados por la propia comunidad?",
      critica: "El manual remite al Mapa 11.2, que corresponde a los maoríes; el de Zambia es el 11.1."
    },
    {
      id: "c11-houston", cap: 11, nombre: "Perros y vecinos", lugar: "Houston, Texas (EE. UU.)", lat: 29.76, lon: -95.37,
      conceptos: ["Conflicto vecinal", "Control social"],
      sintesis: "En los barrios residenciales estadounidenses, los perros son la principal fuente de conflicto vecinal: ladridos, mordiscos, basura. Unos lo resuelven cara a cara; otros acuden a la administración, que debe documentar que el ruido es «excesivo».",
      estudio: { quien: "Constance Perin", anio: "1988" }, p: "328",
      pensar: "¿Cómo se resuelven los conflictos vecinales en tu comunidad?"
    },
    {
      id: "c11-mantes", cap: 11, nombre: "El velo en la escuela", lugar: "Mantes-la-Jolie (Francia)", lat: 48.99, lon: 1.72,
      conceptos: ["Control social", "Laicidad", "Conflicto"],
      sintesis: "En 1994 se prohibió asistir a clase con la cabeza cubierta a estudiantes musulmanas, lo que abrió décadas de protestas y disputas sobre laicidad, identidad e integración.",
      estudio: { quien: "Ejemplo del manual (fotografía)", anio: "1994" }, p: "328",
      pensar: "¿Dónde termina la neutralidad del Estado y empieza la restricción de derechos?",
      actualizacion: { texto: "La Ley francesa de 15 de marzo de 2004 prohíbe los signos religiosos ostensibles en las escuelas públicas.", fuentes: [] }
    },
    {
      id: "c11-creta", cap: 11, nombre: "Robar ovejas para ser hombre", lugar: "Montes de Creta (Grecia)", lat: 35.24, lon: 24.8, aprox: true,
      conceptos: ["Bandidaje", "Masculinidad", "Mediación"],
      sintesis: "Entre pastores cretenses, el primer robo de ovejas marca la entrada en la hombría y no participar es afeminado. Cada robo exige otro de revancha, hasta que un mediador reconcilia a los enemigos, que pueden acabar siendo aliados.",
      estudio: { quien: "Michael Herzfeld", anio: "1985" }, p: "329, 332",
      pensar: "¿Podría una mujer investigar este tema en Creta? ¿Qué vería distinto?"
    },
    {
      id: "c11-maori", cap: 11, nombre: "Los maoríes y Waitangi", lugar: "Waitangi (Nueva Zelanda / Aotearoa)", lat: -35.27, lon: 174.08,
      conceptos: ["Antropología legal", "Derechos indígenas"],
      sintesis: "El Tratado de Waitangi (1840) garantizaba a los maoríes sus tierras, bosques y pesquerías. Ante sus incumplimientos se creó en 1975 un tribunal paritario que examina reclamaciones de descendientes maoríes. Persisten las desigualdades en ingresos, salud y encarcelamiento.",
      estudio: { quien: "Solomon y Watson; Culturama", anio: "2001" }, p: "330-331",
      pensar: "¿Pueden los tribunales reparar injusticias históricas?",
      critica: "El manual escribe «paheka»; la forma correcta es pākehā."
    },
    {
      id: "c11-asia-central", cap: 11, nombre: "¿Conflicto étnico o por recursos?", lugar: "Valle de Fergana (Asia Central)", lat: 40.6, lon: 71.6,
      conceptos: ["Conflicto étnico", "Recursos"],
      sintesis: "Rusos y kazajos, uzbekos y tayikos, kirguises y uzbekos: las disputas parecen étnicas, pero detrás hay competencia regional por tierra, agua y empleos. Uzbekistán concentra ciudades y regadío; sus vecinos controlan el agua.",
      estudio: { quien: "Jason Clay", anio: "1990" }, p: "334-335",
      pensar: "¿Qué conflicto actual se explica como «étnico» y oculta una disputa material?"
    },
    {
      id: "c11-yanomami", cap: 11, nombre: "¿El pueblo feroz?", lugar: "Amazonía (Venezuela y Brasil)", lat: 3.4, lon: -64.6,
      conceptos: ["Representación etnográfica", "Violencia"],
      sintesis: "Chagnon describió a los yanomami como extremadamente violentos, con un tercio de los varones muertos de forma violenta y un «complejo waiteri» de ferocidad. El recuadro invita a examinar cómo una etnografía construye la imagen de un pueblo.",
      estudio: { quien: "Napoleon Chagnon", anio: "1992 [1968]" }, p: "338-339",
      pensar: "¿Qué efectos puede tener sobre un pueblo la etiqueta de «feroz»?",
      critica: "La obra de Chagnon recibió críticas por sus datos y por su impacto en la imagen pública yanomami; la polémica se intensificó tras la publicación de «Darkness in El Dorado» (Tierney, 2000) y motivó una investigación de la American Anthropological Association."
    },
    {
      id: "c11-bosnia", cap: 11, nombre: "Relatar los problemas", lugar: "Bosnia y Herzegovina", lat: 43.85, lon: 18.41,
      conceptos: ["Terapia narrativa", "Violencia política"],
      sintesis: "Un estudio con 20 refugiados bosnios en Estados Unidos mostró efectos positivos de relatar el terror vivido en un entorno seguro. Pero la terapia narrativa no funciona igual en todas las culturas: hay personas muy reticentes a hablar de su experiencia.",
      estudio: { quien: "Weine et al.", anio: "1995" }, p: "336-337",
      pensar: "¿Es tu cultura adecuada para la terapia narrativa?"
    },
    {
      id: "c11-costa-rica", cap: 11, nombre: "Un país sin ejército", lugar: "Costa Rica", lat: 9.93, lon: -84.08,
      conceptos: ["Militarización", "Paz"],
      sintesis: "Frente a estados muy militarizados, como Turquía, Costa Rica no mantiene ejército. El contraste muestra que la militarización no es una constante de todos los estados.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "337",
      pensar: "¿Qué condiciones han hecho posible que un estado renuncie al ejército?",
      actualizacion: { texto: "Costa Rica abolió su ejército en 1948 y la Constitución de 1949 lo prohíbe como institución permanente.", fuentes: [] }
    },
    {
      id: "c11-berkeley", cap: 11, nombre: "Armonía por coacción", lugar: "Berkeley, California (EE. UU.)", lat: 37.87, lon: -122.26,
      conceptos: ["Antropología legal crítica", "Disenso"],
      sintesis: "Laura Nader, tras estudiar conflictos en Latinoamérica y en La Haya, critica la presión estadounidense hacia el consenso y la amabilidad: la democracia, sostiene, depende del derecho a disentir e incluso a indignarse. Usa datos transculturales para criticar su propia cultura.",
      estudio: { quien: "Laura Nader", anio: "2001" }, p: "325",
      pensar: "¿Se valora el debate o el consenso en tus clases?"
    }
  ]
});
