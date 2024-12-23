import Filter from "../filter/page"
import { ChallengesCards } from "../home/challengesCards/page"

export default function MainDashboard() {
  return (
    <main className="flex min-h-screen flex-col bg-[#333333]">
      <section className="flex w-full flex-col py-12 md:py-24 lg:py-32">
        <div className="container m-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold">Meus Desafios</h1>

          <div className="mt-8">
            <Filter />
          </div>

          <div>
            <div className="-mx-2 flex flex-wrap">
              <ChallengesCards />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
