import Hero from "./components/Hero"

import Story from "./components/Story"
import { MoveRight } from "lucide-react"
import Services from "./components/Services"
import Statistics from "./components/Statistics"
import Publications from "./components/Publication"

import {
  IBanner,
  IClientAndPartner,
  IFacts,
  IHomePage,
  IInfoGraph,
  IPaginatedData,
  IPublication,
  IService,
  ITestimonial,
} from "./Types"

import Blogs from "./components/Blogs"
import Link from "next/link"
import { Metadata } from "next"
import Headings from "./components/ui/Headings"
import ContactForm from "./components/contact/ContactForm"

import TestimonialSlider from "./components/testimonial"
import NavTabs from "./components/ui/NavTab"
import ClientMarquee from "./components/about/ClientMarquee"
import Image from "next/image"
import Story3 from "./layouts/Story3"
import Story2 from "./layouts/Story2"
import Story4 from "./layouts/Story4"
import Testimonial3 from "./layouts/Testimonial3"
import Testimonial2 from "./layouts/Testimonial2"
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
async function GetClientAndPartner(): Promise<IPaginatedData<IClientAndPartner>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/clientandpartner/`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<IClientAndPartner>
  return data
}

async function GetTestimonial(): Promise<IPaginatedData<ITestimonial>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/testimonials/?limit=4`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<ITestimonial>
  return data
}

async function GetBlogs(): Promise<IPaginatedData<any>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<any>
  return data
}
async function GetHomePage(): Promise<IPaginatedData<IHomePage>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/home/`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<IHomePage>
  return data
}
async function Facts(): Promise<IFacts> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/facts/`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IFacts
  return data
}

async function GetBanner(): Promise<IPaginatedData<IBanner>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banner/`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<IBanner>
  return data
}
export default async function Home() {
  const serviceList = await GetServiceList()
  const infoGraph = await GetInfoGraph()
  const publications = await GetPublications()
  const clientAndPartner = await GetClientAndPartner()
  const testimonialList = await GetTestimonial()
  const blogs = await GetBlogs()
  const HomeData = await GetHomePage()
  const factsData = await Facts()
  const BannerData = await GetBanner()
  return (
    <div className="grid grid-cols-1 homepage">
      <Hero
        BannerList={BannerData.results}
        contentPosition="s"
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

      <Statistics
        title=" "
        classNames={{
          container: "!bg-primary order-3",
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
          title: "text-black text-3xl font-bold text-center mb-10  ",
          container: "py-10 order-4",
          card: "w-full aspect-square relative",
        }}
      />

      <section className=" order-7">
        <div className="container mx-auto py-10 ">
          <NavTabs factsData={factsData} />
        </div>
      </section>

      <Publications
        title="Publications"
        footerBlur
        classNames={{
          title: "text-black text-3xl font-bold text-center",
          container: "order-8",
          card: "w-full relative rounded rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] flex flex-col gap-10 justify-between",
        }}
        hasViewAll
        Publications={publications.results as IPublication[]}
      />
      <section className="relative order-9">
        <div className="  after:content-[''] text-black md:after:bg-[url('/images/career.png')] after:bg-right-top  after:bg-contain after:top-0 after:mt-auto after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:z-0 after:bg-no-repeat">
          <div className="py-20 container mx-auto col-span-3 z-50">
            <div className="max-w-lg px-2">
              <Headings
                title="Join our team"
                className=""
              />
              <p className="mt-3">
                We&apos;re building a culture at HubSpot where amazing people (like you) can do their best work. If
                you&apos;re ready to grow your career and help millions of organizations grow better, you&apos;ve come
                to the right place.
              </p>
              <div className="mt-20">
                <Link
                  href="/careers"
                  className="bg-primary text-white mt-20 rounded-md  p-3 py-5 z-10 relative">
                  View open positions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="order-10">
        <div className="container mx-auto py-10">
          <h2 className="text-3xl font-bold text-center mb-3">Our clients</h2>
          <ClientMarquee Clients={clientAndPartner.results} />
        </div>
      </section>
      <section className="py-10 order-11">
        {/* <div className="container mx-auto mb-3">
          <Headings title="Testimonials" />
          <TestimonialSlider Testimonials={testimonialList.results} />
        </div> */}
        <Testimonial3
          Testimonials={testimonialList.results}
          title={"Testimonials"}
        />
      </section>
      {blogs.results.length > 0 && <Blogs blog={blogs.results} />}

      <section className="py-10 order-[13] ">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </section>
      {HomeData.results[0].additional_content.map((content, index) => (
        <section
          key={content.id}
          style={{ order: content.sorting_order }}>
          {(index === 0 && (
            <Story4
              title={content.main_heading}
              image={{
                src: content.img,
                alt: content.main_heading,
              }}
              action={{
                label: content.action_label,
                path: content.action_path,
              }}>
              <div dangerouslySetInnerHTML={{ __html: content.paragraph }} />
            </Story4>
          )) ||
            (index === 1 && (
              <Story
                image={{
                  src: content.img,
                  alt: content.main_heading,
                }}
                title={content.main_heading}
                action={{
                  label: content.action_label,
                  path: content.action_path,
                }}>
                <div dangerouslySetInnerHTML={{ __html: content.paragraph }} />
              </Story>
            )) ||
            (index === 2 && (
              <Story
                title={content.main_heading}
                image={{
                  src: content.img,
                  alt: content.main_heading,
                }}
                action={{
                  label: content.action_label,
                  path: content.action_path,
                }}>
                <div dangerouslySetInnerHTML={{ __html: content.paragraph }} />
              </Story>
            ))}
        </section>
      ))}
    </div>
  )
}
