"use client"
import React, { useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useForm } from 'react-hook-form'
import { ArrowLeft, Plus } from 'lucide-react'
import useStore from '@/store'
import { useUnitTypes } from '@/hooks/queries'
import { TextField } from '@/components/reusable/FormInput'
import { Button, ForwardButton } from '@/components/reusable/Buttons'


type Props = {}

const Contact = (props: Props) => {
  const { control, handleSubmit, setValue, getValues } = useForm();

  const { tokenIssuanceData, setTokenIssuanceData, currentIndex, setCurrentIndex } = useStore()
  const {data: unitTypes, isPending} = useUnitTypes()

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

  const savePropertyDetails = (data: any) => {
    console.log({ data })
    setTokenIssuanceData({ 
      ...tokenIssuanceData, 
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
    console.log({ tokenIssuanceData })
  }, [tokenIssuanceData])

  return (
    <form className='space-y-5 h-full mx-auto ' onSubmit={handleSubmit(savePropertyDetails)}>
      <p className=''>Property Units</p>

      <div className='w-full flex gap-4'>
        <div className='w-full'>
          <Select name='unitType' onValueChange={handleUnitTypesChange} >
            {/* <FormControl> */}
            <label htmlFor="unitType" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Unit type</label>
            <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] w-full flex-shrink-0">
              <SelectValue placeholder="Select Unit type" />
            </SelectTrigger>
            {/* </FormControl> */}
            <SelectContent className='appearance-none outline-none focus-within:appearance-none flex-shrink-0'>
              {unitTypes?.data?.map((unit: {name: string, id: number}) => (
              <SelectItem key={unit.id} value={unit.name}>{unit.name}</SelectItem>
            ))}
            </SelectContent>
          </Select>
        </div>

        <div className='w-full'>
          <Select name='noOfBedrooms' onValueChange={handleBedroomsChange}>
            {/* <FormControl> */}
            <label htmlFor="noOfBedrooms" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Bedrooms</label>
            <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] w-full flex-shrink-0">
              <SelectValue placeholder="Select Bedrooms" />
            </SelectTrigger>
            {/* </FormControl> */}
            <SelectContent className='appearance-none outline-none focus-within:appearance-none flex-shrink-0'>
              {/* {employmentData?.data?.status?.map((status: string, index: number) => (
              // <SelectItem key={index} value={status}>{status}</SelectItem>
            ))} */}
              <SelectItem value={"1"}>1</SelectItem>
              <SelectItem value={"2"}>2</SelectItem>
              <SelectItem value={"3"}>3</SelectItem>
              <SelectItem value={"4"}>4</SelectItem>
              <SelectItem value={"5"}>5</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>


      <div className='w-full flex gap-4'>
        <div className='w-full'>
          <Select name='noOfToilets' onValueChange={handleToiletsChange} >
            {/* <FormControl> */}
            <label htmlFor="noOfToilets" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Toilets</label>
            <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] w-full flex-shrink-0">
              <SelectValue placeholder="Select Toilets" />
            </SelectTrigger>
            {/* </FormControl> */}
            <SelectContent className='appearance-none outline-none focus-within:appearance-none flex-shrink-0'>
              {/* {employmentData?.data?.status?.map((status: string, index: number) => (
              // <SelectItem key={index} value={status}>{status}</SelectItem>
            ))} */}
              <SelectItem value={"1"}>1</SelectItem>
              <SelectItem value={"2"}>2</SelectItem>
              <SelectItem value={"3"}>3</SelectItem>
              <SelectItem value={"4"}>4</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='w-full'>
          <Select name='noOfLivingRooms' onValueChange={handleLivingRoomsChange} >
            {/* <FormControl> */}
            <label htmlFor="noOfLivingRooms" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Living rooms</label>
            <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] w-full flex-shrink-0">
              <SelectValue placeholder="Select Living rooms" />
            </SelectTrigger>
            {/* </FormControl> */}
            <SelectContent className='appearance-none outline-none focus-within:appearance-none flex-shrink-0'>
              {/* {employmentData?.data?.status?.map((status: string, index: number) => (
              // <SelectItem key={index} value={status}>{status}</SelectItem>
            ))} */}
              <SelectItem value={"1"}>1</SelectItem>
              <SelectItem value={"2"}>2</SelectItem>
              <SelectItem value={"3"}>3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>


      <div className='w-full flex gap-4'>
        <div className='w-full'>
          <Select name='fittedKitchen' onValueChange={handleFittedKitchenChange}>
            {/* <FormControl> */}
            <label htmlFor="fittedKitchen" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Fitted Kitchen?</label>
            <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] w-full flex-shrink-0">
              <SelectValue placeholder="Select Fitted Kitchen?" />
            </SelectTrigger>
            {/* </FormControl> */}
            <SelectContent className='appearance-none outline-none focus-within:appearance-none flex-shrink-0'>
              {/* {employmentData?.data?.status?.map((status: string, index: number) => (
              // <SelectItem key={index} value={status}>{status}</SelectItem>
            ))} */}
              <SelectItem value={"Yes"}>Yes</SelectItem>
              <SelectItem value={"No"}>No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='w-full'>
          <Select name='furnishing' onValueChange={handleFurnishingChange}>
            {/* <FormControl> */}
            <label htmlFor="furnishing" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Furnishing?</label>
            <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] w-full flex-shrink-0">
              <SelectValue placeholder="Select Furnishing" />
            </SelectTrigger>
            {/* </FormControl> */}
            <SelectContent className='appearance-none outline-none focus-within:appearance-none flex-shrink-0'>
              {/* {employmentData?.data?.status?.map((status: string, index: number) => (
              // <SelectItem key={index} value={status}>{status}</SelectItem>
            ))} */}
              <SelectItem value={"Fully Furnish"}>Fully Furnished</SelectItem>
              <SelectItem value={"Partially Furnish"}>Partially Furnished</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

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

export default Contact