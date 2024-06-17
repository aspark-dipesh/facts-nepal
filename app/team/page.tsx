import Image from "next/image"

import ApplyForm from "../components/careers/ApplyForm"
import ImageContentGrid from "../components/ImageContentGrid"
import BreadCrumbs from "../components/BreadCrumbs"
import { IPaginatedData, ITeamMember } from "../Types"
import TeamCard from "../components/team/TeamCard"

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
export default async function Team() {
  const teamList = await GetTeamList()

  return (
    <div>
      <div>
        <BreadCrumbs
          BreadCrumbs={[
            { label: "Home", path: "/" },
            { label: "Team", path: "/team" },
          ]}
        />
      </div>
      <div className="w-full aspect-[12/4] relative">
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
      </div>
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
