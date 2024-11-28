import { CreateYourChallenge } from '../sections/createYourChallenge'
import { LearnMore } from '../sections/learnMore'
import { FrequentlyAskedQuestions } from '../sections/frequentlyAskedQuestions'
import Home from '../sections/home'

export default function Main() {
  return (
    <main className="flex flex-col min-h-screen">
      <Home />
      <CreateYourChallenge />
      <LearnMore />
      <FrequentlyAskedQuestions />
    </main>
  )
}