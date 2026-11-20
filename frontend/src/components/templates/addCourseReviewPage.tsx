import { useParams } from 'react-router-dom'
import AddReviewSection from '../organisms/addReviewSection'
import { courses } from '../../data/courses'

export default function AddCourseReviewPage() {
  const { id } = useParams()
  const course = courses.find((c) => c.id === id)
  return <AddReviewSection itemTitle={course?.title ?? 'Course'} itemType="Course" />
}
