import { ChevronsUpDown, Cloud, DownloadCloud, ListFilter, Search } from 'lucide-react'
import React from 'react'
import TransactionFilter from './TransactionFilter'


type Props = {}

const ReportTable = (props: Props) => {
  return (
    <div>
      <div className="flex  lg:justify-end py-4 md:px-0">
        <div className="flex items-center md:justify-center gap-2 mt-2">
          <TransactionFilter>
            <button className="flex gap-2 items-center justify-center border h-10 rounded-md px-2">
              <ListFilter color="#838383" />
              <span className="text-[#838383]">Filters</span>
            </button>
          </TransactionFilter>
          <div className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="search"
              className="border rounded-md h-10 outline-none pl-3 w-full"
            />
            <Search className="absolute right-1 " color="#838383" />
          </div>
        </div>
      </div>

      <div className="w-full mx-auto overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="font-normal text-sm">
            <tr className="bg-[#E7DDC8]">
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Report ID</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Report Type</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Date Requested</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Status</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Action</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white text-sm">
            {[...Array(10)].map((_, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#F7F4ED]"}`}
              >
                <td className="px-4 py-4 whitespace-nowrap text-left">
                  INV-RPT1220
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  Sales Report
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  15 May 2020, 7:00 pm
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="bg-green-200 text-green-600 text-center w-fit p-1.5 rounded-sm">
                    Successful
                  </div>
                </td>
                <td className={`px-4 py-4 whitespace-nowrap `}>
                  <DownloadCloud className='cursor-pointer' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReportTable