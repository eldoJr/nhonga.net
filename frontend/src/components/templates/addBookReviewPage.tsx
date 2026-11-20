import { useParams } from 'react-router-dom'
import AddReviewSection from '../organisms/addReviewSection'
import { books } from '../../data/books'

export default function AddBookReviewPage() {
  const { id } = useParams()
  const book = books.find((b) => b.id === id)
  return <AddReviewSection itemTitle={book?.title ?? 'Book'} itemType="Book" />
}
