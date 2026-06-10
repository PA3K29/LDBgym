import { featureItems, gymDescription } from '../data/siteData'

function Features() {
  return (
    <section id="features" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{gymDescription.title}</h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-neutral-300">
            {gymDescription.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
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
