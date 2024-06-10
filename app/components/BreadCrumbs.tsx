"use client"
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react"
import React from "react"
import { IBreadcrumb } from "../Types"

const BreadCrumbs = ({ BreadCrumbs }: { BreadCrumbs: IBreadcrumb[] }) => {
  return (
    <Breadcrumbs
      className=" pt-0"
      classNames={{
        list: "pl-0",
      }}>
      {BreadCrumbs.map((item, index) => (
        <BreadcrumbItem
          key={index}
          href={item.path}>
          {item.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  )
}

export default BreadCrumbs
