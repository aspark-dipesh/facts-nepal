import ContactBanner from "../components/contact/ContactBanner"
import ContactForm from "../components/contact/ContactForm"

export default async function Contact() {
  return (
    <div className="container mx-auto px-2">
      <ContactBanner />
      <ContactForm hasMap />
    </div>
  )
}
