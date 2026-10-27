import Reveal from './Reveal'
import Avatar from './Avatar'

const cards = [
  { icon: 'fa-layer-group', title: 'Frontend', text: 'Responsive, accessible UI' },
  { icon: 'fa-server', title: 'Backend', text: 'APIs and authentication' },
  { icon: 'fa-database', title: 'Database', text: 'MongoDB data models' },
]

export default function About() {
  return (
    <section id="about" className="px-[5%] py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="interactive-card relative mx-auto max-w-sm rounded-2xl border border-line bg-bg3 p-1 lg:mx-0">
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-brand/40" />
          <Avatar className="relative aspect-[4/5] w-full rounded-2xl" />
        </Reveal>

        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            I build web apps that work end to end.
          </h2>
          <p className="mt-6 text-slate-400">
            I'm <strong className="font-medium text-white">MD RAKIBUL ISLAM</strong>, a Full Stack Developer from Bangladesh. I take an idea from an empty folder to a live site: I design the interface, build the backend, connect the database and deploy it.
          </p>
          <p className="mt-4 text-slate-400">
            My daily stack is <strong className="font-medium text-white">Next.js, React, Tailwind CSS, Node.js and MongoDB</strong>, with Better Auth for sign-in. Everything I've built is on GitHub and running on Vercel, so you can open it and try it.
          </p>
          <p className="mt-4 text-slate-400">
            I care about code that is easy to read, pages that load fast, and screens that feel obvious to use on a phone as well as a laptop.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {cards.map((c) => (
              <div key={c.title} className="interactive-card rounded-xl border border-line bg-bg2 p-4">
                <i className={`fa-solid ${c.icon} mb-2 text-brand2`} />
                <div className="font-medium text-white">{c.title}</div>
                <div className="text-sm text-slate-500">{c.text}</div>
              </div>
            ))}
          </div>

          <a href="https://github.com/rakibul-024" target="_blank" rel="noopener noreferrer" className="interactive-link mt-8 inline-block text-sm text-brand2 transition hover:text-white">
            <i className="fa-brands fa-github mr-1" /> GitHub profile
          </a>
        </Reveal>
      </div>
    </section>
  )
}
