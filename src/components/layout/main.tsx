import { CreateYourChallenge } from '../sections/createYourChallenge'
import { LearnMore } from '../sections/learnMore'
import { FrequentlyAskedQuestions } from '../sections/frequentlyAskedQuestions'
import Hero from '../sections/hero'
import Supporters from '../sections/supporters'
import Product from '../sections/product'

export default function Main() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Supporters />
      <Product />
      <CreateYourChallenge />
      <LearnMore />
      <FrequentlyAskedQuestions />
    </main>
  )
}