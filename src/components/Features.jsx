import { featureItems } from '../data/siteData'

function Features() {
  return (
    <section id="features" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white">Prečo trénovať v LDB GYM</h2>
          <p className="mt-4 text-neutral-300">
            Premyslené zázemie, skúsený tím a prostredie navrhnuté pre dlhodobý progres.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featureItems.map((item) => (
            <article key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
