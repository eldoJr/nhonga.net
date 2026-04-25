import { useState } from 'react'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import {
    HiOutlineBriefcase,
    HiOutlineUserPlus,
    HiOutlineHeart,
    HiOutlineChatBubbleOvalLeft,
    HiOutlineAcademicCap,
    HiOutlineMegaphone,
    HiOutlineCheck,
} from 'react-icons/hi2'
import Avatar from '../../components/atoms/avatar'

type NotificationType = 'connection' | 'like' | 'comment' | 'job' | 'academic' | 'system'

interface Notification {
    id: string
    type: NotificationType
    title: string
    description: string
    avatar?: string
    name?: string
    time: string
    read: boolean
    link?: string
}

const notifications: Notification[] = [
    { id: '1', type: 'connection', title: 'New connection request', description: 'Sofia Cossa wants to connect with you', avatar: 'https://i.pravatar.cc/100?img=9', name: 'Sofia Cossa', time: '2m', read: false, link: '/app/network' },
    { id: '2', type: 'like', title: 'Post liked', description: 'Ana Machel and 5 others liked your post', avatar: 'https://i.pravatar.cc/100?img=1', name: 'Ana Machel', time: '15m', read: false, link: '/app' },
    { id: '3', type: 'comment', title: 'New comment', description: 'Carlos Tembe commented on your post: "Great insights!"', avatar: 'https://i.pravatar.cc/100?img=3', name: 'Carlos Tembe', time: '1h', read: false, link: '/app' },
    { id: '4', type: 'job', title: 'Job match', description: 'Senior Frontend Developer at Vodacom MZ matches your profile', time: '2h', read: true, link: '/app/jobs' },
    { id: '5', type: 'connection', title: 'Connection accepted', description: 'David Mondlane accepted your connection request', avatar: 'https://i.pravatar.cc/100?img=8', name: 'David Mondlane', time: '3h', read: true, link: '/app/network' },
    { id: '6', type: 'academic', title: 'Deadline reminder', description: 'Chevening Scholarship 2026 deadline is in 5 days', time: '5h', read: true, link: '/app/academic' },
    { id: '7', type: 'like', title: 'Post liked', description: 'Miguel Sitoe liked your post about the tech ecosystem', avatar: 'https://i.pravatar.cc/100?img=11', name: 'Miguel Sitoe', time: '6h', read: true },
    { id: '8', type: 'system', title: 'Profile update', description: 'Your profile strength increased to 75%. Add a portfolio to reach All-Star.', time: '1d', read: true, link: '/app/profile' },
    { id: '9', type: 'job', title: 'Application viewed', description: 'Your application for Data Analyst at BCI was viewed by the recruiter', time: '1d', read: true, link: '/app/jobs' },
    { id: '10', type: 'comment', title: 'New reply', description: 'Fatima Nunes replied to your comment', avatar: 'https://i.pravatar.cc/100?img=5', name: 'Fatima Nunes', time: '2d', read: true },
]

const iconMap: Record<NotificationType, { icon: React.ComponentType<{ className?: string }>; color: string; bg: string }> = {
    connection: { icon: HiOutlineUserPlus, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-950/40' },
    like: { icon: HiOutlineHeart, color: 'text-pink-500', bg: 'bg-pink-100 dark:bg-pink-950/40' },
    comment: { icon: HiOutlineChatBubbleOvalLeft, color: 'text-nhonga-600', bg: 'bg-nhonga-100 dark:bg-nhonga-950/40' },
    job: { icon: HiOutlineBriefcase, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-950/40' },
    academic: { icon: HiOutlineAcademicCap, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-950/40' },
    system: { icon: HiOutlineMegaphone, color: 'text-gray-500', bg: 'bg-gray-100 dark:bg-gray-800' },
}

const filters = ['All', 'Unread', 'Connections', 'Jobs', 'Activity'] as const

export default function NotificationsPage() {
    const [items, setItems] = useState(notifications)
    const [filter, setFilter] = useState<string>('All')

    const unreadCount = items.filter((n) => !n.read).length

    const markAllRead = () => setItems((prev) => prev.map((n) => ({ ...n, read: true })))
    const markRead = (id: string) => setItems((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n))

    const filtered = items.filter((n) => {
        if (filter === 'All') return true
        if (filter === 'Unread') return !n.read
        if (filter === 'Connections') return n.type === 'connection'
        if (filter === 'Jobs') return n.type === 'job'
        if (filter === 'Activity') return n.type === 'like' || n.type === 'comment'
        return true
    })

    return (
        <div className="max-w-2xl mx-auto space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-[16px] font-bold text-gray-900 dark:text-white">Notifications</h2>
                    {unreadCount > 0 && (
                        <p className="text-[12px] text-gray-400 mt-0.5">{unreadCount} unread</p>
                    )}
                </div>
                {unreadCount > 0 && (
                    <button
                        onClick={markAllRead}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold text-nhonga-600 hover:bg-nhonga-50 dark:hover:bg-nhonga-950/20 transition-colors cursor-pointer"
                    >
                        <HiOutlineCheck className="w-3.5 h-3.5" />
                        Mark all read
                    </button>
                )}
            </div>

            {/* Filters */}
            <div className="flex items-center gap-1">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={clsx(
                            'px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors cursor-pointer',
                            filter === f
                                ? 'bg-nhonga-500 text-white'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.03]',
                        )}
                    >
                        {f}
                        {f === 'Unread' && unreadCount > 0 && (
                            <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold bg-nhonga-100 text-nhonga-700 dark:bg-nhonga-900/40 dark:text-nhonga-400 rounded-full">
                                {unreadCount}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 overflow-hidden">
                {filtered.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-[13px] text-gray-400">No notifications</p>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100 dark:divide-gray-800/50">
                        {filtered.map((n) => {
                            const meta = iconMap[n.type]
                            const Icon = meta.icon
                            const Wrapper = n.link ? Link : 'div'
                            const wrapperProps = n.link ? { to: n.link } : {}

                            return (
                                <Wrapper
                                    key={n.id}
                                    {...(wrapperProps as Record<string, string>)}
                                    onClick={() => markRead(n.id)}
                                    className={clsx(
                                        'flex items-start gap-3 px-5 py-4 transition-colors cursor-pointer',
                                        !n.read
                                            ? 'bg-nhonga-50/30 dark:bg-nhonga-950/10'
                                            : 'hover:bg-gray-50/50 dark:hover:bg-white/[0.02]',
                                    )}
                                >
                                    {/* Avatar or icon */}
                                    {n.avatar ? (
                                        <Avatar name={n.name} src={n.avatar} size="sm" />
                                    ) : (
                                        <div className={clsx('w-8 h-8 rounded-xl flex items-center justify-center shrink-0', meta.bg)}>
                                            <Icon className={clsx('w-4 h-4', meta.color)} />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <p className={clsx('text-[13px] leading-snug', !n.read ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300')}>
                                            {n.title}
                                        </p>
                                        <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{n.description}</p>
                                    </div>

                                    {/* Time + unread dot */}
                                    <div className="flex items-center gap-2 shrink-0">
                                        <span className="text-[10px] text-gray-400">{n.time}</span>
                                        {!n.read && <span className="w-2 h-2 rounded-full bg-nhonga-500 shrink-0" />}
                                    </div>
                                </Wrapper>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
