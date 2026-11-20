export interface Job {
  id: string
  company: string
  color: string
  title: string
  description: string
  location: string
  type: string
  salary: string
  deadline: string
  category: string
  requirements: string[]
  responsibilities: string[]
}

export const jobs: Job[] = [
  {
    id: 'creative-director-golo',
    company: 'GOLO',
    color: '#E8553D',
    title: 'Creative Director',
    description: 'Hiring a Creative Director to shape stories, lead ideas, and drive consistent creativity.',
    location: 'Maputo, Mozambique',
    type: 'Full-time',
    salary: '80,000 – 120,000 MZN/mo',
    deadline: '15 Aug 2025',
    category: 'Creative',
    requirements: [
      '8+ years in creative leadership',
      'Strong portfolio across brand & digital',
      'Experience managing creative teams',
      'Proficiency in Adobe Creative Suite',
    ],
    responsibilities: [
      'Define and drive the creative vision',
      'Lead and mentor the creative team',
      'Collaborate with marketing and product',
      'Ensure brand consistency across all channels',
    ],
  },
  {
    id: 'developer-uxui-social-sherpa',
    company: 'Social Sherpa',
    color: '#2D5F4E',
    title: 'Developer with Ux/Ui Skills',
    description: 'We are seeking a highly skilled Full-Stack Developer with strong ux/ui design capabilities.',
    location: 'Remote',
    type: 'Full-time',
    salary: '60,000 – 90,000 MZN/mo',
    deadline: '20 Aug 2025',
    category: 'Technology',
    requirements: [
      '5+ years full-stack development',
      'Proficiency in React and Node.js',
      'Strong Figma / design system skills',
      'Experience with REST APIs',
    ],
    responsibilities: [
      'Build and maintain web applications',
      'Design intuitive user interfaces',
      'Collaborate with product and design teams',
      'Write clean, well-documented code',
    ],
  },
  {
    id: 'graphic-designer-markennzo',
    company: 'Markennzoworldwide',
    color: '#1A1A2E',
    title: 'Graphic Designer',
    description: 'We are seeking a highly creative and detail oriented Senior Graphic Designer & Video Editor.',
    location: 'Beira, Mozambique',
    type: 'Full-time',
    salary: '40,000 – 65,000 MZN/mo',
    deadline: '10 Sep 2025',
    category: 'Design',
    requirements: [
      '4+ years graphic design experience',
      'Expert in Adobe Illustrator & Photoshop',
      'Video editing skills (Premiere Pro)',
      'Strong typography and layout sense',
    ],
    responsibilities: [
      'Create visual assets for campaigns',
      'Edit and produce video content',
      'Maintain brand guidelines',
      'Present concepts to stakeholders',
    ],
  },
  {
    id: 'video-editor-drumstick',
    company: 'Drumstick Design',
    color: '#D94F4F',
    title: 'Video Editor Cum Motion Designer',
    description: 'Looking for a talented Video Editor with motion design skills for creative campaigns.',
    location: 'Maputo, Mozambique',
    type: 'Contract',
    salary: '50,000 – 75,000 MZN/mo',
    deadline: '5 Sep 2025',
    category: 'Creative',
    requirements: [
      '3+ years video editing experience',
      'Proficiency in After Effects & Premiere',
      'Motion graphics portfolio required',
      'Experience with social media formats',
    ],
    responsibilities: [
      'Edit video content for campaigns',
      'Create motion graphics and animations',
      'Collaborate with creative directors',
      'Deliver assets on tight deadlines',
    ],
  },
  {
    id: 'art-director-genpact',
    company: 'Genpact',
    color: '#0066CC',
    title: 'Art Director',
    description: 'We are looking for a highly skilled Art Director with 8-12 years of experience.',
    location: 'Nampula, Mozambique',
    type: 'Full-time',
    salary: '90,000 – 140,000 MZN/mo',
    deadline: '1 Sep 2025',
    category: 'Creative',
    requirements: [
      '8–12 years art direction experience',
      'Strong conceptual thinking',
      'Experience in advertising or agency',
      'Leadership and presentation skills',
    ],
    responsibilities: [
      'Lead visual direction for campaigns',
      'Oversee design and production teams',
      'Present creative concepts to clients',
      'Ensure quality across all deliverables',
    ],
  },
  {
    id: 'brand-designer-insenses',
    company: 'Insenses',
    color: '#E91E8C',
    title: 'Brand Designer',
    description: 'We are hiring a brand designer for social brand, and experimental touchpoint.',
    location: 'Remote',
    type: 'Part-time',
    salary: '35,000 – 55,000 MZN/mo',
    deadline: '25 Aug 2025',
    category: 'Design',
    requirements: [
      '3+ years brand design experience',
      'Strong identity and system design skills',
      'Experience with social media branding',
      'Figma proficiency required',
    ],
    responsibilities: [
      'Design brand identities and systems',
      'Create social media visual assets',
      'Develop experimental brand touchpoints',
      'Collaborate with marketing teams',
    ],
  },
]
