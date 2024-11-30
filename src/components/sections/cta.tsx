import { Button } from "../ui/button"
import Image from 'next/image'
import { Card } from "../ui/card"

export default function Cta() {
  return(
    <section className="w-full py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Questions?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Let's talk</h3>
          </div>
          <p className="text-zinc-400">
            Contact us through our 24/7 live chat.<br />
            We're always happy to help!
          </p>
          <Button 
            className="bg-[#ffd875] text-black hover:bg-[#ffc875] px-8"
            size="lg"
          >
            Get started
          </Button>
        </div>

        <Card className='relative aspect-[4/3] bg-[#D9EFEB] p-8'>

          <Image
            src="/images/Image.svg"
            alt="App preview"
            layout='fill'
            className="mx-auto shadow-2xl rounded-[15px]"
          />
        </Card>
      </div>
    </section>
  )
}