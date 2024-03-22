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
import { X, Landmark, AlertTriangle } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button, ForwardButton } from "../reusable/Buttons";
import { TextField } from "../reusable/FormInput";
import SelectInput from "../reusable/SelectInput";

const TransactionFilter = ({ children }: any) => {
  const { control, handleSubmit } = useForm();

  const filter = () => {
    alert("filtered");
  };

  return (
    <Dialog>
      <DialogTrigger className="h-full">{children}</DialogTrigger>
      <DialogContent className="max-w-[678px] px-8 py-10 bg-white rounded-2xl flex-col justify-start inline-flex">
        <DialogHeader>
          <DialogTitle className="max-w-[614px] mb-2 text-neutral-950 text-2xl font-semibold">
            Transaction Filter
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(filter)}>
          <TextField
            name="date"
            label="Date"
            placeholder="12/09/2024"
            type="date"
            variant="xlong"
            control={control}
          />
          <SelectInput
            label="Transaction Type"
            placeholder="Deposit"
            options={["Deposit", "Withdraw"]}
          />
          <SelectInput
            label="Status"
            placeholder="successful"
            options={["Successful", "Failed"]}
          />
          <div className="flex justify-end gap-x-2 mt-4">
            <DialogClose asChild className="ml-auto w-fit">
              <Button variant="outline">Clear all</Button>
            </DialogClose>
            <ForwardButton type="submit" variant="dark">
              Continue
            </ForwardButton>
          </div>
        </form>
        {/* <DialogFooter></DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default TransactionFilter;
