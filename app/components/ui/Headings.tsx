"use client"
import { cn } from "@nextui-org/react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import React from "react"

const Headings = ({ title, path, className }: { title: string; path?: string; className?: string }) => {
  return (
    <div className={cn("flex", path ? "justify-between" : "justify-center")}>
      <h1 className={cn("", className)}>{title}</h1>
      {/* view all */}
      {path && (
        <Link
          href={path}
          className="flex gap-1 hover:underline">
          View All <ChevronRight />{" "}
        </Link>
      )}
    </div>
  )
}

export default Headings
