"use client"
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import ChangePassword from './ChangePassword'
import ChangeWalletPIN from './ChangeWalletPIN'
import Change2FA from './Change2FA'

type Props = {}

const Security = (props: Props) => {
    const [security, setSecurity] = useState("")

  return (
    <div className={` `}>
      <div className={`${security ? "animate-out hidden" : "animate-in"} py-6 md:py-10 md:px-28 px-0 flex flex-col gap-y-6 transition duration-300 `}>
        <div className='flex items-center justify-between gap-5 md:w-[70%] transition-all cursor-pointer hover:bg-gray-100/40 py-1 px-3' onClick={()=> setSecurity("password")}>
              <span className='text-[#585978]'>Change Password</span>
            <ChevronRight />
        </div>
        <div className='flex items-center justify-between gap-5 md:w-[70%] transition-all cursor-pointer hover:bg-gray-100/40 py-1 px-3' onClick={()=> setSecurity("pin")}>
              <span className='text-[#585978]'>Change Wallet PIN</span>
            <ChevronRight />
        </div>
        <div className='flex items-center justify-between gap-5 md:w-[70%] transition-all cursor-pointer hover:bg-gray-100/40 py-1 px-3' onClick={()=> setSecurity("2fa")}>
              <span className='text-[#585978]'>Change 2FA Settings</span>
            <ChevronRight />
        </div>
        </div>


        {security === "password" && (
          <ChangePassword setSecurity={setSecurity} />
        )}
        {security === "2fa" && (
          <Change2FA setSecurity={setSecurity} />
        )}
        {security === "pin" && (
          <ChangeWalletPIN setSecurity={setSecurity} />
        )}
    </div>
  )
}

export default Security