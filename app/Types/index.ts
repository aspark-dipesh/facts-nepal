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