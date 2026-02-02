import { ILink } from "../interfaces";

const LINKS_DATA: Record<string, ILink> = {
  'HOME': {
    name: 'Komensá',
    link: '/',
    translation: {
      es: {
        link: '/',
        name: 'Inicio'
      },
      en: {
        link: '/',
        name: 'Home'
      }
    }
  },
  'DICTIONARY': {
    name: 'Kajangarí',
    link: '/kajangari',
    translation: {
      es: {
        link: '/diccionario',
        name: 'Diccionario'
      },
      en: {
        link: '/dictionary',
        name: 'Dictionary'
      }
    }
  },
  'LIBRARY': {
    name: 'Yurumbí',
    link: '/yurumbi',
    translation: {
      es: {
        link: '/libreria',
        name: 'Libreria'
      },
      en: {
        link: '/library',
        name: 'Library'
      }
    }
  },
  'GAMES': {
    name: 'Arrelike',
    link: '/arrelike',
    translation: {
      es: {
        link: '/juegos',
        name: 'Juegos'
      },
      en: {
        link: '/games',
        name: 'Games'
      }
    }
  },
  'NEWS': {
    name: 'Chakero',
    link: '/chakero',
    translation: {
      es: {
        link: '/noticias',
        name: 'Noticias'
      },
      en: {
        link: '/news',
        name: 'News'
      }
    }
  },
  'ABOUT_US': {
    name: 'Suto',
    link: '/suto',
    translation: {
      es: {
        link: '/nosotros',
        name: 'Sobre nosotros'
      },
      en: {
        link: '/about',
        name: 'About us'
      }
    }
  }
}

export const LINKS_INDEX: Record<string, ILink> = {
  HOME: LINKS_DATA.HOME,
  INICIO: LINKS_DATA.HOME,
  KOMENSA: LINKS_DATA.HOME,
  KOMENSÁ: LINKS_DATA.HOME,
  DICTIONARY: LINKS_DATA.DICTIONARY,
  DICCIONARIO: LINKS_DATA.DICTIONARY,
  KAJANGARI: LINKS_DATA.DICTIONARY,
  KAJANGARÍ: LINKS_DATA.DICTIONARY,
  LIBRARY: LINKS_DATA.LIBRARY,
  LIBRERIA: LINKS_DATA.LIBRARY,
  YURUMBI: LINKS_DATA.LIBRARY,
  YURUMBÍ: LINKS_DATA.LIBRARY,
  GAMES: LINKS_DATA.GAMES,
  JUEGOS: LINKS_DATA.GAMES,
  ARRELIKE: LINKS_DATA.GAMES,
  ARRELÍKE: LINKS_DATA.GAMES,
  NEWS: LINKS_DATA.NEWS,
  NOTICIAS: LINKS_DATA.NEWS,
  CHAKERO: LINKS_DATA.NEWS,
  ABOUT: LINKS_DATA.ABOUT_US,
  NOSOTROS: LINKS_DATA.ABOUT_US,
  SUTO: LINKS_DATA.ABOUT_US,
}

export const LINKS: ILink[] = [
  {
    name: 'Komensá',
    link: '/',
    translation: {
      es: {
        link: '/',
        name: 'Inicio'
      },
      en: {
        link: '/',
        name: 'Home'
      }
    }
  },
  {
    name: 'Kajangarí',
    link: '/kajangari',
    translation: {
      es: {
        link: '/diccionario',
        name: 'Diccionario'
      },
      en: {
        link: '/dictionary',
        name: 'Dictionary'
      }
    }
  },
  {
    name: 'Yurumbí',
    link: '/yurumbi',
    translation: {
      es: {
        link: '/libreria',
        name: 'Libreria'
      },
      en: {
        link: '/library',
        name: 'Library'
      }
    }
  },
  {
    name: 'Arrelike',
    link: '/arrelike',
    translation: {
      es: {
        link: '/juegos',
        name: 'Juegos'
      },
      en: {
        link: '/games',
        name: 'Games'
      }
    }
  },
  {
    name: 'Chakero',
    link: '/chakero',
    translation: {
      es: {
        link: '/noticias',
        name: 'Noticias'
      },
      en: {
        link: '/news',
        name: 'News'
      }
    }
  },
  {
    name: 'Suto',
    link: '/suto',
    translation: {
      es: {
        link: '/nosotros',
        name: 'Sobre nosotros'
      },
      en: {
        link: '/about',
        name: 'About us'
      }
    }
  }
]
