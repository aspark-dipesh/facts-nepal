"use client"
import React, { useEffect, useState } from "react"
import NewsCard from "../NewsCard"
import { IBlog, IPublication } from "@/app/Types"
function getWindowDimensions() {
  return {
    width: window.innerWidth,
  }
}
const BlogsList = ({ filteredData }: { filteredData?: IBlog[] }) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const [cardPerColumn, setCardPerColumn] = useState<number>(filteredData?.length! / 3)

  useEffect(() => {
    setWindowDimensions(getWindowDimensions())
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  useEffect(() => {
    if (windowDimensions.width < 768) {
      setCardPerColumn(Math.ceil(filteredData?.length! / 1))
    }
    if (windowDimensions.width < 1024) {
      setCardPerColumn(Math.ceil(filteredData?.length! / 2))
    }
    if (windowDimensions.width > 1024) {
      setCardPerColumn(Math.ceil(filteredData?.length! / 3))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowDimensions])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 mt-5">
      <div className="flex flex-col gap-10">
        {filteredData?.slice(0, filteredData?.length === 4 ? 2 : cardPerColumn).map((item) => (
          <NewsCard
            key={item.slug}
            date={item.published_date}
            category={item.category.toString()}
            paragraph={item.content}
            img={item.featured_image}
            url={""}
            pdf_file={""}
            main_heading={item.title}
            sub_heading={""}
            slug={`/news-and-blogs/view/${item.slug}`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-10">
        {filteredData
          ?.slice(filteredData?.length === 4 ? 2 : cardPerColumn, filteredData?.length === 4 ? 3 : cardPerColumn * 2)
          .map((item) => (
            <NewsCard
              key={item.slug}
              date={item.published_date}
              category={item.category.toString()}
              paragraph={item.content}
              img={item.featured_image}
              url={""}
              pdf_file={""}
              main_heading={item.title}
              sub_heading={""}
              slug={`/news-and-blogs/view/${item.slug}`}
            />
          ))}
      </div>
      <div className="flex flex-col gap-10">
        {filteredData?.slice(filteredData?.length === 4 ? 3 : cardPerColumn * 2).map((item) => (
          <NewsCard
            key={item.slug}
            date={item.published_date}
            category={item.category.toString()}
            paragraph={item.content}
            img={item.featured_image}
            url={""}
            pdf_file={""}
            main_heading={item.title}
            sub_heading={""}
            slug={`/news-and-blogs/view/${item.slug}`}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogsList
