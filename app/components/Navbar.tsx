"use client"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react"
import Link from "next/link"
import { useState } from "react"
import { INavData, IOrganization } from "../Types"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronLeft } from "lucide-react"
import NavData from "../navData.json"
import Image from "next/image"
interface INavBarProps {
  isBlur?: boolean
  isBorder?: boolean
  position?: "sticky" | "static" | undefined
  organization?: IOrganization
}
export default function NavbarLayout({ isBlur, isBorder, position, organization }: INavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuItems: INavData[] = NavData

  return (
    <Navbar
      maxWidth="full"
      className="border-b"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={isBlur}
      isBordered={isBorder}
      position={position}>
      <div className="container mx-auto flex items-center">
        <NavbarContent className="">
          <NavbarBrand className="relative">
            <Link href="/">
              <Image
                alt="logo"
                src={organization?.org_logo || "/images/logo.png"}
                className="object-contain"
                width={150}
                height={150}
              />
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-8"
          justify="end">
          <NavbarItem isActive={pathname === "/"}>
            <Link
              href="/"
              className="w-full flex hover:text-primary/50 font-semibold ">
              Home
            </Link>
          </NavbarItem>
          {menuItems.map((item, index) => (
            <div key={`${item.label}-${index}`}>
              {item?.dropdown ? (
                <Dropdown
                  key={item.label}
                  className="bg-white/40 !backdrop-blur-md">
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent gap-0 font-semibold"
                        endContent={
                          <ChevronDown className="rotate-0 group-aria-[expanded=true]:rotate-90 transition-all duration-300" />
                        }
                        radius="sm"
                        variant="light">
                        {item.label}
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    aria-label="Bidhee software company"
                    className="min-w-fit max-w-[300px] "
                    itemClasses={{
                      base: "gap-4",
                    }}>
                    {item?.dropdown?.map((item, index) => (
                      <DropdownItem key={`${item.label}-${index}`}>
                        <NavbarItem
                          key={`${item}-${index}`}
                          isActive={pathname.startsWith(item.link)}>
                          <Link
                            href={item.link}
                            className="w-full flex hover:text-primary/50 font-semibold ">
                            {item.label}
                          </Link>
                        </NavbarItem>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <NavbarItem
                  key={`${item}-${index}`}
                  className={`${
                    item?.type === "button"
                      ? "bg-primary p-2 text-white rounded-lg hover:bg-primary/80 font-semibold"
                      : "hover:text-primary/50 font-semibold "
                  }`}
                  isActive={pathname.startsWith(item.link)}>
                  <Link href={item.link}>{item.label}</Link>
                </NavbarItem>
              )}
            </div>
          ))}
        </NavbarContent>
        {/* <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent> */}
        <NavbarMenu>
          <NavbarItem
            isActive={pathname === "/"}
            onClick={() => setIsMenuOpen(false)}>
            <Link href="/">Home</Link>
          </NavbarItem>
          {menuItems.map((item, index) => (
            <div key={`${item.label}-${index}`}>
              {item?.dropdown ? (
                <Dropdown key={item.label}>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 text-lg bg-transparent data-[hover=true]:bg-transparent"
                        endContent={
                          <ChevronLeft className="rotate-0 group-aria-[expanded=true]:-rotate-90 transition-all duration-300" />
                        }
                        radius="sm"
                        variant="light">
                        {item.label}
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    aria-label="Bidhee software company"
                    className="w-[340px] bg-white/60"
                    itemClasses={{
                      base: "gap-4",
                    }}>
                    {item?.dropdown?.map((item, index) => (
                      <DropdownItem
                        key={`${item.label}-${index}`}
                        onClick={() => setIsMenuOpen(false)}>
                        <Link
                          href={item.link}
                          className="text-base w-full relative">
                          {item.label}
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <NavbarMenuItem
                  key={`${item}-${index}`}
                  isActive={pathname.startsWith(item.link)}>
                  <Link
                    href={item.link}
                    onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              )}
            </div>
          ))}
        </NavbarMenu>
      </div>
    </Navbar>
  )
}
