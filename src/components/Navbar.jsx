import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import { HexagonIcon } from './icons.jsx'

const tabs = [
  { to: '/learn', label: 'Learn' },
  { to: '/about', label: 'About' },
  { to: '/download', label: 'Download' },
  { to: '/docs', label: 'Docs' },
  { to: '/contribute', label: 'Contribute' },
]

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-glow transition-transform duration-300 group-hover:rotate-[18deg] group-hover:scale-105">
        <HexagonIcon className="h-4 w-4" strokeWidth="2" />
      </span>
      <span className="flex items-baseline gap-2">
        <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-neutral-50">MyanCode</span>
        <span className="hidden sm:inline text-neutral-300 dark:text-neutral-600 text-sm">·</span>
        <span className="hidden sm:inline myan text-primary dark:text-[#a59cff] text-base font-medium">မြန်မာကုဒ်</span>
      </span>
    </Link>
  )
}

function GithubIcon() {
  return (
    <a
      href="https://github.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.72-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </a>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 dark:border-white/5 glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden md:flex items-center gap-0.5">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.to}
                  to={tab.to}
                  className={({ isActive }) =>
                    `relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary dark:text-[#a59cff]'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute inset-0 -z-10 rounded-lg bg-primary/8 dark:bg-[#a59cff]/10" />
                      )}
                      {tab.label}
                      {isActive && (
                        <span className="absolute -bottom-[17px] left-3.5 right-3.5 h-[2px] rounded-full bg-brand-gradient" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <GithubIcon />
              <ThemeToggle />
              <a
                href="https://myan-code.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#0a3d33] shadow-glow-accent transition-all hover:bg-[#3fb39d] hover:-translate-y-0.5"
              >
                Try IDE
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 py-4 space-y-1">
            {tabs.map((tab) => (
              <NavLink
                key={tab.to}
                to={tab.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-primary/10 text-primary dark:text-[#a59cff]'
                      : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`
                }
              >
                {tab.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 px-3 pt-3">
              <GithubIcon />
              <ThemeToggle />
              <a
                href="https://myan-code.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-[#0a3d33]"
              >
                Try IDE →
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
