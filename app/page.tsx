import Image from "next/image"
import Hero from "./components/Hero"
import { title } from "process"
import Story from "./components/Story"
import { MoveRight } from "lucide-react"
import Services from "./components/Services"
import Statistics from "./components/Statistics"
import Publications from "./components/Publication"
import Publication from "./news-and-blogs/data.json"
import { IPublication } from "./Types"
import FactsOfTheDay from "./components/FactsOfTheDay"
import Blogs from "./components/Blogs"
import Link from "next/link"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Facts nepal",
  openGraph: {
    title: "Facts nepal",
    description:
      "FACTS Research & Analytics is a private independent research company that prides itself on being precise, intellegence for informed choice and serving reliable, contextual and actionable information based on research and analysis that help clients and the general public to take better effective and efficient decisions.",
  },
}
export default function Home() {
  return (
    <div className="">
      <Hero
        images={[
          {
            src: "https://source.unsplash.com/random/1200×500?city,buildings&1 ",
            alt: "photo 1",
          },
          {
            src: "https://source.unsplash.com/random/1200×500?city,buildings&2 ",
            alt: "photo 2",
          },
          {
            src: "https://source.unsplash.com/random/1200×500?city,buildings&3 ",
            alt: "photo 3",
          },
        ]}
        contentPosition="m"
        content={{
          title: "Offering total research solutions for your business requirements",
          description: "Collecting, processing and analyzing data",
        }}
        classNames={{
          title: "text-primary text-3xl font-bold text-center",
          container: "bg-black/20",
          description: "text-white text-center",
        }}
        action={{
          label: "Get Started",
          path: "/contact",
        }}
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
        <p className="text-lg mt-5">
          A lack of proper and timely availability of data in Nepal has always remained a great challenge for all who
          believe in the power of accurate and contextual data for informed decision-making. In the past, a lot of data
          in Nepal was considered unattainable, and the available data was often deemed dated, misleading or incomplete,
          all of which contributed to the escalation of a data-dark situation in Nepal.
        </p>

        <p className="text-lg mt-5 line-clamp-6  ">
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
        StatisticsList={[
          {
            title: "Clients",
            value: 20,
          },
          {
            title: "Publications",
            value: 10,
          },
          {
            title: "Projects",
            value: 200,
          },
          {
            title: "Countries",
            value: 165,
          },
        ]}
      />

      <Services
        title="What we do"
        footerBlur
        servicesList={[
          {
            image: {
              alt: "data analysis",
              src: "/images/data-analysis.jpg",
            },
            title: "Data collection",
            description: `
              <ul class="list-decimal list-outside pl-5 ">
                <li class="indent-2">Collects, measure and analyze for accurate insights through experience and local enumerators</li>
                <li>Collects data through both Computer Assisted personal interview (CAPI) and paper and pensil interview(PAPI), interview and focus group discussion</li>
                <li>Through mystery shopping</li>
                <li>Have more than 250 experience enumerators covering all over nepal</li>
              </ul>
            `,
          },
          {
            image: {
              alt: "Strategy Development",
              src: "/images/strategy.jpg",
            },
            title: "Market Study",
            description: `
              <ul class="list-decimal list-outside pl-5 ">
                <li>Provides insight to business on target audience, current customers, competitors and challenges of business</li>
                <li>Help understand the business their buyers, market, influence factor for purchase decision of target audience</li>
               
              </ul>
            `,
          },
          {
            image: {
              alt: "Content-development",
              src: "/images/content.jpg",
            },
            title: "Brand Perception",
            description: `
              <ul class="list-decimal list-outside pl-5 ">
                <li>Gathers feedbacks from prospects to measure the overall sentiment towards brand</li>
                <li>Measures overall perception, value and awareness of the brand as dictated by the audience.</li>
               
              </ul>
            `,
          },
          {
            image: {
              alt: "Infographic design",
              src: "/images/infographic.jpeg",
            },
            title: "Human Resource Audit",
            description: `
              <ul class="list-decimal list-outside pl-5 ">
                <li>Investigate Company to strengthen Human Resource Department for proper allocation of human resource</li>
                <li>Identify the gap and areas where improvement is needed to resolve the gap.</li>
                
              </ul>
            `,
          },
        ]}
        classNames={{
          title: "text-black text-3xl font-bold text-center",
          container: "",
          card: "w-full aspect-square relative",
        }}
      />
      <section className="bg-primary">
        <div className="container mx-auto py-20">
          <h1 className="text-cyan-500 text-3xl font-bold">Fact of the day</h1>
          <FactsOfTheDay
            title="The world's 10 most mountainous countries"
            image={{
              src: "/images/facts/facts1.jpeg",
              alt: "facts",
            }}
            classNames={{
              title: "text-white text-3xl font-bold  ",
              container: "",
              image: "w-full aspect-video",
              description: " text-white",
            }}
            description={`Note: Bhutan, a small south Asian country located in the eastern Himalaya, is the most mountainous country in the world. Bhutan average elevation of 10,000 feet(3,280 m) above sea level.`}
          />
        </div>
      </section>
      <Publications
        title="Publications"
        footerBlur
        classNames={{
          title: "text-black text-3xl font-bold text-center",
          container: "",
          card: "w-full relative rounded rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] flex flex-col gap-10 justify-between",
        }}
        hasViewAll
        Publications={Publication.slice(0, 3) as IPublication[]}
      />
      <div className="relative">
        <div className=" bg-primary after:content-[''] text-white after:bg-[url('/images/career.png')] after:bg-right-top  after:bg-contain after:top-0 after:mt-auto after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:z-0 after:bg-no-repeat">
          <div className="py-20 container mx-auto col-span-3 z-50">
            <div className="max-w-lg px-2">
              <h2 className="text-3xl font-bold">Let&apos;s grow together.</h2>
              <p className="mt-3">
                We&apos;re building a culture at HubSpot where amazing people (like you) can do their best work. If
                you&apos;re ready to grow your career and help millions of organizations grow better, you&apos;ve come
                to the right place.
              </p>
              <div className="mt-20">
                <Link
                  href="/careers"
                  className="bg-primary-500 mt-20 rounded-md text-white p-3 py-5 z-10 relative">
                  View open positions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blogs />
    </div>
  )
}
