import type { Metadata } from "next"
import { Inter, Kalam, Mochiy_Pop_One, Poppins } from "next/font/google"
import "./globals.css"
import { Providers } from "./provider"
import NavbarLayout from "./components/Navbar"
import Footer from "./components/Footer"
import PopupBanner from "./components/PopupBanner"
import { INavMenu, IOrganization, IPaginatedData } from "./Types"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})
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
async function GetMenuData(): Promise<IPaginatedData<INavMenu>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/basic/navbar/`)
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = (await res.json()) as IPaginatedData<INavMenu>
  return data
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const org = await GetOrganization()
  const NavData = await GetMenuData()
  return (
    <html lang="en">
      <body className={poppins.className + ""}>
        {/* <div className="fixed inset-0 ">

        </div> */}
        <Providers>
          <PopupBanner />
          <div className="relative">
            <NavbarLayout
              NavData={NavData.results[0]}
              position="sticky"
              organization={org.results[0]}
            />
            <main className="min-h-screen">{children}</main>
            <Footer organization={org.results[0]} />
          </div>
        </Providers>
      </body>
    </html>
  )
}
