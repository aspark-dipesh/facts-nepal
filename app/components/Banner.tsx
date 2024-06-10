import React from "react"
import { IBreadcrumb } from "../Types"
import BreadCrumbs from "./BreadCrumbs"

const Banner = ({ title, breadcrumb }: { title: string; breadcrumb: IBreadcrumb[] }) => {
  return (
    <div className="pt-10 pb-10">
      <h1 className="text-center">{title}</h1>
      <div className="flex justify-center mt-5">
        <BreadCrumbs BreadCrumbs={breadcrumb} />
      </div>
    </div>
  )
}

export default Banner
