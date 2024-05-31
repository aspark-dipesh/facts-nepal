"use client"
import { Button, Card, CardBody, CardFooter, CardHeader, cn } from "@nextui-org/react"

import React from "react"
import { IService } from "../Types"
import Headings from "./ui/Headings"
import Image from "next/image"

interface IServicesProps {
  hasViewAll?: boolean
  title: string
  description?: string
  servicesList: IService[]
  footerBlur?: boolean
  classNames?: {
    title?: string
    container?: string
    card?: string
    cardFooter?: string
  }
}
const Services = ({ servicesList, title, description, footerBlur, classNames }: IServicesProps) => {
  return (
    <div className={classNames?.container}>
      <div className="container mx-auto py-20">
        <Headings
          title={title}
          className={classNames?.title}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 place-items-center">
          {servicesList.map((service, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className="h-full justify-start"
              onPress={() => console.log("item pressed")}>
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
                  className=""
                  dangerouslySetInnerHTML={{ __html: service.description || "" }}
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
