import { Feature } from '../sections/features'
import { UserFeedback } from '../sections/userFeedback'
import Hero from '../sections/hero'
import Supporters from '../sections/supporters'
import Product from '../sections/product'
import Cta from '../sections/cta'
import FAQ from '../sections/faq'

export default function Main() {
  return (
    <main className="flex flex-col min-h-screen">
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