"use client"
import React, { useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useForm } from 'react-hook-form'
import { ArrowLeft, Plus } from 'lucide-react'
import useStore from '@/store'
import { TextField } from '@/components/reusable/FormInput'
import { Button, ForwardButton } from '@/components/reusable/Buttons'


const Profile = () => {
  const { control, handleSubmit, setValue, getValues } = useForm();

  const { addUserData, setAddUserData, currentIndex, setCurrentIndex } = useStore()

  const handleUnitTypesChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('unitType', value);
  };
  const handleBedroomsChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('noOfBedrooms', value);
  };
  const handleToiletsChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('noOfToilets', value);
  };
  const handleFittedKitchenChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('fittedKitchen', value);
  };
  const handleFurnishingChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('furnishing', value);
  };
  const handleLivingRoomsChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('noOfLivingRooms', value);
  };

  const saveProfile = (data: any) => {
    console.log({ data })
    setAddUserData({ 
      ...addUserData, 
      propertyUnits: [{ 
        ...data, 
        noOfLivingRooms: Number(data?.noOfLivingRooms), 
        noOfBedrooms: Number(data?.noOfBedrooms), 
        noOfToilets: Number(data.noOfToilets),
        exitingTokenVolume: Number(data.exitingTokenVolume),
        sqm: Number(data.sqm)
      }] 
    })
      setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
    console.log({ addUserData })
  }, [addUserData]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form className='space-y-5 h-full mx-auto ' onSubmit={handleSubmit(saveProfile)}>
      <p className=''>Profile</p>
      <div className='w-full flex gap-4'>
        <TextField
          type='number'
          name='sqm'
          label="Square meter"
          placeholder='1342'
          control={control}
          rules={{ required: 'This filed is required' }}
        />

        <TextField
          type='number'
          name='exitingTokenVolume'
          placeholder='12400'
          label="Exitable token volume"
          control={control}
          rules={{ required: 'This filed is required' }}
        />
      </div>

      <div className='flex justify-end h-9 text-xs'>
        <button
          type='button'
          className='flex justify-center items-center border rounded-lg px-4 cursor-pointer'>
          Add new <span><Plus size={14} /></span>
        </button>
      </div>

      <div className="flex justify-end gap-x-2 mt-6">
        <Button onClick={() => setCurrentIndex(currentIndex - 1)}>
          <span className='flex gap-1.5'><ArrowLeft className='' /> Back</span>
        </Button>
        <ForwardButton type='submit' variant="dark">
          Continue
        </ForwardButton>
      </div>

    </form>
  )
}

export default Profile