import Image from "next/image"

import ApplyForm from "../components/careers/ApplyForm"
import ImageContentGrid from "../components/ImageContentGrid"
import BreadCrumbs from "../components/BreadCrumbs"
import { ICareers, IPaginatedData, ITeamMember } from "../Types"
import TeamCard from "../components/team/TeamCard"
import { MoveRightIcon, SearchIcon } from "lucide-react"
import VacanciesTab from "../components/careers/VacanciesTab"
import CardUi from "../components/ui/CardUi"
import Link from "next/link"
import Headings from "../components/ui/Headings"
import Banner from "../components/Banner"

async function GetTeamList(): Promise<IPaginatedData<ITeamMember>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/teammember`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<ITeamMember>
  return data
}
async function GetJobList(): Promise<IPaginatedData<ICareers>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/career/`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<ICareers>
  return data
}

const categoryList = [
  {
    name: "Internships",
    slug: "internships",
  },
  {
    name: "Full Time",
    slug: "full-time",
  },
  {
    name: "Part Time",
    slug: "part-time",
  },
  {
    name: "Voluntary",
    slug: "voluntary",
  },
]
export default async function Team() {
  const teamList = await GetTeamList()
  const JobList = await GetJobList()

  return (
    <div>
      <div>
        <Banner
          title="Our team"
          breadcrumb={[
            { label: "Home", path: "/" },
            { label: "Team", path: "/team" },
          ]}
        />
      </div>
      {/* <div className="w-full aspect-[12/4] relative">
        <div className="absolute w-full h-full bg-black/50 z-10">
          <div className="container mx-auto flex h-full justify-start items-end py-20">
            <div>
              <h1 className="text-3xl font-bold text-center text-white ">Meet the team</h1>
              <span className="w-20 h-[2px] bg-white block my-5"></span>
            </div>
          </div>
        </div>
        <Image
          src="/images/our-team.png"
          alt="team"
          fill
          sizes="100vw"
          className="object-cover object-top "
        />
      </div> */}
      <ImageContentGrid
        image={{
          alt: "team",
          src: "/images/team/how-we-work.jpg",
        }}
        classNames={{
          image: "!w-full !h-full !relative object-cover",
          imageContainer: "!w-full !h-full",
        }}
        title="How We Work at FACTS Nepal">
        <p>
          At FACTS Research & Analytics, we are dedicated to delivering precise, intelligence-driven solutions to our
          clients, empowering them to make informed choices. With a focus on reliability, context, and actionable
          insights, we strive to provide comprehensive research and analysis that enables both our clients and the
          general public to make effective and efficient decisions.
        </p>
        <h2 className="text-xl font-semibold my-3 mt-5">Our Approach</h2>
        <p>
          <strong>Comprehensive Research:</strong> We conduct in-depth research across various domains to gather
          relevant data and insights.
        </p>
        <p className="mt-2">
          <strong>Precision Analysis:</strong> Our team of analysts meticulously analyze the collected data to extract
          meaningful patterns and trends.
        </p>
        <p className="mt-2">
          <strong>Contextual Understanding:</strong> We ensure that our findings are presented within the appropriate
          context, allowing for better interpretation and decision-making.
        </p>
      </ImageContentGrid>
      <div className="container mx-auto py-5">
        <h2 className=" font-bold ">Meet Our Team: Driving Excellence Through Expertise and Dedication</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
          {teamList.results.map((team, index) => (
            <TeamCard
              key={index}
              team={team}
            />
          ))}
        </div>
      </div>
      <>
        <div className="container mx-auto py-20 ">
          <Headings
            title="Join our team"
            className=" "
          />
          <p className="mt-3">
            We&apos;re building a culture at HubSpot where amazing people (like you) can do their best work. If
            you&apos;re ready to grow your career and help millions of organizations grow better, you&apos;ve come to
            the right place.
          </p>
          <div className="flex justify-center my-10">
            <form className="relative max-w-xl w-full flex">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
                name="search"
              />
              <button className="text-white absolute right-2.5 bottom-2.5 bg-primary/70 hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                Search
              </button>
            </form>
          </div>
          <div>
            <VacanciesTab Categories={categoryList} />
          </div>

          <div className="mt-10 grid grid-cols-4 gap-5">
            {JobList.results.map((item) => (
              <CardUi key={item.slug}>
                <div className="p-3 py-5 z-10 relative !w-full">
                  <h1 className="text-base font-bold text-indigo-600">{item.title}</h1>
                  <h2 className="text-sm">{item.department}</h2>
                  <p className="text-base font-bold mt-5">
                    Deadline:{" "}
                    {new Date(item?.deadline!) < new Date() ? " Closed" : new Date(item?.deadline!)?.toDateString()}
                  </p>
                </div>
                {/* apply now */}
                <Link
                  href={`/careers/${item.slug}`}
                  className="p-3 m-3 rounded-md text-white z-10 relative bg-primary w-fit flex gap-2">
                  Apply Now <MoveRightIcon />
                </Link>
              </CardUi>
            ))}
          </div>
        </div>
      </>
      <div className="container mx-auto py-20">
        {/* Want to be a part of our team */}
        <h2 className=" font-bold ">Want to be a part of our team?</h2>
        {/* send your resume */}
        <div className="grid grid-cols-2 gap-10 mt-10">
          <ApplyForm />
          <div>
            <Image
              src="/images/partofteam.jpg "
              alt="team"
              fill
              className="!relative w-full "
            />
          </div>
        </div>
      </div>
    </div>
  )
}
