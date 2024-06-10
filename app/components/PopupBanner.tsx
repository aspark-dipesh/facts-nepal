"use client"
import { Modal, ModalBody, ModalContent } from "@nextui-org/react"
import Image from "next/image"
import React, { useEffect } from "react"

const PopupBanner = () => {
  const [showPopup, setShowPopup] = React.useState(false)
  useEffect(() => {
    setShowPopup(sessionStorage.getItem("popup") ? false : true)
  }, [])
  const onOpenChange = () => {
    sessionStorage.setItem("popup", "true")
    setShowPopup(false)
  }
  return (
    <>
      <Modal
        size="lg"
        backdrop="opaque"
        isOpen={showPopup}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
          base: "!bg-zinc-900/10 px-0",
          closeButton: "bg-white",
        }}
        onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalBody className="px-0 py-0">
                <Image
                  alt="popup banner"
                  src="/images/facts/fact2.jpeg"
                  height={2000}
                  width={1000}
                  sizes="100vw"
                  className="w-full h-full"
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default PopupBanner
