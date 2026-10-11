import { skillGroups } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
        <SectionHeading label="Skills" title="What I work with" />

        <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <dt className="text-sm font-medium text-strong">{group.title}</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line px-2 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}