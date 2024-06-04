import { IPaginatedData, IService } from "@/app/Types"
import Image from "next/image"

async function GetServiceList(): Promise<IPaginatedData<IService>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/ourservices`, {
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<IService>
  return data
}
export default async function ServiceDetails({ params }: { params: { slug: string } }) {
  const serviceList = await GetServiceList()
  console.log(params)
  return (
    <div className="">
      <div className="aspect-[12/5] relative">
        <Image
          src={serviceList.results[0].img}
          alt={serviceList.results[0].name}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 justify-center items-center">
          <h1 className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
            {serviceList.results[0].name}
          </h1>
        </div>
      </div>
      <div
        className="container mx-auto mt-10 "
        dangerouslySetInnerHTML={{ __html: serviceList.results[0].description }}></div>
    </div>
  )
}
