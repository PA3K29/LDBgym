function Cookies() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-white">Cookies</h1>
      <div className="mt-8 space-y-6 text-neutral-300">
        <p>
          Web LDB GYM nepoužíva analytické ani marketingové trackery. Ukladá len technickú informáciu o potvrdení cookies lišty.
        </p>
        <div>
          <h2 className="text-2xl font-semibold text-white">Nevyhnutné cookies</h2>
          <p className="mt-3">Slúžia na zapamätanie tvojej voľby v cookies lište a na základné fungovanie rozhrania.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Správa nastavení</h2>
          <p className="mt-3">Nastavenie môžeš zmeniť vymazaním údajov lokálne uložených v prehliadači.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Externý mapový obsah</h2>
          <p className="mt-3">
            Kontaktná sekcia môže načítať vloženú mapu od služby Google Maps. Pri jej zobrazení môže tretia strana spracovať technické údaje, ako je IP adresa alebo informácie o prehliadači.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cookies
