import { IImage } from "@/app/Types"
import Image from "next/image"
import Link from "next/link"
import React from "react"
interface IStoryProps {
  title: string
  image: IImage
  sub_heading?: string
  children?: React.ReactNode
  action?: {
    label?: string
    path?: string
  }
}
const Story3 = ({ image, title, children, action, sub_heading }: IStoryProps) => {
  return (
    <section>
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="relative z-10 lg:py-8">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt={image.alt || " "}
                src={image.src || " "}
                fill
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 ">
              <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>

              <div className="mt-4 text-gray-600">{children}</div>

              {action?.path && (
                <div className="mt-4">
                  <Link
                    href={action?.path}
                    className="bg-primary  hover:bg-opacity-80 flex gap-1 border-b w-fit text-secondary hover:opacity-90 hover:text-secondary p-2 rounded-lg ">
                    {action?.label}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story3
