import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import {
  HiOutlinePencilSquare,
  HiOutlineMapPin,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineLink,
  HiOutlineCalendar,
  HiOutlineArrowUpRight,
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeft,
} from 'react-icons/hi2'
import Avatar from '../../components/atoms/avatar'
import WidgetCard from '../../components/molecules/widgetCard'

const experience = [
  {
    title: 'Software Engineer',
    company: 'TechMoz',
    logo: 'https://ui-avatars.com/api/?name=TM&background=10B981&color=fff&size=40',
    period: 'Jan 2023 — Present',
    location: 'Maputo, Mozambique',
    description: 'Building scalable web applications with React, Node.js, and AWS. Leading a team of 4 developers.',
  },
  {
    title: 'Junior Developer',
    company: 'Vodacom MZ',
    logo: 'https://ui-avatars.com/api/?name=VM&background=E4002B&color=fff&size=40',
    period: 'Jun 2021 — Dec 2022',
    location: 'Maputo, Mozambique',
    description: 'Developed internal tools and customer-facing mobile features using React Native.',
  },
]

const education = [
  {
    degree: 'BSc Computer Science',
    school: 'Universidade Eduardo Mondlane',
    logo: 'https://ui-avatars.com/api/?name=UEM&background=003B71&color=fff&size=40',
    period: '2017 — 2021',
  },
]

const skills = ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Figma', 'Python', 'Docker', 'Git', 'Tailwind CSS']

const recentPosts = [
  { text: 'Just completed a design sprint for our new mobile banking experience...', likes: 42, comments: 8, time: '2h' },
  { text: 'The Mozambican tech ecosystem is growing faster than ever...', likes: 156, comments: 31, time: '8h' },
]

export default function ProfilePage() {
  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 space-y-4">
        {/* Cover + Avatar + Info */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 overflow-hidden">
          <div className="h-36 bg-gradient-to-r from-nhonga-400 via-nhonga-500 to-nhonga-600 relative">
            <Link
              to="/app/profile/edit"
              className="absolute top-3 right-3 p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              <HiOutlinePencilSquare className="w-4 h-4" />
            </Link>
          </div>
          <div className="px-6 pb-5 -mt-12">
            <Avatar name="A" size="lg" showStatus className="ring-4 ring-white dark:ring-gray-900 w-20 h-20 text-2xl" />
            <div className="mt-3">
              <h1 className="text-[18px] font-bold text-gray-900 dark:text-white">Admin User</h1>
              <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">Software Engineer at TechMoz</p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] text-gray-400 dark:text-gray-500">
                <span className="flex items-center gap-1"><HiOutlineMapPin className="w-3.5 h-3.5" />Maputo, Mozambique</span>
                <span className="flex items-center gap-1"><HiOutlineBriefcase className="w-3.5 h-3.5" />TechMoz</span>
                <span className="flex items-center gap-1"><HiOutlineLink className="w-3.5 h-3.5" />nhonga.net/admin</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <Link to="/app/profile/edit" className="px-4 py-1.5 rounded-lg text-[12px] font-semibold bg-nhonga-500 text-white hover:bg-nhonga-600 transition-colors">
                  Edit Profile
                </Link>
                <button className="px-4 py-1.5 rounded-lg text-[12px] font-semibold border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer">
                  Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
          <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-3">About</h3>
          <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
            Passionate software engineer with 4+ years of experience building web and mobile applications.
            Focused on creating impactful products for the Mozambican market. I love open source,
            mentoring junior developers, and exploring new technologies.
          </p>
        </div>

        {/* Experience */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
          <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-4">Experience</h3>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.title} className="flex gap-3">
                <img src={exp.logo} alt={exp.company} className="w-10 h-10 rounded-lg object-cover shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-gray-900 dark:text-white">{exp.title}</p>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400">{exp.company}</p>
                  <div className="flex items-center gap-3 mt-1 text-[11px] text-gray-400">
                    <span className="flex items-center gap-0.5"><HiOutlineCalendar className="w-3 h-3" />{exp.period}</span>
                    <span className="flex items-center gap-0.5"><HiOutlineMapPin className="w-3 h-3" />{exp.location}</span>
                  </div>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
          <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-4">Education</h3>
          {education.map((edu) => (
            <div key={edu.degree} className="flex gap-3">
              <img src={edu.logo} alt={edu.school} className="w-10 h-10 rounded-lg object-cover shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] font-semibold text-gray-900 dark:text-white">{edu.degree}</p>
                <p className="text-[12px] text-gray-500 dark:text-gray-400">{edu.school}</p>
                <p className="text-[11px] text-gray-400 mt-0.5 flex items-center gap-0.5"><HiOutlineCalendar className="w-3 h-3" />{edu.period}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
          <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1 text-[11px] font-medium rounded-lg bg-nhonga-50 dark:bg-nhonga-950/20 text-nhonga-700 dark:text-nhonga-400 border border-nhonga-200/40 dark:border-nhonga-800/30">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
          <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentPosts.map((post, i) => (
              <div key={i} className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-gray-800/50">
                <p className="text-[12px] text-gray-600 dark:text-gray-400 line-clamp-2">{post.text}</p>
                <div className="flex items-center gap-3 mt-2 text-[10px] text-gray-400">
                  <span className="flex items-center gap-0.5"><HiOutlineHeart className="w-3 h-3" />{post.likes}</span>
                  <span className="flex items-center gap-0.5"><HiOutlineChatBubbleOvalLeft className="w-3 h-3" />{post.comments}</span>
                  <span>{post.time} ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
        {/* Stats */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 mb-3">Profile Stats</p>
          <div className="space-y-2.5">
            {[
              { label: 'Profile views', value: '248', change: '+12%' },
              { label: 'Post impressions', value: '1,420', change: '+28%' },
              { label: 'Search appearances', value: '86', change: '+5%' },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between">
                <span className="text-[12px] text-gray-500">{s.label}</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-bold text-gray-900 dark:text-white">{s.value}</span>
                  <span className="text-[10px] font-medium text-nhonga-600 dark:text-nhonga-400">{s.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Similar profiles */}
        <WidgetCard title="People also viewed">
          <div className="space-y-3">
            {[
              { name: 'Miguel Sitoe', headline: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/100?img=11' },
              { name: 'Ana Machel', headline: 'UX Designer at Vodacom', avatar: 'https://i.pravatar.cc/100?img=1' },
              { name: 'David Mondlane', headline: 'CEO at TechMoz', avatar: 'https://i.pravatar.cc/100?img=8' },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2.5 group cursor-pointer">
                <Avatar name={p.name} src={p.avatar} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors truncate">{p.name}</p>
                  <p className="text-[10px] text-gray-400 truncate">{p.headline}</p>
                </div>
                <HiOutlineArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-nhonga-500 transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </WidgetCard>

        {/* Profile strength */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-4">
          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 mb-3">Profile Strength</p>
          <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-nhonga-400 to-nhonga-600" />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[11px] text-gray-400">Intermediate</span>
            <span className="text-[11px] font-semibold text-nhonga-600 dark:text-nhonga-400">75%</span>
          </div>
          <p className="text-[10px] text-gray-400 mt-2">Add a profile photo and portfolio to reach All-Star.</p>
        </div>
      </div>
    </div>
  )
}
