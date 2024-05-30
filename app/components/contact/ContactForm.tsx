"use client"
import { Input } from "@nextui-org/react"
import { Github, Instagram, Linkedin, MailPlus, MapPin, PhoneCall, Youtube } from "lucide-react"
import React from "react"

const ContactForm = () => {
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" })
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
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
              <div className="flex flex-col md:flex-row justify-around items-start md:items-center pt-8 p-4">
                {/* heading  */}
                <h2 className="text-2xl md:text-3xl font-semibold">Send Us A Message</h2>

                {/* mail svg icon  */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail-forward"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
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
                    Name <span className="text-red-500">&#42;</span>
                  </label>
                  <Input
                    isRequired
                    errorMessage="Name is required"
                    type="text"
                    label=""
                    color="default"
                    variant="underlined"
                    placeholder="Eg: John Doe"
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
                    isRequired
                    errorMessage="Email is required"
                    label=""
                    variant="underlined"
                    placeholder="Eg: QbPjv@example.com"
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
                    type="tel"
                    label=""
                    variant="underlined"
                    placeholder="Eg: 1234567890"
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
                    placeholder="Eg: I want to hire you"
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
                    className="w-full border border-gray-300 rounded-md p-2 bg-transparent"
                    placeholder="Eg: I want to hire you"></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end py-4 px-8">
                {/* submit button  */}
                <button
                  type="submit"
                  className="py-2 px-4 md:py-4 md:px-6 bg-primary text-white rounded-md border-2 border-white flex items-center gap-2 hover:scale-95 transition-all">
                  Submit
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
              <span>yourmail@support.com</span>
            </div>
            {/* contacts and icons */}
            <div className=" flex flex-col items-center justify-center gap-2">
              <PhoneCall />
              <span>+91 9876543210</span>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <MapPin />
              <span>123 Main Street, Anytown USA</span>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-4">
              <a
                title="youtube"
                href="#">
                <Youtube className="h-8 w-8  text-red-600" />
              </a>
              <a
                title="linkedin"
                href="#">
                <Linkedin className="h-8 w-8 text-blue-600" />
              </a>
              <a
                title="instagram"
                href="#">
                <Instagram className="h-8 w-8 text-pink-600" />
              </a>
              <a
                title="github"
                href="#">
                <Github className="h-8 w-8 text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold mt-20 mb-10 text-center">Visit our office</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.3934265968564!2d85.33947907537132!3d27.705883416401385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a86296eacf%3A0x857b4d5307df8061!2sFacts%20Research%20and%20Analytics!5e0!3m2!1sen!2snp!4v1716204830644!5m2!1sen!2snp"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default ContactForm
