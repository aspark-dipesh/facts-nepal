"use client"
import { cn } from "@/app/utils/Healpers"
import Marquee from "../ui/marquee"
import { IClientAndPartner } from "@/app/Types"
import Image from "next/image"

const ReviewCard = ({ ClientsAndPartners }: { ClientsAndPartners: IClientAndPartner }) => {
  return (
    <figure className={cn("relative cursor-pointer overflow-hidden p-4")}>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={ClientsAndPartners?.img}
          alt={ClientsAndPartners?.name}
          className="!relative h-[100px] w-auto"
          width={50}
          height={100}
          sizes="400px"
        />
      </div>
    </figure>
  )
}

const ClientMarquee = ({ Clients }: { Clients: IClientAndPartner[] }) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <Marquee
        pauseOnHover
        className="[--duration:20s]">
        {Clients?.map((client) => (
          <ReviewCard
            key={client.name}
            ClientsAndPartners={client}
          />
        ))}
      </Marquee>
    </div>
  )
}

export default ClientMarquee
