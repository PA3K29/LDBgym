import { useState } from 'react'

function ImageWithFallback({ src, alt, className = '', fallbackLabel = 'Obrázok bude doplnený' }) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-neutral-900 text-center text-sm text-neutral-400 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="max-w-[12rem] px-4">{fallbackLabel}</span>
      </div>
    )
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setHasError(true)} />
}

export default ImageWithFallback
