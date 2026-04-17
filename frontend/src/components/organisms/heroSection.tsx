import heroImg from '../../assets/images/hero.png'

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-6 pt-8 pb-0 overflow-hidden bg-white">
      {/* Main layered section — bottom aligns with hero image bottom */}
      <div className="relative flex items-end justify-center mt-4">

        {/* Subtitle */}
        <div className="absolute left-12 md:left-16 top-[35%] z-30 max-w-[220px] md:max-w-xs">
          <h1 className="text-2xl md:text-3xl font-normal leading-tight text-gray-900">
            The World&rsquo;s Best Professionals Are On
          </h1>
        </div>

        {/* NHONGA behind image */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 translate-y-[10%]"
          aria-hidden="true"
        >
          <span className="font-montserrat font-bold text-[120px] md:text-[190px] lg:text-[250px] tracking-normal text-nhonga-400 leading-[108%] whitespace-nowrap">
            NHONGA
          </span>
        </div>

        {/* Hero image — defines section height */}
        <div className="relative z-10 flex justify-center">
          <img
            src={heroImg}
            alt="Professional on Nhonga"
            className="h-[460px] md:h-[570px] lg:h-[660px] w-auto object-contain"
          />
        </div>

        {/* NHON in front */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-20 translate-y-[10%]"
          aria-hidden="true"
        >
          <span className="font-montserrat font-bold text-[120px] md:text-[190px] lg:text-[250px] tracking-normal leading-[108%] whitespace-nowrap">
            <span className="text-nhonga-400">NHON</span>
            <span className="text-transparent">GA</span>
          </span>
        </div>

        {/* CTA buttons */}
        <div className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-30 inline-flex items-stretch bg-nhonga-500/20 backdrop-blur-xl rounded-full overflow-hidden">
          <a
            href="#"
            className="flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-nhonga-500 rounded-full m-1 hover:bg-nhonga-600 transition-all duration-200"
          >
            Hire a Professional
          </a>
          <a
            href="#"
            className="flex items-center px-7 py-3.5 text-sm font-semibold text-white border border-white/30 rounded-full m-1 hover:border-white/60 transition-all duration-200"
          >
            Look For a Job
          </a>
        </div>

        {/* Dot pattern — fades up from bottom of hero image */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-[5] pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
            <defs>
              <pattern id="hero-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.2" className="fill-nhonga-400/40" />
              </pattern>
              <linearGradient id="dots-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="60%" stopColor="white" stopOpacity="1" />
              </linearGradient>
              <mask id="dots-mask">
                <rect width="100%" height="100%" fill="url(#dots-fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" mask="url(#dots-mask)" />
          </svg>
        </div>
      </div>
    </section>
  )
}
