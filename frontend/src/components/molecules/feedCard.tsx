import { useState } from 'react'
import { clsx } from 'clsx'
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineArrowUpTray,
  HiOutlineBookmark,
  HiBookmark,
} from 'react-icons/hi2'
import Avatar from '../atoms/avatar'

export interface FeedPostData {
  id: string
  author: { name: string; headline: string; avatar?: string }
  time: string
  content: string
  image?: string
  likes: number
  comments: number
  liked?: boolean
  saved?: boolean
}

export default function FeedCard({ post }: { post: FeedPostData }) {
  const [liked, setLiked] = useState(post.liked ?? false)
  const [saved, setSaved] = useState(post.saved ?? false)
  const [likes, setLikes] = useState(post.likes)

  const toggleLike = () => {
    setLiked((v) => !v)
    setLikes((v) => (liked ? v - 1 : v + 1))
  }

  return (
    <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 overflow-hidden">
      {/* Header */}
      <div className="flex items-start gap-3 px-5 pt-5">
        <Avatar name={post.author.name} src={post.author.avatar} size="md" />
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-gray-900 dark:text-white truncate">
            {post.author.name}
          </p>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate">
            {post.author.headline}
          </p>
        </div>
        <span className="text-[11px] text-gray-400 dark:text-gray-600 shrink-0">{post.time}</span>
      </div>

      {/* Content */}
      <div className="px-5 pt-3 pb-2">
        <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>

      {/* Image */}
      {post.image && (
        <div className="mx-5 mb-3 rounded-xl overflow-hidden">
          <img src={post.image} alt="" className="w-full h-[220px] object-cover" />
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center gap-4 px-5 py-2 text-[11px] text-gray-400 dark:text-gray-500">
        <span>{likes} likes</span>
        <span>{post.comments} comments</span>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-gray-100 dark:border-gray-800/50" />

      {/* Actions */}
      <div className="flex items-center px-3 py-1.5">
        <ActionBtn onClick={toggleLike} active={liked} activeColor="text-red-500">
          {liked ? <HiHeart className="w-[18px] h-[18px]" /> : <HiOutlineHeart className="w-[18px] h-[18px]" />}
          <span>Like</span>
        </ActionBtn>
        <ActionBtn>
          <HiOutlineChatBubbleOvalLeft className="w-[18px] h-[18px]" />
          <span>Comment</span>
        </ActionBtn>
        <ActionBtn>
          <HiOutlineArrowUpTray className="w-[18px] h-[18px]" />
          <span>Share</span>
        </ActionBtn>
        <div className="ml-auto">
          <ActionBtn onClick={() => setSaved((v) => !v)} active={saved} activeColor="text-nhonga-600 dark:text-nhonga-400">
            {saved ? <HiBookmark className="w-[18px] h-[18px]" /> : <HiOutlineBookmark className="w-[18px] h-[18px]" />}
          </ActionBtn>
        </div>
      </div>
    </div>
  )
}

function ActionBtn({
  children,
  onClick,
  active,
  activeColor,
}: {
  children: React.ReactNode
  onClick?: () => void
  active?: boolean
  activeColor?: string
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-medium transition-colors cursor-pointer',
        active && activeColor
          ? activeColor
          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/[0.03] hover:text-gray-700 dark:hover:text-gray-200',
      )}
    >
      {children}
    </button>
  )
}
