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
export interface IPublication {
    title: string
    date: string
    link: string
    description: string
    slug: string
    category: 'qualitative' | 'quantitative'
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
}