import { reviews } from '../data/siteData'

function Reviews() {
  return (
    <section id="reviews" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white">Recenzie</h2>
        <p className="mt-4 max-w-2xl text-neutral-300">Krátke referencie pripravené na nahradenie reálnymi recenziami klientov.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.name} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-neutral-200">“{review.quote}”</p>
              <footer className="mt-4 text-sm font-semibold text-red-300">{review.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
