import Image from "next/image"
import React from "react"
import Headings from "./ui/Headings"
import { IBlogs } from "../Types"
import Link from "next/link"

const Blogs = ({ blog }: { blog: IBlogs[] }) => {
  return (
    <div className="wrapper py-10 order-12">
      <div className="container mx-auto">
        <Headings
          title={"our latest Blogs"}
          path="/news-and-blogs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={blog[0].featured_image}
                alt="Blog image"
                fill
                sizes="100vw"
                className="object-cover hover:scale-110 transaction-all duration-300"
              />
            </div>
            <h2 className="font-semibold hover:text-primary cursor-pointer">{blog[0].title}</h2>
          </div>
          <div className="flex flex-col gap-2">
            {blog?.slice(1, 5)?.map((blog, index) => (
              <Link
                href={`/news-and-blogs/view/${blog.slug}`}
                key={index}
                className="flex gap-2 flex-col md:flex-row">
                <div className="w-1/4 min-w-64 relative aspect-video overflow-hidden rounded-lg ">
                  <Image
                    src={blog.featured_image}
                    alt="Blog image"
                    fill
                    sizes="100vw"
                    className="object-cover hover:scale-110 transaction-all duration-300"
                  />
                </div>
                <h2 className="text-lg font-semibold hover:text-primary cursor-pointer">{blog.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
