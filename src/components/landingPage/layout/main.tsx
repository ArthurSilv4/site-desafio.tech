import { Feature } from "../sections/features"
import { UserFeedback } from "../sections/userFeedback"
import Hero from "../sections/hero"
import Supporters from "../sections/supporters"
import Product from "../sections/product"
import Cta from "../sections/cta"
import FAQ from "../sections/faq"

export default function MainLandingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Supporters />
      <Product />
      <Feature />
      <UserFeedback />
      <Cta />
      <FAQ />
    </main>
  )
}
