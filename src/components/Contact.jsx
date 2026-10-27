import { useState } from 'react'
import Reveal from './Reveal'
import { email, socials } from '../data'

const field =
  'w-full rounded-lg border border-line bg-bg px-4 py-3 text-white placeholder-slate-600 focus:border-brand2 focus:outline-none focus:ring-2 focus:ring-brand2/30'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [note, setNote] = useState('')
  const [sending, setSending] = useState(false)

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setNote('')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
        }),
      })
      const result = await response.json()

      if (!response.ok || (result.success !== 'true' && result.success !== true)) {
        throw new Error(result.message || 'The message could not be sent.')
      }

      setNote('Thanks! Your message has been sent.')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      setNote(error instanceof Error ? error.message : 'The message could not be sent. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="border-t border-line bg-bg2 px-[5%] py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Let's build something great together.
          </h2>
          <p className="mt-5 max-w-md text-slate-400">
            Have a project in mind or just want to say hello? Send a message and I'll reply by email.
          </p>

          <div className="mt-8 flex gap-3">
            {socials.map((s) => (
              <a key={s.title} href={s.href} title={s.title} target="_blank" rel="noopener noreferrer"
                className="interactive-icon flex h-11 w-11 items-center justify-center rounded-lg border border-line text-slate-400 transition hover:border-brand2 hover:text-white">
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal as="form" onSubmit={onSubmit} className="interactive-card flex flex-col gap-5 rounded-2xl border border-line bg-bg3 p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">Your name</label>
            <input id="name" required value={form.name} onChange={update('name')} className={field} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">Your email</label>
            <input id="email" type="email" required value={form.email} onChange={update('email')} className={field} />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">Message</label>
            <textarea id="message" rows="5" required value={form.message} onChange={update('message')} className={field} />
          </div>
          <button type="submit" disabled={sending} className="rounded-lg bg-brand py-3.5 font-medium text-white transition hover:bg-brand2 disabled:cursor-not-allowed disabled:opacity-60">
            {sending ? 'Sending...' : 'Send message'}
          </button>
          <p role="status" className="min-h-[1.25rem] text-sm text-slate-500">{note}</p>
        </Reveal>
      </div>
    </section>
  )
}
