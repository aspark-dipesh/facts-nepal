"use client"
import React from "react"
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react"
import FactsOfTheDay from "../FactsOfTheDay"
import Headings from "./Headings"
import { IFacts } from "@/app/Types"

export default function NavTabs({ factsData }: { factsData: IFacts }) {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab
          key="day"
          title="Day">
          <div className=" mx-auto mb-10">
            <Headings
              title="FACTS of the Day"
              className=""
              text=""
              path="/pictographs"
            />
          </div>
          <FactsOfTheDay
            date={factsData.fact_of_the_day.published_date || ""}
            title={factsData.fact_of_the_day.main_heading}
            image={{
              src: factsData.fact_of_the_day.img || "/images/facts/facts1.jpeg",
              alt: factsData.fact_of_the_day.main_heading,
            }}
            classNames={{
              title: "text-xl font-bold  ",
              container: "",
              image: "w-full aspect-video",
              description: " text-black",
            }}
            description={factsData.fact_of_the_day.paragraph}
          />
        </Tab>
        <Tab
          key="month"
          title="Month">
          <div className=" mx-auto mb-10">
            <Headings
              title="FACTS of the Month"
              className=""
              text=""
              path="/pictographs"
            />
          </div>
          <FactsOfTheDay
            date={factsData.fact_of_the_month.published_date || ""}
            title={factsData.fact_of_the_month.main_heading}
            image={{
              src: factsData.fact_of_the_month.img || "/images/facts/facts1.jpeg",
              alt: factsData.fact_of_the_month.main_heading,
            }}
            classNames={{
              title: "text-xl font-bold  ",
              container: "",
              image: "w-full aspect-video",
              description: " text-black",
            }}
            description={factsData.fact_of_the_month.paragraph}
          />
        </Tab>
        <Tab
          key="year"
          title="Year">
          <div className=" mx-auto mb-10">
            <Headings
              title="FACTS of the Year"
              className=""
              text=""
              path="/pictographs"
            />
          </div>
          <FactsOfTheDay
            date=""
            title={factsData.fact_of_the_year.main_heading}
            image={{
              src: factsData.fact_of_the_year.img,
              alt: factsData.fact_of_the_year.main_heading,
            }}
            classNames={{
              title: "text-xl font-bold  ",
              container: "",
              image: "w-full aspect-video",
              description: " text-black",
            }}
            description={factsData.fact_of_the_year.paragraph}
          />
        </Tab>
      </Tabs>
    </div>
  )
}
