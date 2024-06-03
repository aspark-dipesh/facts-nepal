"use client"
import { Button, Card, CardFooter, CardHeader, cn } from "@nextui-org/react"
import Image from "next/image"

import React from "react"
import { IImage, IPublication } from "../Types"
import Headings from "./ui/Headings"
interface IServicesProps {
  hasViewAll?: boolean
  title: string
  description?: string
  Publications: IPublication[]
  footerBlur?: boolean
  classNames?: {
    title?: string
    container?: string
    card?: string
    cardFooter?: string
  }
}
const Publications = ({ Publications, title, footerBlur, classNames, hasViewAll }: IServicesProps) => {
  return (
    <div className={classNames?.container}>
      <div className="container mx-auto py-20">
        <Headings
          title={title}
          className={classNames?.title}
          path={hasViewAll ? "/publications" : undefined}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-40 mt-10 place-items-center">
          {Publications.map((publication, index) => (
            <Card
              isHoverable
              isPressable
              isFooterBlurred={footerBlur}
              key={index}
              className={cn("w-full h-full relative p-6", classNames?.card)}>
              <h2 className="text-black my-3">{publication.title}</h2>
              <p className="line-clamp-6">{publication.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Publications
