"use client"
import { Button, Card, CardBody, CardFooter, CardHeader, Image, cn } from "@nextui-org/react"

import React from "react"
import { IImage } from "../Types"
import Headings from "./ui/Headings"

interface IServicesProps {
  hasViewAll?: boolean
  title: string
  description?: string
  servicesList: {
    title: string
    description?: string
    image: IImage
  }[]
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
              <CardBody className="overflow-visible p-0   h-[340px] flex-none">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={service.title}
                  className="w-full object-cover h-[340px]"
                  src={service.image.src}
                />
              </CardBody>
              <CardFooter className="text-small flex-col text-start">
                <b>{service.title}</b>
                <div dangerouslySetInnerHTML={{ __html: service.description || "" }} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
