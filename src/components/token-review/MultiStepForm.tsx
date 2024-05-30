"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Button, ForwardButton } from "../reusable/Buttons";
import SelectInput from "../reusable/SelectInput";
import { X } from "lucide-react";
import { Progress } from "../ui/progress";
import TokenType from "./TokenType";
import Location from "./Location";
import Property from "./Property";
import PreSellingTerms from "./PreSellingTerms";
import PropertyDetails from "./PropertyDetails";
import Description from "./Description";
import Distribution from "./Distribution";
import FilesUpload from "./FilesUpload";
import useStore from "@/store";

type Props = {
  children: React.ReactNode
}

const MultiStepForm = ({ children }: Props) => {

  const { control, handleSubmit } = useForm();
  const { currentIndex, setCurrentIndex, resetTokenIssuanceData } = useStore()

  const formTitles = ["Token Type", "Location", "Property", "Pre-selling Terms", "Property Details", "Description", "Distribution", "Files Upload"]
  return (
    <Dialog>
      <DialogTrigger className="h-full">{children}</DialogTrigger>
      <DialogContent className="max-w-[678px] px-4 md:px-8 lg:px-12 py-10 bg-white rounded-2xl flex-col justify-start inline-flex max-h-[95vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="max-w-[614px] mb-2 ">
            <div className="flex justify-between items-center">
              <h3 className="text-neutral-950 text-2xl">Property Token Issuance</h3>
              <DialogClose onClick={() => {
                setCurrentIndex(6)
                resetTokenIssuanceData()
              }}>
                <X />
              </DialogClose>
            </div>
          </DialogTitle>
          <DialogDescription>
            <Progress value={((currentIndex + 1) / (formTitles.length)) * 100} className="h-1 text-[#B1924E] bg-[#E5E5E5]" indicatorColor="bg-[#B1924E]" />
            <div className="flex items-center gap-4 mt-3 mb-5">
              <div className="h-9 w-9 rounded-full border-2 border-[#B1924E] flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-[#B1924E]" />
              </div>
              <p>{formTitles[currentIndex]}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        {/* <form onSubmit={handleSubmit(submitForm)}> */}
        <div>
          <div className={`${currentIndex === 0 ? "block" : "hidden"}`}>
            <TokenType />
          </div>
          <div className={`${currentIndex === 1 ? "block" : "hidden"}`}>
            <Location />
          </div>
          {/* {currentIndex === 2 && <Property />} */}
          <div className={`${currentIndex === 2 ? "block" : "hidden"}`}>
            <Property />
          </div>
          <div className={`${currentIndex === 3 ? "block" : "hidden"}`}>
            <PreSellingTerms />
          </div>
          <div className={`${currentIndex === 4 ? "block" : "hidden"}`}>
            <PropertyDetails />
          </div>
          <div className={`${currentIndex === 5 ? "block" : "hidden"}`}>
            <Description />
          </div>
          <div className={`${currentIndex === 7 ? "block" : "hidden"}`}>
            <FilesUpload />
          </div>
          {currentIndex === 6 && <Distribution />}

        </div>
          {currentIndex === formTitles?.length - 1 && <DialogClose>
            <div className="flex justify-end mt-6 w-full">
              <Button>Submit</Button>
            </div>
          </DialogClose>}
        {/* </form> */}
        {/* <DialogFooter></DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}

export default MultiStepForm