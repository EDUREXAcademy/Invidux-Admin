'use client'
import React, { useState } from 'react'
import { Bird, ChevronsUpDown, Eye, ListFilter, Search } from 'lucide-react'
import TransactionFilter from '../reporting/TransactionFilter'
import { useTokenReviews } from '@/hooks/queries'
import Link from 'next/link'
import EmptyState from '../reusable/EmptyState'
import LoadingOverlay from '../reusable/LoadingOverlay'


type Props = {}

const TokenReviewTable = () => {
  const {data:tokenReviews, isPending} = useTokenReviews()
  const [menu, setMenu] = useState("all");

  return (
    <div className=" bg-[#F0F2F5] py-5 px-4 md:px-8 min-h-[calc(100vh-70px)]">
      {isPending && <LoadingOverlay/> }
      <div className="w-full flex flex-col-reverse md:flex-row gap-x-14 gap-y-5 mt-10 overflow-visible">
        <ul className="flex text-xs md:text-sm lg:text-base gap-4 md:gap-8 border-b overflow-x-auto overflow-hidden no-scrollbar">
          {menuBars?.map(({ label, item }: any) => (
            <li
              key={item}
              className={`px-2 md:px-4 border-b py-1 -mb-[1px] cursor-pointer transition flex-shrink-0 ${
                menu === item
                  ? "text-bold border-b-2 border-b-black font-semibold "
                  : "text-[#838383]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setMenu(item);
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      {tokenReviews?.filter(
          (item:any) =>
            menu === "all" || item?.tokenApproval?.status === menu
            
        )?.length === 0 ? (
          <div className="mt-10">
          <EmptyState
            img={
              <Bird
                size={150}
                className="text-[#C29E57] bg-orange-50 p-1 rounded-lg"
              />
            }
            title={`No ${menu == 'all' ? '' : menu } Tokens`}
            text={`Oops! It seems that you don't have ${menu == 'all' ? 'any' :  'any '+ menu.toLowerCase()} token.`}
          />
          </div>
        ) : (
          <>
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
              <th className="py-2 px-2 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Token Issuer</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Token Code</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Start Date</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Date Approved</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Investment Type</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Listing Status</p>
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
            {tokenReviews
        ?.filter(
          (item:any) =>
            menu === "all" || item?.tokenApproval?.status === menu
            
        )
        ?.map((tokenReview:any, index:any) => {
              const startDateTime = new Date(tokenReview?.distribution?.startDate);
              const approvedDateTime = new Date(tokenReview?.tokenApproval?.approvalDate);
              const startDateFormatted = startDateTime.toISOString().split('T')[0];
              const approvedDateFormatted = approvedDateTime.toISOString().split('T')[0];
              return(
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#F7F4ED]"}`}
              >
                <td className="px-4 py-4 whitespace-nowrap text-left">
                {tokenReview?.tokenIssuer?.tokenIssuer === null ? 'Invidux' : tokenReview?.tokenIssuer?.tokenIssuer}
                </td>
                <td className="px-4 py-4 whitespace-nowrap font-medium">
                  {tokenReview?.tokenCode}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {startDateFormatted}
                </td>
                <td className={`px-5 py-4 whitespace-nowrap`}>
                  {approvedDateFormatted}
                </td>
                <td className={`px-5 py-4 whitespace-nowrap`}>
                  {tokenReview?.tokenType?.investmentType}
                </td>
                <td className={`px-5 py-4 whitespace-nowrap `}>
                  {tokenReview?.tokenType?.listingStatus}
                </td>
                <td className={`px-5 py-4 whitespace-nowrap `}>
                <Link href={`/admin/token-review/${tokenReview?.id}`}>
                  <Eye className="cursor-pointer h-full" size={20} />
                </Link>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
      </>
        )}
    </div>
  )
}

const menuBars = [
  {
    label: "All Tokens",
    item: "all",
  },
  {
    label: "Approved",
    item: "Approved",
  },
  {
    label: "Pending",
    item: "Pending",
  },
  {
    label: "Rejected",
    item: "Rejected",
  },
];

export default TokenReviewTable