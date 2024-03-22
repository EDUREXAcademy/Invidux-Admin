import React from 'react'
import timeCalender from '../../../../assets/icons/time-calender.svg'
import Image from 'next/image'

type Props = {}

const WalletNoTransaction = (props: Props) => {
  return (
    <div className="flex flex-col justify-center">
      <Image src={timeCalender} alt="Time Calender" className="mx-auto mb-4"/> 
      <p className="w-[179px] mx-auto text-center text-slate-600 text-sm font-normal leading-tight">You have not performed any transaction</p>
    </div>
  )
}

export default WalletNoTransaction