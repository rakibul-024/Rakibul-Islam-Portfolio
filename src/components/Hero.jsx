import Avatar from './Avatar'

export default function Hero() {
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
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs uppercase tracking-widest text-brand2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand2" /> Available for work
        </div>
        <h1 className="font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          RAKIBUL<br />ISLAM
        </h1>
        <div className="mt-4 font-display text-xl text-brand2">Full Stack Developer</div>
        <p className="mt-5 max-w-lg text-slate-400">
          I build complete web apps — from the database and authentication to a clean, responsive interface. Based in Bangladesh, open to work worldwide.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded bg-brand px-8 py-3.5 font-medium text-white transition hover:bg-brand2">View My Work</a>
          <a href="#contact" className="rounded border border-line px-8 py-3.5 text-slate-300 transition hover:border-brand2 hover:text-white">Get in Touch</a>
        </div>
      </div>

      <div className="relative z-10 flex justify-center">
        <div className="relative h-72 w-72 sm:h-96 sm:w-96">
          <div className="absolute -inset-4 rounded-full border border-brand/30" />
          <div className="absolute -inset-9 rounded-full border border-dashed border-brand/20" />
          <Avatar className="h-full w-full overflow-hidden rounded-full border-2 border-brand" />
        </div>
      </div>
    </section>
  )
}
