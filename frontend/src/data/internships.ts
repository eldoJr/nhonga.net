export interface Internship {
  id: string
  title: string
  company: string
  category: string
  stipend: string
  duration: string
  location: string
  type: 'Remote' | 'On-site' | 'Hybrid'
  paid: boolean
  city: string
}

export const internships: Internship[] = [
  { id: 'marketing-intern-mozconnect', title: 'Marketing Intern', company: 'MozConnect Telecom', category: 'Marketing', stipend: '8.000 MT/month', duration: '3 months', location: 'Maputo · Hybrid', type: 'Hybrid', paid: true, city: 'Maputo' },
  { id: 'junior-web-dev-mabala', title: 'Junior Web Developer Intern', company: 'Mabala Tech', category: 'Technology', stipend: '10.000 MT/month', duration: '6 months', location: 'Maputo · On-site', type: 'On-site', paid: true, city: 'Maputo' },
  { id: 'accounting-trainee-xiluva', title: 'Accounting Trainee', company: 'Banco Xiluva', category: 'Finance', stipend: '7.500 MT/month', duration: '4 months', location: 'Matola · On-site', type: 'On-site', paid: true, city: 'Matola' },
  { id: 'graphic-design-kanimambo', title: 'Graphic Design Intern', company: 'Kanimambo Media', category: 'Design', stipend: '6.000 MT/month', duration: '3 months', location: 'Maputo · On-site', type: 'On-site', paid: true, city: 'Maputo' },
  { id: 'field-research-ong', title: 'Field Research Intern', company: 'ONG Esperança Viva', category: 'NGO', stipend: 'Unpaid + allowance', duration: '5 months', location: 'Nampula · On-site', type: 'On-site', paid: false, city: 'Nampula' },
  { id: 'social-media-cafe', title: 'Social Media Intern', company: 'Café Marrabenta', category: 'Marketing', stipend: '5.000 MT/month', duration: '3 months', location: 'Remote', type: 'Remote', paid: true, city: 'Remote' },
  { id: 'data-analyst-nhonga', title: 'Data Analyst Intern', company: 'Nhonga Academy', category: 'Technology', stipend: '9.000 MT/month', duration: '4 months', location: 'Maputo · Hybrid', type: 'Hybrid', paid: true, city: 'Maputo' },
  { id: 'hr-intern-txova', title: 'HR & Recruitment Intern', company: 'Instituto Superior Txova', category: 'HR', stipend: '5.500 MT/month', duration: '3 months', location: 'Beira · On-site', type: 'On-site', paid: true, city: 'Beira' },
  { id: 'content-writer-wiwanana', title: 'Content Writer Intern', company: 'Clube de Leitura Wiwanana', category: 'Writing', stipend: 'Unpaid + certificate', duration: '2 months', location: 'Remote', type: 'Remote', paid: false, city: 'Remote' },
]
