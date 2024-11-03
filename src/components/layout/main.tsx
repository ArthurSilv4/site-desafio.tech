/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChevronRight, Plus, Info, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Main() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { title: "Welcome to Our Challenge Platform", image: "/placeholder.svg?height=600&width=1200" },
    { title: "Discover New Challenges", image: "/placeholder.svg?height=600&width=1200" },
    { title: "Achieve Your Goals", image: "/placeholder.svg?height=600&width=1200" },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Large Slide Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">{slides[currentSlide].title}</h1>
          <Button size="lg" className="text-lg px-8 py-6">
            Start Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Create Your Challenge Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Create Your Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Plus className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Define Your Goal</h3>
              <p className="text-gray-600">Set a clear and achievable goal for your challenge.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Plus className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Set the Duration</h3>
              <p className="text-gray-600">Choose how long your challenge will last.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Plus className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Invite Friends</h3>
              <p className="text-gray-600">Make it more fun by challenging your friends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Learn More</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Learn More"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Our Platform?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Info className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                  <span>Customizable challenges to fit your needs</span>
                </li>
                <li className="flex items-start">
                  <Info className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                  <span>Track your progress with detailed analytics</span>
                </li>
                <li className="flex items-start">
                  <Info className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                  <span>Connect with a community of like-minded individuals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
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
    </main>
  )
}