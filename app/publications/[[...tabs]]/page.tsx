import { SearchIcon } from "lucide-react"

import { IPaginatedData, IPublication } from "@/app/Types"

import Banner from "@/app/components/Banner"
import TabsUi from "@/app/components/publication/TabsUi"
import PublicationLists from "@/app/components/publication/PublicationList"
import { ParsedUrlQuery } from "querystring"
import PaginationUi from "@/app/components/ui/PaginationUi"

async function GetPublicationList({
  category,
  page,
}: {
  category?: string
  page?: string
}): Promise<IPaginatedData<IPublication>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/basic/ourpublication/?limit=12&${
      category ? `category=${category}` : ""
    }&offset=${page ? (parseInt(page) - 1) * 12 : "0"}`,
    {
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<IPublication>
  return data
}
export default async function NewsAndBlogs({
  searchParams,
  params,
}: {
  searchParams: ParsedUrlQuery
  params: {
    category: string[]
  }
}) {
  const publicationLists = await GetPublicationList({
    category: params?.category ? params?.category[0] : "",
    page: searchParams.page as string,
  })
  const totalPage = Math.ceil(publicationLists.count / 12)
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
      <div className="flex justify-center pt-0 ">
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
        <TabsUi />
      </div>
      <PublicationLists filteredData={publicationLists.results} />
      <div className="flex justify-center mt-10">
        <PaginationUi
          total={totalPage}
          page={parseInt(searchParams.page as string)}
        />{" "}
      </div>
    </div>
  )
}
