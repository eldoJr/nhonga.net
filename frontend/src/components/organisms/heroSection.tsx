import heroImg from '../../assets/images/hero.png'

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-6 pt-8 pb-0 overflow-hidden bg-white">
      {/* Green gradient glow behind hero */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-nhonga-400/20 rounded-full blur-[100px] pointer-events-none" />
      {/* Main layered section */}
      <div className="relative flex items-end justify-center min-h-[420px] md:min-h-[520px] mt-4">

        {/* Subtitle — positioned left of image, vertically centered */}
        <div className="absolute left-12 md:left-16 top-[35%] z-30 max-w-[220px] md:max-w-xs">
          <h1 className="text-2xl md:text-3xl font-normal leading-tight text-gray-900">
            The World&rsquo;s Best Professionals Are On
          </h1>
        </div>

        {/* NHONGA behind image (full word — GA peeks out right side) */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 translate-y-[10%]"
          aria-hidden="true"
        >
          <span className="font-montserrat font-bold text-[120px] md:text-[190px] lg:text-[250px] tracking-normal text-nhonga-400 leading-[108%] whitespace-nowrap">
            NHONGA
          </span>
        </div>

        {/* Hero image — middle layer */}
        <div className="relative z-10 flex justify-center">
          <img
            src={heroImg}
            alt="Professional on Nhonga"
            className="h-[460px] md:h-[570px] lg:h-[660px] w-auto object-contain"
          />
        </div>

        {/* NHON in front of image (GA hidden to let image cover it) */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-20 translate-y-[10%]"
          aria-hidden="true"
        >
          <span className="font-montserrat font-bold text-[120px] md:text-[190px] lg:text-[250px] tracking-normal leading-[108%] whitespace-nowrap">
            <span className="text-nhonga-400">NHON</span>
            <span className="text-transparent">GA</span>
          </span>
        </div>

        {/* CTA buttons — floating pill */}
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
      </div>

      {/* Bottom dots + green shadow + divider */}
      <div className="relative w-full h-20 overflow-hidden">
        {/* Green glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[80px] bg-nhonga-400/15 rounded-full blur-[60px]" />

        {/* Dot grid rising from bottom */}
        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-full opacity-40" aria-hidden="true">
          {Array.from({ length: 15 }).map((_, row) =>
            Array.from({ length: 35 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 20 + 10}
                cy={80 - row * 8}
                r={1.2}
                className="fill-nhonga-500"
                style={{ opacity: 1 - row * 0.07 }}
              />
            ))
          )}
        </svg>

        {/* Bottom divider line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-px bg-gradient-to-r from-transparent via-nhonga-400/40 to-transparent" />
      </div>
    </section>
  )
}
