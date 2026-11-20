import { useParams, useNavigate } from 'react-router-dom'
import PaymentSection from '../organisms/paymentSection'
import { books } from '../../data/books'

export default function BookPaymentPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const book = books.find((b) => b.id === id)

  if (!book) {
    return (
      <div className="w-full max-w-2xl mx-auto px-5 pt-20 pb-24 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">Book not found.</p>
        <button onClick={() => navigate(-1)} className="text-nhonga-500 text-sm font-medium hover:underline cursor-pointer">← Back</button>
      </div>
    )
  }

  return (
    <PaymentSection
      itemTitle={book.title}
      itemAuthor={book.author}
      itemImage={book.cover}
      itemPrice={book.price}
      paymentDay="On delivery"
      priceLabel="Book"
    />
  )
}
