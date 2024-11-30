import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How secure is Wallet?",
    answer: "Wallet uses state-of-the-art encryption and security measures to protect your data. We never store your sensitive information on our servers."
  },
  {
    question: "Can I use Wallet internationally?",
    answer: "Yes, Wallet is designed for global use. You can store and manage cards and passes from any country."
  },
  {
    question: "Is there a limit to how many cards I can store?",
    answer: "There's no limit to the number of cards you can store in Wallet. Add as many as you need!"
  },
  {
    question: "How do I add a new card to Wallet?",
    answer: "Simply tap the '+' button in the app, then either scan your card or enter the details manually. It's quick and easy!"
  }
]

function FAQItem({ item }: { item: FAQItem }) {

  return (
    <AccordionItem value={item.question} className='text-white font-medium'>
      <AccordionTrigger className="flex justify-between items-center w-full py-4 text-left border-b border-zinc-600" data-state={item.question}>
      {item.question}
      </AccordionTrigger>
      <AccordionContent className="pb-4 text-zinc-400">
      {item.answer}
      </AccordionContent>
    </AccordionItem>
  )
}

export default function FAQ() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </Accordion>
      </div>
    </section>
  )
}

