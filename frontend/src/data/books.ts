export interface Book {
  id: string
  title: string
  author: string
  genre: string
  price: string
  cover: string
  pages: number
  language: string
  description: string
  learns: string[]
}

export const books: Book[] = [
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    price: 'MT 450',
    cover: 'https://covers.openlibrary.org/b/id/10527843-L.jpg',
    pages: 320,
    language: 'English',
    description: 'A proven framework for improving every day. James Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviours that lead to remarkable results.',
    learns: ['Build habits that stick', 'Break bad patterns', 'Use the 1% rule daily', 'Design your environment'],
  },
  {
    id: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-Help',
    price: 'MT 380',
    cover: 'https://covers.openlibrary.org/b/id/8739161-L.jpg',
    pages: 296,
    language: 'English',
    description: 'Rules for focused success in a distracted world. Cal Newport argues that the ability to perform deep work is becoming increasingly rare and increasingly valuable in our economy.',
    learns: ['Focus without distraction', 'Schedule deep sessions', 'Quit social media strategically', 'Produce at an elite level'],
  },
  {
    id: 'the-lean-startup',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    genre: 'Business',
    price: 'MT 420',
    cover: 'https://covers.openlibrary.org/b/id/8739174-L.jpg',
    pages: 336,
    language: 'English',
    description: 'How today\'s entrepreneurs use continuous innovation to create radically successful businesses. A methodology for developing businesses and products that aims to shorten product development cycles.',
    learns: ['Build-Measure-Learn loop', 'Validated learning', 'Pivot vs persevere', 'Minimum viable product'],
  },
  {
    id: 'thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    genre: 'Psychology',
    price: 'MT 500',
    cover: 'https://covers.openlibrary.org/b/id/8739166-L.jpg',
    pages: 499,
    language: 'English',
    description: 'A groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical.',
    learns: ['Understand cognitive bias', 'System 1 vs System 2', 'Make better decisions', 'Avoid mental traps'],
  },
  {
    id: 'zero-to-one',
    title: 'Zero to One',
    author: 'Peter Thiel',
    genre: 'Business',
    price: 'MT 390',
    cover: 'https://covers.openlibrary.org/b/id/8739170-L.jpg',
    pages: 224,
    language: 'English',
    description: 'Notes on startups, or how to build the future. Every moment in business happens only once. The next Bill Gates will not build an operating system. The next Larry Page will not make a search engine.',
    learns: ['Build monopolies', 'Think contrarian', 'Create the future', 'Secrets of innovation'],
  },
  {
    id: 'the-alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    price: 'MT 320',
    cover: 'https://covers.openlibrary.org/b/id/8739176-L.jpg',
    pages: 208,
    language: 'Portuguese',
    description: 'A magical story about following your dreams. Santiago, an Andalusian shepherd boy, journeys from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids.',
    learns: ['Follow your Personal Legend', 'Trust the journey', 'Read omens', 'Embrace the unknown'],
  },
  {
    id: 'sapiens',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'Non-Fiction',
    price: 'MT 480',
    cover: 'https://covers.openlibrary.org/b/id/8739180-L.jpg',
    pages: 443,
    language: 'English',
    description: 'A brief history of humankind. From a renowned historian comes a groundbreaking narrative of humanity\'s creation and evolution that explores how biology and history have defined us.',
    learns: ['Human evolution', 'Cognitive revolution', 'Agricultural revolution', 'Future of humanity'],
  },
  {
    id: 'rich-dad-poor-dad',
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    genre: 'Business',
    price: 'MT 350',
    cover: 'https://covers.openlibrary.org/b/id/8739182-L.jpg',
    pages: 336,
    language: 'English',
    description: 'What the rich teach their kids about money that the poor and middle class do not. The #1 personal finance book of all time, challenging the myth that you need to earn a high income to be rich.',
    learns: ['Assets vs liabilities', 'Make money work for you', 'Financial independence', 'Invest wisely'],
  },
]
