"use client"
import { ITestimonial } from "@/app/Types"
import React from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"

import { Quote } from "lucide-react"
import Headings from "../components/ui/Headings"
const Testimonial3 = ({ Testimonials, title }: { Testimonials: ITestimonial[]; title: string }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 10,
    },
    loop: true,
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },

      "(min-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
    },
  })
  return (
    <section className="">
      <div className="container py-10">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <Headings title={title} />

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              onClick={() => instanceRef.current?.prev()}
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-primary p-3 text-primary transition hover:bg-primary hover:text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              onClick={() => instanceRef.current?.next()}
              id="keen-slider-next"
              className="rounded-full border border-primary p-3 text-primary transition hover:bg-primary hover:text-secondary">
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div
            id="keen-slider"
            ref={sliderRef}
            className="keen-slider">
            {Testimonials.map((item, index) => {
              return (
                <div
                  className="keen-slider__slide px-5 py-10 w-full"
                  key={index}>
                  <blockquote className="flex h-full flex-col justify-between  quote-container">
                    {/* <Quote className="absolute top-[-25px] left-[calc(50%-25px)] rotate-180 bg-white h-10 w-10 stroke-secondary" /> */}
                    <div>
                      <Image
                        className=" h-20 w-20 rounded-full"
                        alt=""
                        src={item.img || "/images/icon/avatar.svg"}
                        width={100}
                        height={100}
                      />

                      <div className="mt-4">
                        <p className="text-xl font-bold  uppercase">{item.name}</p>

                        <div
                          className="mt-4 leading-relaxed text-gray-700"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                    {item.position && (
                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; {item.position}
                      </footer>
                    )}
                  </blockquote>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial3
