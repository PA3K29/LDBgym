import { useEffect, useState } from 'react'
import { galleryItems } from '../data/siteData'
import ImageWithFallback from './ImageWithFallback'

function Gallery({ showIntro = true }) {
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    if (activeIndex === null) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % galleryItems.length)
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + galleryItems.length) % galleryItems.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])

  const activeItem = activeIndex !== null ? galleryItems[activeIndex] : null

  return (
    <>
      <section id="gallery" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {showIntro ? (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">Galéria priestoru</h2>
                <p className="mt-4 max-w-2xl text-neutral-300">
                  Kliknutím na fotografiu si ju môžeš otvoriť vo väčšom náhľade.
                </p>
              </div>
            </div>
          ) : (
            <p className="max-w-2xl text-neutral-300">Kliknutím na fotografiu si ju môžeš otvoriť vo väčšom náhľade.</p>
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <figure key={item.title} className="space-y-3">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="block w-full overflow-hidden rounded-lg transition hover:opacity-90"
                aria-label={`Otvoriť fotografiu: ${item.title}`}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[4/3] w-full rounded-lg border border-white/10 object-cover"
                  fallbackLabel={item.title}
                />
              </button>
              <figcaption className="text-sm text-neutral-300">{item.title}</figcaption>
            </figure>
          ))}
          </div>
        </div>
      </section>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 z-10 rounded-md bg-black/70 px-3 py-2 text-sm font-semibold text-white transition hover:bg-black"
              aria-label="Zavrieť náhľad"
            >
              Zavrieť
            </button>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-neutral-950">
              <ImageWithFallback
                src={activeItem.image}
                alt={activeItem.alt}
                className="max-h-[80vh] w-full object-contain"
                fallbackLabel={activeItem.title}
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex - 1 + galleryItems.length) % galleryItems.length)}
                className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30"
              >
                Predchádzajúca
              </button>
              <p className="text-center text-sm text-neutral-300">
                {activeItem.title}
              </p>
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % galleryItems.length)}
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                Ďalšia
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Gallery
