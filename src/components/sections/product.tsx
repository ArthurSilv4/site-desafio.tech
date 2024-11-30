import Image from "next/image";
import { Card } from "../ui/card";

export default function Product() {
  return (
    <section className="w-full min-h-screen text-white py-12 md:py-24 lg:py-32 flex">
      <div className="container min-h-full m-auto px-4">
        <Card className="bg-[#FDF5DF] h-full flex items-end justify-center border-none" >
          <div className="h-full w-full flex items-end justify-center ">
            <Image src="/images/Image.png"
            width={800} height={400} layout="responsive" alt="Product Image" className="object-contain rounded-lg" />
          </div>
        </Card>
      </div>
    </section>
  )
}