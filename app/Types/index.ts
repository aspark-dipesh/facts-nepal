import dynamicIconImports from "lucide-react/dynamicIconImports";

interface nav{
    label: string;
    link: string;
    
}
export interface INavData extends nav{
    label: string;
    link: string;
    dropdown?: nav[]
}
export interface IImage{
    src: string
    alt: string
}
export interface IContent{
    title: string
    description: string
}


export interface IPaginatedData<T> {

  count: number;
  next: string;
  previous: string;
  results: T[]
}

export interface IService {
    id: number,
    name: string
    description: string
    img: string
}
export interface IInfoGraph {
    id: number,
    title: string
    counter: number
    icon_names: keyof typeof dynamicIconImports
}

export interface IBreadcrumb {
    label: string
    path: string
}

export interface IPictographData {
  id: number;
  created_at: string;
  updated_at: string;
  status: boolean;
  is_deleted: boolean;
  sorting_order: number;
  is_featured: boolean;
  main_heading: string;
  img: string;
  paragraph: string;
  pin: boolean;
}
export interface IAboutUs {
  id: number;
  heading: string;
  img: string;
  description: string;
  additional_content: IAdditional_content[];
  
}
export interface IAdditional_content {
  id: number;
  status: boolean;
  sorting_order: number;
  main_heading: string;
  sub_heading: string;
  img: string;
  paragraph: string;

}

export interface ITeamMember {
  full_name: string;
  designation: string;
  profile_img: string;
  short_quote: string;
  linkedin: string;
  email: string;
  css: any[];
}

export interface ICareers {
  id: number;
  title: string;
  level: string;
  department: string;
  experience: string;
  description: string;
  deadline?: string;
  type: string;
  location: string;
  slug: string;
}
export interface IPublication {
  id?: number;
  date?: string;
  main_heading: string;
  slug: string;
  sub_heading: string;
  img?: string;
  paragraph: string;
  url?: string;
  pdf_file?: string;
  category: string;
  // css: any[];
}