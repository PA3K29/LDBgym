import { contactData } from '../data/siteData'

function CTA({ showIntro = true }) {
  return (
    <section id="cta">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/5 p-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            {showIntro ? (
              <>
                <h2 className="text-3xl font-semibold text-white">Kontakt a prevádzka</h2>
                <p className="mt-4 max-w-xl text-neutral-300">Všetky dôležité kontaktné údaje, otváracie hodiny a informácie o prevádzke na jednom mieste.</p>
              </>
            ) : null}
            <div className="mt-8 space-y-4 text-sm text-neutral-200">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Adresa</p>
                <p className="mt-2">{contactData.address}</p>
              </div>
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
          <div className="space-y-6">
            <div className="rounded-lg border border-white/10 bg-neutral-950/70 p-6">
              <h3 className="text-xl font-semibold text-white">Mapa a navigácia</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-300">{contactData.mapAlt}</p>
              <div className="mt-6 overflow-hidden rounded-lg border border-white/15 bg-white">
                <iframe
                  src={contactData.mapEmbedUrl}
                  title={contactData.mapAlt}
                  className="h-[26rem] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={contactData.mapLink}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                {contactData.mapLabel}
              </a>
              <p className="mt-3 text-sm text-neutral-400">{contactData.venueAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
