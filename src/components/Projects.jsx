import Reveal from './Reveal'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className="font-display text-3xl font-bold text-white sm:text-4xl">Projects</Reveal>
        <Reveal as="p" className="mt-3 max-w-xl text-slate-400">
          Four full stack apps, each live on Vercel with the source on GitHub.
        </Reveal>

        <div className="mt-14 flex flex-col gap-20">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.title} className="project-card grid items-center gap-8 rounded-2xl border border-line bg-bg3/40 p-4 sm:p-6 lg:grid-cols-2">
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-preview group relative block overflow-hidden rounded-xl border border-line bg-bg3 ${i % 2 ? 'lg:order-2' : ''}`}
              >
                <img
                  src={p.img}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  className="project-image aspect-[1200/548] w-full object-cover object-center"
                />
                <span className="project-preview-icon" aria-hidden="true">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </span>
              </a>
              <div>
                <h3 className="project-title font-display text-2xl font-bold text-white sm:text-3xl">{p.title}</h3>
                <p className="mt-4 text-slate-400">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs text-brand2">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="interactive-button rounded bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand2">
                    <i className="fa-solid fa-arrow-up-right-from-square mr-2 text-xs" />Live site
                  </a>
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className="interactive-button rounded border border-line px-5 py-2.5 text-sm text-slate-300 transition hover:border-brand2 hover:text-white">
                    <i className="fa-brands fa-github mr-2" />Source code
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
