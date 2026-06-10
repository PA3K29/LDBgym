import { trainers } from '../data/siteData'
import ImageWithFallback from './ImageWithFallback'

function Trainers({ showIntro = true }) {
  return (
    <section id="trainers" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {showIntro ? (
          <>
            <h2 className="text-3xl font-semibold text-white">Tréneri</h2>
            <p className="mt-4 max-w-2xl text-neutral-300">
              Predstavenie trénerov s pripravenými slotmi na portréty a stručné zameranie.
            </p>
          </>
        ) : null}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="grid gap-6 sm:grid-cols-[180px_1fr]">
                <ImageWithFallback
                  src={trainer.image}
                  alt={trainer.alt}
                  className="aspect-square w-full rounded-lg border border-white/10 object-cover"
                  fallbackLabel={trainer.name}
                />
                <div>
                  <h3 className="text-2xl font-semibold text-white">{trainer.name}</h3>
                  <p className="mt-2 text-red-300">{trainer.role}</p>
                  <p className="mt-4 text-sm leading-6 text-neutral-300">{trainer.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
