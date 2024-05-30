"use client"
import { cn } from "@nextui-org/react"
import React from "react"
import NumberTicker from "./ui/number-ticker"
interface IStatisticsProps {
  title: string
  StatisticsList: {
    title: string
    value: number
  }[]
  classNames?: {
    title?: string
    container?: string
    card?: string
    cardFooter?: string
    statTitle?: string
    statValue?: string
  }
}
const Statistics = ({ title, StatisticsList, classNames }: IStatisticsProps) => {
  return (
    <>
      <section className={cn("relative not-prose scroll-mt-[72px] ", classNames?.container)}>
        <h1 className={cn("text-3xl font-bold", classNames?.title)}>{title}</h1>
        <div className="relative px-4 md:px-6 py-10 md:py-10 lg:py-12 text-default max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center -m-4 text-center">
            {StatisticsList.map((statistic, index) => (
              <div
                className="p-4 md:w-1/4 sm:w-1/2 w-full min-w-[220px] text-center md:border-r md:last:border-none "
                key={index}>
                <div
                  className={cn(
                    "font-heading text-[2.6rem] font-bold  lg:text-5xl xl:text-6xl",
                    classNames?.statValue
                  )}>
                  <NumberTicker
                    direction="up"
                    delay={0}
                    value={statistic.value}
                  />
                </div>
                <div
                  className={cn("text-sm font-medium uppercase tracking-widest lg:text-base", classNames?.statTitle)}>
                  {statistic.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Statistics
