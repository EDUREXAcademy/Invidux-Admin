import { MapPin, Signal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
  asset: {
    image: string
    title: string
    label: string
  }
}

const SingleAsset = ({asset}: Props) => {
  return (
    <Link href={"/token-issuers/portfolio/portfolio-details"} className='w-full cursor-pointer'>
      <div
        style={{ backgroundImage: `url(${asset.image})` }}
        className='rounded-t-md border h-[254px] p-4 bg-no-repeat bg-cover bg-center '>
        <div
         className='flex items-center gap-2 text-[#585978] text-xs md:text-sm bg-white rounded-md px-2 py-1 w-fit'>
          <Signal size={18} />
          <p>{asset.label}</p>
        </div>
      </div>
      <div className="h-[212px] rounded-b-md shadow-3xl p-4 flex flex-col">
        <div className='flex justify-between'>
          <div>
            <p className='text-xl font-semibold text-[#13142D] mb-1'>₦80,579.00/token</p>
            <p className='text-[#585978] text-lg'>INVLEKKI102 - <span className='text-[#B1924E]'>{asset.title}</span></p>
          </div>
          <div className='flex gap-1 text-[#585978]'>
            <MapPin size={18} />
            <p className=' text-sm'>Lekki Phase 1, Lagos</p>
          </div>
        </div>
        <div className='flex flex-col gap-y-1 mt-auto'>
          <div className='flex justify-between'>
            <p className='text-[#585978]'>Estimated Yield:</p>
            <p className='text-[#13142D]'>25.45%</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-[#585978]'>Total Tokens:</p>
            <p className='text-[#13142D]'>20,000.0000</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-[#585978]'>Owned Token:</p>
            <p className='text-[#13142D]'>4,000.0000</p>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default SingleAsset