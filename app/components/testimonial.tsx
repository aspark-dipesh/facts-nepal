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
const Testimonials = [
  {
    name: "Alex Johnson",
    title: "Marketing Director, ABC Corp",
    company: "ABC Corp",
    description:
      "Facts Nepal has transformed the way we approach market research. The insights are incredibly valuable and easy to understand.",
    image: "https://source.unsplash.com/random/100x100/?headshot&1",
  },
  {
    name: "Priya Sharma",
    title: "Data Analyst, Data Insights",
    company: "Data Insights",
    description:
      "Using Facts Nepal has streamlined our data analysis process. The platform is user-friendly and delivers precise information.",
    image: "https://source.unsplash.com/random/100x100/?headshot&2",
  },
  {
    name: "Mark Taylor",
    title: "Research Specialist, Global Trends",
    company: "Global Trends",
    description:
      "Facts Nepal offers comprehensive data that is crucial for our research projects. The intuitive design makes it a pleasure to use.",
    image: "https://source.unsplash.com/random/100x100/?headshot&3",
  },
  {
    name: "Emily Clark",
    title: "Product Manager, Tech Innovators",
    company: "Tech Innovators",
    description:
      "Facts Nepal is an indispensable tool for our product development team. The data provided helps us make informed decisions quickly.",
    image: "https://source.unsplash.com/random/100x100/?headshot&4",
  },
]
const TestimonialSlider = () => {
  return (
    <div className="container mx-auto">
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
        className=" absolute ">
        {Testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <section className="relative isolate overflow-hidden  px-6 py-10  lg:px-8">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
              <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                  <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p>{item.description}</p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <Image
                      className="mx-auto h-10 w-10 rounded-full"
                      alt=""
                      src={item.image}
                      width={100}
                      height={100}
                    />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">{item.title}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialSlider
