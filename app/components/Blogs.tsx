import { Link } from "lucide-react"
import Image from "next/image"
import React from "react"
import Headings from "./ui/Headings"

const Blogs = () => {
  return (
    <div className="wrapper py-10">
      <div className="container mx-auto">
        <Headings
          title="Our Latest Blog Posts"
          path="/news-and-blogs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/blog-1.webp"
                alt="Blog image"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <h2 className="font-semibold">Home & Texture House Tours: Showcasing Black Millennial Homeowners</h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="w-1/4 min-w-64 relative aspect-video ">
                <Image
                  src="/images/blog-2.jpg"
                  alt="Blog image"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold">
                Blavity, After Doubling Ad Revenue, Restructures and Launches Recruiting Product
              </h2>
            </div>
            <div className="flex gap-2">
              <div className="w-1/4 min-w-64 relative aspect-video ">
                <Image
                  src="/images/blog-2.jpg"
                  alt="Blog image"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-lg font-bold">
                Blavity, After Doubling Ad Revenue, Restructures and Launches Recruiting Product
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
