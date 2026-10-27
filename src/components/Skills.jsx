import Reveal from './Reveal'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-bg2 px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className="font-display text-3xl font-bold text-white sm:text-4xl">Skills</Reveal>
        <Reveal as="p" className="mt-3 max-w-xl text-slate-400">
          The full stack I work with, plus the everyday computer skills that keep my work organized.
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <Reveal key={s.title} className="interactive-card rounded-2xl border border-line bg-bg3 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 text-brand2">
                <i className={`fa-solid ${s.icon}`} />
              </div>
              <h3 className="mb-4 font-display text-lg font-semibold text-white">{s.title}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="rounded-full border border-line px-3 py-1.5 text-xs text-slate-300">{i}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
