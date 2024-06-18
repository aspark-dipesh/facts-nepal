"use client"
import { ITeamMember } from "@/app/Types"
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const TeamCard = ({ team }: { team: ITeamMember }) => {
  return (
    <Card className="">
      {/* <CardBody className="overflow-visible ">
        <div className="relative w-full aspect-square">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={team.profile_img}
            fill
          />
        </div>
      </CardBody> */}
      <CardHeader className="pb-0 pt-2 p-4 flex flex-col items-start justify-start  ">
        <h4 className="font-bold text-large">{team.full_name}</h4>
        <p className="text-tiny uppercase font-bold text-start">{team.designation}</p>
        <div className="text-default-500 flex justify-end gap-4 w-full text-end mt-3">
          {/* email */}
          <Link
            href={`mailto:${team.email}`}
            className="rounded-md ">
            <Image
              src="/images/icon/gmail.png"
              alt="mail"
              className=""
              width={40}
              height={30}
            />
          </Link>
          {/* linkedin */}
          <Link
            href={team.linkedin || "/team"}
            target="_blank"
            className="rounded-md ">
            <Image
              src="/images/icon/linkedin.png"
              alt="mail"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </CardHeader>
    </Card>
  )
}

export default TeamCard
