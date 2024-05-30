"use client"
import React from "react"
import { IImage } from "../Types"
import Image from "next/image"
import { cn } from "./ui/magic-card"
interface IProps {
  children?: React.ReactNode
  title: string
  image: IImage
  description: string
  classNames: {
    container?: string
    title?: string
    image?: string
    description?: string
  }
}
const FactsOfTheDay = ({ description, image, title, classNames }: IProps) => {
  return (
    <div className={cn(" py-20", classNames?.container)}>
      <h1 className={cn("text-3xl font-bold text-center mb-10", classNames?.title)}>Facts of the day</h1>

      <div className="grid md:grid-cols-2 gap-10 container mx-auto">
        <div className="my-auto">
          <h1 className={cn("text-3xl font-bold", classNames?.title)}>{title}</h1>
          <p className={cn("text-lg mt-3", classNames?.description)}>{description}</p>
        </div>
        <div className={cn("my-auto", classNames?.image)}>
          <div className="relative w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover w-full h-full !relative"
            />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FactsOfTheDay
