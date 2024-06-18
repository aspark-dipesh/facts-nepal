"use client"
import { Pagination } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import React from "react"

const PaginationUi = ({ total, page }: { total: number; page: number }) => {
  const router = useRouter()
  const onchange = (page: number) => {
    router.prefetch(`?page=${page}`)
  }
  return (
    <div>
      <Pagination
        showControls
        total={total}
        page={page}
        onChange={(page) => onchange(page)}
      />
    </div>
  )
}

export default PaginationUi
