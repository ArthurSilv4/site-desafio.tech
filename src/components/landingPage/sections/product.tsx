import Image from "next/image"
import { Card, CardContent } from "../../ui/card"

export default function Product() {
  return (
    <section className="flex w-full py-12 text-white md:py-24 lg:py-32">
      <div className="container m-auto min-h-full px-4">
        <Card className="flex h-full items-end justify-center border-none bg-[#FDF5DF]">
          <CardContent className="flex h-full w-full items-end justify-center p-0">
            <Image
              src="/images/product.png"
              width={1920}
              height={1080}
              layout="responsive"
              alt="Product Image"
              className="rounded-lg object-contain"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
