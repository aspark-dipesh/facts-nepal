import ApplyForm from "@/app/components/careers/ApplyForm"

import { ICareers } from "@/app/Types"
async function GetCareerDetail(slug: string): Promise<ICareers> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/career/${slug}`, {
    method: "GET",
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as ICareers
  return data
}
export default async function Page({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const Job = await GetCareerDetail(params.slug)
  console.log(Job)

  return (
    <div className="container mx-auto max-w-5xl py-20">
      <h1 className="">{Job.title}</h1>
      <p className="mt-3 font-bold text-lg">{Job.department}</p>
      <p className="mt-3 font-bold text-xl">{Job.location}</p>
      <div className="mt-5">
        <div dangerouslySetInnerHTML={{ __html: Job.description }} />
      </div>
      {/* apply form */}
      <div className="mt-10">
        <h2 className="">Apply for this job</h2>
        <ApplyForm />
      </div>
    </div>
  )
}
