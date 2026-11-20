export type AppStatus = 'Submitted' | 'Under review' | 'Approved' | 'Rejected'
export type AppType = 'Scholarship' | 'Internship' | 'Competition' | 'Job'

export interface Application {
  id: string
  title: string
  organization: string
  type: AppType
  sentOn: string
  status: AppStatus
}

export const applications: Application[] = [
  { id: '1', title: 'Women in Tech Scholarship', organization: 'Nhonga Foundation', type: 'Scholarship', sentOn: '10 Nov 2026', status: 'Under review' },
  { id: '2', title: 'Marketing Intern', organization: 'MozConnect Telecom', type: 'Internship', sentOn: '8 Nov 2026', status: 'Submitted' },
  { id: '3', title: 'Young Designers Award', organization: 'Nhonga Academy', type: 'Competition', sentOn: '2 Nov 2026', status: 'Approved' },
  { id: '4', title: 'Graphic Design Intern', organization: 'Kanimambo Media', type: 'Internship', sentOn: '28 Oct 2026', status: 'Rejected' },
  { id: '5', title: 'Video Editor (Freelance)', organization: 'Mabala Tech', type: 'Job', sentOn: '25 Oct 2026', status: 'Approved' },
  { id: '6', title: 'Bolsa Mérito Mavalane', organization: 'Universidade Mavalane', type: 'Scholarship', sentOn: '20 Oct 2026', status: 'Under review' },
]
