import Image from "next/image"
import React from "react"

import Link from "next/link"

import { IImage } from "@/app/Types"
import Headings from "../components/ui/Headings"
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
const Story2 = ({ image, title, children, action, sub_heading }: IStoryProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  py-10 container mx-auto px-2 md:px-0 gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <Headings
              title={title}
              className="text-start"
            />
            {sub_heading && <p className="mt-3 text-lg my-2">{sub_heading}</p>}

            <div className="max-h-[310px] overflow-clip mt-10">{children}</div>
          </div>
          {action?.path && (
            <div className="flex justify-end  mt-3">
              <Link
                href={action?.path}
                className="bg-primary  hover:bg-opacity-80 flex gap-1 border-b w-fit text-secondary hover:opacity-90 hover:text-secondary p-2 rounded-lg ">
                {action?.label}
              </Link>
            </div>
          )}
        </div>
        <div className="w-full h-full">
          <div className="h-full w-full relative">
            <Image
              src={image.src || " "}
              alt={image.alt || ""}
              fill
              sizes="100vw"
              className="h-full w-full !relative  sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Story2
