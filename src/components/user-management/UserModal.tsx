import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TextField } from '../reusable/FormInput';
import { X } from 'lucide-react';

const UserModal = ({isUserModal, setIsUserModal, user}:any) => {
  return (
    <Dialog open={isUserModal}>
      <DialogContent className="w-[200px] h-fit left-[400px] top-[85%]">
        <DialogHeader>
          <DialogDescription className="flex flex-col gap-y-4">
          <div className="">
            <p className='ursor-pointer mb-3'>Deactivate User</p>
            <p className='ursor-pointer '>Delete User</p>
          </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default UserModal