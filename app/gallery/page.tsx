import Image from "next/image"
import LightGalleryComponent from "../components/gallery/LightGallery"
import { Metadata } from "next"
import Banner from "../components/Banner"
import { IPaginatedData } from "../Types"

interface IGallery {
  id: number
  title: string
  description: string
  image: Image[]
  video: Video[]
  youtubelink: Youtubelink[]
  css: any[]
}

interface Youtubelink {
  video_id: string
}

interface Video {
  video: string
}

interface Image {
  image: string
}
export const metadata: Metadata = {
  title: "Gallery",
  description: "Here are some glimpses of our work.",
}
async function GetGalleryData(): Promise<IPaginatedData<IGallery>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/gallery/`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<IGallery>
  return data
}
export default async function Gallery() {
  const GalleryData = await GetGalleryData()
  console.log(GalleryData)
  return (
    <div className="container mx-auto ">
      <Banner
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Gallery", path: "/gallery" },
        ]}
        title="Gallery"
      />
      {/* video section */}
      {/* <h1 className="text-3xl font-semibold my-5">Videos</h1>
      <div className="grid grid-cols-4 gap-4">
        <iframe
          width="100%"
          style={{
            aspectRatio: "16/9",
            marginTop: "25px",
          }}
          src={`https://www.youtube.com/embed/video.video_id`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        <iframe
          width={"100%"}
          height={"300px"}
          src="https://www.youtube.com/embed/_QxpIwdOrU0?si=wmzf9mwzjZqJUfTD"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
        <iframe
          width={"100%"}
          height={"300px"}
          src="https://www.youtube.com/embed/IHHAJoKf3kk?si=Q-la2wRLH4o1TUNF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
        <iframe
          width={"100%"}
          height={"300px"}
          src="https://www.youtube.com/embed/_QxpIwdOrU0?si=wmzf9mwzjZqJUfTD"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div> */}

      {GalleryData.results.map((gallery) => (
        <div key={gallery.id}>
          <h2 className=" font-semibold my-5 mt-10">{gallery.title} </h2>
          <LightGalleryComponent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {gallery.image.map((image) => (
              <a
                key={image.image}
                className="relative aspect-video"
                href={`${image.image}`}>
                <Image
                  fill
                  sizes="50vw"
                  className="h-auto max-w-full object-cover rounded-md"
                  src={`${image.image}`}
                  alt=""
                />
              </a>
            ))}
          </LightGalleryComponent>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {gallery.youtubelink.map((video, index) => (
              <iframe
                key={index}
                width="100%"
                style={{
                  aspectRatio: "16/9",
                  marginTop: "25px",
                }}
                src={`https://www.youtube.com/embed/${video.video_id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
