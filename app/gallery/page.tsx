import Image from "next/image"
import LightGalleryComponent from "../components/gallery/LightGallery"
import { Metadata } from "next"
import Banner from "../components/Banner"
export const metadata: Metadata = {
  title: "Gallery",
  description: "Here are some glimpses of our work.",
}
export default async function Gallery() {
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
      <h1 className="text-3xl font-semibold my-5">Videos</h1>
      <div className="grid grid-cols-4 gap-4">
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
      </div>

      <h2 className=" font-semibold my-5 mt-10">Events </h2>
      <LightGalleryComponent className="grid grid-cols-4 gap-4">
        <a
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          className="relative"
          data-sub-html="
            <h4>Beautiful Nature</h4>
            <p>A beautiful landscape.</p>
            ">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-30 text-white">
            <h4>Beautiful Nature</h4>
            <p>A beautiful landscape.</p>
          </div>
        </a>
        <a
          className="relative aspect-video"
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </a>
        <a
          className="relative aspect-video"
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </a>
        <a
          className="relative aspect-video"
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </a>
        <a
          className="relative aspect-video"
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </a>
        <a
          className="relative aspect-video"
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </a>
        <a
          className="relative aspect-video"
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
            alt=""
          />
        </a>
        <a
          className="relative aspect-video"
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </a>
        <a
          className="relative aspect-video"
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </a>
        <a
          className="relative aspect-video"
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </a>
        <a
          className="relative aspect-video"
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt=""
          />
        </a>
        <a
          className="relative aspect-video"
          href="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg">
          <Image
            fill
            sizes="50vw"
            className="h-auto max-w-full object-cover rounded-md"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt=""
          />
        </a>
      </LightGalleryComponent>
    </div>
  )
}
