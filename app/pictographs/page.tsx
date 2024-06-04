import FactsOfTheDay from "../components/FactsOfTheDay"
import PictoCard from "../components/pictograph/PictoCard"
const PictoData = [
  {
    title: "Military Aircraft Fleet Strength by Country(2024)",
    image: {
      src: "/images/facts/fact2.jpeg",
      alt: "Military Aircraft Fleet Strength",
    },
    date: "2024 may 15",
    description:
      "Note: Nepal is ranked 124th out of 145 Nations with 15 aircraft. Aircraft currently under development or on order heading into upcoming year are not take into account.",
  },
  {
    title: "History of Literacy Rate in Nepal",
    image: {
      src: "/images/facts/fact3.jpeg",
      alt: "History of Literacy Rate",
    },
    date: "2024 may 15",
  },
  {
    title: "Top 20 counties with the most billionaires in 2024",
    image: {
      src: "/images/facts/fact4.jpeg",
      alt: "counties with the most billionaires",
    },
    date: "2024 may 15",

    description:
      "Note: The USA & China are home to nearly half of the world's billionaires in 2024. Total numbers of billionaires in 2024 are 3,279 . ",
  },
  {
    title: "Forest Fire in Nepal",
    image: {
      src: "/images/facts/fact5.jpeg",
      alt: "Forest Fire",
    },
    date: "2024 may 15",
  },
  {
    title: "Land use distribution in Nepal",
    image: {
      src: "/images/facts/fact6.jpeg",
      alt: "Land use distribution",
    },
    date: "2024 may 15",
  },
  {
    title: "Monthly Trends of Nepalese citizens departure to abroad",
    image: {
      src: "/images/facts/fact7.jpeg",
      alt: "Monthly Trends of Nepalese citizens departure to abroad",
    },
    date: "2024 may 15",
    description: "Note: The average daily departure of Nepalese to abroad in 2023 was approximately 4,394",
  },
]
export default function Pictograph() {
  return (
    <div className="container mx-auto py-20 max-w-5xl">
      <div className="grid gap-10">
        {PictoData.map((picto, index) => (
          <FactsOfTheDay
            key={index}
            title={picto.title}
            image={{
              src: picto.image.src,
              alt: picto.image.alt,
            }}
            date={picto.date}
            description={picto.description || ""}
            classNames={{
              title: "text-3xl font-bold  ",
              container: "px-10 py-10 border shadow-lg ",
              image: "w-full aspect-video",
              description: "!text-black",
            }}
          />
        ))}
      </div>
    </div>
  )
}
