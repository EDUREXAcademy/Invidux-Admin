import React from 'react'
import { ChevronsUpDown, ListFilter, Search } from 'lucide-react'
import TransactionDetails from '../TransactionDetails'
import TransactionFilter from '../reporting/TransactionFilter'

type Props = {}

const TokenPerformanceTable = (props: Props) => {
  return (
    <div className=" bg-[#F0F2F5] py-5 px-4 md:px-8 min-h-[calc(100vh-70px)]">
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
                  <p>Total Revenue</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Total Expenses</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Last Distribution Amount</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Last Distribution Date</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Current Price</p>
                  <p>
                    <ChevronsUpDown color="#989898" />
                  </p>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex items-center gap-2 text-left">
                  <p>Mkt Cap</p>
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
                  ₦948.55
                </td>
                <td className="px-4 py-4 whitespace-nowrap font-medium">
                  ₦948.55
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  ₦948.55
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  17 Oct 2023
                </td>
                <td className={`px-5 py-4 whitespace-nowrap`}>
                  ₦948.55
                </td>
                <td className={`px-5 py-4 whitespace-nowrap `}>
                  ₦456.00
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const usersData = [
  {
    date: "01/01/2023",
    tokenCode: "INVLEKKI102",
    investmentType: "Long Co-own",
    transType: "Buy",
    tokenVolume: "948.5500",
    tokenValue: "₦948.55",
    amount: "43.85",
    desc: "Card",
    balance: "948.55",
    status: "Successful",
    view: "",
  },
  {
    date: "02/01/2023",
    tokenCode: "INVLEKKI102",
    investmentType: "Medium Co-own",
    transType: "Sell",
    tokenVolume: "-767.5073",
    tokenValue: "-₦767.50",
    amount: "43.85",
    desc: "Card",
    balance: "948.55",
    status: "Pending",
    view: "",
  },
  {
    date: "02/01/2023",
    tokenCode: "INVLEKKI102",
    investmentType: "Co-build",
    transType: "Transfer-out",
    tokenVolume: "-328.8590",
    tokenValue: "-₦328.85",
    amount: "43.85",
    desc: "Card",
    balance: "948.55",
    status: "Pending",
    view: "",
  },
  {
    date: "10/01/2023",
    tokenCode: "INVLEKKI102",
    investmentType: "Debt",
    transType: "buy",
    tokenVolume: "446.6100",
    tokenValue: "₦446.61",
    amount: "43.85",
    desc: "Card",
    balance: "948.55",
    status: "Successful",
    view: "",
  },
  {
    date: "10/01/2023",
    tokenCode: "INVLEKKI102",
    investmentType: "219.7890",
    transType: "Transfer-in",
    tokenVolume: "219.7890",
    tokenValue: "₦219.78",
    amount: "43.85",
    desc: "Card",
    balance: "948.55",
    status: "Pending",
    view: "",
  },
];

export default TokenPerformanceTable