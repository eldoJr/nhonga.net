import { useParams, useNavigate } from 'react-router-dom'
import ReviewsSection from '../organisms/reviewsSection'
import type { Review } from '../../data/reviews'
import { courses } from '../../data/courses'

const distribution = [
  { stars: 5, pct: 82 },
  { stars: 4, pct: 12 },
  { stars: 3, pct: 4 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
]

const reviews: Review[] = [
  { id: '1', author: 'Ana Paula Chissano', rating: 5, title: 'Practical From Day One', body: "I applied the first lesson to my shop's Instagram the same week. Clear examples, all adapted to our reality in Mozambique.", ago: '2 days ago' },
  { id: '2', author: 'Daniel Foster', rating: 5, title: 'Worth Every Metical', body: 'Short videos, real cases and a certificate at the end. I finally understand how to plan my posts and measure results.', ago: '1 week ago' },
  { id: '3', author: 'Emília Carter', rating: 4, title: 'Simple, Smart and Effective', body: 'Everything is explained in an accessible way. I would love more lessons about paid ads, but overall excellent.', ago: '2 weeks ago' },
  { id: '4', author: 'João Tembe', rating: 5, title: 'Best Investment This Year', body: 'I went from zero to running my own campaigns in under a month. The instructor is clear and engaging throughout.', ago: '3 weeks ago' },
]

export default function CourseReviewsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const course = courses.find((c) => c.id === id)

  if (!course) {
    return (
      <div className="w-full max-w-2xl mx-auto px-5 pt-20 pb-24 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">Course not found.</p>
        <button onClick={() => navigate(-1)} className="text-nhonga-500 text-sm font-medium hover:underline cursor-pointer">← Back</button>
      </div>
    )
  }

  return (
    <ReviewsSection
      itemTitle={course.title}
      itemType="Course"
      rating={4.8}
      totalReviews={1024}
      distribution={distribution}
      reviews={reviews}
    />
  )
}
