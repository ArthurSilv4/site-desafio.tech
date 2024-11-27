import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 flex items-center">
        <div className="">
          <h1 className="text-6xl text-white font-semibold">Saas Landing Landing Page template</h1>
          <p className="text-white/30 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolores molestiae delectus veniam. Ad, vero distinctio dignissimos magnam soluta porro asperiores suscipit ipsum blanditiis quos dicta enim fugit natus voluptates.</p>
          <Button className="bg-[#FFDF90] mt-16">Aceitar Desafio</Button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md m-5">
          <h3 className="text-xl font-semibold mb-2">Convide amigos</h3>
          <p className="text-gray-600">Para tornar tudo mais divertido, encare o desafio com 
          </p>
        </div>
      </div>
    </section>
  );
}