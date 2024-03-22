import { Button } from '@/components/reusable/Buttons'
import { Plus } from 'lucide-react'
import React from 'react'

const ManageUsers = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-between items-center pt-5 pb-4 px-4 md:px-8">
          <p className="text-sm md:text-2xl font-[500]">User Management</p>
          <Button
            variant="dark"
            className="border-[#6A6A6A] w-full lg:w-[197px] text-[16px]"
          >
            Add New User <Plus size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ManageUsers