import { profile } from '../data/portfolio.js'

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-16">
          <div>
            <p className="text-sm text-accent">{profile.location}</p>

            <h1 className="mt-4 max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl">
              Hi, I&apos;m {profile.name}. I build software and keep learning.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-body">
              {profile.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-md border border-line-strong bg-surface px-4 py-2.5 text-sm font-medium text-strong transition-colors hover:border-strong"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-md px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-strong"
              >
                Contact Me
              </a>
            </div>
          </div>

          {profile.photo && (
            <img
              src={profile.photo}
              alt=""
              width={256}
              height={341}
              className="mx-auto aspect-[3/4] w-80 max-w-full rounded-lg border border-line object-cover object-top sm:mx-0 sm:w-64"
            />
          )}
        </div>
      </div>
    </section>
  )
}