export default function CreatorBanner() {
  return (
    <div className="w-full rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ backgroundColor: '#06210D' }}>
      <div className="flex flex-col gap-1">
        <p className="text-white font-semibold text-base">Are you a creator?</p>
        <p className="text-gray-400 text-sm leading-relaxed whitespace-nowrap">
          Publish your music, film, book or art and reach the whole Nhonga community.
        </p>
      </div>
      <a
        href="#"
        className="shrink-0 px-6 py-2.5 rounded-full bg-nhonga-500 hover:bg-nhonga-600 text-white text-sm font-semibold transition-colors whitespace-nowrap"
      >
        Submit your project
      </a>
    </div>
  )
}
