import { companyData, contactData } from '../data/siteData'
import CTA from '../components/CTA'

function ContactPage() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Kontakt</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300">
            Nájdeš tu adresu, mapu, telefón, e-mail, otváracie hodiny aj prevádzkové údaje fitness centra.
          </p>
        </div>
      </section>
      <CTA showIntro={false} />
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white">Fakturačné údaje</h2>
            <p className="mt-4 text-neutral-300">
              Samostatný prehľad prevádzkových a fakturačných údajov pre administratívu, zmluvy a firemnú komunikáciu.
            </p>
          </div>
          <div className="mt-10 rounded-lg border border-white/10 bg-white/5 p-8">
            <dl className="grid gap-6 text-sm text-neutral-300 sm:grid-cols-2">
              <div>
                <dt className="text-neutral-500">Prevádzkovateľ</dt>
                <dd className="mt-2 text-base font-semibold text-white">{companyData.operator}</dd>
              </div>
              <div>
                <dt className="text-neutral-500">Sídlo</dt>
                <dd className="mt-2 text-base font-semibold text-white">{companyData.registeredOffice}</dd>
              </div>
              <div>
                <dt className="text-neutral-500">IČO</dt>
                <dd className="mt-2 text-base font-semibold text-white">{companyData.ico}</dd>
              </div>
              <div>
                <dt className="text-neutral-500">IČ DPH</dt>
                <dd className="mt-2 text-base font-semibold text-white">{companyData.icDph}</dd>
              </div>
              <div>
                <dt className="text-neutral-500">Zodpovední vedúci</dt>
                <dd className="mt-2 text-base font-semibold text-white">{companyData.managers}</dd>
              </div>
              <div>
                <dt className="text-neutral-500">Kontakt na vedúceho</dt>
                <dd className="mt-2 text-base font-semibold text-white">{contactData.managerPhone}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
