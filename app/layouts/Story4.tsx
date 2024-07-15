import Image from "next/image"
import React from "react"

import { IImage } from "@/app/Types"
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
const Story4 = ({ image, title, children, action, sub_heading }: IStoryProps) => {
  return (
    <>
      <div className={"container py-10 mx-auto "}>
        <div className="grid md:grid-cols-1 gap-10">
          <div className="my-auto">
            <h1 className={"text-3xl font-bold text-center"}>{title}</h1>

            <div className={"text-lg mt-3 text-center max-w-xl mx-auto"}>{children}</div>
          </div>
          <div className={"my-auto"}>
            <div className="relative w-full ">
              <Image
                src={image.src || "/map.png"}
                alt="map"
                fill
                sizes="100vw"
                className="object-cover w-full h-full !relative rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Story4
