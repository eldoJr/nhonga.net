import { useParams, useNavigate } from 'react-router-dom'
import PaymentSection from '../organisms/paymentSection'
import { courses } from '../../data/courses'

export default function CoursePaymentPage() {
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
    <PaymentSection
      itemTitle={course.title}
      itemAuthor={course.author}
      itemImage={course.image}
      itemPrice={course.price}
      paymentDay={course.paymentDay}
      priceLabel="Course"
    />
  )
}
