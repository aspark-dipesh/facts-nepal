import Image from "next/image"
import Hero from "./components/Hero"
import { title } from "process"
import Story from "./components/Story"
import { MoveRight } from "lucide-react"
import Services from "./components/Services"
import Statistics from "./components/Statistics"
import Publications from "./components/Publication"
import Publication from "./news-and-blogs/data.json"
import { IInfoGraph, IPaginatedData, IPublication, IService } from "./Types"
import FactsOfTheDay from "./components/FactsOfTheDay"
import Blogs from "./components/Blogs"
import Link from "next/link"
import { Metadata } from "next"
import Headings from "./components/ui/Headings"
import ContactForm from "./components/contact/ContactForm"
import Testimonials from "./components/about/Testimonials"
import TestimonialSlider from "./components/testimonial"
import NavTabs from "./components/ui/NavTab"
export const metadata: Metadata = {
  title: "Facts nepal",
  openGraph: {
    title: "Facts nepal",
    description:
      "FACTS Research & Analytics is a private independent research company that prides itself on being precise, intellegence for informed choice and serving reliable, contextual and actionable information based on research and analysis that help clients and the general public to take better effective and efficient decisions.",
  },
}
async function GetServiceList(): Promise<IPaginatedData<IService>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/ourservices`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<IService>
  return data
}
async function GetPublications(): Promise<IPaginatedData<IPublication>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/ourpublication?limit=3`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<IPublication>
  return data
}
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
export default async function Home() {
  const serviceList = await GetServiceList()
  const infoGraph = await GetInfoGraph()
  const publications = await GetPublications()

  return (
    <div className="">
      <Hero
        images={[
          {
            src: "/images/banner1.jpg",
            alt: "photo 1",
          },
          {
            src: "/images/banner2.jpg",
            alt: "photo 2",
          },
        ]}
        contentPosition="m"
        // content={{
        //   title: "Offering total research solutions for your business requirements",
        //   description: "Collecting, processing and analyzing data",
        // }}
        // classNames={{
        //   title: "text-primary text-3xl font-bold text-center",
        //   container: "bg-black/20",
        //   description: "text-white text-center",
        // }}
        // action={{
        //   label: "Get Started",
        //   path: "/contact",
        // }}
      />
      <Story
        title="Our Story"
        image={{
          src: "/images/research.jpeg",
          alt: "story",
        }}
        action={{
          label: "Learn more",
          path: "/about",
          icon: <MoveRight />,
        }}>
        <p className="text-base mt-5">
          A lack of proper and timely availability of data in Nepal has always remained a great challenge for all who
          believe in the power of accurate and contextual data for informed decision-making. In the past, a lot of data
          in Nepal was considered unattainable, and the available data was often deemed dated, misleading or incomplete,
          all of which contributed to the escalation of a data-dark situation in Nepal.
        </p>

        <p className="text-base mt-5  ">
          Back in 2012, a small group of young, enthusiastic and, like-minded individuals got together with an idea to
          contribute to address the situation by forming a research company that collected and analyzed data to provide
          actionable and relevant information to cater to the data-driven needs of the people and organizations, from
          both in and out of the country. The team knew that accuracy, reliability and trust-worthiness of the data
          needed to be given special focus. Hence, they envisaged to not only work for their clients, but also increase
          the awareness of the general public regarding the use and importance of data. This needed to be done in a
          concise, simple and understandable manner, because they understood that data in its raw form can become
          overwhelming.
        </p>
      </Story>

      <Statistics
        title=" "
        classNames={{
          container: "bg-primary",
          statTitle: "text-white",
          statValue: "text-white",
        }}
        StatisticsList={infoGraph.results}
      />

      <Services
        title="What we do"
        path="/services"
        footerBlur
        servicesList={serviceList.results}
        classNames={{
          title: "text-black text-3xl font-bold text-center",
          container: "",
          card: "w-full aspect-square relative",
        }}
      />
      <section className="container mx-auto">
        <NavTabs />
      </section>
      {/* <section className=" py-20">
        <div className="container mx-auto mb-10">
          <Headings
            title="Fact of the day"
            className=""
            text=""
            path="/pictographs"
          />
        </div>
        <FactsOfTheDay
          date=""
          title="The world's 10 most mountainous countries"
          image={{
            src: "/images/facts/facts1.jpeg",
            alt: "facts",
          }}
          classNames={{
            title: "text-xl font-bold  ",
            container: "",
            image: "w-full aspect-video",
            description: " text-black",
          }}
          description={`Note: Bhutan, a small south Asian country located in the eastern Himalaya, is the most mountainous country in the world. Bhutan average elevation of 10,000 feet(3,280 m) above sea level.`}
        />
      </section> */}

      <Publications
        title="Publications"
        footerBlur
        classNames={{
          title: "text-black text-3xl font-bold text-center",
          container: "",
          card: "w-full relative rounded rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] flex flex-col gap-10 justify-between",
        }}
        hasViewAll
        Publications={publications.results as IPublication[]}
      />
      <div className="relative">
        <div className=" bg-primary after:content-[''] text-white md:after:bg-[url('/images/career.png')] after:bg-right-top  after:bg-contain after:top-0 after:mt-auto after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:z-0 after:bg-no-repeat">
          <div className="py-20 container mx-auto col-span-3 z-50">
            <div className="max-w-lg px-2">
              <Headings
                title="Join our team"
                className="text-white"
              />
              <p className="mt-3">
                We&apos;re building a culture at HubSpot where amazing people (like you) can do their best work. If
                you&apos;re ready to grow your career and help millions of organizations grow better, you&apos;ve come
                to the right place.
              </p>
              <div className="mt-20">
                <Link
                  href="/careers"
                  className="bg-white text-black mt-20 rounded-md  p-3 py-5 z-10 relative">
                  View open positions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="container mx-auto">
          <Headings title="Testimonials" />
        </div>
        <TestimonialSlider />
      </div>
      <Blogs />
      <section className="py-10">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
