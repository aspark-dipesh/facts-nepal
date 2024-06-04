"use client"
import React from "react"
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react"
import { IImage } from "@/app/Types"
import Image from "next/image"
import LightGalleryComponent from "../gallery/LightGallery"
import Link from "next/link"

export default function PictoCard({
  image,
  title,
  description,
  date,
}: {
  title: string
  description?: string
  date?: string
  image: IImage
}) {
  return (
    <Card className="w-[740px] mx-auto py-5">
      <div>date: {date}</div>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{title}</h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className="p-3 text-small text-default-400 h-fit flex flex-col gap-3 ">
        <div dangerouslySetInnerHTML={{ __html: description || "" }} />
        <div className="w-full">
          <LightGalleryComponent>
            <Link
              href={image.src}
              className="relative"
              data-sub-html={description}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-cover w-full h-full !relative"
              />
            </Link>
          </LightGalleryComponent>
        </div>
      </CardBody>
    </Card>
  )
}
