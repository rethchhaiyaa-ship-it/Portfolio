import { projects } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
        <SectionHeading label="Projects" title="Things I have built" />

        <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-12">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Project({ project }) {
  return (
    <article className="w-full sm:max-w-[calc(50%-1rem)]">
      {project.image && (
        <a
          href={project.repo ?? project.demo ?? undefined}
          target="_blank"
          rel="noreferrer noopener"
          tabIndex={-1}
          aria-hidden="true"
          className="mb-4 block overflow-hidden rounded-md border border-line bg-surface"
        >
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="aspect-[16/10] w-full object-cover"
          />
        </a>
      )}

      <h3 className="text-base font-medium">{project.title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-body">{project.description}</p>

      <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
        {project.tech.map((tech) => (
          <li key={tech} className="text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>

      {(project.repo || project.demo) && (
        <div className="mt-4 flex gap-4 text-sm">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent transition-colors hover:text-accent-hover"
            >
              Source code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent transition-colors hover:text-accent-hover"
            >
              Live demo
            </a>
          )}
        </div>
      )}
    </article>
  )
}