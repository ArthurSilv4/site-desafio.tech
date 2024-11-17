'use client'

import { ChevronRight } from "lucide-react"
import { useState, useEffect } from 'react';
import { Button } from "../ui/button";
import Image from 'next/image';

export function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const slides = [
    { title: "Welcome to Our Challenge Platform", image: "" },
    { title: "Discover New Challenges", image: "" },
    { title: "Achieve Your Goals", image: "" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setFade(true);
      }, 500); // Tempo para o fade-out
    }, 30000); // 30000ms = 30s

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <section className="relative h-screen">
      <div className={`absolute inset-0 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">{slides[currentSlide].title}</h1>
        <Button size="lg" className="text-lg px-8 py-6">
          Começe agora
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}