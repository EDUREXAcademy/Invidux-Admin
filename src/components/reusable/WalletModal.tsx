import React from 'react'
import {AlertTriangle } from 'lucide-react'
import { Button } from './Buttons'

type Props = {}

const WalletModal = ({img, title, text, cta}:any) => {
  return (
    <div className="max-w-[484px] md:w-[484px] h-72 p-6 bg-white rounded-md shadow-3xl">
      {img}
      {/* img={<AlertTriangle className="text-red-600 bg-[#FDE3E3] p-1 w-8 h-8 rounded-sm" />} */}
      <h1 className="my-4 text-neutral-950 text-2xl font-semibold leading-loose">{title}</h1>
      <p className="max-w-[436px] text-zinc-900 text-sm font-normal leading-tight">{text}</p>
      <div className="w-fit md:ml-auto mt-8">
        <Button variant="dark">{cta}</Button>
      </div>
    </div>
  )
}

export default WalletModal