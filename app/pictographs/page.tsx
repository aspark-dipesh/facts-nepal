import { IPaginatedData, IPictographData } from "../Types"
import Banner from "../components/Banner"
import FactsOfTheDay from "../components/FactsOfTheDay"
const getPictoData = async (): Promise<IPaginatedData<IPictographData>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/pictography/`, {
    method: "GET",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

export default async function Pictograph() {
  const PictoData = await getPictoData()

  return (
    <div className="container mx-auto  max-w-5xl">
      <Banner
        title="Pictograph"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Pictograph", path: "/pictograph" },
        ]}
      />
      <div className="grid gap-10">
        {PictoData.results.map((picto, index) => (
          <FactsOfTheDay
            key={index}
            title={picto.main_heading}
            image={{
              src: picto.img,
              alt: picto.main_heading,
            }}
            date={picto.created_at}
            description={picto.paragraph || ""}
            classNames={{
              title: "text-3xl font-bold  ",
              container: "px-10 py-10 border shadow-lg ",
              image: "w-full aspect-video",
              description: "!text-black",
            }}
          />
        ))}
      </div>
    </div>
  )
}
