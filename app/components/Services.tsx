"use client"
import { Button, Card, CardBody, CardFooter, CardHeader, cn } from "@nextui-org/react"

import React from "react"
import { IService } from "../Types"
import Headings from "./ui/Headings"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { MoveRight } from "lucide-react"

interface IServicesProps {
  hasViewAll?: boolean
  title: string
  description?: string
  servicesList: IService[]
  footerBlur?: boolean
  path?: string
  classNames?: {
    title?: string
    container?: string
    card?: string
    cardFooter?: string
  }
}
const Services = ({ servicesList, title, description, footerBlur, classNames, path }: IServicesProps) => {
  const router = useRouter()
  return (
    <div className={classNames?.container}>
      <div className="container mx-auto py-10">
        <Headings
          title={title}
          className={classNames?.title}
          path={path}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 place-items-center">
          {servicesList.map((service, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => router.push(`/services/${service.id}`)}
              className="h-full justify-start">
              <CardBody className="overflow-visible p-0  aspect-square w-full flex-none">
                <Image
                  fill
                  alt={service.name}
                  className="object-cover"
                  src={service.img}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </CardBody>
              <CardFooter className="text-small flex-col text-start">
                <b>{service.name}</b>
                <div
                  className="line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: service.description || "" }}
                />
                {/* learn more */}
                <Link
                  className="flex justify-end w-full gap-1 items-center hover:text-primary-500"
                  href={`/services/${service.id}`}>
                  <MoveRight />
                  learn more
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
