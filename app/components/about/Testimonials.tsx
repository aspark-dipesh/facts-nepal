"use client"
import React from "react"
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react"
import Headings from "../ui/Headings"
import { Quote } from "lucide-react"

const Testimonials = () => {
  const Testimonials = [
    {
      name: "Alex Johnson",
      title: "Marketing Director, ABC Corp",
      description:
        "Facts Nepal has transformed the way we approach market research. The insights are incredibly valuable and easy to understand.",
      image: "https://source.unsplash.com/random/100x100/?headshot&1",
    },
    {
      name: "Priya Sharma",
      title: "Data Analyst, Data Insights",
      description:
        "Using Facts Nepal has streamlined our data analysis process. The platform is user-friendly and delivers precise information.",
      image: "https://source.unsplash.com/random/100x100/?headshot&2",
    },
    {
      name: "Mark Taylor",
      title: "Research Specialist, Global Trends",
      description:
        "Facts Nepal offers comprehensive data that is crucial for our research projects. The intuitive design makes it a pleasure to use.",
      image: "https://source.unsplash.com/random/100x100/?headshot&3",
    },
    {
      name: "Emily Clark",
      title: "Product Manager, Tech Innovators",
      description:
        "Facts Nepal is an indispensable tool for our product development team. The data provided helps us make informed decisions quickly.",
      image: "https://source.unsplash.com/random/100x100/?headshot&4",
    },
    {
      name: "Liam Thompson",
      title: "Head of Research, Market Solutions",
      description:
        "The detailed analytics from Facts Nepal have significantly boosted our efficiency. It's an excellent platform.",
      image: "https://source.unsplash.com/random/100x100/?headshot&5",
    },
    {
      name: "Sophia Martinez",
      title: "Senior Analyst, DataWorks",
      description:
        "Facts Nepal's user interface is very intuitive. It has become an essential tool in our analysis workflow.",
      image: "https://source.unsplash.com/random/100x100/?headshot&6",
    },
    {
      name: "James Wilson",
      title: "Business Consultant, Insight Pro",
      description: "Facts Nepal provides accurate and up-to-date information that helps us stay ahead in the market.",
      image: "https://source.unsplash.com/random/100x100/?headshot&7",
    },
    {
      name: "Olivia Brown",
      title: "Operations Manager, DataTrack",
      description:
        "The comprehensive data and insights from Facts Nepal have improved our decision-making process immensely.",
      image: "https://source.unsplash.com/random/100x100/?headshot&8",
    },
    {
      name: "Noah Davis",
      title: "CEO, Data Pioneers",
      description:
        "We rely on Facts Nepal for reliable and actionable data. It has proven to be a valuable resource for our company.",
      image: "https://source.unsplash.com/random/100x100/?headshot&9",
    },
    {
      name: "Isabella Moore",
      title: "Marketing Analyst, TrendWatch",
      description:
        "Facts Nepal's insights are spot-on and very useful for our marketing strategies. Highly recommend it!",
      image: "https://source.unsplash.com/random/100x100/?headshot&10",
    },
    {
      name: "Mason Taylor",
      title: "Data Scientist, Analytics Hub",
      description:
        "The precision and depth of data from Facts Nepal have made a significant impact on our research outcomes.",
      image: "https://source.unsplash.com/random/100x100/?headshot&11",
    },
    {
      name: "Ava Robinson",
      title: "Chief Data Officer, Insightful Solutions",
      description:
        "Facts Nepal has been a game-changer for our data analysis and reporting. The platform is incredibly reliable and insightful.",
      image: "https://source.unsplash.com/random/100x100/?headshot&12",
    },
  ]

  return (
    <div className="py-20 container mx-auto">
      <Headings
        title="Our Satisfied Clients "
        className="my-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {Testimonials.map((item, index) => (
          <Card
            key={index}
            className="p-4">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src={item.image}
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">{item.name}</h4>
                  <h5 className="text-small tracking-tight text-default-400">{item.title}</h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p className="flex gap-2 py-4 text-justify">
                <Quote className="w-12 rotate-180 -mt-4 text-primary/50" />
                {item.description}
                <Quote className="w-12 mt-auto -mb-4 text-primary/50" />
              </p>

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
    </div>
  )
}

export default Testimonials
