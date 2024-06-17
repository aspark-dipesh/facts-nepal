"use client"
import React from "react"
import { IImage } from "../Types"
import Image from "next/image"
import { cn } from "./ui/magic-card"
import LightGalleryComponent from "./gallery/LightGallery"
import Link from "next/link"
import { Calendar, CalendarDays } from "lucide-react"
interface IProps {
  children?: React.ReactNode
  title: string
  image: IImage
  description: string
  date: string
  classNames: {
    container?: string
    title?: string
    image?: string
    description?: string
  }
}
const FactsOfTheDay = ({ description, image, title, classNames, date }: IProps) => {
  return (
    <div className={cn("container mx-auto ", classNames?.container)}>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="my-auto">
          <h1 className={cn("text-3xl font-bold", classNames?.title)}>{title}</h1>
          {date && (
            <p className="text-base flex justify-end my-3 gap-2 text-end  text-black font-semibold ">
              <Calendar />
              {new Date(date).toDateString()}
            </p>
          )}

          <p
            className={cn("text-lg mt-3", classNames?.description)}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className={cn("my-auto", classNames?.image)}>
          <div className="relative w-full ">
            <LightGalleryComponent>
              <Link
                href={image.src}
                className=" "
                data-sub-html={description}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover w-full h-full !relative rounded-md"
                />
              </Link>
            </LightGalleryComponent>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FactsOfTheDay
