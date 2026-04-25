import { useState } from 'react'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import {
  HiOutlinePencilSquare,
  HiOutlineMapPin,
  HiOutlineAcademicCap,
  HiOutlineLink,
  HiOutlineCalendar,
  HiOutlineArrowUpRight,
  HiOutlineHeart,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineEllipsisHorizontal,
  HiOutlineUserPlus,
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineCodeBracket,
  HiOutlineChartBar,
  HiOutlineEye,
  HiOutlineMagnifyingGlass,
  HiOutlineDocumentText,
} from 'react-icons/hi2'
import Avatar from '../../components/atoms/avatar'
import WidgetCard from '../../components/molecules/widgetCard'

const experience = [
  {
    title: 'Software Engineer',
    company: 'TechMoz',
    logo: 'https://ui-avatars.com/api/?name=TM&background=10B981&color=fff&size=40',
    period: 'Jan 2023 — Present',
    duration: '2 yrs 4 mos',
    location: 'Maputo, Mozambique',
    description: 'Building scalable web applications with React, Node.js, and AWS. Leading a team of 4 developers on the core product.',
    skills: ['React', 'Node.js', 'AWS'],
  },
  {
    title: 'Junior Developer',
    company: 'Vodacom MZ',
    logo: 'https://ui-avatars.com/api/?name=VM&background=E4002B&color=fff&size=40',
    period: 'Jun 2021 — Dec 2022',
    duration: '1 yr 7 mos',
    location: 'Maputo, Mozambique',
    description: 'Developed internal tools and customer-facing mobile features using React Native.',
    skills: ['React Native', 'TypeScript'],
  },
  {
    title: 'Intern — Web Development',
    company: 'INCM',
    logo: 'https://ui-avatars.com/api/?name=IN&background=1E40AF&color=fff&size=40',
    period: 'Jan 2021 — May 2021',
    duration: '5 mos',
    location: 'Maputo, Mozambique',
    description: 'Built internal dashboards and automated reporting workflows.',
    skills: ['JavaScript', 'Python'],
  },
]

const education = [
  {
    degree: 'BSc Computer Science',
    school: 'Universidade Eduardo Mondlane',
    logo: 'https://ui-avatars.com/api/?name=UEM&background=003B71&color=fff&size=40',
    period: '2017 — 2021',
    activities: 'ACM Student Chapter, Hackathon Club',
  },
]

const certifications = [
  { name: 'AWS Solutions Architect — Associate', issuer: 'Amazon Web Services', date: 'Mar 2024' },
  { name: 'Meta Front-End Developer', issuer: 'Coursera / Meta', date: 'Aug 2023' },
]

const skills = [
  { name: 'React', endorsements: 24 },
  { name: 'TypeScript', endorsements: 18 },
  { name: 'Node.js', endorsements: 15 },
  { name: 'PostgreSQL', endorsements: 12 },
  { name: 'AWS', endorsements: 10 },
  { name: 'Figma', endorsements: 8 },
  { name: 'Python', endorsements: 7 },
  { name: 'Docker', endorsements: 6 },
  { name: 'Git', endorsements: 22 },
  { name: 'Tailwind CSS', endorsements: 14 },
]

const projects = [
  { name: 'Nhonga Platform', description: 'Professional networking platform for Mozambique', url: '#', tech: ['React', 'Node.js', 'PostgreSQL'] },
  { name: 'MozPay SDK', description: 'Open-source payment integration for Mozambican gateways', url: '#', tech: ['TypeScript', 'REST API'] },
]

const recentPosts = [
  { text: 'Just completed a design sprint for our new mobile banking experience. Proud of what the team achieved in just 5 days! 🚀', likes: 42, comments: 8, time: '2h' },
  { text: 'The Mozambican tech ecosystem is growing faster than ever. In the last year alone: 40+ new startups launched, $12M in funding raised...', likes: 156, comments: 31, time: '8h' },
  { text: 'Excited to share that I\'ve been promoted to Lead Engineer at TechMoz. Grateful for the journey and the team that made it possible.', likes: 89, comments: 14, time: '2d' },
]

const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'French', level: 'Intermediate' },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'posts' | 'projects'>('posts')

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 space-y-4">
        {/* Cover + Avatar + Info */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 overflow-hidden">
          <div className="h-40 bg-gradient-to-br from-nhonga-400 via-nhonga-500 to-nhonga-700 relative">
            <Link
              to="/app/profile/edit"
              className="absolute top-3 right-3 p-2 rounded-xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              <HiOutlinePencilSquare className="w-4 h-4" />
            </Link>
          </div>
          <div className="px-6 pb-6 -mt-14">
            <div className="flex items-end justify-between">
              <Avatar name="A" size="lg" showStatus className="ring-4 ring-white dark:ring-gray-900 w-24 h-24 text-3xl" />
              <div className="flex items-center gap-2 mb-1">
                <Link to="/app/profile/edit" className="px-4 py-1.5 rounded-xl text-[12px] font-semibold bg-nhonga-500 text-white hover:bg-nhonga-600 transition-colors">
                  Edit Profile
                </Link>
                <button className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer">
                  <HiOutlineEllipsisHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-[20px] font-bold text-gray-900 dark:text-white">Admin User</h1>
              <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">Software Engineer at TechMoz</p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] text-gray-400 dark:text-gray-500">
                <span className="flex items-center gap-1"><HiOutlineMapPin className="w-3.5 h-3.5" />Maputo, Mozambique</span>
                <span className="flex items-center gap-1"><HiOutlineLink className="w-3.5 h-3.5" />nhonga.net/admin</span>
                <span className="flex items-center gap-1"><HiOutlineEnvelope className="w-3.5 h-3.5" />admin@nhonga.net</span>
              </div>
              <div className="flex items-center gap-4 mt-3 text-[12px]">
                <span className="text-gray-500"><span className="font-bold text-gray-900 dark:text-white">128</span> connections</span>
                <span className="text-gray-500"><span className="font-bold text-gray-900 dark:text-white">24</span> mutual</span>
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
            mentoring junior developers, and exploring new technologies. Currently leading the frontend
            team at TechMoz, building tools that connect professionals across Africa.
          </p>
        </div>

        {/* Experience */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
          <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-4">Experience</h3>
          <div className="space-y-0">
            {experience.map((exp, i) => (
              <div key={exp.title} className={clsx('flex gap-3 py-4', i > 0 && 'border-t border-gray-100 dark:border-gray-800/50')}>
                <img src={exp.logo} alt={exp.company} className="w-11 h-11 rounded-xl object-cover shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold text-gray-900 dark:text-white">{exp.title}</p>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400">{exp.company} · {exp.duration}</p>
                  <div className="flex items-center gap-3 mt-1 text-[11px] text-gray-400">
                    <span className="flex items-center gap-0.5"><HiOutlineCalendar className="w-3 h-3" />{exp.period}</span>
                    <span className="flex items-center gap-0.5"><HiOutlineMapPin className="w-3 h-3" />{exp.location}</span>
                  </div>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-gray-400">{s}</span>
                    ))}
                  </div>
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
              <img src={edu.logo} alt={edu.school} className="w-11 h-11 rounded-xl object-cover shrink-0" />
              <div>
                <p className="text-[13px] font-semibold text-gray-900 dark:text-white">{edu.degree}</p>
                <p className="text-[12px] text-gray-500 dark:text-gray-400">{edu.school}</p>
                <p className="text-[11px] text-gray-400 mt-0.5 flex items-center gap-0.5"><HiOutlineCalendar className="w-3 h-3" />{edu.period}</p>
                {edu.activities && <p className="text-[11px] text-gray-400 mt-1">Activities: {edu.activities}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
          <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-4">Licenses & Certifications</h3>
          <div className="space-y-0">
            {certifications.map((cert, i) => (
              <div key={cert.name} className={clsx('flex items-center gap-3 py-3', i > 0 && 'border-t border-gray-100 dark:border-gray-800/50')}>
                <div className="w-10 h-10 rounded-xl bg-nhonga-100 dark:bg-nhonga-950/40 flex items-center justify-center shrink-0">
                  <HiOutlineAcademicCap className="w-5 h-5 text-nhonga-600 dark:text-nhonga-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-gray-900 dark:text-white truncate">{cert.name}</p>
                  <p className="text-[11px] text-gray-400">{cert.issuer} · {cert.date}</p>
                </div>
                <HiOutlineArrowUpRight className="w-4 h-4 text-gray-300 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
          <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-3">Skills</h3>
          <div className="grid grid-cols-2 gap-2">
            {skills.map((s) => (
              <div key={s.name} className="flex items-center justify-between px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/[0.02]">
                <span className="text-[12px] font-medium text-gray-700 dark:text-gray-300">{s.name}</span>
                <span className="text-[10px] text-gray-400">{s.endorsements} endorsements</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 p-5">
          <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/[0.02]">
                <HiOutlineGlobeAlt className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[12px] font-medium text-gray-700 dark:text-gray-300">{l.name}</span>
                <span className="text-[10px] text-gray-400">· {l.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity tabs — Posts / Projects */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 overflow-hidden">
          <div className="flex items-center gap-1 px-5 pt-4 pb-2">
            {(['posts', 'projects'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  'px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors cursor-pointer capitalize',
                  activeTab === tab
                    ? 'bg-nhonga-500 text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.03]',
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="px-5 pb-5">
            {activeTab === 'posts' && (
              <div className="space-y-3 mt-2">
                {recentPosts.map((post, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02]">
                    <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">{post.text}</p>
                    <div className="flex items-center gap-3 mt-2.5 text-[10px] text-gray-400">
                      <span className="flex items-center gap-0.5"><HiOutlineHeart className="w-3 h-3" />{post.likes}</span>
                      <span className="flex items-center gap-0.5"><HiOutlineChatBubbleOvalLeft className="w-3 h-3" />{post.comments}</span>
                      <span className="ml-auto">{post.time} ago</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-3 mt-2">
                {projects.map((p) => (
                  <div key={p.name} className="group p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[13px] font-semibold text-gray-900 dark:text-white group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors">{p.name}</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">{p.description}</p>
                      </div>
                      <HiOutlineCodeBracket className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-nhonga-50 dark:bg-nhonga-950/20 text-nhonga-700 dark:text-nhonga-400">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: '248', label: 'Views', icon: HiOutlineEye, color: 'text-nhonga-600', bg: 'bg-nhonga-100 dark:bg-nhonga-950/40' },
            { value: '1.4K', label: 'Impressions', icon: HiOutlineChartBar, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-950/40' },
            { value: '86', label: 'Searches', icon: HiOutlineMagnifyingGlass, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-950/40' },
          ].map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className={clsx('rounded-2xl p-3 text-center', s.bg)}>
                <Icon className={clsx('w-4 h-4 mx-auto mb-1', s.color)} />
                <p className={clsx('text-[16px] font-bold', s.color)}>{s.value}</p>
                <p className="text-[9px] text-gray-500 mt-0.5">{s.label}</p>
              </div>
            )
          })}
        </div>

        {/* Profile strength */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200">Profile Strength</p>
            <span className="text-[11px] font-bold text-nhonga-600 dark:text-nhonga-400">75%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-nhonga-400 to-nhonga-600" />
          </div>
          <p className="text-[10px] text-gray-400 mt-2">Add a portfolio and certifications to reach All-Star.</p>
        </div>

        {/* People also viewed */}
        <WidgetCard title="People also viewed">
          <div className="space-y-3">
            {[
              { name: 'Miguel Sitoe', headline: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/100?img=11' },
              { name: 'Ana Machel', headline: 'UX Designer at Vodacom', avatar: 'https://i.pravatar.cc/100?img=1' },
              { name: 'David Mondlane', headline: 'CEO at TechMoz', avatar: 'https://i.pravatar.cc/100?img=8' },
              { name: 'Sofia Cossa', headline: 'Product Manager at Movitel', avatar: 'https://i.pravatar.cc/100?img=9' },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2.5 group cursor-pointer">
                <Avatar name={p.name} src={p.avatar} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-nhonga-600 dark:group-hover:text-nhonga-400 transition-colors truncate">{p.name}</p>
                  <p className="text-[10px] text-gray-400 truncate">{p.headline}</p>
                </div>
                <button className="p-1 rounded-lg text-gray-300 hover:text-nhonga-500 transition-colors shrink-0 cursor-pointer">
                  <HiOutlineUserPlus className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </WidgetCard>

        {/* Quick actions */}
        <div className="space-y-1">
          {[
            { label: 'Share Profile', icon: HiOutlineDocumentText },
            { label: 'Download Resume', icon: HiOutlineArrowUpRight },
          ].map((a) => {
            const Icon = a.icon
            return (
              <button
                key={a.label}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[12px] font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.03] hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer"
              >
                <Icon className="w-4 h-4" />
                {a.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
