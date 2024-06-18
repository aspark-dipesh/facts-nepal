import { IOrganization, IPaginatedData } from "../Types"
import Banner from "../components/Banner"
import ContactBanner from "../components/contact/ContactBanner"
import ContactForm from "../components/contact/ContactForm"
async function GetOrganization(): Promise<IPaginatedData<IOrganization>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/organization`, {
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<IOrganization>
  return data
}

export default async function Contact() {
  return (
    <div className="container mx-auto px-2">
      <Banner
        title="Contact us"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />
      <ContactForm hasMap />
    </div>
  )
}
