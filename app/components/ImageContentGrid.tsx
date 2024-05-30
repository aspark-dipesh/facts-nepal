'use client'
import React from 'react'
import Image from 'next/image';
import { IImage } from '@/app/Types';
import { cn } from '@nextui-org/react';
interface IProps {
    title: string
    subtitle?: string
    children?: React.ReactNode
    image: IImage
    classNames?: {
        container?: string
        title?: string
        image?: string
    }
    ordering?: {
        image: string,
        content: string
    }
}

const ImageContentGrid = ({ image, title, children, ordering, classNames, subtitle }: IProps) => {
    return (
        <div className={cn('py-10', classNames?.container)}>
            <div className='grid grid-cols-2 gap-10 container mx-auto'>
                <div className={cn('',
                    ordering?.image
                )}>
                    <div className='relative w-full aspect-[4/3]'>
                        <Image src={image.src} alt={image.alt} fill sizes='100vw' className={cn('object-contain ', classNames?.image)} />
                    </div>
                </div>
                <div className={cn('my-auto ', ordering?.content)}>
                    <div className='my-auto h-fit'>
                        <h2 className='text-3xl font-bold my-5'>{title}</h2>
                        {
                            subtitle && <h3 className='text-lg font-semibold my-2'>{subtitle}</h3>
                        }
                        {children}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ImageContentGrid