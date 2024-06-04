"use client"
import { cn } from "@nextui-org/react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import React from "react"

const Headings = ({
  title,
  path,
  className,
  text,
}: {
  title: string
  path?: string
  className?: string
  text?: string
}) => {
  return (
    <div className={cn("flex justify-between")}>
      <h1 className={cn("", className)}>{title}</h1>
      {/* view all */}
      {path && (
        <Link
          href={path}
          className={cn("flex gap-1 hover:underline", text)}>
          View All <ChevronRight />{" "}
        </Link>
      )}
    </div>
  )
}

export default Headings
