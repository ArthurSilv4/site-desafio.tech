import { Info } from "lucide-react";
import Image from 'next/image'

export function LearnMore(){
  return(
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Saiba Mais Sobre Nós</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
              src="/placeholder.svg"
              alt="Saiba Mais"
              layout="responsive"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">Por que escolher nossa plataforma?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Info className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                  <span>Desafios personalizáveis ​para atender às suas necessidades</span>
                </li>
                <li className="flex items-start">
                  <Info className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                  <span>Acompanhe seu progresso com análises detalhadas</span>
                </li>
                <li className="flex items-start">
                  <Info className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                  <span>Conecte-se com uma comunidade de pessoas que pensam como você</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}