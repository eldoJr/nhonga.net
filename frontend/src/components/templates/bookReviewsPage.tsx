import { useParams } from 'react-router-dom'
import ReviewsSection from '../organisms/reviewsSection'
import type { Review } from '../../data/reviews'
import { books } from '../../data/books'

const distribution = [
  { stars: 5, pct: 74 },
  { stars: 4, pct: 16 },
  { stars: 3, pct: 6 },
  { stars: 2, pct: 2 },
  { stars: 1, pct: 2 },
]

const reviews: Review[] = [
  { id: '1', author: 'Fátima Nhaca', rating: 5, title: 'Changed My Perspective', body: 'Every chapter made me rethink how I approach my daily habits. A must-read for anyone serious about growth.', ago: '1 day ago' },
  { id: '2', author: 'Carlos Mondlane', rating: 4, title: 'Dense but Worth It', body: 'Some chapters are heavy but the insights are gold. I took notes on almost every page.', ago: '5 days ago' },
  { id: '3', author: 'Sara Muianga', rating: 5, title: 'Finished It in Two Days', body: "Couldn't put it down. The writing is clear and the examples are relatable even from a Mozambican context.", ago: '1 week ago' },
  { id: '4', author: 'Nélio Bila', rating: 4, title: 'Solid Read', body: 'Well structured and easy to follow. A few sections felt repetitive but the overall message is powerful.', ago: '2 weeks ago' },
]

export default function BookReviewsPage() {
  const { id } = useParams()
  const book = books.find((b) => b.id === id)

  return (
    <ReviewsSection
      itemTitle={book?.title ?? 'Book'}
      itemType="Book"
      rating={4.6}
      totalReviews={832}
      distribution={distribution}
      reviews={reviews}
    />
  )
}
