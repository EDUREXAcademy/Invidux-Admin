
"use client"
import GenerateReport from '@/components/reporting/GenerateReport'
import ReportTable from '@/components/reporting/ReportTable'
import React, { useState } from 'react'

type Props = {}

const ReportingPage = (props: Props) => {
  const [tab, setTab] = useState("generate")
  return (
    <div className=''>
      <div>
        <div className="flex justify-between items-center pt-5 pb-4 px-4 md:px-8">
          <p className="text-sm md:text-2xl font-[500]">Report</p>
        </div>
      </div>

      <div className=" bg-[#F0F2F5] py-5 px-4 md:px-8 min-h-[calc(100vh-70px)]">
        <ul className='flex text-xs md:text-sm lg:text-base gap-4 md:gap-14 border-b-[2px] border-b-[#CACACA] overflow-x-auto '>
          {tabs.map((item) => (
            <li
              key={item.id} className={`px-3 md:px-5 border-b py-1 -mb-[3px] cursor-pointer transition flex-shrink-0 z-10 ${tab === item.id ? "text-bold border-b-4 border-b-black font-semibold " : "text-[#838383]"}`}
              onClick={(e) => {
                e.preventDefault()
                setTab(`${item.id}`)
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
        {tab === "export" && <ReportTable />}
        {tab === "generate" && <GenerateReport />}
      </div>
    </div>
  )
}

const tabs = [
  {
    label: "Generate Report",
    id: "generate"
  },
  {
    label: "Export History",
    id: "export"
  },
]
export default ReportingPage