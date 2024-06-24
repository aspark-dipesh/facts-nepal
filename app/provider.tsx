"use client"
import { NextUIProvider } from "@nextui-org/react"
import { APIProvider } from "@vis.gl/react-google-maps"
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <APIProvider
        apiKey={"AIzaSyA7982Kq5E_xuOmtJR-UpbCZmfOfyu4b7Q"}
        onLoad={() => console.log("Maps API has loaded.")}>
        <ProgressBar
          height="4px"
          color="#9F2F35"
          options={{ showSpinner: true }}
          shallowRouting
        />
        {children}
      </APIProvider>
    </NextUIProvider>
  )
}
