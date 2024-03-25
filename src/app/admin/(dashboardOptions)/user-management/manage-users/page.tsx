'use client'
import TransactionFilter from "@/components/reporting/TransactionFilter";
import { Button } from "@/components/reusable/Buttons";
import LoadingOverlay from "@/components/reusable/LoadingOverlay";
import AddNewUserModal from "@/components/user-management/AddUserModal/AddNewUserModal";
import ManageUserTable from "@/components/user-management/ManageUserTable";
import { useAppUsers } from "@/hooks/queries";
import { ListFilter, Plus, Search, UserRound } from "lucide-react";
import React, { useState } from "react";

const ManageUsers = () => {
  const {data:AppUsers, isPending} = useAppUsers()
  const [isAddUser, setIsAddUser] = useState(false)
  return (
    <div className="">
      {/* {isPending && <LoadingOverlay/> } */}
      {isAddUser && <AddNewUserModal isAddUser={isAddUser} setIsAddUser={setIsAddUser} /> }
      <div className="px-[3%]">
        <div className="flex justify-between items-center pt-5 pb-4 ">
          <p className="text-sm md:text-2xl font-[500]">User Management</p>
          <Button
            variant="dark"
            className="border-[#6A6A6A] w-full lg:w-[197px] text-[16px]"
            onClick={()=>setIsAddUser(true)}
          >
            Add New User <Plus size={16} />
          </Button>
        </div>
      </div>
      <div className="bg-[#F0F2F5] px-[3%] py-10">
        {/* User Cards */}
        <div className="h-fit grid grid-cols-[auto_auto_auto] mb-6 gap-x-4 items-center overflow-x-auto no-scrollbar">
          <div className="rounded-[8px] px-[24px] py-[16px] bg-white min-w-[320px]">
            <UserRound className="text-[#B1924E] mb-3" />
            <p className="font-light mb-1 text-xs md:text-base text-[#585978]">
              Total Token Holder
            </p>
            <p className="text-[#13142D] font-semibold text-[20px] ">{AppUsers?.totalIssuers}</p>
          </div>
          <div className="rounded-[8px] px-[24px] py-[16px] bg-white min-w-[320px] ">
            <UserRound className="text-[#B1924E] mb-3" />
            <p className="font-light mb-1 text-xs md:text-base text-[#585978]">
              Token Issuer
            </p>
            <p className="text-[#13142D] font-semibold text-[20px] ">{AppUsers?.totalHolders}</p>
          </div>
          <div className="rounded-[8px] px-[24px] py-[16px] bg-white min-w-[320px] ">
            <UserRound className="text-[#B1924E] mb-3" />
            <p className="font-light mb-1 text-xs md:text-base text-[#585978]">
              Dealer
            </p>
            <p className="text-[#13142D] font-semibold text-[20px] ">{AppUsers?.totalDealers}</p>
          </div>
        </div>
        
        <ManageUserTable users={AppUsers?.users} />
      </div>
    </div>
  );
};

export default ManageUsers;
