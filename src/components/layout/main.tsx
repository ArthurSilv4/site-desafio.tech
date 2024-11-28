import { CreateYourChallenge } from '../sections/createYourChallenge'
import { LearnMore } from '../sections/learnMore'
import { FrequentlyAskedQuestions } from '../sections/frequentlyAskedQuestions'
import Hero from '../sections/hero'
import Supports from '../sections/supports'

export default function Main() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Supports />
      <CreateYourChallenge />
      <LearnMore />
      <FrequentlyAskedQuestions />
    </main>
  )
}