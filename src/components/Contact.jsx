import { profile } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  const links = [
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
  ].filter((link) => link.href)

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
        <SectionHeading label="Contact" title="Get in touch" />

        <p className="mt-8 max-w-xl leading-relaxed text-body">
          I&apos;m open to connecting — whether you have a project in mind, want to give
          feedback on my work, or just want to talk about what you are building. My inbox
          is always open.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-accent transition-colors hover:text-accent-hover"
          >
            {profile.email}
          </a>

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-muted transition-colors hover:text-strong"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Built with React and Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}