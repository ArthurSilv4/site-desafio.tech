'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Info, HelpCircle } from 'lucide-react'

export default function Main() {
  const [challengeName, setChallengeName] = useState('')
  const [challengeDescription, setChallengeDescription] = useState('')

  const handleCreateChallenge = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Challenge Created:', { challengeName, challengeDescription })
    // Reset form
    setChallengeName('')
    setChallengeDescription('')
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Section 1: Create a 15-day Challenge */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Calendar className="mr-2" />
          Crie seu Desafio de 15 Dias
        </h2>
        <form onSubmit={handleCreateChallenge} className="space-y-4">
          <Input
            type="text"
            placeholder="Nome do Desafio"
            value={challengeName}
            onChange={(e) => setChallengeName(e.target.value)}
            required
          />
          <Textarea
            placeholder="Descreva seu desafio"
            value={challengeDescription}
            onChange={(e) => setChallengeDescription(e.target.value)}
            required
          />
          <Button type="submit">Criar Desafio</Button>
        </form>
      </section>

      {/* Section 2: About the Project */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Info className="mr-2" />
          Sobre o Projeto
        </h2>
        <div className="prose max-w-none">
          <p>
            Nosso projeto visa inspirar e motivar as pessoas a alcançarem seus objetivos através de desafios de 15 dias.
            Acreditamos que pequenas ações consistentes podem levar a grandes mudanças.
          </p>
          <p>
            Ao criar um desafio, você se compromete a trabalhar em direção ao seu objetivo por 15 dias consecutivos.
            Isso ajuda a construir hábitos positivos e a manter o foco em seus objetivos de longo prazo.
          </p>
          <Button variant="outline" className="mt-4">Saiba Mais</Button>
        </div>
      </section>

      {/* Section 3: FAQ */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <HelpCircle className="mr-2" />
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Como funciona o desafio de 15 dias?</AccordionTrigger>
            <AccordionContent>
              O desafio de 15 dias é uma maneira de focar em um objetivo específico por um período curto mas intenso.
              Você define uma meta, cria ações diárias e se compromete a segui-las por 15 dias consecutivos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Posso modificar meu desafio depois de criá-lo?</AccordionTrigger>
            <AccordionContent>
              Sim, você pode ajustar seu desafio conforme necessário. No entanto, recomendamos manter a essência
              do desafio original para manter o foco e a consistência.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>O que acontece após os 15 dias?</AccordionTrigger>
            <AccordionContent>
              Após completar os 15 dias, você pode refletir sobre seu progresso, celebrar suas conquistas e
              decidir se quer continuar com o hábito ou iniciar um novo desafio.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}