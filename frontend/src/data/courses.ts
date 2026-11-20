export interface Course {
  id: string
  title: string
  image: string
  author: string
  lessons: number
  hours: number
  category: string
  level: string
  price: string
  language: string
  paymentDay: string
  learns: string[]
}

export const courses: Course[] = [
  { id: 'digital-marketing', title: 'Digital Marketing for Small Businesses', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop', author: 'Ana Machava', lessons: 12, hours: 6, category: 'Marketing', level: 'Beginner', price: '2.500 MT', language: 'Portuguese', paymentDay: '2 Dec 2026', learns: ['Build a social media plan', 'Write posts that sell', 'Run low-budget ads', 'Measure your results'] },
  { id: 'graphic-design', title: 'Graphic Design', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop', author: 'Tiago Mondlane', lessons: 15, hours: 8, category: 'Design', level: 'Intermediate', price: '3.000 MT', language: 'Portuguese', paymentDay: '5 Jan 2027', learns: ['Master Adobe tools', 'Create brand identities', 'Design for print & web', 'Build a portfolio'] },
  { id: 'intro-to-python', title: 'Intro to Python', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop', author: 'Celso Cossa', lessons: 10, hours: 5, category: 'Technology', level: 'Beginner', price: 'Free', language: 'English', paymentDay: 'Free access', learns: ['Python syntax basics', 'Write functions & loops', 'Work with data', 'Build small scripts'] },
  { id: 'excel-for-business', title: 'Excel for Business', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', author: 'Marta Sitoe', lessons: 8, hours: 4, category: 'Business', level: 'Beginner', price: '1.800 MT', language: 'Portuguese', paymentDay: '10 Feb 2027', learns: ['Formulas & functions', 'Pivot tables', 'Data visualisation', 'Automate reports'] },
  { id: 'photography-basics', title: 'Photography Basics', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop', author: 'Nélio Bila', lessons: 9, hours: 5, category: 'Photography', level: 'Beginner', price: '2.200 MT', language: 'Portuguese', paymentDay: '15 Mar 2027', learns: ['Camera settings', 'Composition rules', 'Lighting techniques', 'Edit in Lightroom'] },
  { id: 'english-b2', title: 'English B2 Level', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop', author: 'Sara Muianga', lessons: 20, hours: 12, category: 'Languages', level: 'Intermediate', price: '3.500 MT', language: 'English', paymentDay: '1 Apr 2027', learns: ['Advanced grammar', 'Business writing', 'Listening & speaking', 'Exam preparation'] },
  { id: 'financial-literacy', title: 'Financial Literacy', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop', author: 'João Tembe', lessons: 7, hours: 3, category: 'Finance', level: 'Beginner', price: '1.500 MT', language: 'Portuguese', paymentDay: '20 Apr 2027', learns: ['Budget planning', 'Saving strategies', 'Understand credit', 'Invest basics'] },
  { id: 'ui-ux-design', title: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop', author: 'Fátima Nhaca', lessons: 18, hours: 10, category: 'Design', level: 'Intermediate', price: '4.000 MT', language: 'English', paymentDay: '1 Jun 2027', learns: ['User research', 'Wireframing', 'Figma prototyping', 'Usability testing'] },
]
