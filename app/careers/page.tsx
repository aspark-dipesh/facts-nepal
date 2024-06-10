import { Card, Tab, Tabs } from "@nextui-org/react"
import { MoveRightIcon, SearchIcon } from "lucide-react"
import Image from "next/image"
import VacanciesTab from "../components/careers/VacanciesTab"
import { ParsedUrlQuery } from "querystring"
import jobs from "./data.json"
import Link from "next/link"
import Banner from "../components/Banner"
interface IJob {
  title: string
  department: string
  slug: string
  type: string
  location: string
  deadline: string
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
export default async function Careers({ searchParams }: { searchParams: ParsedUrlQuery }) {
  const JobList = jobs as IJob[]
  const Filtered = JobList.filter(
    (item) => item.type === (searchParams.type ? searchParams.type : categoryList[0].slug)
  )

  return (
    <>
      <Banner
        title="All Open Positions"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Careers", path: "/careers" },
        ]}
      />
      <div className="container mx-auto py-20 pt-0">
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
          {Filtered.map((item) => (
            <Card
              className=""
              key={item.slug}>
              <div className="p-3 py-5 z-10 relative !w-full">
                <h1 className="text-base font-bold text-indigo-600">{item.title}</h1>
                <h2 className="">{item.department}</h2>
                <p className="text-base font-bold">Deadline: {item.deadline}</p>
              </div>
              {/* apply now */}
              <Link
                href={`/careers/${item.slug}`}
                className="p-3 m-3 rounded-md text-white z-10 relative bg-primary w-fit flex gap-2">
                Apply Now <MoveRightIcon />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
