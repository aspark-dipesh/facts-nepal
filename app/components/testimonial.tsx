"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import Image from "next/image"
import { ITestimonial } from "../Types"

const TestimonialSlider = ({ Testimonials }: { Testimonials: ITestimonial[] }) => {
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
        {Testimonials?.map((item, index) => (
          <SwiperSlide key={index}>
            <section className="relative isolate overflow-hidden  px-6 py-10  lg:px-8">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
              <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                  <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                  </blockquote>
                  <figcaption className="mt-10">
                    {item.img && (
                      <Image
                        className="mx-auto h-20 w-20 rounded-full"
                        alt=""
                        src={item.img}
                        width={100}
                        height={100}
                      />
                    )}

                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">
                        {item.name} {"-"} {item.position}
                      </div>
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
