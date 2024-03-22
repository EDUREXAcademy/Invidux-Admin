import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const ReviewPage = (props: Props) => {
    return (
        <div>
            <div className="flex justify-between items-center px-6 md:px-8 py-5">
                <p className="text-sm md:text-2xl font-[500]">Reviews</p>
            </div>

            {/*Daily Review Cards */}
            <div className='bg-[#F0F2F5] py-5 px-8 flex flex-col gap-y-4 min-h-[calc(100vh-75px)]'>
                {/* Recent Day */}
                <div>
                    <p className='mb-1 font-semibold'>Today</p>
                    <div className='flex flex-col gap-y-3'>
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className='bg-white rounded-md p-4 flex gap-x-4'>
                                <div className='w-14 h-14 relative flex-shrink-0'>
                                    <Image className=" rounded-sm" src="/review.svg" fill alt='' />
                                </div>
                                <div className="flex-col justify-start items-start flex gap-y-2">
                                    <div className=" text-slate-900 text-sm font-medium">Seyi Martins</div>
                                    <div className=" text-slate-600 text-xs font-normal">Lorem ipsum dolor sit amet consectetur. Eget in laoreet quam ac pretium dignissim aenean. Eu in risus vel congue consequat. Vestibulum sed parturient nec venenatis. Lacus tellus enim et netus aliquet euismod ut laoreet. Orci purus.</div>
                                    <div className="text-slate-400 text-xs font-medium font-['Inter'] leading-none">2h ago</div>
                                </div>
                                <div className='min-h-full flex items-center flex-shrink-0'>
                                    <>
                                        {[...Array(5)].map((_, index) => (
                                            <Star key={index} className='' size={18} fill='#F5BD17' color='#F5BD17' />
                                        ))}
                                        <p className='text-xs ml-2'>5.0</p>
                                    </>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className='mb-1 font-semibold'>12th May 2023</p>
                    <div className='flex flex-col gap-y-3'>
                        {[...Array(2)].map((_, index) => (
                            <div key={index} className='bg-white rounded-md p-4 flex gap-x-4'>
                                <div className='w-14 h-14 relative flex-shrink-0'>
                                    <Image className=" rounded-sm" src="/review.svg" fill alt='' />
                                </div>
                                <div className="flex-col justify-start items-start flex gap-y-2">
                                    <div className=" text-slate-900 text-sm font-medium">Seyi Martins</div>
                                    <div className=" text-slate-600 text-xs font-normal">Lorem ipsum dolor sit amet consectetur. Eget in laoreet quam ac pretium dignissim aenean. Eu in risus vel congue consequat. Vestibulum sed parturient nec venenatis. Lacus tellus enim et netus aliquet euismod ut laoreet. Orci purus.</div>
                                    <div className="text-slate-400 text-xs font-medium font-['Inter'] leading-none">2h ago</div>
                                </div>
                                <div className='min-h-full flex items-center flex-shrink-0'>
                                    <>
                                        {[...Array(5)].map((_, index) => (
                                            <Star key={index} className='' size={18} fill='#F5BD17' color='#F5BD17' />
                                        ))}
                                        <p className='text-xs ml-2'>5.0</p>
                                    </>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewPage