import { useEffect, useState } from 'react'

const STORAGE_KEY = 'ldbgym-cookie-consent'

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const savedValue = window.localStorage.getItem(STORAGE_KEY)
    setVisible(!savedValue)
  }, [])

  const handleConsent = (value) => {
    window.localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-neutral-950/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="max-w-3xl text-sm text-neutral-300">
          Tento web používa len nevyhnutné cookies pre základné fungovanie a uloženie voľby súhlasu.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleConsent('declined')}
            className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30"
          >
            Zavrieť
          </button>
          <button
            type="button"
            onClick={() => handleConsent('accepted')}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Rozumiem
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
