"use client"
import React from "react"
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react"
import FactsOfTheDay from "../FactsOfTheDay"
import Headings from "./Headings"

export default function NavTabs() {
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
            date=""
            title="The world's 10 most mountainous countries"
            image={{
              src: "/images/facts/facts1.jpeg",
              alt: "facts",
            }}
            classNames={{
              title: "text-xl font-bold  ",
              container: "",
              image: "w-full aspect-video",
              description: " text-black",
            }}
            description={`Note: Bhutan, a small south Asian country located in the eastern Himalaya, is the most mountainous country in the world. Bhutan average elevation of 10,000 feet(3,280 m) above sea level.`}
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
            date=""
            title="The world's 10 most mountainous countries"
            image={{
              src: "/images/facts/facts1.jpeg",
              alt: "facts",
            }}
            classNames={{
              title: "text-xl font-bold  ",
              container: "",
              image: "w-full aspect-video",
              description: " text-black",
            }}
            description={`Note: Bhutan, a small south Asian country located in the eastern Himalaya, is the most mountainous country in the world. Bhutan average elevation of 10,000 feet(3,280 m) above sea level.`}
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
            title="The world's 10 most mountainous countries"
            image={{
              src: "/images/facts/facts1.jpeg",
              alt: "facts",
            }}
            classNames={{
              title: "text-xl font-bold  ",
              container: "",
              image: "w-full aspect-video",
              description: " text-black",
            }}
            description={`Note: Bhutan, a small south Asian country located in the eastern Himalaya, is the most mountainous country in the world. Bhutan average elevation of 10,000 feet(3,280 m) above sea level.`}
          />
        </Tab>
      </Tabs>
    </div>
  )
}
