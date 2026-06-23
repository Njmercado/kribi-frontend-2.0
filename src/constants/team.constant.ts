export interface Description {
  short: string,
  long: string
}

export interface TeamMember {
  name: string;
  lastname: string;
  role: string;
  description: Description;
  imageUrl: string;
  profileUrl: string;
  social?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    personalSite?: string;
    email?: string;
  },
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Cristina Isabel',
    lastname: 'de la Hoz Marquez',
    role: 'CEO',
    description: {
      short: "Magíster en Educación (Currículo y Evaluación) y Contadora Pública. Investigadora nativa con experiencia docente en bilingüismo en UNINORTE - UNIREFORMADA (2023- 2025), e internacional en Bucknell University (EE. UU.). Autora de A ten mbila (2017), el primer diccionario digital Palenquero-Español. Galardonada por el Ministerio de las Culturas y el Instituto Caro y Cuervo con la Beca de creación de obra inédita 2025, fue reconocida como joven escritora por la Presidencia de la República en Roma (2019). Fundadora de Kribí, transformando la investigación en herramientas digitales de aprendizaje.",
      long: `Cristina es Magíster en Educación con énfasis en Currículo y Evaluación (2022) y Contadora Pública (2018) de la Universidad del Norte. Su trayectoria docente incluye la educación superior en la Universidad del Norte, donde ha orientado las asignaturas de Competencias Comunicativas y apoyado procesos investigativos y comunitarios relacionados con las lenguas y comunidades afro y en la Corporación Universitaria Reformada, liderando procesos de enseñanza dentro de la Licenciatura en Bilingüismo. Asimismo, cuenta con trayectoria internacional como maestra de español en Bucknell University (Estados Unidos). Su línea de investigación se centra en el codiseño de rutas formativas vivas, currículos situados y la incorporación de artefactos tecnológicos como mediadores del aprendizaje de lenguas minorizadas.

### Producción Lingüística y Reconocimientos

Su compromiso longitudinal con la lengua palenquera inició formalmente en 2014 con una rigurosa investigación lexicográfica que culminó en 2017 con la publicación de A ten mbila [Tiene vida], el primer diccionario electrónico e interactivo palenquero-español. Posteriormente, publicó el libro de texto Chitieno Luenga Suto [Hablemos nuestra lengua].
Por estos valiosos aportes a la salvaguarda lingüística, recibió el reconocimiento oficial por su contribución excepcional a la lengua ri Palenge en 2019, 2020, 2021 y 2022. En 2025, consolidó su autoridad en la materia al ser galardonada con la prestigiosa Beca de creación de obra inédita de escritores de pueblos indígenas, afrocolombianos y Rrom, otorgada conjuntamente por el Instituto Caro y Cuervo y el Ministerio de las Culturas, las Artes y los Saberes.

### Proyección Internacional y Liderazgo Cultural

En 2019, fue seleccionada por la Presidencia de la República de Colombia como una de las jóvenes escritoras representantes del país, escenario donde publicó un capítulo en la obra antológica Sendero a Roma y participó en la Feria del Libro de Roma (Italia). Ha sido colaboradora activa en la revista internacional Zánganos (Chile) y se destaca por su liderazgo socio-pedagógico en territorio, habiendo ejercido como Coordinadora Pedagógica del Área de Educación en la Fundación María Catalina Luango y Gestora Territorial en la Corporación Visión de Paz. Recientemente, co-coordinó procesos de incidencia juvenil y ambiental con GYBN Colombia en el marco de la COP16.
Como gestora apasionada del patrimonio inmaterial, expande la oralitura y la memoria colectiva a través de los lenguajes audiovisuales. Es la creadora de la historia de Icha, un cortometraje grabado en la lengua materna que forma parte del Festival Internacional de Cine Evaristo Márquez, un espacio cultural de alto impacto regional nombrado en honor a su tío abuelo, el primer gran actor afrodescendiente del cine colombiano.

### Innovación Tecnológica con Propósito: Kribí

En 2019, Cristina transformó sus años de datos e investigación comunitaria en un ecosistema socio-técnico de acceso abierto: Kribí (www.kribi.com.co). Como CEO y fundadora, ha estructurado esta ventana virtual de San Basilio de Palenque no solo como un diccionario o repositorio digital, sino como una ludoteca interactiva que procesa contenidos lingüísticos mediante la gamificación. Kribí funciona hoy como una herramienta pedagógica traslacional indispensable que combate el desplazamiento de la lengua, permitiendo a docentes, familias y nuevas generaciones habitar, jugar y aprender el palenquero desde cualquier rincón del mundo.
`
    },
    imageUrl: '/images/cristina-de-la-hoz.jpg',
    profileUrl: '/suto/cristina-de-la-hoz',
    social: {
      instagram: 'https://www.instagram.com/crisdelahozmar',
    }
  },
  {
    name: 'Nino Jesus',
    lastname: 'Mercado Consuegra',
    role: 'CTO',
    description: {
      short: 'Ingeniero de Software e Inteligencia Artificial con más de 5 años de experiencia. Especializado en arquitectura de sistemas, MLOps y diseño interactivo mediante procesos AI DLC. Lidero el desarrollo de la plataforma Kribí, fusionando ingeniería y cultura para la preservación de lenguas nativas como el Palenquero.',
      long: `
Soy Ingeniero de Sistemas y Computación con enfoque en Ciencias de la Computación, egresado de la Universidad del Norte, y Especialista en Inteligencia Artificial. A lo largo de mi trayectoria de más de cinco años en el diseño de soluciones tecnológicas y desarrollo de software, me he dedicado a crear herramientas que tiendan puentes entre la innovación técnica y las necesidades sociales. Mi propósito central es poner la tecnología al servicio de la educación y el rescate del patrimonio inmaterial, liderando proyectos que permitan salvaguardar la riqueza lingüística y cultural de nuestras comunidades.

Como director técnico y desarrollador principal de la plataforma educativa Kribí, he asumido el liderazgo de todo su ciclo de vida institucional y digital. En este proyecto, enfocado principalmente en la preservación de la lengua de San Basilio de Palenque, he diseñado tanto la arquitectura del sistema como las interfaces digitales que permiten a usuarios de todo el mundo interactuar con este legado. Mi trabajo integra metodologías modernas de diseño asistido por inteligencia artificial para garantizar que el sistema educativo no solo sea accesible a escala global, sino que resulte intuitivo y respetuoso con la identidad cultural que representa.

Además de mi gestión en proyectos independientes de alto impacto social, cuento con una sólida experiencia en el sector corporativo internacional. Actualmente me desempeño como Ingeniero de Software dentro de una de las organizaciones de tecnología educativa más grandes e influyentes a nivel mundial. En este rol, me encargo de optimizar sistemas de gran escala, garantizar la estabilidad de plataformas utilizadas de forma masiva por millones de estudiantes y profesores, e implementar nuevas herramientas inteligentes aplicadas al aprendizaje digital.

Mi experiencia previa abarca la resolución de problemas complejos en la estructura y organización de bases de datos, la optimización de procesos informáticos y la migración delicada de registros en entornos corporativos exigentes. Asimismo, tengo un fuerte enfoque hacia la orquestación de sistemas autónomos y el procesamiento del lenguaje natural. Mi objetivo principal a corto y mediano plazo es consolidar el desarrollo de un traductor digital para lenguas nativas, permitiendo que comunidades históricas cuenten con herramientas tecnológicas avanzadas para la enseñanza, el mantenimiento y la difusión de su propia herencia cultural.
      `,
    },
    imageUrl: '/images/nino-mercado.jpg',
    profileUrl: '/nosotros/nino-mercado',
    social: {
      instagram: 'https://www.instagram.com/quillero_tech/',
      linkedin: 'https://www.linkedin.com/in/p64b/'
    }
  },
];
