"use client"
import React from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { ITestimonial } from "@/app/Types"
import Image from "next/image"
import Headings from "../components/ui/Headings"

const Testimonial2 = ({ Testimonials, title }: { Testimonials: ITestimonial[]; title: string }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1.25,
      spacing: 10,
    },
    loop: true,
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 1.25,
          spacing: 0,
        },
      },

      "(min-width: 1024px)": {
        slides: {
          perView: 2.25,
          spacing: 0,
        },
      },
    },
  })
  return (
    <>
      <section className="">
        <div className="container py-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ">
              <Headings title={title} />

              <p className="mt-4 text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro
                optio fugit a culpa sunt id!
              </p>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  onClick={() => instanceRef.current?.prev()}
                  //   disabled={}
                  aria-label="Previous slide"
                  id="keen-slider-previous-desktop"
                  className="rounded-full border border-primary p-3 text-primary transition hover:bg-primary hover:text-white">
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
                  id="keen-slider-next-desktop"
                  className="rounded-full border border-primary p-3 text-primary transition hover:bg-primary hover:text-white">
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

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div
                ref={sliderRef}
                id="keen-slider"
                className="keen-slider">
                {Testimonials.map((item, index) => (
                  <div
                    className="keen-slider__slide px-5 py-10 "
                    key={index}>
                    <blockquote className="flex h-full flex-col justify-between bg-white shadow-sm  quote-container relative ">
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

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; {item.position}
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              onClick={() => instanceRef.current?.next()}
              id="keen-slider-previous"
              className="rounded-full border border-primary p-4 text-primary transition hover:bg-primary hover:text-white">
              <svg
                className="size-5 -rotate-180 transform"
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

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              onClick={() => instanceRef.current?.prev()}
              className="rounded-full border border-primary p-4 text-primary transition hover:primary hover:text-white">
              <svg
                className="h-5 w-5"
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
      </section>
    </>
  )
}

export default Testimonial2
