'use client'
import { cn } from '@nextui-org/react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Headings = ({ title, path, className }: {
    title: string
    path?: string
    className?: string
}) => {
    return (
        <div className={cn(
            'flex',
            path ? 'justify-between' : 'justify-center'
        )}>
            <h2 className={cn("text-3xl font-bold", className)}>{title}</h2>
            {/* view all */}
            {
                path && (
                    <Link href={path} className="flex gap-1 hover:underline">View All <ChevronRight /> </Link>
                )
            }

        </div>
    )
}

export default Headings