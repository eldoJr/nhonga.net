import { useState } from 'react'
import { clsx } from 'clsx'
import {
  HiOutlineMagnifyingGlass,
  HiOutlinePaperAirplane,
  HiOutlinePaperClip,
  HiOutlineFaceSmile,
  HiOutlineEllipsisHorizontal,
  HiOutlinePhone,
  HiOutlineVideoCamera,
} from 'react-icons/hi2'
import Avatar from '../../components/atoms/avatar'

interface Conversation {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
}

interface Message {
  id: string
  sender: 'me' | 'them'
  text: string
  time: string
}

const conversations: Conversation[] = [
  { id: '1', name: 'Ana Machel', avatar: 'https://i.pravatar.cc/100?img=1', lastMessage: 'That sounds great! Let me check with the team.', time: '2m', unread: 2, online: true },
  { id: '2', name: 'Carlos Tembe', avatar: 'https://i.pravatar.cc/100?img=3', lastMessage: 'Can you send me the updated CV?', time: '15m', unread: 0, online: true },
  { id: '3', name: 'Fatima Nunes', avatar: 'https://i.pravatar.cc/100?img=5', lastMessage: 'Congratulations on the scholarship! 🎉', time: '1h', unread: 1, online: false },
  { id: '4', name: 'David Mondlane', avatar: 'https://i.pravatar.cc/100?img=8', lastMessage: 'Let\'s schedule a call for next week.', time: '3h', unread: 0, online: false },
  { id: '5', name: 'Sofia Cossa', avatar: 'https://i.pravatar.cc/100?img=9', lastMessage: 'I\'ll review the proposal tonight.', time: '5h', unread: 0, online: true },
  { id: '6', name: 'Miguel Sitoe', avatar: 'https://i.pravatar.cc/100?img=11', lastMessage: 'The deployment went smoothly 🚀', time: '1d', unread: 0, online: false },
  { id: '7', name: 'Lucia Chissano', avatar: 'https://i.pravatar.cc/100?img=16', lastMessage: 'Thanks for the referral!', time: '2d', unread: 0, online: false },
]

const chatMessages: Record<string, Message[]> = {
  '1': [
    { id: 'm1', sender: 'them', text: 'Hey! I saw your post about the design sprint. Really impressive work.', time: '10:30 AM' },
    { id: 'm2', sender: 'me', text: 'Thanks Ana! It was a great team effort. We learned a lot from the user testing sessions.', time: '10:32 AM' },
    { id: 'm3', sender: 'them', text: 'I\'d love to collaborate on something similar. We\'re planning a redesign at Vodacom.', time: '10:35 AM' },
    { id: 'm4', sender: 'me', text: 'That would be amazing! I\'d be happy to share our process and learnings.', time: '10:38 AM' },
    { id: 'm5', sender: 'them', text: 'That sounds great! Let me check with the team.', time: '10:40 AM' },
  ],
  '2': [
    { id: 'm1', sender: 'them', text: 'Hi, we have an opening for a senior role. Interested?', time: '9:00 AM' },
    { id: 'm2', sender: 'me', text: 'Definitely! Can you share more details about the position?', time: '9:15 AM' },
    { id: 'm3', sender: 'them', text: 'Can you send me the updated CV?', time: '9:20 AM' },
  ],
  '3': [
    { id: 'm1', sender: 'them', text: 'I got the Chevening Scholarship!! 🎓🎉', time: 'Yesterday' },
    { id: 'm2', sender: 'me', text: 'That\'s incredible Fatima! You deserve it after all the hard work.', time: 'Yesterday' },
    { id: 'm3', sender: 'them', text: 'Congratulations on the scholarship! 🎉', time: 'Yesterday' },
  ],
}

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState<string>('1')
  const [search, setSearch] = useState('')
  const [newMessage, setNewMessage] = useState('')

  const activeConvo = conversations.find((c) => c.id === activeChat)!
  const messages = chatMessages[activeChat] || []

  return (
    <div className="flex gap-0 h-[calc(100vh-120px)] rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70">
      {/* Conversation list */}
      <div className="w-[300px] shrink-0 border-r border-gray-200/70 dark:border-gray-800/70 flex flex-col">
        <div className="p-4 border-b border-gray-100 dark:border-gray-800/50">
          <h2 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-3">Messages</h2>
          <div className="relative">
            <HiOutlineMagnifyingGlass className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search conversations…"
              className="w-full pl-8 pr-3 py-2 rounded-lg text-[12px] bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-gray-800/50 text-gray-800 dark:text-gray-200 placeholder-gray-400 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((convo) => (
            <button
              key={convo.id}
              onClick={() => setActiveChat(convo.id)}
              className={clsx(
                'w-full flex items-center gap-3 px-4 py-3 transition-colors cursor-pointer text-left',
                activeChat === convo.id
                  ? 'bg-nhonga-50/60 dark:bg-nhonga-950/20'
                  : 'hover:bg-gray-50 dark:hover:bg-white/[0.02]',
              )}
            >
              <div className="relative shrink-0">
                <Avatar name={convo.name} src={convo.avatar} size="md" />
                {convo.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white dark:ring-gray-900" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className={clsx('text-[12px] truncate', convo.unread > 0 ? 'font-bold text-gray-900 dark:text-white' : 'font-medium text-gray-700 dark:text-gray-300')}>
                    {convo.name}
                  </p>
                  <span className="text-[10px] text-gray-400 shrink-0 ml-2">{convo.time}</span>
                </div>
                <p className={clsx('text-[11px] truncate mt-0.5', convo.unread > 0 ? 'text-gray-700 dark:text-gray-300 font-medium' : 'text-gray-400 dark:text-gray-500')}>
                  {convo.lastMessage}
                </p>
              </div>
              {convo.unread > 0 && (
                <span className="w-5 h-5 rounded-full bg-nhonga-500 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                  {convo.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat panel */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Chat header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-gray-800/50">
          <div className="flex items-center gap-3">
            <Avatar name={activeConvo.name} src={activeConvo.avatar} size="sm" showStatus={activeConvo.online} />
            <div>
              <p className="text-[13px] font-semibold text-gray-900 dark:text-white">{activeConvo.name}</p>
              <p className="text-[10px] text-gray-400">{activeConvo.online ? 'Online' : 'Offline'}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors cursor-pointer">
              <HiOutlinePhone className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors cursor-pointer">
              <HiOutlineVideoCamera className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors cursor-pointer">
              <HiOutlineEllipsisHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={clsx('flex', msg.sender === 'me' ? 'justify-end' : 'justify-start')}>
              <div className={clsx(
                'max-w-[70%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed',
                msg.sender === 'me'
                  ? 'bg-nhonga-500 text-white rounded-br-md'
                  : 'bg-gray-100 dark:bg-white/[0.04] text-gray-800 dark:text-gray-200 rounded-bl-md',
              )}>
                <p>{msg.text}</p>
                <p className={clsx('text-[9px] mt-1', msg.sender === 'me' ? 'text-white/60' : 'text-gray-400')}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800/50">
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors cursor-pointer">
              <HiOutlinePaperClip className="w-[18px] h-[18px]" />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 px-4 py-2.5 rounded-xl text-[13px] bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-gray-800/50 text-gray-800 dark:text-gray-200 placeholder-gray-400 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 transition-colors"
              onKeyDown={(e) => e.key === 'Enter' && newMessage.trim() && setNewMessage('')}
            />
            <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors cursor-pointer">
              <HiOutlineFaceSmile className="w-[18px] h-[18px]" />
            </button>
            <button
              className={clsx(
                'p-2.5 rounded-xl transition-colors cursor-pointer',
                newMessage.trim()
                  ? 'bg-nhonga-500 text-white hover:bg-nhonga-600'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-400',
              )}
            >
              <HiOutlinePaperAirplane className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
