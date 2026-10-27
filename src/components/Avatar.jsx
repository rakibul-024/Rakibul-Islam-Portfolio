import { useState } from 'react'

export default function Avatar({ className = '', decorated = false }) {
  const [failed, setFailed] = useState(false)

  const image = failed ? (
    <div className="flex h-full w-full items-center justify-center bg-bg3 font-display text-6xl font-extrabold text-brand2">
      MRI
    </div>
  ) : (
    <img
      src="/images/profile.png"
      alt="MD RAKIBUL ISLAM"
      onError={() => setFailed(true)}
      className="profile-photo h-full w-full bg-bg3 object-cover"
    />
  )

  if (!decorated) {
    return <div className={`profile-photo-frame overflow-hidden ${className}`}>{image}</div>
  }

  return (
    <div className={`avatar-shell relative rounded-full ${className}`}>
      <div className="avatar-photo-frame relative z-10 h-full w-full overflow-hidden rounded-full">
        {image}
      </div>
      <div className="absolute -bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-blue-400/40 bg-brand px-4 py-2 text-xs font-bold uppercase text-white shadow-[0_0_24px_rgba(37,99,235,0.4)] sm:text-sm">
        <i className="fa-solid fa-circle-check text-xs" aria-hidden="true" />
        Available for Hire
      </div>
    </div>
  )
}
