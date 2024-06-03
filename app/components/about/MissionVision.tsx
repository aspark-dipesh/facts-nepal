"use client"
import React from "react"
import Image from "next/image"
import { IImage } from "@/app/Types"
import { cn } from "@nextui-org/react"
interface IProps {
  title: string
  children?: React.ReactNode
  image: IImage
  classNames?: {
    container?: string
    title?: string
    image?: string
  }
  ordering: {
    image: string
    content: string
  }
}

const MissionVision = ({ image, title, children, ordering, classNames }: IProps) => {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2 gap-10">
        <div className={cn("", ordering.image)}>
          <div className="relative w-full aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className={cn("object-cover ", classNames?.image)}
            />
          </div>
        </div>
        <div className={cn("my-auto ", ordering.content)}>
          <div className="my-auto h-fit">
            <h1 className="">{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionVision
