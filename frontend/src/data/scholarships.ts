export interface Scholarship {
  id: string
  title: string
  institution: string
  coverage: string
  deadline: string
  level: 'Bachelor' | 'Master' | 'Technical' | 'Bachelor / Technical'
}

export const scholarships: Scholarship[] = [
  { id: 'txova-2027', title: 'Bolsa de Estudo Txova 2027', institution: 'Instituto Superior Txova', coverage: 'Full tuition', deadline: '15 Jan 2027', level: 'Bachelor' },
  { id: 'women-in-tech', title: 'Women in Tech Scholarship', institution: 'Nhonga Foundation', coverage: '50% tuition + laptop', deadline: '10 Dec 2026', level: 'Bachelor / Technical' },
  { id: 'futuro-scholars', title: 'Futuro Scholars Program', institution: 'Fundação Futuro', coverage: 'Full tuition + housing', deadline: '31 Jan 2027', level: 'Master' },
  { id: 'merito-mavalane', title: 'Bolsa Mérito Mavalane', institution: 'Universidade Mavalane', coverage: '70% tuition', deadline: '20 Dec 2026', level: 'Bachelor' },
  { id: 'stem-beira', title: 'STEM Excellence Beira', institution: 'Instituto Politécnico Beira', coverage: 'Full tuition', deadline: '28 Feb 2027', level: 'Technical' },
  { id: 'africa-masters', title: 'Africa Leaders Masters Grant', institution: 'Nhonga Foundation', coverage: 'Full tuition + stipend', deadline: '5 Mar 2027', level: 'Master' },
]
