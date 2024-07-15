import { IClientAndPartner } from "@/app/Types"

import Image from "next/image"
import Link from "next/link"
import React from "react"

const OurClient1 = ({ clients, title }: { clients: IClientAndPartner[]; title: string }) => {
  return (
    <div className="mt-8 lg:mt-10 border border-dark-100/20 bg-dark-800 rounded-xl sm:rounded-2xl overflow-hidden border-t-0">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-dark-100/20">
        {clients.map((client, index) => (
          <Link
            href={client.url || "#"}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="h-32 lg:h-44 basis-1/4 flex flex-col items-center justify-center gap-2 sm:gap-4 first:border-t first:border-dark-100/20 odd:border-r odd:border-dark-100/20 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(6)]:border-r lg:[&:nth-child]:border-dark-100/20">
            <Image
              src={client.img}
              alt={client.name}
              width={200}
              height={200}
              className=""
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default OurClient1
