import { IImage } from "@/app/Types"
import Image from "next/image"
import React, { Children } from "react"
interface IProps {
  children?: React.ReactNode
  title: string
  image: IImage
  headName?: string
}
const HeadMessage = ({ children, image, title, headName }: IProps) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className="relative aspect-square w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="my-auto">
          <h2 className="">{title}</h2>
          <h3 className="text-sm font-semibold">{headName}</h3>
          <div className="mt-5">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default HeadMessage
