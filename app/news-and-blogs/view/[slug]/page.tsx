import Link from "next/link"

import { SearchIcon } from "lucide-react"
import BreadCrumbs from "@/app/components/BreadCrumbs"
import { IBlog } from "@/app/Types"
import Image from "next/image"
async function GetBlogDetail({ slug }: { slug: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}/`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IBlog
  return data
}
export default async function NewsAndBlogsDetails({ params }: { params: { slug: string } }) {
  const BlogDetail = await GetBlogDetail({ slug: params.slug })
  return (
    <div className="container mx-auto pt-4">
      <BreadCrumbs
        BreadCrumbs={[
          { label: "Home", path: "/" },
          { label: "Blogs", path: "/news-and-blogs" },
          { label: BlogDetail?.title, path: `/news-and-blogs/view/${BlogDetail?.slug}` },
        ]}
      />
      <div className="grid grid-cols-10 gap-10 pt-10 pb-10">
        <div className="col-span-7">
          {BlogDetail?.featured_image && (
            <div className="my-10 relative aspect-[4/3]">
              <Image
                src={BlogDetail?.featured_image}
                alt={BlogDetail?.title}
                fill
              />
            </div>
          )}
          <h1 className="text-3xl md:text-6xl font-bold">{BlogDetail.title}</h1>
          <p className="text-lg mt-3 text-end">{BlogDetail.published_date}</p>
          <p className="text-lg mt-3">{BlogDetail.short_description}</p>
          {/* View pdf */}
          <div className="mt-5">
            {BlogDetail.link && (
              <Link
                href={BlogDetail.link}
                target="_blank"
                className="text-lg p-3 bg-primary-500 mt-10 rounded-md text-white">
                View pdf
              </Link>
            )}
          </div>
          <div
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: BlogDetail.content }}
          />
        </div>

        <div className="col-span-3">
          <div className="sticky top-20">
            <h1 className="text-xl font-bold my-3">Related Posts</h1>
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
            {/* {
              Related.map((item) => (
                <Card
                  key={item.title}
                  className="p-3 mb-5">
                  <div className="flex">
                    <span className="text-sm font-bold text-primary/70">{item.date}</span>

                    <span className="text-sm font-bold text-primary/70 mx-3">•</span>
                    <span className="text-sm font-bold text-primary/70  capitalize">{item.category}</span>
                  </div>
                  <Link
                    href={`/news-and-blogs/view/${item.slug}`}
                    className="text-2xl font-bold hover:text-primary/80">
                    {item.title}
                  </Link>
                </Card>
              ))
            } */}
          </div>
        </div>
      </div>
    </div>
  )
}
