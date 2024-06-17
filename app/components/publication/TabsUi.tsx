"use client"
import { Tab, Tabs } from "@nextui-org/react"
import Link from "next/link"

import { usePathname } from "next/navigation"
import React from "react"
const category = [
  {
    name: "Quantitative",
    slug: "quantitative",
  },
  {
    name: "Qualitative",
    slug: "qualitative",
  },
]
const TabsUi = () => {
  const pathname = usePathname()

  return (
    <Tabs
      variant={"underlined"}
      aria-label="Options"
      classNames={{
        tab: "p-0  ",
        tabContent: "text-lg group-data-[selected=true]:font-bold ",
        cursor: "w-[90%]",
      }}
      selectedKey={pathname}
      defaultSelectedKey={"/publications"}>
      <Tab
        key="/publications"
        title={
          <Link
            className="px-3 "
            href={`/publications`}>
            All
          </Link>
        }></Tab>
      {category.map((item) => (
        <Tab
          key={`/publications/${item.slug}`}
          title={
            <Link
              className="px-3 "
              href={`/publications/${item.slug}`}>
              {item.name}
            </Link>
          }></Tab>
      ))}
    </Tabs>
  )
}

export default TabsUi
