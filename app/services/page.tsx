import Image from "next/image"
import { IPaginatedData, IService } from "../Types"
import Services from "../components/Services"
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
export default async function ServicesList() {
  const serviceList = await GetServiceList()
  return (
    <div>
      <div className=" h-[500px] relative">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <Image
          src={"/images/servicesbanner.jpg"}
          alt={serviceList.results[0].name}
          fill
          className="object-cover "
          sizes="100vw"
        />
        <h1 className="z-20 absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !text-5xl  ">
          Our Services
        </h1>
      </div>

      <Services
        title=""
        footerBlur
        servicesList={serviceList.results}
        classNames={{
          title: "text-black text-3xl font-bold text-center",
          container: "py-10",
          card: "w-full aspect-square relative",
        }}
      />
    </div>
  )
}
