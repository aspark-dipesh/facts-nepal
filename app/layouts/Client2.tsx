import { IClientAndPartner } from "@/app/Types"

import Image from "next/image"
import Link from "next/link"
import React from "react"

const OurClient2 = ({ clients }: { clients: IClientAndPartner[] }) => {
  return (
    <div className="mt-8 lg:mt-10">
      <div className="flex flex-wrap gap-4 justify-center">
        {clients.map((client, index) => (
          <Link
            href={client.url || "#"}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="h-20 lg:h-20 basis-[calc(25%-1rem)] flex flex-col items-center justify-center gap-2 sm:gap-4 bg-white shadow-lg ">
            <Image
              src={client.img}
              alt={client.name}
              width={100}
              height={100}
              className=""
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default OurClient2
