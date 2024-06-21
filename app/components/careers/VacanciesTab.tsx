"use client"
import { Tab, Tabs } from "@nextui-org/react"
import Link from "next/link"
import React, { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
interface IProps {
  Categories: {
    name: string
    slug: string
  }[]
}

const VacanciesTab = ({ Categories }: IProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selected, setSelected] = React.useState<string>("")
  useEffect(() => {
    if (searchParams.get("type") === null) {
      setSelected(Categories[0].slug)
    } else {
      setSelected(searchParams.get("type") as string)
    }
  }, [])

  return (
    <div className="flex justify-center">
      <Tabs
        size={"lg"}
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key as string)}
        aria-label="vacancies"
        classNames={{
          tab: "!p-0 w-fit mx-2 h-fit  ",
          tabContent: "text-lg group-data-[selected=true]:font-bold ",
          cursor: "w-full",
        }}>
        {Categories.map((category) => (
          <Tab
            key={category.slug}
            title={
              <Link
                scroll={false}
                href={`${pathname}?type=${category.slug}`}
                className="p-2 h-full">
                {category.name}
              </Link>
            }
          />
        ))}
      </Tabs>
    </div>
  )
}

export default VacanciesTab
