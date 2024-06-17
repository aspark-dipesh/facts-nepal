"use client"

import { SearchIcon } from "lucide-react"
import Banner from "@/app/components/Banner"

export default function NewsAndBlogs() {
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
      <div className="flex justify-center">
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
      {/* <div className="flex justify-center">
                <Tabs variant={"underlined"} aria-label="Options"
                    classNames={{
                        tab: "p-0  ",
                        tabContent: "text-lg group-data-[selected=true]:font-bold ",
                        cursor: 'w-[90%]'
                    }}
                    selectedKey={pathname}
                    defaultSelectedKey={'/news-and-blogs'}
                >
                    <Tab key="/news-and-blogs" title={<Link className="px-3 " href={`/news-and-blogs`}>All</Link>} >

                    </Tab>
                    {
                        category.map((item) => (
                            <Tab key={`/news-and-blogs/${item.slug}`} title={<Link className="px-3 " href={`/news-and-blogs/${item.slug}`}>{item.name}</Link>} >

                            </Tab>
                        ))
                    }
                </Tabs>
            </div> */}
    </div>
  )
}
