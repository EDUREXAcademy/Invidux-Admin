"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import UserAvatar from "./UserAvatar";
import { BellRing, ChevronDown, LogOut, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUser } from "@/hooks/queries";
import { toast } from "react-toastify";

type Props = {
  userData: {};
};

const ProfileDialog = (props: Props) => {
  const { data: userData, isPending: userIsPending } = useUser();

  const router = useRouter();

  const extractNumber = (string: string) => {
    return string?.match(/\d+/);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <div className="border-t border-t-[#474746] h-[85px] flex justify-center items-center gap-4 lg:gap-8 md:px-3 cursor-pointer group">
          <div className="flex items-center justify-between md:gap-2 lg:gap-3">
            <UserAvatar />
            {userData && (
              <div className="text-start">
                <p className="font-[500] md:text-sm lg:text-base">
                  <span className="capitalize ">
                    {userData?.data?.personalInfo?.firstName} &nbsp; 
                  </span>
                  <span className="capitalize ">
                    {userData?.data?.personalInfo?.lastName}
                  </span>
                </p>
                <p className="md:text-xs lg:text-sm text-[#838383]">{userData?.data?.role}</p>
              </div>
            )}
          </div>
          <ChevronDown className="group-hover:animate-pulse" />
        </div>
      </DialogTrigger>
      <DialogContent className="w-[200px] h-fit left-[400px] top-[85%]">
        <DialogHeader>
          <DialogDescription className="flex flex-col gap-y-4">
            <DialogClose asChild className=" w-fit">
              <Link
                href={"/admin/profile"}
                className="flex gap-1 items-center group transition"
              >
                <UserRound size={20} className="group-hover:text-black" />
                <span className="group-hover:text-black">Profile</span>
              </Link>
            </DialogClose>
            <DialogClose asChild className=" w-fit">
              <Link
                href={"/admin/notifications"}
                className="flex gap-1 items-center group transition"
              >
                <BellRing size={20} className="group-hover:text-black" />
                <span className="group-hover:text-black">Notifications</span>
              </Link>
            </DialogClose>
            <button
              className="w-fit flex gap-1 group"
              onClick={() => {
                localStorage.clear();
                toast.warning("Logging out user", {
                  toastId: "warning1"
                });
                setTimeout(() => {
                  router.push("/admin/login");
                }, 1500);
              }}
            >
              <LogOut size={20} className="group-hover:text-red-500" />
              <span className="group-hover:text-red-500">Log out</span>
            </button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
