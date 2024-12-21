import Filter from "@/components/dashboard/filter/page"

import { CardsChallenges } from "@/components/dashboard/challenges/CardsChallenges/page"

export default function Challenges() {
  return (
    <main className="flex min-h-screen flex-col bg-[#333333]">
      <section className="flex w-full bg-[#333333] py-12 md:py-24 lg:py-32">
        <div className="container m-auto px-4 md:px-6">
          <Filter />
          <CardsChallenges />
        </div>
      </section>
    </main>
  )
}
