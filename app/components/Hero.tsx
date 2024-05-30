"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { IContent, IImage } from "../Types"
import Image from "next/image"
import { Button, cn } from "@nextui-org/react"
interface IHeroProps {
  images: IImage[]
  content?: IContent
  contentPosition: "s" | "m" | "e"
  classNames?: {
    content?: string
    image?: string
    container?: string
    title?: string

    description?: string
    action?: string
  }
  action?: {
    label: string
    path: string
    icon?: React.ReactNode
  }
}
const Hero = ({ images, content, contentPosition, classNames, action }: IHeroProps) => {
  return (
    <div className="relative">
      <Swiper
        loop
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper absolute ">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={cn(
          "absolute inset-0 flex items-center z-[1] px-20",
          classNames?.container,
          contentPosition === "s" && "justify-start",
          contentPosition === "m" && "justify-center",
          contentPosition === "e" && "justify-end"
        )}>
        <div className={cn("max-w-xl w-full h-72 !text-white", classNames?.description)}>
          <h1 className={cn("text-2xl font-bold capitalize ", classNames?.title)}>{content?.title}</h1>
          <p className={cn("text-lg font-semibold mt-5", classNames?.description)}>{content?.description}</p>
          {action && (
            <Button
              size="sm"
              variant="shadow"
              color="primary"
              className={cn("flex items-center gap-2 mt-5 mx-auto", classNames?.action)}>
              <a
                href={action.path}
                target="_blank"
                rel="noreferrer">
                {action.icon}
                <p className="text-base font-semibold">{action.label}</p>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
