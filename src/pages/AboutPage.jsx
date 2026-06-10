import Features from '../components/Features'

function AboutPage() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">O nás</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300">
            Spoznaj LDB GYM, naše priestory, vybavenie a prístup k tréningu. Všetko podstatné o zázemí a atmosfére nájdeš na jednom mieste.
          </p>
        </div>
      </section>
      <Features />
    </>
  )
}

export default AboutPage
