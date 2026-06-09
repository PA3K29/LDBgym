import { pricingPlans } from '../data/siteData'

function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">Cenník</h2>
        <p className="mt-4 max-w-2xl text-neutral-300">Jednoduchá a prehľadná ponuka bez zbytočného chaosu.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-lg border p-6 ${
                plan.highlighted ? 'border-red-500 bg-red-500/10' : 'border-white/10 bg-white/5'
              }`}
            >
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
              <p className="mt-3 text-sm text-neutral-300">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-200">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
