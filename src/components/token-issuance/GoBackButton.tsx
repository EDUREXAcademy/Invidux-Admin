"use client"
import { ArrowLeft } from 'lucide-react'
import React from 'react'

type Props = {}

const GoBackButton = (props: Props) => {
  return (
    <div className="flex items-center gap-2 pt-5 pb-4 px-4 md:px-8 cursor-pointer" onClick={() => window.history.back()}>
      <ArrowLeft size={14} />
      <span className="text-sm md:text-base">Back</span>
    </div>
  )
}

export default GoBackButton