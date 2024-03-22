"use client"
import Pagination from '@/components/Pagination'
import { Button } from '@/components/reusable/Buttons'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const NotificationPage = (props: Props) => {
  const [declineFirst, setDeclineFirst] = useState(false)
  const [declineSecond, setDeclineSecond] = useState(false)
  return (
    <div>
      <div className="flex justify-between items-center px-6 md:px-8 py-5">
        <p className="text-sm md:text-2xl font-[500]">Notifications</p>
      </div>


      {/*Daily Notification Cards */}
      <div className='bg-[#F0F2F5] py-5 px-8 flex flex-col gap-y-4 min-h-[calc(100vh-75px)]'>
        {/* Recent Day */}
        <div>
          <p className='mb-1 font-semibold'>Today</p>
          <div className='flex flex-col gap-y-3'>
            {[...Array(2)].map((_, index) => (
              <div key={index} className='bg-white rounded-md p-4 flex gap-x-4'>
                <div className='w-14 h-14 relative flex-shrink-0'>
                  <Image className=" rounded-sm" src="/review.svg" fill alt='' />
                </div>
                <div className="flex-col justify-start items-start flex gap-y-2">
                  <div className=" text-slate-900 text-sm font-medium">Technology behind the Blockchain</div>
                  <div className=" text-slate-600 text-xs font-normal">Lorem ipsum dolor sit amet consectetur. Eget in laoreet quam ac pretium dignissim aenean. Eu in risus vel congue consequat. Vestibulum sed parturient nec venenatis. Lacus tellus enim et netus aliquet euismod ut laoreet. Orci purus.</div>
                  <div className="text-slate-400 text-xs font-medium font-['Inter'] leading-none">2h ago</div>
                </div>
                <div className='min-h-full flex items-center px-4 flex-shrink-0'>
                  <div className={`h-3 w-3 rounded-full ${index % 2 === 0 ? "bg-[#13142D]" : "bg-[#D8D8D8]"}`} />
                </div>
              </div>
            ))}

            <div className={`${declineFirst ? "hidden": "flex"} bg-white rounded-md p-4 gap-x-4 items-center w-full`}>
              {/* <div> */}
              <div className='w-14 h-14 relative flex-shrink-0'>
                <Image className=" rounded-full" src="https://github.com/shadcn.png" fill alt='' />
              </div>
              <div className="flex-col justify-start items-start flex gap-y-2">
                <div className=" text-slate-900 text-sm font-medium">Seyi request for <span className='text-[#B1924E]'>$500 Token</span> Request </div>
                <div className=" text-slate-600 text-xs font-normal">You have not performed any transaction.</div>
              </div>
              {/* </div> */}
              <div className='min-h-full w-fit ml-auto flex gap-x-4 px-4 flex-shrink-0 self-end'>
                <Button variant='outline' className='' onClick={()=> setDeclineFirst(true)}>Decline</Button>
                <Link href="/token-issuers/wallet/view-request">
                  <Button variant='dark' className=''>View Request</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Following Day */}
        <div>
          <p className='mb-1 font-semibold'>12th May 2023</p>
          <div className='flex flex-col gap-y-3'>
            {[...Array(1)].map((_, index) => (
              <div key={index} className='bg-white rounded-md p-4 flex gap-x-4'>
                <div className='w-14 h-14 relative flex-shrink-0'>
                  <Image className=" rounded-sm" src="/review.svg" fill alt='' />
                </div>
                <div className="flex-col justify-start items-start flex gap-y-2">
                  <div className=" text-slate-900 text-sm font-medium">Technology behind the Blockchain</div>
                  <div className=" text-slate-600 text-xs font-normal">Lorem ipsum dolor sit amet consectetur. Eget in laoreet quam ac pretium dignissim aenean. Eu in risus vel congue consequat. Vestibulum sed parturient nec venenatis. Lacus tellus enim et netus aliquet euismod ut laoreet. Orci purus.</div>
                  <div className="text-slate-400 text-xs font-medium font-['Inter'] leading-none">2h ago</div>
                </div>
                <div className='min-h-full flex items-center px-4 flex-shrink-0'>
                  <div className={`h-3 w-3 rounded-full ${index % 2 === 0 ? "bg-[#13142D]" : "bg-[#D8D8D8]"}`} />
                </div>
              </div>
            ))}

            <div className={`${declineSecond ? "hidden" : "flex"} bg-white rounded-md p-4 gap-x-4 items-center w-full`}>
              {/* <div> */}
              <div className='w-14 h-14 relative flex-shrink-0'>
                <Image className=" rounded-full" src="https://github.com/shadcn.png" fill alt='' />
              </div>
              <div className="flex-col justify-start items-start flex gap-y-2">
                <div className=" text-slate-900 text-sm font-medium">Seyi request for <span className='text-[#B1924E]'>$500 Token</span> Request </div>
                <div className=" text-slate-600 text-xs font-normal">You have not performed any transaction.</div>
              </div>
              {/* </div> */}
              <div className='min-h-full w-fit ml-auto flex gap-x-4 px-4 flex-shrink-0 self-end'>
                <Button variant='outline' className='' onClick={()=> setDeclineSecond(true)}>Decline</Button>
                <Link href="/token-issuers/wallet/view-request">
                  <Button variant='dark' className=''>View Request</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <Pagination />

      </div>
    </div>
  )
}

export default NotificationPage