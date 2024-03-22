"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, ForwardButton } from '../reusable/Buttons'
import { TextField } from '../reusable/FormInput'
import { PenLine, Plus } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import AddNewBank from './AddNewBank'

type Props = {
  userData: {
    contact: {
      email: string
      phone: string
      address: {
        street: string
        city: string
        state: string
        countryName: string
      }
      nextOfKin: {
        email: string
        phone: string
        name: string
        relationship: string
      }
    },
  }
}

const Payment = ({ userData }: Props) => {
  const { control, handleSubmit, setValue, getValues } = useForm()
  const [editMode, setEditMode] = useState(false)
  // const { mutate, isPending } = useUpdateContactInfo();


  const updatePayment = async () => {

  }
  return (
    <div className='pb-10'>
      <div className='flex justify-end items-center pt-3 md:hidden' onClick={() => setEditMode(true)}>
        <PenLine size={18} />
      </div>
      <div className={`flex justify-between w-full py-4 md:py-10 px-4 ${!editMode ? "animate-in flex justify-between" : "animate-out hidden"}`}>
        <div className='flex flex-col gap-y-4 font-[400] w-full md:w-[80%]'>
          <div className='flex flex-col md:flex-row gap-y-4'>
            <div className='w-1/2 md:min-w-28'>
              <p className='text-sm text-[#090909]'>Bank Name</p>
              <p className='text-sm md:text-base text-[#838383] max-w-40 truncate'>{userData?.contact?.email ? userData?.contact?.email : "-"}</p>
            </div>
            <div className='w-1/2 md:min-w-28'>
              <p className='text-sm text-[#090909]'>Account Name</p>
              <p className='text-sm md:text-base text-[#838383]'>{userData?.contact?.email ? userData?.contact?.email : "-"}</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-y-4'>
            <div className='w-1/2 md:min-w-28'>
              <p className='text-sm text-[#090909]'>Account Number</p>
              <p className='text-sm md:text-base text-[#838383] max-w-40 truncate'>{userData?.contact?.email ? userData?.contact?.email : "-"}</p>
            </div>
            <div className='w-1/2 md:min-w-28'>
              <p className='text-sm text-[#090909]'>Bank Code (optional)</p>
              <p className='text-sm md:text-base text-[#838383]'>{userData?.contact?.email ? userData?.contact?.email : "-"}</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-y-4'>
            <div className='w-1/2 md:min-w-28'>
              <p className='text-sm text-[#090909]'>IBAN (optional)</p>
              <p className='text-sm md:text-base text-[#838383] max-w-40 truncate'>{userData?.contact?.email ? userData?.contact?.email : "-"}</p>
            </div>
            <div className='w-1/2 md:min-w-28'>
              <p className='text-sm text-[#090909]'>SWIFT (optional)</p>
              <p className='text-sm md:text-base text-[#838383]'>{userData?.contact?.email ? userData?.contact?.email : "-"}</p>
            </div>
          </div>
          
          <div className='w-fit'>
            <AddNewBank />
          </div>
        </div>

        <div className='hidden text-[16px] w-[30%] md:flex gap-2 items-center h-fit cursor-pointer' onClick={() => setEditMode(true)}>
          Edit details
          <PenLine size={18} />
        </div>
      </div>

      

      <div className={`py-10 transition-all ${editMode ? "animate-accordion-up block" : "animate-out hidden"}`}>
        <form className="flex flex-col gap-4 w-fit px-12  mx-auto mt-5" onSubmit={handleSubmit(updatePayment)}>

          <div className='mb-3'>
            <Select defaultValue={userData?.contact?.nextOfKin?.relationship} name='nextOfKinRelationship' >
              <label htmlFor="nextOfKinRelationship" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Bank Name</label>
              {/* <FormControl> */}
              <SelectTrigger className="max-w-[486px] h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
                <SelectValue placeholder="Select Bank Name" />
              </SelectTrigger>
              {/* </FormControl> */}
              <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
                <SelectItem value="fcmb">FCMB</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* User Email and Phone Inputs */}
          <TextField
            name='accountName'
            label="Account Name"
            placeholder="Smart Homes Limited"
            control={control}
            defaultValue={userData?.contact?.email}
          // rules={{ required: 'This filed is required' }}
          />

          <TextField
            name='phoneNumber'
            label="Account Number"
            placeholder=""
            control={control}
            defaultValue={userData?.contact?.phone}
          // rules={{ required: 'This filed is required' }}
          />

          <TextField
            name='bankCode'
            label="Bank Code (optional)"
            placeholder=""
            control={control}
            defaultValue={userData?.contact?.phone}
          // rules={{ required: 'This filed is required' }}
          />

          <TextField
            name='iban'
            label="IBAN (optional)"
            placeholder=""
            control={control}
            defaultValue={userData?.contact?.phone}
          // rules={{ required: 'This filed is required' }}
          />
          <TextField
            name='swift'
            label="SWIFT (optional)"
            placeholder=""
            control={control}
            defaultValue={userData?.contact?.phone}
          // rules={{ required: 'This filed is required' }}
          />

          


          <div className='flex justify-end gap-5 mt-5'>
            <Button variant='light'>
              Save
            </Button>
            <ForwardButton variant='dark' type='submit'>
              Save and Continue
            </ForwardButton>
          </div>


        </form>

      </div>
    </div>
  )
}

export default Payment