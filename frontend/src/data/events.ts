export interface Event {
  id: string
  title: string
  image: string
  date: string
  time: string
  location: string
  category: string
  author: string
  likes: number
}

export const events: Event[] = [
  {
    id: 'marrabenta-nova-ep',
    title: 'Marrabenta Nova — EP',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    date: 'Friday, 11 July 2025',
    time: '20:00 – 23:00',
    location: 'Teatro Avenida, Maputo',
    category: 'Music',
    author: 'Lizha Zitha',
    likes: 342,
  },
  {
    id: 'maputo-a-noite',
    title: 'Maputo à Noite (Short Film)',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop',
    date: 'Saturday, 19 July 2025',
    time: '18:00 – 21:00',
    location: 'Centro Cultural Franco-Moçambicano, Maputo',
    category: 'Films',
    author: 'Estúdio Kanimambo',
    likes: 215,
  },
  {
    id: 'contos-da-ilha',
    title: 'Contos da Ilha',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    date: 'Thursday, 24 July 2025',
    time: '10:00 – 18:00',
    location: 'Ilha de Moçambique',
    category: 'Books',
    author: 'Amélia Nhantumbo',
    likes: 188,
  },
  {
    id: 'capulanas-digitais',
    title: 'Capulanas Digitais',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop',
    date: 'Sunday, 3 August 2025',
    time: '09:00 – 17:00',
    location: 'Museu Nacional de Arte, Maputo',
    category: 'Art',
    author: 'Coletivo Xitende',
    likes: 467,
  },
  {
    id: 'sons-do-indico',
    title: 'Sons do Índico — Live Session',
    image: 'https://images.unsplash.com/photo-1501386761578-eaa54b915e8e?w=600&h=400&fit=crop',
    date: 'Saturday, 16 August 2025',
    time: '19:00 – 23:00',
    location: 'Clube Naval, Maputo',
    category: 'Music',
    author: 'DJ Satelite',
    likes: 290,
  },
  {
    id: 'mostra-independente',
    title: 'Mostra de Cinema Independente',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop',
    date: 'Friday, 22 August 2025',
    time: '17:00 – 22:00',
    location: 'Cinemateca de Moçambique, Maputo',
    category: 'Films',
    author: 'Associação Cine Moz',
    likes: 134,
  },
  {
    id: 'feira-do-livro',
    title: 'Feira do Livro de Maputo 2025',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop',
    date: 'Saturday, 30 August 2025',
    time: '09:00 – 20:00',
    location: 'Praça da Independência, Maputo',
    category: 'Books',
    author: 'INLD',
    likes: 521,
  },
  {
    id: 'exposicao-xipamanine',
    title: 'Exposição: Xipamanine em Cores',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop',
    date: 'Sunday, 7 September 2025',
    time: '10:00 – 18:00',
    location: 'Galeria Resistência, Maputo',
    category: 'Art',
    author: 'Nástio Mosquito',
    likes: 376,
  },
]
