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
    <div className={`avatar-shell relative rounded-full p-[3px] ${className}`}>
      <div className="avatar-ring absolute inset-0 rounded-full" aria-hidden="true" />
      <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-2 border-bg">
        {image}
      </div>
      <div className="absolute -bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-brand/40 bg-bg3 px-4 py-2 text-xs font-medium text-white shadow-lg sm:text-sm">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        Available for Hire
      </div>
    </div>
  )
}
