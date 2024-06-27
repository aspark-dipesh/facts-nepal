"use client"
import dynamic from "next/dynamic"
import { IOrganization, IPaginatedData } from "@/app/Types"
import { Input, Spinner } from "@nextui-org/react"
import { Facebook, Github, Instagram, Linkedin, MailPlus, MapPin, PhoneCall, Twitter, Youtube } from "lucide-react"
import React, { useEffect, useMemo } from "react"

const ContactForm = ({ hasMap }: { hasMap?: boolean }) => {
  const [formData, setFormData] = React.useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
  })
  const [organization, setOrganization] = React.useState<IOrganization>()
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState({
    text: "",
    type: "",
  })
  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contactus/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    if (!res.ok) {
      setMessage({ text: "Cannot submit your form", type: "error" })
      setLoading(false)
      return
    }
    setLoading(false)
    setMessage({ text: "Form submitted successfully", type: "success" })
    setFormData({
      full_name: "",
      email: "",
      phone_number: "",
      message: "",
    })
  }

  const MapComponent = useMemo(
    () =>
      dynamic(() => import("../MapComponent"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  )
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/organization`)
      if (!res.ok) {
        throw new Error("Failed to fetch data")
      }
      const data = (await res.json()) as IPaginatedData<IOrganization>
      setOrganization(data.results[0])
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (message.text) {
      setTimeout(() => {
        setMessage({ text: "", type: "" })
      }, 5000)
    }
  }, [message])

  return (
    <div className="py-10 max-w-6xl mx-auto">
      {/* <div className="relative ">
                    tagline division  
                    <div className="text-black ">

                        <h1 className="text-3xl md:text-5xl font-bold">Get In Touch</h1>
                        <p className="text-sm md:text-lg">
                            The Ultimate Guide To Ace SDE Interviews.
                        </p>
                    </div>
                </div> */}

      {/* bottom relative container   */}
      <div className="w-full relative ">
        {/* division with floating form  */}
        <div className=" grid grid-cols-1 md:grid-cols-5 h-fit  rounded shadow overflow-hidden text-black">
          {/* form / left div  */}
          <div className="p-2 md:p-4 h-full col-span-3">
            <form onSubmit={HandleSubmit}>
              {/* form top part containing mail icon and heading  */}
              <div className="flex flex-col md:flex-row justify-around items-start md:items-center pt-8">
                {/* heading  */}
                <div className="w-full px-4 md:px-8">
                  <p className="max-w-6xl mx-auto font-semibold">Have a question? We&apos;re here to help.</p>
                  <h1 className="text-2xl md:text-3xl font-semibold">Send Us A Message</h1>
                </div>
                {/* mail svg icon  */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail-forward"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                  <path d="M3 6l9 6l9 -6" />
                  <path d="M15 18h6" />
                  <path d="M18 15l3 3l-3 3" />
                </svg>
              </div>

              {/* bottom form with input fields  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:py-12 md:px-8 text-sm text-black">
                {/* name input  */}
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">
                    Full Name <span className="text-red-500">&#42;</span>
                  </label>
                  <Input
                    isRequired
                    errorMessage="Name is required"
                    type="text"
                    label=""
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    color="default"
                    variant="underlined"
                    placeholder="full name"
                    classNames={{
                      input: "!text-black",
                    }}
                  />
                </div>

                {/* email input  */}
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Email <span className="text-red-500">&#42;</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    isRequired
                    errorMessage="Email is required"
                    label=""
                    variant="underlined"
                    placeholder="email"
                    classNames={{
                      input: "!text-black",
                    }}
                  />
                </div>

                {/* phone number input  */}
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Phone <span className="text-red-500">&#42;</span>
                  </label>
                  <Input
                    isRequired
                    errorMessage="Phone number is required"
                    value={formData.phone_number}
                    onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                    type="tel"
                    label=""
                    variant="underlined"
                    placeholder="phone number"
                    classNames={{
                      input: "!text-black",
                    }}
                  />
                </div>

                {/* subject input  */}
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Subject <span className="text-red-500">&#42;</span>
                  </label>
                  <Input
                    isRequired
                    errorMessage="Subject is required"
                    type="text"
                    label=""
                    variant="underlined"
                    placeholder="subject"
                    classNames={{
                      input: "!text-black",
                    }}
                  />
                </div>

                {/* message input  */}
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="font-semibold">
                    Message <span className="text-red-500">&#42;</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-md p-2 bg-transparent"
                    placeholder=""></textarea>
                </div>
              </div>
              <div className="flex items-center justify-between  py-4 px-8">
                {/* error message  */}
                <div>
                  {message.text && (
                    <p
                      className={` ${
                        message.type === "success"
                          ? "text-green-500 bg-green-200 p-2 rounded-lg"
                          : "bg-red-200 p-2 rounded-lg text-red-500"
                      } `}>
                      {message.text}
                    </p>
                  )}
                </div>
                {/* submit button  */}
                <button
                  type="submit"
                  disabled={loading}
                  className="py-2 px-4 md:py-4 md:px-6 bg-primary text-white rounded-md border-2 border-white flex items-center gap-2 hover:scale-95 transition-all">
                  {loading ? <Spinner color="white" /> : "Submit"}
                </button>
              </div>
            </form>
          </div>

          <div className="col-span-2 py-6 px-4 h-[500px] md:h-full grid grid-cols-1 border-2  ">
            {/* heading tag  */}
            <h2 className="text-xl lg:text-2xl text-center md:text-start font-semibold">Contact Information</h2>

            {/* email and icon  */}
            <div className="flex flex-col items-center justify-center ">
              <MailPlus />
              <span>{organization?.primary_comany_email}</span>
              <span>{organization?.secondary_company_email}</span>
            </div>
            {/* contacts and icons */}
            <div className=" flex flex-col items-center justify-center gap-2">
              <PhoneCall />
              <span>{organization?.primary_contact_number}</span>
              <span>{organization?.primary_support_contact_number}</span>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <MapPin />
              <span className="text-center">{organization?.company_address}</span>
            </div>

            <div className="flex justify-center md:justify-center items-center gap-4">
              {organization?.facebook_url && (
                <a
                  title="facebook"
                  target="_blank"
                  href={organization?.facebook_url}>
                  <Facebook className="h-8 w-8 text-blue-600" />
                </a>
              )}
              {organization?.twitter_url && (
                <a
                  title="twitter"
                  target="_blank"
                  href={organization?.twitter_url}>
                  <Twitter className="h-8 w-8 text-blue-400" />
                </a>
              )}
              {organization?.linkedin_url && (
                <a
                  title="linkedin"
                  target="_blank"
                  href={organization?.linkedin_url}>
                  <Linkedin className="h-8 w-8 text-blue-700" />
                </a>
              )}

              {organization?.instagram_url && (
                <a
                  title="instagram"
                  target="_blank"
                  href={organization?.instagram_url}>
                  <Instagram className="h-8 w-8 text-pink-600" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {hasMap && <MapComponent />}
    </div>
  )
}

export default ContactForm
