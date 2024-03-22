import React from "react";
import {
  ListFilter,
  Search,
  Eye,
  ChevronsUpDown,
  UserRound,
} from "lucide-react";
import TransactionDetails from "./TransactionDetails";
import TransactionFilter from "./wallet/TransactionFilter";

const usersData = [
  {
    date: "01/01/2023",
    transaction: "Deposit",
    amount: "43.85",
    desc: "Card",
    balance: "948.55",
    status: "Successful",
    view: "",
  },
  {
    date: "02/01/2023",
    transaction: "Token Earnings",
    amount: "6,203.85",
    desc: "Token - INVLEKKI",
    balance: "767.10",
    status: "Pending",
    view: "",
  },
  {
    date: "06/01/2023",
    transaction: "Bank Withdrawal",
    amount: "576.85",
    desc: "Card",
    balance: "324.55",
    status: "Successful",
    view: "",
  },
  {
    date: "10/01/2023",
    transaction: "Transfer-in",
    amount: "78,000.00",
    desc: "Card",
    balance: "448.71",
    status: "Pending",
    view: "",
  },
  {
    date: "11/01/2023",
    transaction: "Transfer-out",
    amount: "98,000.00",
    desc: "Card",
    balance: "-226.71",
    status: "Successful",
    view: "",
  },
  {
    date: "01/01/2023",
    transaction: "Deposit",
    amount: "43.85",
    desc: "Card",
    balance: "948.55",
    status: "Successful",
    view: "",
  },
  {
    date: "01/01/2023",
    transaction: "Deposit",
    amount: "43.85",
    desc: "Card",
    balance: "948.55",
    status: "Pending",
    view: "",
  },
  {
    date: "01/01/2023",
    transaction: "Deposit",
    amount: "43.85",
    desc: "Card",
    balance: "948.55",
    status: "Successful",
    view: "",
  },
  {
    date: "01/01/2023",
    transaction: "Deposit",
    amount: "43.85",
    desc: "Card",
    balance: "948.55",
    status: "Pending",
    view: "",
  },
];

const TransactionTable = () => {
  return (
    <div className="px-[5%]">
      <div className="flex flex-col md:flex-row justify-between gap-y-2 py-4 md:px-0">
        <div>
          <p className="text-[20px] md:text-[28px] font-semibold">
            Recent Transactions
          </p>
          <p className="text-sm text-[#6A6A6A]">
            Keep track of all your transactions
          </p>
        </div>
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
          <thead className="font-normal">
            <tr className="bg-[#E7DDC8]">
              <th className="py-2 px-4 font-normal">
                <div className="flex gap-2 text-left">
                  <p>Date</p>
                  <button>
                    <ChevronsUpDown />
                  </button>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex gap-2 text-left">
                  <p>Transaction</p>
                  <button>
                    <ChevronsUpDown />
                  </button>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex gap-2 text-left">
                  <p>Amount</p>
                  <button>
                    <ChevronsUpDown />
                  </button>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex gap-2 text-left">
                  <p>Description</p>
                  <button>
                    <ChevronsUpDown />
                  </button>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex gap-2 text-left">
                  <p>Balance</p>
                  <button>
                    <ChevronsUpDown />
                  </button>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex gap-2 text-left">
                  <p>Status</p>
                  <button>
                    <ChevronsUpDown />
                  </button>
                </div>
              </th>
              <th className="py-2 px-4 font-normal">
                <div className="flex gap-2 text-left">
                  <p>View</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white text-sm">
            {usersData.map((transaction, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#F7F4ED]"}`}
              >
                <td className="px-4 py-4 whitespace-nowrap text-left">
                  {transaction.date}
                </td>
                <td className="px-4 py-4 whitespace-nowrap font-medium">
                  {transaction.transaction}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {transaction.amount}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {transaction.desc}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {transaction.balance}
                </td>
                {transaction.status === "Successful" ? (
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="bg-green-200 text-green-600 text-center p-1.5 rounded-sm">
                      {transaction.status}
                    </div>
                  </td>
                ) : (
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="bg-[#FFEBC3] text-[#D48C01] text-center p-1.5 rounded-sm">
                      {transaction.status}
                    </div>
                  </td>
                )}
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="w-full h-full flex justify-center items-center my-auto">
                    <TransactionDetails transaction={transaction} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto hidden">
        <div className="min-w-full py-2 align-middle">
          <div className="overflow-hidden shadow md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead>
                <tr className="">
                  <th
                    scope="col"
                    className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 flex items-center gap-2"
                  >
                    <p>Date</p>
                    <button>{/* <Image src={arrowUpDown} alt="" /> */}</button>
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 flex items-center gap-2"
                  >
                    <p>Transaction</p>
                    <button>{/* <Image src={arrowUpDown} alt="" /> */}</button>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                {usersData.map((user, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{user.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
