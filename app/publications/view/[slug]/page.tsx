import Link from 'next/link'
import Publication from '../../data.json'
import { Card } from '@nextui-org/react'
export default function NewsAndBlogsDetails({ params }: {
    params: { slug: string }
}) {
    const data = Publication.filter((item) => item.slug === params.slug)[0]
    // select 5 randomly from Publication
    const Related = Publication.filter((item) => item.category === data?.category).sort(() => Math.random() - 0.5).slice(0, 5)
    return (
        <div className="container mx-auto py-20">
            <div className='grid grid-cols-10 gap-10'>
                <div className='col-span-7'>
                    <h1 className="text-3xl md:text-6xl font-bold">{data?.title}</h1>
                    <p className='text-lg mt-3 text-end'>{data?.date}</p>
                    <p className='text-lg mt-3'>{data?.description}</p>
                    {/* View pdf */}
                    <div className='mt-5'>

                        {
                            data?.link &&
                            <Link href={data?.link} target="_blank" className='text-lg p-3 bg-primary-500 mt-10 rounded-md text-white' >View pdf</Link>
                        }
                    </div>
                    <div>
                        {
                            data?.content
                        }
                    </div>

                </div >

                <div className='col-span-3'>
                    <div className='sticky top-20'>
                        <h2 className='text-xl font-bold my-3'>Related Posts</h2>
                        {
                            // select 5 randomly from Publication


                            Related.map((item) => (
                                <Card key={item.title} className="p-3 mb-5">
                                    <div className="flex">
                                        <span className="text-sm font-bold text-primary/70">{item.date}</span>
                                        {/* dot */}
                                        <span className="text-sm font-bold text-primary/70 mx-3">•</span>
                                        <span className="text-sm font-bold text-primary/70  capitalize">{item.category}</span>
                                    </div>
                                    <Link href={`/news-and-blogs/view/${item.slug}`} className="text-2xl font-bold hover:text-primary/80">{item.title}</Link>

                                </Card>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}