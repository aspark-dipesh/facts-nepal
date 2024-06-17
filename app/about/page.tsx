import { Metadata } from "next"
import ImageContentGrid from "../components/ImageContentGrid"
import Testimonials from "../components/about/Testimonials"
import { isEven } from "../utils/Healpers"
import Statistics from "../components/Statistics"
import { IAboutUs, IInfoGraph, IPaginatedData } from "../Types"
import Banner from "../components/Banner"
async function GetInfoGraph(): Promise<IPaginatedData<IInfoGraph>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/infography`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<IInfoGraph>
  return data
}
export const metadata: Metadata = {
  title: "About Facts nepal",
  description: `Back in 2012, a small group of young, enthusiastic and, like-minded individuals got together with an idea to contribute
                    to address the situation by forming a research company that collected and analyzed data to provide actionable and relevant
                    information to cater to the data-driven needs of the people and organizations, from both in and out of the country.
                    The team knew that accuracy, reliability and trust-worthiness of the data needed to be given special focus. Hence, they
                    envisaged to not only work for their clients, but also increase the awareness of the general public regarding the
                    use and importance of data. This needed to be done in a concise, simple and understandable manner, because they understood that data in its raw form can become overwhelming.`,
}
async function GetAboutData(): Promise<IPaginatedData<IAboutUs>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/aboutus/`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<any>
  return data
}

export default async function About() {
  const infoGraph = await GetInfoGraph()
  const AboutData = await GetAboutData()
  return (
    <div className="px-2 md:px-0">
      <Banner
        title="About our company"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
        ]}
      />

      <ImageContentGrid
        image={{
          src: AboutData.results[0].img,
          alt: AboutData.results[0].heading,
        }}
        title={AboutData.results[0].heading}
        subtitle={""}
        ordering={{
          image: "order-2",
          content: "order-1",
        }}
        classNames={{
          container: isEven(0) ? "" : "bg-gradient-to-r from-primary/60 to-white",
        }}>
        <div dangerouslySetInnerHTML={{ __html: AboutData.results[0].description }}></div>
      </ImageContentGrid>

      {AboutData.results[0].additional_content.map((data, index) => (
        <ImageContentGrid
          key={index}
          image={{
            src: data.img,
            alt: data.main_heading,
          }}
          title={data.main_heading}
          subtitle={data.sub_heading}
          ordering={{
            image: isEven(index) ? "order-1" : "order-2",
            content: isEven(index) ? "order-2" : "order-1",
          }}
          classNames={{
            container: isEven(index) ? "bg-gradient-to-r from-primary/60 to-white" : "",
          }}>
          <div dangerouslySetInnerHTML={{ __html: data.paragraph }}></div>
        </ImageContentGrid>
      ))}
      <Statistics
        title=" "
        classNames={{
          container: "bg-primary",
          statTitle: "text-white",
          statValue: "text-white",
        }}
        StatisticsList={infoGraph.results}
      />
      <Testimonials />
    </div>
  )
}
