"use client"
import { Card, Tab, Tabs } from "@nextui-org/react"
import { CalendarDays, SearchIcon } from "lucide-react"
import Link from "next/link"
import { usePathname, useParams, useSearchParams } from "next/navigation"
import Publication from "../data.json"
import { useEffect, useState } from "react"
import { IPublication } from "@/app/Types"
import NewsCard from "@/app/components/NewsCard"
import Banner from "@/app/components/Banner"
function getWindowDimensions() {
  return {
    width: window.innerWidth,
  }
}
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
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const [cardPerColumn, setCardPerColumn] = useState<number>(filteredData?.length! / 3)
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

  useEffect(() => {
    setWindowDimensions(getWindowDimensions())
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  useEffect(() => {
    if (windowDimensions.width < 768) {
      setCardPerColumn(Math.ceil(filteredData?.length! / 1))
    }
    if (windowDimensions.width < 1024) {
      setCardPerColumn(Math.ceil(filteredData?.length! / 2))
    }
    if (windowDimensions.width > 1024) {
      setCardPerColumn(Math.ceil(filteredData?.length! / 3))
    }
  }, [windowDimensions])
  return (
    <div className="container mx-auto p-2 ">
      <Banner
        title="Our Publication"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Publication", path: "/publications" },
        ]}
      />
      {/* Search bar */}
      <div className="flex justify-center pt-0">
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
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 mt-5">
        <div className="flex flex-col gap-10">
          {filteredData?.slice(0, cardPerColumn).map((item) => (
            <NewsCard
              key={item.title}
              category={item.category}
              date={item.date}
              description={item.description}
              image={item.image}
              link={item.link}
              title={item.title}
              slug={`/publications/view/${item.slug}`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-10">
          {filteredData?.slice(cardPerColumn, cardPerColumn * 2).map((item) => (
            <NewsCard
              key={item.title}
              category={item.category}
              date={item.date}
              description={item.description}
              image={item.image}
              link={item.link}
              title={item.title}
              slug={`/publications/view/${item.slug}`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-10">
          {filteredData?.slice(cardPerColumn * 2).map((item) => (
            <NewsCard
              key={item.title}
              category={item.category}
              date={item.date}
              description={item.description}
              image={item.image}
              link={item.link}
              title={item.title}
              slug={`/publications/view/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
