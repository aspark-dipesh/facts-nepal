"use client"
import LightGallery from "lightgallery/react"

// import styles
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

import React from "react"

const LightGalleryComponent = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  const onInit = () => {
    console.log("lightGallery has been initialized")
  }
  return (
    <div>
      <LightGallery
        elementClassNames={className}
        onInit={onInit}
        speed={500}
        download={false}
        zoom={false}
        plugins={[lgThumbnail, lgZoom]}>
        {children}
      </LightGallery>
    </div>
  )
}

export default LightGalleryComponent
