import dynamicIconImports from "lucide-react/dynamicIconImports"

interface nav {
  label: string
  link: string
}
export interface INavData extends nav {
  label: string
  link: string
  dropdown?: nav[]
  type?: string
}
export interface IImage {
  src: string
  alt: string
}
export interface IContent {
  title: string
  description: string
}

export interface IPaginatedData<T> {
  count: number
  next: string
  previous: string
  results: T[]
}

export interface IService {
  id: number
  name: string
  description: string
  img: string
}
export interface IInfoGraph {
  id: number
  title: string
  counter: number
  icon_names: keyof typeof dynamicIconImports
}

export interface IBreadcrumb {
  label: string
  path: string
}

export interface IPictographData {
  id: number
  created_at: string
  updated_at: string
  status: boolean
  is_deleted: boolean
  sorting_order: number
  is_featured: boolean
  main_heading: string
  img: string
  paragraph: string
  pin: boolean
}
export interface IAboutUs {
  id: number
  heading: string
  img: string
  description: string
  additional_content: IAdditional_content[]
}
export interface IAdditional_content {
  id: number
  status: boolean
  sorting_order: number
  main_heading: string
  sub_heading: string
  img: string
  paragraph: string
}

export interface ITeamMember {
  full_name: string
  designation: string
  profile_img: string
  short_quote: string
  linkedin: string
  email: string
  css: any[]
}

export interface ICareers {
  id: number
  title: string
  level: string
  department: string
  experience: string
  description: string
  deadline?: string
  type: string
  location: string
  slug: string
}
export interface IPublication {
  id?: number
  date?: string
  main_heading: string
  slug: string
  sub_heading: string
  img?: string
  paragraph: string
  url?: string
  pdf_file?: string
  category: string
  // css: any[];
}

export interface IOrganization {
  id: number
  org_name: string
  org_logo: string
  website_url?: string
  copyright: string
  company_motto?: string
  short_description: string
  primary_contact_number: string
  secondary_contact_number?: string
  primary_comany_email?: string
  secondary_company_email?: string
  primary_support_contact_number?: string
  secondary_support_contact_number?: string
  company_address?: string
  google_map?: string
  instagram_url?: string
  facebook_url?: string
  linkedin_url?: string
  twitter_url?: string
  youtube_url?: string
}

export interface INavMenu {
  name: string
  menu: IMenu[]
  created_at: string
}
export interface IMenu {
  menuname: string
  menu_path: string
  submenu?: ISubmenu[]
}

interface ISubmenu {
  sub_menu_name: string
  menu_link: string
}

export interface IFooterData {
  footer_menu: IFooterMenu[]
}
export interface IFooterMenu {
  name: string
  menu: {
    name: string
    menu: IMenu[]
  }
}
export interface IBlog {
  id: number
  sorting_order: number
  title: string
  slug: string
  featured_image: string
  content: string
  is_published: boolean
  published_date: string
  author: string
  category: number
  short_description?: string
  link?: string
}

export interface IClientAndPartner {
  name: string
  img: string
  description: string
  url?: string
}
