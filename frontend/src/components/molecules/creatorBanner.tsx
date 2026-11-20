export default function CreatorBanner() {
  return (
    <div className="w-full rounded-2xl px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ backgroundColor: '#06210D' }}>
      <div className="flex flex-col gap-0.5">
        <p className="text-white font-semibold text-sm">Are you a creator?</p>
        <p className="text-gray-400 text-xs leading-relaxed">
          Publish your music, film, book or art and reach the whole Nhonga community.
        </p>
      </div>
      <a
        href="#"
        className="shrink-0 px-5 py-2 rounded-full bg-nhonga-500 hover:bg-nhonga-600 text-gray-950 text-xs font-semibold transition-colors"
      >
        Submit your project
      </a>
    </div>
  )
}
