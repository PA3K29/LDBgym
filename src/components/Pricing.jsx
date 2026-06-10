import { pricingPlans } from '../data/siteData'

function Pricing({ showIntro = true }) {
  return (
    <section id="pricing" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {showIntro ? (
          <>
            <h2 className="text-3xl font-semibold text-white">Cenník</h2>
            <p className="mt-4 max-w-2xl text-neutral-300">
              Aktuálny cenník pre dospelých a študentov. Akceptujeme aj karty MultiSport.
            </p>
            <div className="mt-6 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-200">
              Akceptujeme karty MultiSport
            </div>
          </>
        ) : null}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-lg border p-6 ${
                plan.highlighted ? 'border-red-500 bg-red-500/10' : 'border-white/10 bg-white/5'
              }`}
            >
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <div className="mt-6 space-y-3">
                {plan.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm text-neutral-100"
                  >
                    <span>{item.label}</span>
                    <span className="whitespace-nowrap text-base font-semibold text-red-300">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-neutral-300">{plan.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
