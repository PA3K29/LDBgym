import { galleryItems } from '../data/siteData'
import ImageWithFallback from './ImageWithFallback'

function Gallery() {
  return (
    <section id="gallery" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">Galéria priestoru</h2>
            <p className="mt-4 max-w-2xl text-neutral-300">
              Pripravené sloty pre fotografie interiéru, zón aj vybavenia. Po doplnení obrázkov sa automaticky zobrazia.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {galleryItems.map((item) => (
            <figure key={item.title} className="space-y-3">
              <ImageWithFallback
                src={item.image}
                alt={item.alt}
                className="aspect-[4/3] w-full rounded-lg border border-white/10 object-cover"
                fallbackLabel={item.title}
              />
              <figcaption className="text-sm text-neutral-300">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
