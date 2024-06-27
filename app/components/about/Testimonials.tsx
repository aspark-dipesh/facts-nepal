"use client"
import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Pagination,
  PaginationItemType,
} from "@nextui-org/react"
import Headings from "../ui/Headings"
import { Quote } from "lucide-react"
import { IPaginatedData, ITestimonial } from "@/app/Types"
import { useRouter } from "next/navigation"
import { cn } from "@/app/utils/Healpers"
import Link from "next/link"
import { ChevronIcon } from "./ChevronIcon"
const Testimonials = ({
  Testimonials,
  currentPage,
}: {
  Testimonials: IPaginatedData<ITestimonial>
  currentPage: string
}) => {
  const totalPage = Math.ceil(Testimonials.count / 4)
  const router = useRouter()

  const renderItem = ({ ref, key, value, isActive, className }: any) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <Link
          href={`?page=${parseInt(currentPage) === totalPage ? totalPage : parseInt(currentPage) + 1}#testimonials`}
          key={key}
          className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}>
          <ChevronIcon className="rotate-180" />
        </Link>
      )
    }

    if (value === PaginationItemType.PREV) {
      return (
        <Link
          href={`?page=${parseInt(currentPage) === 1 ? 1 : parseInt(currentPage) - 1}#testimonials`}
          key={key}
          className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")}>
          <ChevronIcon />
        </Link>
      )
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button
          key={key}
          className={className}>
          ...
        </button>
      )
    }

    // cursor is the default item
    return (
      <Link
        href={`?page=${value}#testimonials`}
        key={key}
        ref={ref}
        className={cn(className, isActive && "text-white font-bold")}>
        {value}
      </Link>
    )
  }
  return (
    <div className="py-20 container mx-auto">
      <Headings
        title="Our Satisfied Clients "
        className="my-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {Testimonials?.results?.map((item, index) => (
          <Card
            key={index}
            className="p-4">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src={item.img}
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">{item.name}</h4>
                  <h5 className="text-small tracking-tight text-default-400">{item.position}</h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <div className="flex gap-2 py-4 text-justify">
                <Quote className="w-12 rotate-180 -mt-4 text-primary/50" />
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
                <Quote className="w-12 mt-auto -mb-4 text-primary/50" />
              </div>

              {/* <span className="pt-2">
                                #FrontendWithZoey
                                <span className="py-2" aria-label="computer" role="img">
                                    💻
                                </span>
                            </span> */}
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Pagination
          showControls
          total={totalPage}
          page={parseInt(currentPage)}
          renderItem={renderItem}
          onChange={(page) => router.push(`?page=${page}`)}
        />
      </div>
    </div>
  )
}

export default Testimonials
