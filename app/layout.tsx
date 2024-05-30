import type { Metadata } from "next"
import { Inter, Kalam, Mochiy_Pop_One, Poppins } from "next/font/google"
import "./globals.css"
import { Providers } from "./provider"
import NavbarLayout from "./components/Navbar"
import Footer from "./components/Footer"
import PopupBanner from "./components/PopupBanner"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + ""}>
        {/* <div className="fixed inset-0 ">

        </div> */}
        <Providers>
          <PopupBanner />
          <div className="relative">
            <NavbarLayout position="sticky" />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
