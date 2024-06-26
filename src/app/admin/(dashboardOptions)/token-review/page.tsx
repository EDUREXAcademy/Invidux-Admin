"use client";
import { Button } from "@/components/reusable/Buttons";
import MultiStepForm from "@/components/token-review/MultiStepForm";
import TokenReviewTable from "@/components/token-review/TokenReviewTable";
import { Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import logo from '../../../../assets/icons/logo.svg'

type Props = {};

const TokenReview = (props: Props) => {
  return (
    <div className="">
      {/* Mobile logo */}
      <div className="bg-[#f0f2f5] py-4 md:hidden">
        <Image src={logo} alt="logo" className="w-[100px] ml-[3%]"/>
      </div>
      <div>
        <div className="flex justify-between items-center pt-5 pb-4 px-4 md:px-8">
          <p className="text-sm md:text-2xl font-[500]">Token Review</p>
          <MultiStepForm  >
          <Button
            variant="dark"
            className="border-[#6A6A6A] w-full lg:w-[197px] text-[16px]"
          >
            Issue New Token <Plus size={16} />
          </Button>
          </MultiStepForm>
        </div>
      </div>
      
      <TokenReviewTable />
    </div>
  );
};


export default TokenReview;
