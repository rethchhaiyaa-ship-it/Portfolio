import { useEffect, useState } from 'react'
import useActiveSection from '../hooks/useActiveSection.js'
import { navLinks, profile } from '../data/portfolio.js'
import ThemeToggle from './ThemeToggle.jsx'

const ids = navLinks.map((link) => link.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="text-sm font-medium text-strong">
          {profile.name}
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={`text-sm transition-colors ${
                    active === link.id
                      ? 'text-strong'
                      : 'text-muted hover:text-strong'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-1 flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-strong md:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line md:hidden">
          <ul className="mx-auto flex w-full max-w-5xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={`block py-2.5 text-sm transition-colors ${
                    active === link.id
                      ? 'text-strong'
                      : 'text-muted hover:text-strong'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}