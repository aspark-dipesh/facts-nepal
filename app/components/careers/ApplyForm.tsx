"use client"
import { Input, Textarea } from "@nextui-org/react"
import React from "react"

const ApplyForm = () => {
  return (
    <form action="">
      <div className="mt-5 flex flex-col gap-3">
        <Input
          type="text"
          label="Full Name"
          variant="underlined"
          defaultValue=""
          errorMessage="Name is required"
          className=""
          isRequired
        />
        {/* email */}
        <Input
          type="email"
          label="Email"
          variant="underlined"
          defaultValue=""
          errorMessage="Email is required"
          className=""
          isRequired
        />
        {/* phone number */}
        <Input
          type="number"
          label="Phone Number"
          variant="underlined"
          defaultValue=""
          errorMessage="Phone number is required"
          className=""
          isRequired
        />
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Upload Resume</label>
          {/* upload resume */}
          <Input
            type="file"
            variant="underlined"
            defaultValue=""
            errorMessage="Resume is required"
            className=""
            isRequired
          />
        </div>
        {/* cover letter */}
        <Textarea
          label="Cover Letter"
          placeholder="Write a cover letter"
          className=""
        />
        {/* submit button */}
        <button
          type="submit"
          className="bg-primary/70 hover:bg-primary/80 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ApplyForm
