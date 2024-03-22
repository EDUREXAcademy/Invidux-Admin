import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { TextField } from "../components/reusable/FormInput";
import { useForm } from 'react-hook-form'
import { Button, ForwardButton } from "./reusable/Buttons";
import SelectInput from "./reusable/SelectInput";
import { X } from "lucide-react";

type Props = {}

const TopUpToken = (props: Props) => {
    const { control, handleSubmit } = useForm()

    const topUp = async () => {
        alert("Top-up Successful")
    }
  return (
      <Dialog>
          <DialogTrigger className="w-full">
              <div className='mb-6'>
                  <Button fullWidth variant='dark'>Topup Token</Button>
              </div>
          </DialogTrigger>
          <DialogContent className="max-w-[678px] md:px-10 md:py-10">
              <DialogHeader>
                  <DialogTitle className="flex justify-between items-center text-neutral-950 text-2xl font-[500]">
                      Topup Token
                      <DialogClose asChild className="ml-auto w-fit">
                          <X />
                      </DialogClose>
                  </DialogTitle>

                  <DialogDescription className="flex flex-col gap-y-4 pt-4">
                      <div className="justify-start items-start gap-96 inline-flex ">
                          <div className="flex-col justify-start items-start inline-flex">
                              <h3 className="text-[#B1924E] text-3xl font-semibold font-['Inter'] leading-9">₦948.55</h3>
                              <p className="text-zinc-500 text-sm font-normal font-['Inter'] leading-tight">Token Price</p>
                          </div>
                          <p className="text-zinc-900 text-sm font-medium font-['Inter'] leading-tight">INVLEKKI102</p>
                      </div>
                      <form onSubmit={handleSubmit(topUp)} className="relative">
                          <p className="absolute right-0 ml-auto w-fit text-sm text-[#B69552]">Amount Due: N23,950.00</p>
                          <TextField
                                type="number"
                              name="amount"
                              label="Topup Units"
                              placeholder="34,444.01"
                              variant="xlong"
                              control={control}
                          />
                          <div className="">
                              <SelectInput label="Payment Method" placeholder="Wallet"
                                  options={
                                      ['Wallet', 'Token']
                                  } />
                          </div>
                          <TextField
                              name="wallet-pin"
                              label="Wallet Pin"
                              placeholder="******"
                              type="password"
                              variant="xlong"
                              control={control}
                          />
                          <div className="flex justify-end gap-x-2 mt-8">
                              <ForwardButton type="submit" variant="dark">Continue</ForwardButton>
                          </div>
                      </form>
                  </DialogDescription>
              </DialogHeader>
          </DialogContent>
      </Dialog>
  )
}

export default TopUpToken