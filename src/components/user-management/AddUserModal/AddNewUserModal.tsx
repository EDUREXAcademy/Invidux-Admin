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
import { X } from "lucide-react";
import { Progress } from "../../ui/progress";
import useStore from "@/store";
import NextOKin from "./NextOKin";
import Profile from "./Profile";
import Contact from "./Contact";


const AddNewUserModal= ({isAddUser, setIsAddUser }: any) => {

  const { control, handleSubmit } = useForm();
  const { currentIndex, setCurrentIndex, resetTokenIssuanceData } = useStore()
  const [formData, setFormData] = useState({})

  const submitForm = async () => {

  }

  const formTitles = ["Profile", "Contact", "Next of Kin"]
  return (
    <Dialog open = {isAddUser}>
      <DialogContent className="max-w-[678px] px-4 md:px-8 lg:px-12 py-10 bg-white rounded-2xl flex-col justify-start inline-flex max-h-[95vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="max-w-[614px] mb-2 ">
            <div className="flex justify-between items-center">
              <h3 className="text-neutral-950 text-2xl">Add New User</h3>
              <div onClick={() => {
                setCurrentIndex(0)
                resetTokenIssuanceData()
                setIsAddUser(false)
              }}>
                <X />
              </div>
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
        <div>
          <div className={`${currentIndex === 0 ? "block" : "hidden"}`}>
            <Profile />
          </div>
          <div className={`${currentIndex === 1 ? "block" : "hidden"}`}>
            <Contact />
          </div>
          <div className={`${currentIndex === 2 ? "block" : "hidden"}`}>
            <NextOKin />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddNewUserModal