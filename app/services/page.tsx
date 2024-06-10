import Image from "next/image"
import { IPaginatedData, IService } from "../Types"
import Services from "../components/Services"
import BreadCrumbs from "../components/BreadCrumbs"
import Banner from "../components/Banner"
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
      <Banner
        title="Our Services"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
        ]}
      />
      <Services
        title=""
        footerBlur
        servicesList={serviceList.results}
        classNames={{
          title: "text-black text-3xl font-bold text-center",
          container: "",
          card: "w-full aspect-square relative",
        }}
      />
    </div>
  )
}
