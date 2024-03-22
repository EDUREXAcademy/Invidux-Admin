import { ChevronDown } from "lucide-react"
import UserAvatar from "./UserAvatar"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"


const UserButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="border-t border-t-[#474746] h-[85px] flex justify-center items-center gap-8 cursor-pointer group">
          <div className="flex items-center justify-between gap-3">
            <UserAvatar name={"Seyi Doe"}/>
            <div className="text-start">
              <p className="text-sm font-[500]">Seyi Doe</p>
              <p className="text-sm text-[#838383]">Level 2</p>
            </div>
          </div>
        <ChevronDown className="group-hover:animate-pulse" />
        </div>
      </DialogTrigger>
      <DialogContent className="w-[200px] place-self-end">
        <DialogHeader>
          <DialogDescription className="flex flex-col gap-y-4">
            <DialogClose asChild >
              <Link href={"/token-issuers/portfolio"}>Portfolio</Link>
            </DialogClose>
            <DialogClose asChild>
              <Link href={"/token-issuers/profile"}>Profile</Link>
            </DialogClose>
            <button className="w-fit">Log out</button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default UserButton