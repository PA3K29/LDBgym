import { productsPageData } from '../data/siteData'

function ProductCan({ title, accent = 'bg-red-600/70' }) {
  return (
    <div className="relative mx-auto h-48 w-32 rounded-[28px] bg-neutral-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
      <div className="absolute left-1/2 top-2 h-4 w-24 -translate-x-1/2 rounded-full bg-neutral-900 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
      <div className={`absolute inset-x-5 bottom-5 rounded-md ${accent} px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white`}>
        {title}
      </div>
    </div>
  )
}

function ProductsPage() {
  const { hero, categories, products, featuredProduct, goals } = productsPageData

  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-neutral-950">
          <div
            className="relative min-h-[480px] bg-cover bg-center"
            style={{ backgroundImage: `url(${hero.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black/72" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/35" />
            <div className="relative z-10 grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_1.15fr] lg:px-14 lg:py-14">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-300">{hero.eyebrow}</p>
                <h1 className="mt-4 text-5xl font-semibold uppercase tracking-wide text-white sm:text-6xl">
                  {hero.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-neutral-200">{hero.subtitle}</p>
                <div className="mt-8 rounded-lg border border-white/10 bg-black/30 p-5">
                  <p className="text-lg font-semibold text-white">Nevieš si vybrať?</p>
                  <p className="mt-2 text-neutral-300">Radi ti poradíme osobne na recepcii podľa cieľa, tréningu a rozpočtu.</p>
                </div>
              </div>

              <div className="grid items-end gap-4 sm:grid-cols-3">
                <ProductCan title="Whey Protein" accent="bg-red-600/80" />
                <ProductCan title="Creatine" accent="bg-white/15" />
                <ProductCan title="Pre Workout" accent="bg-red-500/60" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <div key={category.name} className="rounded-lg border border-white/10 bg-white/5 p-5 text-center">
              <div className={`text-sm font-semibold uppercase tracking-wide ${category.accent}`}>{category.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="text-4xl font-semibold text-white">Naše produkty</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.name}
                className={`rounded-lg border p-6 ${
                  product.featured ? 'border-red-500/50 bg-red-500/10' : 'border-white/10 bg-white/5'
                }`}
              >
                <ProductCan title={product.category} accent={product.featured ? 'bg-red-600/80' : 'bg-white/15'} />
                <h3 className="mt-6 text-2xl font-semibold text-white">{product.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-neutral-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{product.description}</p>
                <button
                  type="button"
                  className="mt-6 w-full rounded-md border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/25"
                >
                  Zistiť viac
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <section className="rounded-lg border border-white/10 bg-white/5 p-8">
            <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
              <ProductCan title={featuredProduct.name} accent="bg-red-600/80" />
              <div>
                <h2 className="text-4xl font-semibold text-white">{featuredProduct.name}</h2>
                <p className="mt-3 text-sm font-medium text-red-300">
                  {featuredProduct.rating}/5 • {featuredProduct.reviews} hodnotení
                </p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300">{featuredProduct.description}</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Na čo slúži</h3>
                    <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                      {featuredProduct.benefits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Pre koho je vhodný</h3>
                    <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                      {featuredProduct.forWho.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-lg border border-white/10 bg-neutral-950 p-8">
            <h2 className="text-2xl font-semibold text-white">Dostupné na recepcii LDB GYM</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-neutral-300">
              {featuredProduct.availability.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-8 w-full rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Opýtať sa na recepcii
            </button>
          </aside>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <section className="rounded-lg border border-white/10 bg-white/5 p-8">
            <h2 className="text-4xl font-semibold text-white">Nevieš čo si vybrať?</h2>
            <p className="mt-3 text-neutral-300">Povedz nám svoj cieľ a odporučíme vhodné produkty priamo v gyme.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {goals.map((goal) => (
                <div key={goal} className="rounded-lg border border-white/10 bg-black/20 p-5 text-center text-sm font-semibold text-white">
                  {goal}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-white/10 bg-neutral-950 p-8">
            <h2 className="text-2xl font-semibold text-white">Odporúčané pre teba</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {products.slice(0, 3).map((product) => (
                <article key={product.name} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                  <ProductCan title={product.category} accent="bg-red-600/70" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{product.name}</h3>
                  <p className="mt-2 text-xs text-neutral-400">{product.tags[0]}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ProductsPage
