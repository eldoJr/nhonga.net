export interface Event {
  id: string
  title: string
  image: string
  date: string
  time: string
  location: string
  category: string
  content: string[]
}

export const events: Event[] = [
  {
    id: 'neko-health-blood-test',
    title: 'Neko Health Turned a Dreaded Blood Test Into an Experience People Want to Repeat',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop',
    date: 'Friday, 11 July 2025',
    time: '09:00 – 17:00',
    location: 'Hospital Central de Maputo, Maputo',
    category: 'Academics',
    content: [
      'Neko Health has reimagined the annual blood test — turning a routine, often anxiety-inducing procedure into a calm, design-forward experience that patients actually look forward to.',
      'This event showcases their methodology and invites healthcare professionals, designers, and patients to discuss how human-centered design can transform medical experiences across Mozambique.',
      'Attendees will participate in live demonstrations, roundtable discussions, and a workshop on applying service design principles to public health settings.',
      'The day closes with a networking session connecting local clinics, NGOs, and health-tech startups looking to collaborate on patient experience initiatives.',
    ],
  },
  {
    id: 'maputo-creative-scene',
    title: "How Maputo's Creative Scene Is Redefining African Contemporary Art",
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&h=600&fit=crop',
    date: 'Saturday, 19 July 2025',
    time: '10:00 – 18:00',
    location: 'Centro Cultural Franco-Moçambicano, Maputo',
    category: 'Culture/Art',
    content: [
      "Maputo's art scene has quietly become one of the most exciting on the continent. Over the past decade, a new generation of Mozambican artists has emerged — blending traditional craft with contemporary expression, and drawing international attention to a city long overlooked by the global art world.",
      'This event brings together painters, sculptors, photographers, and digital artists from across Mozambique and the wider African diaspora. Expect live installations, panel discussions with curators, and an open market where you can purchase original works directly from the creators.',
      'The day will be divided into three sessions: a morning showcase of emerging talent, an afternoon panel on the economics of African art, and an evening networking reception open to collectors, gallery owners, and enthusiasts alike.',
      "Whether you're a seasoned collector or simply curious about what's happening in Mozambique's cultural landscape, this is an unmissable opportunity to engage with the artists shaping the next chapter of African contemporary art.",
    ],
  },
  {
    id: 'tech-conferences-back',
    title: 'Tech Conferences Are Back — And They Look Nothing Like Before',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
    date: 'Thursday, 24 July 2025',
    time: '08:30 – 19:00',
    location: 'Joaquim Chissano International Conference Centre, Maputo',
    category: 'Conferences',
    content: [
      "After years of virtual-only formats, in-person tech conferences have returned — and the format has been completely reinvented. Gone are the days of passive keynote-watching; today's events are built around collaboration, hands-on labs, and genuine community.",
      'This conference gathers engineers, product managers, founders, and investors from across Southern Africa to explore the latest in AI, fintech, and infrastructure development.',
      'Highlights include a startup pitch competition with a $10,000 prize, deep-dive workshops on cloud architecture, and a dedicated track for women in tech.',
      "Whether you're looking to hire, get hired, or simply stay ahead of the curve, this is the event that defines the regional tech calendar.",
    ],
  },
  {
    id: 'sports-youth-mozambique',
    title: 'Sports Events Driving Youth Engagement Across Mozambique',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=600&fit=crop',
    date: 'Sunday, 3 August 2025',
    time: '07:00 – 16:00',
    location: 'Estádio do Zimpeto, Maputo',
    category: 'Sports',
    content: [
      'Sport has long been one of the most powerful tools for youth development in Mozambique. This event celebrates that legacy while looking ahead to the next generation of athletes, coaches, and sports administrators.',
      'The day features youth football, athletics, and basketball tournaments alongside career workshops for aspiring sports professionals — from coaching certifications to sports journalism.',
      'Representatives from national federations, international NGOs, and private sponsors will be on hand to discuss funding opportunities and pathways into professional sport.',
      'The event is free and open to all, with a special focus on participants from underserved communities across Maputo province.',
    ],
  },
  {
    id: 'book-fairs-cultural-landmarks',
    title: 'Book Fairs Are Becoming Cultural Landmarks in Emerging Cities',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop',
    date: 'Saturday, 16 August 2025',
    time: '09:00 – 20:00',
    location: 'Praça da Independência, Maputo',
    category: 'Books',
    content: [
      "Book fairs have evolved far beyond simple sales events. In cities like Maputo, Nairobi, and Lagos, they have become annual cultural landmarks — drawing readers, writers, publishers, and thinkers from across the continent.",
      "This year's fair features over 80 publishers, 40 author talks, and a dedicated children's pavilion designed to foster a love of reading from an early age.",
      'Panel discussions will cover topics ranging from the future of African-language publishing to the rise of self-publishing platforms and digital distribution.',
      'The evening programme includes live poetry, music performances, and a literary awards ceremony celebrating the best Mozambican writing of the past year.',
    ],
  },
]
