"use client";
import Image from "next/image";
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
import { CreditCard, X, Landmark, AlertTriangle, Plus } from "lucide-react";
import { Button, ForwardButton } from "../reusable/Buttons";
import { TextField } from "../reusable/FormInput";
import { useForm } from "react-hook-form";
import SelectInput from "../reusable/SelectInput";

const AddNewBank = () => {
  const { control, handleSubmit } = useForm();

  const addBank = async () => {
    // router.push('/token-issuers/success')
    alert("Bank added successful");
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full h-full">
        <Button variant='outline'>Add bank Account <span><Plus /></span></Button>
      </DialogTrigger>
      <DialogContent className="max-w-[678px] md:px-10 md:py-10">
        <DialogHeader>
          <CreditCard
            color="#B1924E"
            className="w-10 h-10 p-2 bg-orange-50 rounded mb-2"
          />
          <DialogTitle className="text-neutral-950 text-2xl font-semibold">
            Add new bank
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-y-4 pt-4">
            <form onSubmit={handleSubmit(addBank)}>
              <TextField
                name="account-number"
                label="Account number"
                placeholder="1578903457"
                variant="xlong"
                control={control}
              />
              <div className="">
                <SelectInput
                  label="Bank name"
                  placeholder="KongaPay Bank"
                  options={[
                    "Accesss",
                    "UBA",
                    "Keystone",
                    "Wema Bank",
                    "GtBank",
                    "First Bank",
                    "Fedility",
                  ]}
                />
              </div>
              <div className="flex justify-end gap-x-2 mt-4">
                <DialogClose asChild className="ml-auto w-fit">
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <ForwardButton type="submit" variant="dark">
                  Add bank
                </ForwardButton>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewBank;
