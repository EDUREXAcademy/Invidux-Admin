import { ChevronsUpDown, Eye } from 'lucide-react'
import React from 'react'

type Props = {}

const TokensTableView = (props: Props) => {
  return (
    <div className="w-full mx-auto overflow-x-auto mt-5">
      <table className="min-w-full bg-white">
        <thead className="font-normal text-xs">
          <tr className="bg-[#E7DDC8]">
            <th className="py-2 px-4 font-normal">
              <div className="flex items-center gap-2 text-left">
                <p>Token code</p>
                  <ChevronsUpDown color="#989898" />
              </div>
            </th>
            <th className="py-2 px-4 font-normal">
              <div className="flex items-center gap-2 text-left">
                <p>Listing status</p>
                  <ChevronsUpDown color="#989898" />
              </div>
            </th>
            <th className="py-2 px-4 font-normal">
              <div className="flex items-center gap-2 text-left">
                <p>Estimated Yield</p>
                  <ChevronsUpDown color="#989898" />
              </div>
            </th>
            <th className="py-2 px-4 font-normal">
              <div className="flex items-center gap-2 text-left">
                <p>Property Class</p>
                  <ChevronsUpDown color="#989898" />
              </div>
            </th>
            <th className="py-2 px-4 font-normal">
              <div className="flex items-center gap-2 text-left">
                <p>Min. Sub. Units</p>
                  <ChevronsUpDown color="#989898" />
              </div>
            </th>
            <th className="py-2 px-4 font-normal">
              <div className="flex items-center gap-2 text-left">
                <p>Issuance Expiry Date</p>
                  <ChevronsUpDown color="#989898" />
              </div>
            </th>
            <th className="py-2 px-4 font-normal">
              <div className="flex items-center gap-2 text-left">
                <p>Action</p>
                  <ChevronsUpDown color="#989898" />
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
                INVLEKKI102
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                Awaiting Approval
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                25.45%
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                Pre-Purchased
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                5,600.000
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                24th May, 2025
              </td>
              {/* <td className="px-4 py-4 whitespace-nowrap">
                <div className="bg-green-200 text-green-600 text-center w-fit p-1.5 rounded-sm">
                  Yes
                </div>
              </td> */}
              <td className={`px-4 py-4 whitespace-nowrap `}>
                {/* <DownloadCloud className='cursor-pointer' /> */}
                <Eye />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TokensTableView