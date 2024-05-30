import Image from 'next/image'
import React from 'react'

const ContactBanner = () => {
    return (
        <div className="pt-20 max-w-6xl mx-auto">
            <div className='grid grid-cols-2 gap-10 '>
                <div className='flex items-center col-span-1 justify-end'>
                    <div className='my-auto '>
                        <h1 className='text-4xl font-bold'>Our team is here to help</h1>
                        <p className='text-base pt-5'>Please let us know how we can help as you look at solutions to manage your Investor Operations</p>

                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='relative aspect-video '>
                        <Image src="/images/contact-banner.png" alt="contact-banner" fill sizes='100vw' className='object-cover' />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactBanner