import { Metadata } from "next"
import ImageContentGrid from "../components/ImageContentGrid"
import AboutHero from "../components/about/AboutHero"
import HeadMessage from "../components/about/HeadMessage"
import MissionVision from "../components/about/MissionVision"
import Testimonials from "../components/about/Testimonials"
import { isEven } from "../utils/Healpers"
import Statistics from "../components/Statistics"
import { IInfoGraph, IPaginatedData } from "../Types"
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
const AboutData = [
  {
    title: "About Us",
    description: `<p className='text-base mt-5'>A lack of proper and timely availability of data in Nepal has always remained a great challenge for all who
                    believe in the power of accurate and contextual data for informed decision-making. In the past, a lot of data
                    in Nepal was considered unattainable, and the available data was often deemed dated, misleading or incomplete,
                    all of which contributed to the escalation of a data-dark situation in Nepal.
                </p>

                <p className='text-base mt-5 '>
                    Back in 2012, a small group of young, enthusiastic and, like-minded individuals got together with an idea to contribute
                    to address the situation by forming a research company that collected and analyzed data to provide actionable and relevant
                    information to cater to the data-driven needs of the people and organizations, from both in and out of the country.
                    The team knew that accuracy, reliability and trust-worthiness of the data needed to be given special focus. Hence, they
                    envisaged to not only work for their clients, but also increase the awareness of the general public regarding the
                    use and importance of data. This needed to be done in a concise, simple and understandable manner, because they understood that data in its raw form can become overwhelming.
                </p>`,
    image: { src: "/images/about-hero.png", alt: "About" },
    subtitle: "",
  },
  {
    title: "Message From Chairman",
    image: { src: "/images/chairman.png", alt: "Chairman" },
    subtitle: "Mr. Hari ram kumar",
    description: ` <p className='text-lg mt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nisl ut nunc ultricies
                    scelerisque. Aliquam erat volutpat. In hac habitasse platea dictumst. Quisque et tortor
                    sit amet nisl ultricies scelerisque. Aliquam erat volutpat. In hac habitasse platea dictumst.
                </p>
                <p className='text-lg mt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nisl ut nunc ultricies
                    scelerisque. Aliquam erat volutpat. In hac habitasse platea dictumst. Quisque et tortor
                    sit amet nisl ultricies scelerisque. Aliquam erat volutpat. In hac habitasse platea dictumst.
                </p>`,
  },
  {
    image: { src: "/images/mission.png", alt: "Mission" },
    title: "Our Mission",
    description: `<p className='text-lg mt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nisl ut nunc ultricies
                    scelerisque. Aliquam erat volutpat. In hac habitasse platea dictumst. Quisque et tortor
                    sit amet nisl ultricies scelerisque. Aliquam erat volutpat. In hac habitasse platea dictumst.
                </p>
                <ul className='text-lg mt-5 list-inside list-disc'>
                    <li>
                        Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                        consectetur adipiscing elit
                    </li>
                    <li>
                        Nam sit amet nisl ut nunc ultricies
                    </li>
                    <li>
                        scelerisque. Aliquam erat volutpat.
                    </li>
                </ul>`,
    subtitle: "",
  },
  {
    image: { src: "/images/vision.png", alt: "Vision" },
    title: "Our Mission",
    description: `<p className='text-lg mt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nisl ut nunc ultricies
                    scelerisque. Aliquam erat volutpat. In hac habitasse platea dictumst. Quisque et tortor
                    sit amet nisl ultricies scelerisque. Aliquam erat volutpat. In hac habitasse platea dictumst.
                </p>
                <ul className='text-lg mt-5 list-inside list-disc'>
                    <li>
                        Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                        consectetur adipiscing elit
                    </li>
                    <li>
                        Nam sit amet nisl ut nunc ultricies
                    </li>
                    <li>
                        scelerisque. Aliquam erat volutpat.
                    </li>
                </ul>`,
    subtitle: "",
  },
]

export default async function About() {
  const infoGraph = await GetInfoGraph()
  return (
    <div className="px-2 md:px-0">
      {AboutData.map((data, index) => (
        <ImageContentGrid
          key={index}
          image={data.image}
          title={data.title}
          subtitle={data.subtitle}
          ordering={{
            image: isEven(index) ? "order-2" : "order-1",
            content: isEven(index) ? "order-1" : "order-2",
          }}
          classNames={{
            container: isEven(index) ? "" : "bg-gradient-to-r from-primary/60 to-white",
          }}>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
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
