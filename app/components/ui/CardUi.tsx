"use client"
import { Card } from "@nextui-org/react"
import React from "react"

const CardUi = ({ children }: { children: React.ReactNode }) => {
  return <Card isHoverable>{children}</Card>
}

export default CardUi
