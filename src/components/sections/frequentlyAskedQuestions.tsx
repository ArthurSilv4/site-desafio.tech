import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FrequentlyAskedQuestions() {
  return (
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I start a challenge?</AccordionTrigger>
              <AccordionContent>
                To start a challenge, click the &quot;Start Now&quot; button on the homepage and follow the prompts to set up your challenge details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I invite friends to join my challenge?</AccordionTrigger>
              <AccordionContent>
                Yes! You can invite friends to join your challenge during the setup process or by sharing a unique link after the challenge has been created.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How long can a challenge last?</AccordionTrigger>
              <AccordionContent>
                Challenges can last anywhere from a day to several months, depending on your preferences and goals. You can set the duration when creating your challenge.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
  )
}