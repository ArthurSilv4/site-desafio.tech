import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FrequentlyAskedQuestions() {
  return (
    <section className="py-16 bg-background text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center tracking-tighter">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Como inicio um desafio?</AccordionTrigger>
            <AccordionContent>
              Para iniciar um desafio, clique no botão &quot;Começar agora&quot; botão na página inicial e siga as instruções para configurar os detalhes do seu desafio.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Posso convidar amigos para participar do meu desafio?</AccordionTrigger>
            <AccordionContent>
              Sim! Você pode convidar amigos para participar do seu desafio durante o processo de configuração ou compartilhando um link exclusivo após a criação do desafio.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Quanto tempo pode durar um desafio?</AccordionTrigger>
            <AccordionContent>
              Os desafios podem durar de um dia a vários meses, dependendo de suas preferências e objetivos. Você pode definir a duração ao criar seu desafio.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}