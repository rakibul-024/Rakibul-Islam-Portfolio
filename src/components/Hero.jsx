import { useEffect, useState } from 'react'
import Avatar from './Avatar'

const titles = [
  'Full Stack Web Developer',
  'UI/UX Designer',
  'Building Modern Web Experiences',
  'React & TypeScript Enthusiast',
  'Always passionate to learn new.....',
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [typedTitle, setTypedTitle] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const complete = !deleting && typedTitle === currentTitle
    const delay = complete ? 1500 : deleting ? 45 : 90

    const timeout = window.setTimeout(() => {
      if (complete) {
        setDeleting(true)
      } else if (deleting && typedTitle.length === 0) {
        setDeleting(false)
        setTitleIndex((index) => (index + 1) % titles.length)
      } else {
        setTypedTitle((value) => deleting ? value.slice(0, -1) : currentTitle.slice(0, value.length + 1))
      }
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [deleting, titleIndex, typedTitle])

  return (
    <section id="hero" className="relative grid min-h-screen items-center gap-12 overflow-hidden px-[5%] pb-16 pt-32 md:grid-cols-2">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(rgba(30,77,183,.12) 1px,transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(30,77,183,.12),transparent 65%)' }}
      />

      <div className="relative z-10">
        <h1 className="font-display text-5xl font-extrabold text-mauve-100 sm:text-6xl lg:text-7xl">
          RAKIBUL<br />ISLAM
        </h1>
        <div className="mt-4 min-h-16 font-display text-xl text-brand2 sm:min-h-8 sm:text-2xl" aria-hidden="true">
          {typedTitle}<span className="typewriter-cursor">|</span>
        </div>
        <span className="sr-only">Full Stack Web Developer, UI/UX Designer, Building Modern Web Experiences, React &amp; TypeScript Enthusiast, Always passionate to learn new.....</span>
        <p className="mt-5 max-w-lg text-slate-400">
          I build complete web apps — from the database and authentication to a clean, responsive interface. Based in Bangladesh, open to work worldwide.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="interactive-button rounded bg-brand px-8 py-3.5 font-medium text-white transition hover:bg-brand2">View My Work</a>
          <a href="#contact" className="interactive-button rounded border border-line px-8 py-3.5 text-slate-300 transition hover:border-brand2 hover:text-white">Get in Touch</a>
        </div>
      </div>

      <div className="relative z-10 flex justify-center">
        <div className="relative h-64 w-64 sm:h-72 sm:w-72">
          <div className="avatar-orbit avatar-orbit-outer absolute -inset-8 rounded-full" aria-hidden="true">
            <span className="avatar-orbit-dot avatar-orbit-dot-primary" />
            <span className="avatar-orbit-dot avatar-orbit-dot-secondary" />
          </div>
          <div className="avatar-orbit avatar-orbit-inner absolute -inset-4 rounded-full" aria-hidden="true" />
          <Avatar decorated className="h-full w-full" />
        </div>
      </div>
    </section>
  )
}
