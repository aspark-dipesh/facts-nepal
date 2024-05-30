import Image from 'next/image'
import React from 'react'
import { IImage } from '../Types'
import Link from 'next/link'
interface IStoryProps {
    title: string
    image: IImage
    children?: React.ReactNode
    action?: {
        label: string
        path: string
        icon?: React.ReactNode
    }
}
const Story = ({ image, title, children, action }: IStoryProps) => {
    return (
        <>
            <div className='grid grid-cols-2 py-20 container mx-auto'>
                <div className=''>
                    <h1 className='text-5xl font-bold'>{title}</h1>
                    {children}
                    {
                        action && (
                            <div className='mt-5'>
                                <Link href={action?.path} className='btn btn-primary flex gap-1 border-b w-fit hover:text-primary px-2'>
                                    {action?.icon}
                                    {action?.label}
                                </Link>
                            </div>
                        )
                    }
                </div>
                <div className='w-full'>
                    <div className='aspect-[4/3] w-full relative'>
                        <Image src={'/images/research.jpeg'} alt="story" fill sizes='100vw' className='object-cover' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Story