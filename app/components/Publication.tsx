"use client"
import { Button, Card, CardFooter, CardHeader, cn } from "@nextui-org/react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import React from "react"
import { IImage, IPublication } from "../Types"
import Headings from "./ui/Headings"
import Link from "next/link"
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
  const router = useRouter()
  return (
    <div className={classNames?.container}>
      <div className="container mx-auto py-20">
        <Headings
          title={title}
          className={classNames?.title}
          path={hasViewAll ? "/publications" : undefined}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10 lg:gap-20 mt-10 place-items-center">
          {Publications.map((publication, index) => (
            <Link
              key={index}
              href={`/publications/view/${publication.slug}`}>
              <Card
                isHoverable
                isPressable
                onClick={() => router.push(`/publications/view/${publication.slug}`)}
                isFooterBlurred={footerBlur}
                key={index}
                className={cn("w-full h-full relative p-10", classNames?.card)}>
                <h2 className="text-black my-2">{publication.main_heading}</h2>
                <p className="line-clamp-6 text-justify">
                  <div dangerouslySetInnerHTML={{ __html: publication.paragraph }} />
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Publications
