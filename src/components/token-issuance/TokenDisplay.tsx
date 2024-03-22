import { MapPin, Signal } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Progress } from '../ui/progress'

type Props = {
    asset: {
        image: string
        title: string
        label: string
        propClass: string
        id: string
    }
}

const TokenDisplay = ({asset}: Props) => {
  return (
      <Link href={`/token-issuers/token-issuance/${asset.id}`} className='w-full cursor-pointer'>
          <div
              style={{ backgroundImage: `url(${asset.image})` }}
              className='rounded-t-md border h-[254px] p-4 bg-no-repeat bg-cover bg-center '>
              <div
                  className='flex items-center gap-2 text-[#585978] text-xs md:text-sm bg-white rounded-md px-2 py-1 w-fit'>
                  <Signal size={18} />
                  <p>{asset.label}</p>
              </div>
          </div>


          <div className="h-fit rounded-b-md shadow-lg p-4 flex flex-col gap-y-5">
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


              {/* Investment Progress */}
              <div className='font-light text-[#585978] flex flex-col gap-y-1.5'>
                  <div className='flex justify-end text-xs md:text-sm'>
                      <p>Sold - 1,290.00 of 7,466.00</p>
                  </div>

                  {/* Progress Bar */}
                  <Progress indicatorColor='black' value={33} className='w-full h-2 bg-[#E7DDC8]' />

                  <div className='flex gap-x-3 text-xs md:text-sm'>
                    <div className='flex gap-x-1.5 items-center'>
                        <div className='h-2.5 w-2.5 rounded-full bg-[#4FBF6D]' />
                        <span>Sold units</span>
                    </div>
                    <div className='flex gap-x-1.5 items-center'>
                          <div className='h-2.5 w-2.5 rounded-full bg-[#E7DDC8]' />
                          <span>Subscription threshold</span>
                    </div>
                  </div>
              </div>


              <div className='flex flex-col gap-y-1 mt-auto'>
                  <div className='flex justify-between'>
                      <p className='text-[#585978]'>Estimated Yield:</p>
                      <p className='text-[#13142D]'>25.45%</p>
                  </div>
                  <div className='flex justify-between'>
                      <p className='text-[#585978]'>Property Class:</p>
                      <p className='text-[#13142D] '>{asset.propClass}</p>
                  </div>
                  <div className='flex justify-between'>
                      <p className='text-[#585978]'>Minimum Subscription Units:</p>
                      <p className='text-[#13142D]'>5,600.0000</p>
                  </div>
                  <div className='flex justify-between'>
                      <p className='text-[#585978]'>Issuance Expiry Date:</p>
                      <p className='text-[#13142D]'>24th May 2025</p>
                  </div>
                  <div className='flex justify-between'>
                      <p className='text-[#585978]'>Distribution Frequency:</p>
                      <p className='text-[#13142D]'>Monthly</p>
                  </div>
              </div>

          </div>
      </Link>
  )
}

export default TokenDisplay