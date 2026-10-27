import { useState } from 'react'

// Shows /profile.png. If the file is missing, shows initials instead of a broken image.
export default function Avatar({ className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-bg3 font-display text-6xl font-extrabold text-brand2 ${className}`}>
        MRI
      </div>
    )
  }
  return (
    <img
      src="/profile.png"
      alt="MD RAKIBUL ISLAM"
      onError={() => setFailed(true)}
      className={`object-cover bg-bg3 ${className}`}
    />
  )
}
