import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
    return (
        <div className='grid grid-cols-2 py-20'>
            <div>
                <h1 className='text-4xl'>
                    About Us
                </h1>
                <p className='text-base mt-5'>
                    A lack of proper and timely availability of data in Nepal has always remained a great challenge for all who
                    believe in the power of accurate and contextual data for informed decision-making. In the past, a lot of data
                    in Nepal was considered unattainable, and the available data was often deemed dated, misleading or incomplete,
                    all of which contributed to the escalation of a data-dark situation in Nepal.
                </p>

                <p className='text-base mt-5 '>
                    Back in 2012, a small group of young, enthusiastic and, like-minded individuals got together with an idea to contribute
                    to address the situation by forming a research company that collected and analyzed data to provide actionable and relevant
                    information to cater to the data-driven needs of the people and organizations, from both in and out of the country.
                    The team knew that accuracy, reliability and trust-worthiness of the data needed to be given special focus. Hence, they
                    envisaged to not only work for their clients, but also increase the awareness of the general public regarding the
                    use and importance of data. This needed to be done in a concise, simple and understandable manner, because they understood that data in its raw form can become overwhelming.
                </p>
            </div>
            <div className=''>
                <div className='h-full aspect-[4/3] relative'>
                    <Image src={'/images/about-hero.png'} alt='story' fill sizes='100vw' className='object-contain' />
                </div>

            </div>

        </div>
    )
}

export default AboutHero