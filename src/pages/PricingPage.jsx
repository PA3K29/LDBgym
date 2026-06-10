import Pricing from '../components/Pricing'

function PricingPage() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Cenník</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300">
            Všetky vstupy a členstvá prehľadne na jednom mieste. Vyber si variant, ktorý ti najviac sedí.
          </p>
        </div>
      </section>
      <Pricing showIntro={false} />
    </>
  )
}

export default PricingPage
