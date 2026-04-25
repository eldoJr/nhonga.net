import { Link } from 'react-router-dom'
import {
  HiOutlinePhoto,
  HiOutlineDocumentText,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineMapPin,
  HiOutlineArrowRight,
  HiOutlineUserPlus,
} from 'react-icons/hi2'
import Avatar from '../../components/atoms/avatar'
import Button from '../../components/atoms/button'
import FeedCard, { type FeedPostData } from '../../components/molecules/feedCard'
import WidgetCard from '../../components/molecules/widgetCard'

// ── Mock data ──

const posts: FeedPostData[] = [
  {
    id: '1',
    author: { name: 'Ana Machel', headline: 'UX Designer at Vodacom Moçambique', avatar: 'https://i.pravatar.cc/100?img=1' },
    time: '2h',
    content: 'Just completed a design sprint for our new mobile banking experience. Proud of what the team achieved in just 5 days! 🚀\n\nKey takeaway: user testing early saves weeks of rework later.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=300&fit=crop',
    likes: 42,
    comments: 8,
  },
  {
    id: '2',
    author: { name: 'Carlos Tembe', headline: 'HR Director at Cervejas de Moçambique', avatar: 'https://i.pravatar.cc/100?img=3' },
    time: '4h',
    content: 'We\'re hiring! Looking for a Senior Software Engineer to join our digital transformation team in Maputo.\n\nRemote-friendly • Competitive salary • Growth opportunities\n\nDM me or check the link in comments 👇',
    likes: 67,
    comments: 23,
  },
  {
    id: '3',
    author: { name: 'Fatima Nunes', headline: 'PhD Candidate at Universidade Eduardo Mondlane', avatar: 'https://i.pravatar.cc/100?img=5' },
    time: '6h',
    content: 'Excited to share that I\'ve been awarded the Chevening Scholarship 2025! 🎓\n\nTo everyone applying — don\'t give up. I was rejected twice before. Persistence pays off.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&h=300&fit=crop',
    likes: 234,
    comments: 45,
    liked: true,
  },
  {
    id: '4',
    author: { name: 'David Mondlane', headline: 'Founder & CEO at TechMoz', avatar: 'https://i.pravatar.cc/100?img=8' },
    time: '8h',
    content: 'The Mozambican tech ecosystem is growing faster than ever. In the last year alone:\n\n• 40+ new startups launched\n• $12M in funding raised\n• 3 new incubators opened\n\nProud to be part of this movement. The future is bright 🇲🇿',
    likes: 156,
    comments: 31,
  },
]

const trendingJobs = [
  { title: 'Senior Frontend Developer', company: 'Vodacom MZ', location: 'Maputo', type: 'Full-time' },
  { title: 'Marketing Manager', company: 'Cervejas de MZ', location: 'Maputo', type: 'Full-time' },
  { title: 'Data Analyst', company: 'BCI Bank', location: 'Remote', type: 'Contract' },
]

const suggestedPeople = [
  { name: 'Sofia Cossa', headline: 'Product Manager at Movitel', avatar: 'https://i.pravatar.cc/100?img=9' },
  { name: 'Miguel Sitoe', headline: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/100?img=11' },
  { name: 'Lucia Chissano', headline: 'Marketing at Standard Bank', avatar: 'https://i.pravatar.cc/100?img=16' },
]

// ── Component ──

export default function FeedPage() {
  return (
    <div className="flex gap-6 max-w-full">
      {/* Main feed column */}
      <div className="flex-1 min-w-0 space-y-4">
        {/* Create post */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-4">
          <div className="flex items-center gap-3">
            <Avatar name="A" size="md" showStatus />
            <input
              type="text"
              placeholder="Share something with your network…"
              className="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-gray-800/50 text-[13px] text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 transition-colors"
            />
          </div>
          <div className="flex items-center gap-1 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/50">
            <PostAction icon={HiOutlinePhoto} label="Photo" color="text-nhonga-600" />
            <PostAction icon={HiOutlineDocumentText} label="Article" color="text-blue-500" />
            <PostAction icon={HiOutlineBriefcase} label="Job" color="text-amber-500" />
            <PostAction icon={HiOutlineCalendar} label="Event" color="text-purple-500" />
          </div>
        </div>

        {/* Posts */}
        {posts.map((post) => (
          <FeedCard key={post.id} post={post} />
        ))}
      </div>

      {/* Right sidebar */}
      <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
        {/* Trending jobs */}
        <WidgetCard
          title="Trending Jobs"
          action={
            <Link to="/app/jobs" className="text-[11px] font-semibold text-nhonga-600 hover:text-nhonga-700 transition-colors flex items-center gap-0.5">
              View all <HiOutlineArrowRight className="w-3 h-3" />
            </Link>
          }
        >
          <div className="space-y-3">
            {trendingJobs.map((job) => (
              <div key={job.title} className="group cursor-pointer">
                <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors">
                  {job.title}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">{job.company}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="flex items-center gap-0.5 text-[10px] text-gray-400">
                    <HiOutlineMapPin className="w-3 h-3" /> {job.location}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-nhonga-50 dark:bg-nhonga-950/30 text-nhonga-700 dark:text-nhonga-400 font-medium">
                    {job.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </WidgetCard>

        {/* Suggested connections */}
        <WidgetCard
          title="People you may know"
          action={
            <Link to="/app/network" className="text-[11px] font-semibold text-nhonga-600 hover:text-nhonga-700 transition-colors flex items-center gap-0.5">
              See more <HiOutlineArrowRight className="w-3 h-3" />
            </Link>
          }
        >
          <div className="space-y-3">
            {suggestedPeople.map((person) => (
              <div key={person.name} className="flex items-center gap-2.5">
                <Avatar name={person.name} src={person.avatar} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 truncate">{person.name}</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 truncate">{person.headline}</p>
                </div>
                <button className="p-1.5 rounded-lg text-nhonga-600 hover:bg-nhonga-50 dark:hover:bg-nhonga-950/30 transition-colors shrink-0 cursor-pointer">
                  <HiOutlineUserPlus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </WidgetCard>

        {/* Footer links */}
      </div>
    </div>
  )
}

function PostAction({ icon: Icon, label, color }: { icon: React.ComponentType<{ className?: string }>; label: string; color: string }) {
  return (
    <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors cursor-pointer">
      <Icon className={`w-[18px] h-[18px] ${color}`} />
      <span>{label}</span>
    </button>
  )
}
