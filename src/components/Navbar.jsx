import { useEffect, useState } from 'react'
import { navLinks } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b px-[5%] py-5 transition-all duration-300 ${
          scrolled ? 'border-line bg-bg/90 backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        <a href="#hero" className="font-display text-xl font-extrabold text-white">
         <span className="text-brand2"> RAKIBUL</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[13px] uppercase tracking-wider text-slate-400 transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden rounded border border-brand px-6 py-2.5 text-[13px] uppercase tracking-wider text-brand2 transition hover:bg-brand hover:text-white md:inline-block">
          Hire Me
        </a>
        <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="flex flex-col gap-[5px] p-1 md:hidden">
          <span className="block h-0.5 w-[22px] rounded bg-slate-400" />
          <span className="block h-0.5 w-[22px] rounded bg-slate-400" />
          <span className="block h-0.5 w-[22px] rounded bg-slate-400" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 flex flex-col gap-6 border-b border-line bg-bg/95 px-[5%] py-8 backdrop-blur-xl md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="uppercase tracking-wider text-slate-400 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
