import { IPaginatedData, IService } from "@/app/Types"
import Image from "next/image"

async function GetServiceList(slug: string): Promise<IService> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/ourservices/${slug}`, {
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IService
  return data
}
export default async function ServiceDetails({ params }: { params: { slug: string } }) {
  const service = await GetServiceList(params.slug.toString())

  return (
    <div className="">
      <div className="aspect-[12/5] relative container mx-auto">
        <Image
          src={service.img}
          alt={service.name}
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50 justify-center items-center">
          <h1 className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
            {service.name}
          </h1>
        </div>
      </div>
      <div
        className="container mx-auto mt-10 "
        dangerouslySetInnerHTML={{ __html: service.description }}></div>
    </div>
  )
}
