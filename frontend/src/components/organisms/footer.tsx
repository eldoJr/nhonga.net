import Logo from '../atoms/logo'

const links = {
  Platform: ['Jobs', 'Academic', 'Networking', 'Services'],
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Support: ['Help Center', 'Contact', 'Privacy', 'Terms'],
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 dark:border-gray-800/60">
      <div className="max-w-[1250px] mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Logo width={100} height={30} className="mb-4" />
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Connecting Mozambique's best professionals with the opportunities they deserve.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                  {title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Nhonga. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
