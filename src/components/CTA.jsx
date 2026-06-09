import { contactData } from '../data/siteData'
import ImageWithFallback from './ImageWithFallback'

function CTA() {
  return (
    <section id="cta">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/5 p-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold text-white">Pripravený začať?</h2>
            <p className="mt-4 max-w-xl text-neutral-300">
              Ozvi sa nám, doplň reálne kontaktné údaje a pripravíme web na ostré nasadenie.
            </p>
            <div className="mt-8 space-y-3 text-sm text-neutral-200">
              <p>{contactData.address}</p>
              <a href={`tel:${contactData.phone.replace(/\s+/g, '')}`} className="block transition hover:text-white">
                {contactData.phone}
              </a>
              <a href={`mailto:${contactData.email}`} className="block transition hover:text-white">
                {contactData.email}
              </a>
              <div className="pt-3 text-neutral-400">
                {contactData.hours.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          <ImageWithFallback
            src={contactData.mapImage}
            alt={contactData.mapAlt}
            className="aspect-[4/3] w-full rounded-lg border border-white/10 object-cover"
            fallbackLabel="Sem doplníš mapu alebo fotku exteriéru"
          />
        </div>
      </div>
    </section>
  )
}

export default CTA
