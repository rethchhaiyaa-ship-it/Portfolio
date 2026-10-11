import { profile } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
        <SectionHeading label="About" title="About me" />

        <div className="mt-8 max-w-2xl space-y-5">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed text-body">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}