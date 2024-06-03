"use client"
import { Card, Tab, Tabs } from "@nextui-org/react"
import { SearchIcon } from "lucide-react"
import Link from "next/link"
import { usePathname, useParams, useSearchParams } from "next/navigation"
import Publication from "../data.json"
import { useEffect, useState } from "react"
import { IPublication } from "@/app/Types"

export default function NewsAndBlogs() {
  const category = [
    {
      name: "Quantitative",
      slug: "quantitative",
    },
    {
      name: "Qualitative",
      slug: "qualitative",
    },
  ]
  const [filteredData, setFilteredData] = useState<IPublication[]>()

  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (params.tabs) {
      setFilteredData(Publication.filter((item) => item.category === params?.tabs[0]) as IPublication[])
    } else {
      setFilteredData(Publication as IPublication[])
    }
  }, [params])
  return (
    <div className="container mx-auto p-2 my-20">
      <h1 className="text-3xl font-bold text-center">Our Publications</h1>
      {/* Search bar */}
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
      <div className="flex justify-center">
        <Tabs
          variant={"underlined"}
          aria-label="Options"
          classNames={{
            tab: "p-0  ",
            tabContent: "text-lg group-data-[selected=true]:font-bold ",
            cursor: "w-[90%]",
          }}
          selectedKey={pathname}
          defaultSelectedKey={"/publications"}>
          <Tab
            key="/publications"
            title={
              <Link
                className="px-3 "
                href={`/publications`}>
                All
              </Link>
            }></Tab>
          {category.map((item) => (
            <Tab
              key={`/publications/${item.slug}`}
              title={
                <Link
                  className="px-3 "
                  href={`/publications/${item.slug}`}>
                  {item.name}
                </Link>
              }></Tab>
          ))}
        </Tabs>
      </div>
      <div className="grid  grid-cols-4 gap-5 mt-5">
        {filteredData?.map((item) => (
          <Card
            key={item.title}
            className=" p-5 py-8">
            <div className="flex">
              <span className="text-sm font-bold text-primary/70">{item.date}</span>
              {/* dot */}
              <span className="text-sm font-bold text-primary/70 mx-3">•</span>
              <span className="text-sm font-bold text-primary/70  capitalize">{item.category}</span>
            </div>
            <Link
              href={`/publications/view/${item.slug}`}
              className="text-2xl font-bold hover:text-primary/80">
              {item.title}
            </Link>
            <p className="text-sm line-clamp-4">{item.description}</p>
            {/* learn more */}
            <div className="mt-5">
              <Link
                href={`/publications/view/${item.slug}`}
                className="text-primary hover:text-primary/80 underline">
                Learn More...
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
