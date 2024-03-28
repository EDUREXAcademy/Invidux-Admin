"use client";
import React, { useState } from "react";
import { Bird, ChevronsUpDown, Eye, ListFilter, Search } from "lucide-react";
import TransactionFilter from "../reporting/TransactionFilter";
import Link from "next/link";
import EmptyState from "../reusable/EmptyState";
import UserModal from "./UserModal";

type Props = {};

const ManageUserTable = ({ users }: any) => {
  const [isUserModal, setIsUserModal] = useState(false)
  const [user, setUser] = useState({})

  return (
    <div className=" bg-[#F0F2F5] py-5 min-h-[calc(100vh-70px)]">
      
      {users?.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            img={
              <Bird
                size={150}
                className="text-[#C29E57] bg-orange-50 p-1 rounded-lg"
              />
            }
            title={`No user found`}
            text={`Oops! It seems that you don't have any user`}
          />
        </div>
      ) : (
        <>
          {/* FILTER */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-[20px] text-[#13142D] ">
                Manage Users
              </h2>
              <p className="text-[14px] text-[#6A6A6A] ">
                Assign roles and manages accounts on this platform
              </p>
            </div>
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
          </div>

          <div className="w-full mx-auto overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="font-normal text-sm">
                <tr className="bg-[#E7DDC8]">
                  <th className="py-2 px-4 font-normal">
                    <div className="flex items-center gap-2 text-left">
                      <p>Full Name</p>
                      <p>
                        <ChevronsUpDown color="#989898" />
                      </p>
                    </div>
                  </th>
                  <th className="py-2 px-4 font-normal">
                    <div className="flex items-center gap-2 text-left">
                      <p>Email</p>
                      <p>
                        <ChevronsUpDown color="#989898" />
                      </p>
                    </div>
                  </th>
                  <th className="py-2 px-4 font-normal">
                    <div className="flex items-center gap-2 text-left">
                      <p>Role</p>
                      <p>
                        <ChevronsUpDown color="#989898" />
                      </p>
                    </div>
                  </th>
                  <th className="py-2 px-4 font-normal">
                    <div className="flex items-center gap-2 text-left">
                      <p>Date Created</p>
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
                {users?.map((user: any, index: any) => {
                  const createdDateTime = new Date(user?.dateCreated);
                  const dateCreatedFormatted = createdDateTime
                    .toISOString()
                    .split("T")[0];
                  return (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-[#F7F4ED]"
                      }`}
                    >
                      <td className="px-4 py-4 whitespace-nowrap font-medium">
                        {user?.name}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {user?.email}
                      </td>
                      <td className={`px-5 py-4 whitespace-nowrap`}>
                        {user?.role}
                      </td>
                      <td className={`px-5 py-4 whitespace-nowrap`}>
                        {dateCreatedFormatted}
                      </td>
                      <td className={`px-5 py-4 whitespace-nowrap `}>
                        {user?.registrationStatus}
                      </td>
                      <td className={`px-5 py-4 whitespace-nowrap relative`} onClick={() => {setIsUserModal(true), setUser(user)}}>
                        <Eye className="cursor-pointer h-full" size={20} />
                      </td>
                      {/* {isUserModal && <UserModal isUserModal={isUserModal} setIsUserModal={setIsUserModal} user={user} /> } */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {isUserModal && <UserModal isUserModal={isUserModal} setIsUserModal={setIsUserModal} user={user} /> } 
          </div>
        </>
      )}
    </div>
  );
};

export default ManageUserTable;
