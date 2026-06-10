import Trainers from '../components/Trainers'

function TrainersPage() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Tréneri</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300">
            Tím LDB GYM ti pomôže s technikou, plánom aj pravidelnosťou. Tu nájdeš stručný prehľad trénerov a ich zamerania.
          </p>
        </div>
      </section>
      <Trainers showIntro={false} />
    </>
  )
}

export default TrainersPage
