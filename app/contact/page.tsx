import Banner from "../components/Banner"
import ContactBanner from "../components/contact/ContactBanner"
import ContactForm from "../components/contact/ContactForm"

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
