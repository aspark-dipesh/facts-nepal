import { Card } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { IPublication } from "../Types"
import { CalendarDays } from "lucide-react"

const NewsCard = ({ category, date, description, link, slug, title, image }: IPublication) => {
  return (
    <Card
      key={title}
      className="p-3">
      {image && (
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={"/images/blog-2.jpg"}
            alt={title}
            className="w-full h-full object-cover"
            fill
          />
        </div>
      )}

      <div className="mt-5 px-5">
        <div className="flex">
          <span className="text-sm font-bold text-primary/70 flex items-center gap-1">
            <CalendarDays size={14} />
            {date}
          </span>
          {/* dot */}
          <span className="text-sm font-bold text-primary/70 mx-3">•</span>
          <span className="text-sm font-bold text-primary/70  capitalize">{category}</span>
        </div>
        <Link
          href={`${slug}`}
          className="text-2xl font-semibold hover:text-primary/80">
          {title}
        </Link>
        <p className="text-sm line-clamp-4">{description}</p>
        {/* learn more */}
        <div className="mt-5 z-10">
          <Link
            href={`${slug}`}
            className="text-primary hover:text-primary/80 underline">
            Learn More...
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default NewsCard
