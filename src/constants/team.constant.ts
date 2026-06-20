export interface Description {
  spanish: string;
  english: string;
  palenquero: string;
}

export interface TeamMember {
  name: string;
  role: string;
  smallDescription: string;
  description: Description;
  imageUrl: string;
  profileUrl: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Nino Mercado',
    role: 'CTO',
    smallDescription: '',
    description: {
      spanish: '',
      english: '',
      palenquero: ''
    },
    imageUrl: 'https://ui-avatars.com/api/?name=Nino+Mercado&background=random&size=200',
    profileUrl: '/nosotros/nino-mercado'
  },
  {
    name: 'Cristina Isabel',
    role: 'CEO',
    smallDescription: "Cristina Isabel de la Hoz Márquez es una mujer afrodescendiente palenquera apasionada por la educación, la cultura y las historias que fortalecen el amor propio desde la infancia.",
    description: {
      spanish: "Cristina Isabel de la Hoz Márquez es una mujer afrodescendiente palenquera apasionada por la educación, la cultura y las historias que fortalecen el amor propio desde la infancia. Inspirada en Lua y en la riqueza cultural de San Basilio de Palenque, creó este libro para que niñas y niños aprendan colores mientras celebran sus raíces, su imaginación y la belleza de la diversidad. A través de ilustraciones colorias, palabras y escenas llenas de vida caribeña, Cristina busca sembrar orgullo, alegría y representación en cada página. Porque cada color también cuenta una historia.",
      palenquero: "Cristina Isabel de la Hoz Márquez sendá ma changaina afrodesendente ku moná r Palenge ke a ngutá ri má makaneo ri erikasio, kuttura, asína memo chitia ma itoria ke ndá bilanté a ma kelé mbilá ri si ku uto rendé chirindindingo. Ele ten Lua kumo kulingo kusa ngánde pa kribí ku jundá ku ma kuttura ri Palenge, kreá ma yurumbí pa to ma moná etulé ma koló ku raí, ma imaginasio si y ma ribesirá emorsa ri tiela suto. Ku ma retrato ku koló ri má, parabra ku to pesé ri Karibe, Cristina tuntunía pa ndá jarocheria, lo ke represendá andi to ma patte ri yurumbí. Pokke to makoló sendá ung itoria.",
      english: "Cristina Isabel de la Hoz Márquez is an Afro-descendant Palenge Palenquera woman passionate about education, culture, and stories that nurture self-love from early childhood. Inspired by Lua and the cultural richness of San Basilio de Palenque, she created this book so that children can learn colors while celebrating their roots, imagination, and the beauty of diversity. Through colorful illustrations, words, and scenes full of Caribbean life, Cristina hopes to plant pride, joy, and representation on every page. Because every color also tells a story."
    },
    imageUrl: '/images/cristina-de-la-hoz.jpeg',
    profileUrl: '/suto/cristina-isabel'
  }
];
