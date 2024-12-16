import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "O que é o Desafioo.tech",
    answer: "O Desafioo.tech é uma plataforma open-source que oferece a oportunidade de resolver problemas reais, desenvolver soluções inovadoras e aprimorar suas habilidades em desafios práticos. É o lugar ideal para quem busca aprender, se desafiar e crescer."
  },
  {
    question: "Quem pode participar da plataforma?",
    answer: "Qualquer pessoa, independentemente do nível de experiência, pode participar. O Desafioo.tech é para todos que desejam resolver problemas reais e expandir seus conhecimentos."
  },
  {
    question: "Como funcionam os desafios?",
    answer: "Os desafios são apresentados de forma prática e dinâmica, abordando problemas reais que exigem soluções criativas. Durante 15 dias, você trabalhará para resolver um problema real, desenvolvendo suas habilidades enquanto cria soluções inovadoras."
  },
  {
    question: "O Desafioo.tech é gratuito?",
    answer: "Sim! A plataforma é totalmente gratuita, oferecendo todos os recursos necessários para que você participe e aprenda sem custo algum."
  },
  {
    question: "Como posso compartilhar minhas soluções?",
    answer: "Você pode compartilhar suas soluções diretamente na plataforma, interagindo com outros participantes e mostrando como você resolveu os desafios propostos. Além disso, você pode compartilhar suas soluções em suas redes sociais e portfólios."
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
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </Accordion>
      </div>
    </section>
  )
}

