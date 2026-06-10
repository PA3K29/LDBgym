import Gallery from '../components/Gallery'

function GalleryPage() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Galéria</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300">
            Pozri si priestory, vybavenie a atmosféru LDB GYM. Po doplnení všetkých fotografií bude galéria pripravená na plné použitie.
          </p>
        </div>
      </section>
      <Gallery showIntro={false} />
    </>
  )
}

export default GalleryPage
