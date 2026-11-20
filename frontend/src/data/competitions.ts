export interface Competition {
  id: string
  title: string
  organizer: string
  category: string
  prize: string
  deadline: string
  location: string
  description: string
  eligibility: string[]
  requirements: string[]
}

export const competitions: Competition[] = [
  {
    id: 'moz-tech-hackathon',
    title: 'Moz Tech Hackathon 2026',
    organizer: 'Banco Xiluva',
    category: 'Hackathon',
    prize: '150.000 MT',
    deadline: '30 Nov 2026',
    location: 'Maputo · On-site',
    description: 'A 48-hour hackathon bringing together developers, designers and entrepreneurs to build innovative fintech solutions for Mozambique. Teams of up to 4 people compete for prizes and mentorship opportunities.',
    eligibility: ['Open to all Mozambican residents', 'Teams of 2–4 members', 'At least one technical member per team', 'Age 18+'],
    requirements: ['Submit a project proposal', 'Present a working prototype', 'Pitch to a panel of judges', 'Source code must be original'],
  },
  {
    id: 'young-designers-award',
    title: 'Young Designers Award',
    organizer: 'Nhonga Academy',
    category: 'Design',
    prize: '50.000 MT',
    deadline: '12 Dec 2026',
    location: 'Online',
    description: 'An annual award celebrating emerging design talent across Mozambique. Submit your best work in graphic design, UI/UX, illustration or motion graphics and get recognised by industry leaders.',
    eligibility: ['Designers under 30 years old', 'Mozambican nationals or residents', 'Individual submissions only', 'Any design discipline'],
    requirements: ['Portfolio of 3–5 pieces', 'Brief description of each work', 'Original work only', 'High-resolution files required'],
  },
  {
    id: 'startup-pitch-challenge',
    title: 'Startup Pitch Challenge',
    organizer: 'Hub Kanimambo',
    category: 'Business',
    prize: '100.000 MT + mentoring',
    deadline: '5 Jan 2027',
    location: 'Maputo · On-site',
    description: "Pitch your startup idea to a panel of investors and entrepreneurs. The top 3 teams receive funding, mentorship and access to Hub Kanimambo's incubation programme for 6 months.",
    eligibility: ['Early-stage startups only', 'Registered in Mozambique', 'Team of 1–5 founders', 'Any industry'],
    requirements: ['5-minute pitch deck', 'Executive summary (1 page)', 'Financial projections', 'Demo or MVP preferred'],
  },
  {
    id: 'short-story-contest',
    title: 'Short Story Contest',
    organizer: 'Clube de Leitura Wiwanana',
    category: 'Writing',
    prize: '25.000 MT + publishing',
    deadline: '20 Dec 2026',
    location: 'Online',
    description: 'Submit an original short story in Portuguese or any Mozambican language. The winning story will be published in the Wiwanana annual anthology and the author will receive a cash prize.',
    eligibility: ['Open to all ages', 'Mozambican nationals or residents', 'Individual submissions only', 'Portuguese or local languages'],
    requirements: ['1.500–3.000 words', 'Original unpublished work', 'Submit as PDF or DOCX', 'One submission per author'],
  },
  {
    id: 'data-science-challenge',
    title: 'Data Science Challenge',
    organizer: 'Instituto Superior Txova',
    category: 'Technology',
    prize: '80.000 MT',
    deadline: '15 Jan 2027',
    location: 'Online',
    description: 'Solve a real-world data problem provided by Instituto Superior Txova. Participants will receive a dataset and must build a model or analysis that addresses the challenge brief within 4 weeks.',
    eligibility: ['Students and professionals welcome', 'Individual or teams of up to 3', 'Basic Python or R knowledge required', 'Open internationally'],
    requirements: ['Submit a Jupyter notebook or report', 'Explain methodology clearly', 'Reproducible results', 'Presentation of findings'],
  },
  {
    id: 'inter-university-debate',
    title: 'Inter-University Debate',
    organizer: 'Universidade Mavalane',
    category: 'Education',
    prize: 'Trophy + 30.000 MT',
    deadline: '28 Nov 2026',
    location: 'Beira · On-site',
    description: 'Universities from across Mozambique compete in a structured debate tournament. Topics cover economics, politics, science and culture. The winning team receives a trophy and cash prize.',
    eligibility: ['Currently enrolled university students', 'Teams of 3 debaters per university', 'One team per institution', 'Fluency in Portuguese required'],
    requirements: ['Register your university team', 'Attend briefing session', 'Prepare for assigned topics', 'Follow debate format rules'],
  },
  {
    id: 'national-photography',
    title: 'National Photography Prize',
    organizer: 'Museu Nacional de Arte',
    category: 'Design',
    prize: '40.000 MT + exhibition',
    deadline: '10 Feb 2027',
    location: 'Maputo · On-site',
    description: 'Submit photographs that capture the spirit, people and landscapes of Mozambique. Winning entries will be exhibited at the Museu Nacional de Arte and published in a commemorative catalogue.',
    eligibility: ['Open to all photographers', 'Mozambican nationals or residents', 'Amateur and professional categories', 'Age 16+'],
    requirements: ['Up to 5 photographs per entry', 'Minimum 4000px on longest side', 'Minimal post-processing only', 'Caption and location required'],
  },
  {
    id: 'fintech-innovation',
    title: 'Fintech Innovation Cup',
    organizer: 'BCI Moçambique',
    category: 'Hackathon',
    prize: '200.000 MT',
    deadline: '1 Mar 2027',
    location: 'Online',
    description: 'Build the next generation of financial technology for Mozambique. BCI is looking for solutions in mobile payments, credit access, savings tools and financial literacy. Top teams pitch to BCI leadership.',
    eligibility: ['Open to all nationalities', 'Teams of 2–5 members', 'Must include a developer', 'Startups and individuals welcome'],
    requirements: ['Working prototype required', 'Pitch deck (10 slides max)', 'Business model explanation', 'Demo video (3 min max)'],
  },
  {
    id: 'essay-competition',
    title: 'National Essay Competition',
    organizer: 'Ministério da Educação',
    category: 'Education',
    prize: '15.000 MT + scholarship',
    deadline: '5 Dec 2026',
    location: 'Online',
    description: 'Write an essay on the theme "Education as a Driver of Development in Mozambique". The top essays will be published and the winner receives a scholarship towards university tuition fees.',
    eligibility: ['Secondary school students only', 'Mozambican nationals', 'Individual submissions', 'Ages 15–19'],
    requirements: ['800–1.200 words', 'Written in Portuguese', 'Original unpublished work', 'Submit via online form'],
  },
]
