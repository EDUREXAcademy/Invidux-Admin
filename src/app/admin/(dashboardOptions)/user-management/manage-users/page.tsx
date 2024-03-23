import { Button } from "@/components/reusable/Buttons";
import { Plus, UserRound } from "lucide-react";
import React from "react";

const ManageUsers = () => {
  return (
    <div className="">
      <div className="px-[3%]">
        <div className="flex justify-between items-center pt-5 pb-4 ">
          <p className="text-sm md:text-2xl font-[500]">User Management</p>
          <Button
            variant="dark"
            className="border-[#6A6A6A] w-full lg:w-[197px] text-[16px]"
          >
            Add New User <Plus size={16} />
          </Button>
        </div>
      </div>
      <div className="bg-[#F0F2F5] py-10">
        {/* User Cards */}
        <div className="px-[3%] h-fit grid grid-cols-[auto_auto_auto] gap-x-4 items-center overflow-x-auto no-scrollbar">
          <div className="rounded-[8px] px-[24px] py-[16px] bg-white min-w-[320px]">
            <UserRound className="text-[#B1924E] mb-3" />
            <p className="font-light mb-1 text-xs md:text-base text-[#585978]">
              Total Token Holder
            </p>
            <p className="text-[#13142D] font-semibold text-[20px] ">239</p>
          </div>
          <div className="rounded-[8px] px-[24px] py-[16px] bg-white min-w-[320px] ">
            <UserRound className="text-[#B1924E] mb-3" />
            <p className="font-light mb-1 text-xs md:text-base text-[#585978]">
              Token Issuer
            </p>
            <p className="text-[#13142D] font-semibold text-[20px] ">3</p>
          </div>
          <div className="rounded-[8px] px-[24px] py-[16px] bg-white min-w-[320px] ">
            <UserRound className="text-[#B1924E] mb-3" />
            <p className="font-light mb-1 text-xs md:text-base text-[#585978]">
              Dealer
            </p>
            <p className="text-[#13142D] font-semibold text-[20px] ">20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
