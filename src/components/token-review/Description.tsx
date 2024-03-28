"use client"
import React, { useEffect, useState } from 'react'
import { useController, useForm } from 'react-hook-form'
import { ArrowLeft, Check, ChevronDown, X } from 'lucide-react'
import { Button, ForwardButton } from '../reusable/Buttons'
import { usePropertyAmenities } from '@/hooks/queries'
import useStore from '@/store'


type Props = {}

const Description = (item: Props) => {
  const { control, register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();

  const { tokenIssuanceData, setTokenIssuanceData, currentIndex, setCurrentIndex } = useStore()
  const { data: propertyAmenities, isPending: propertyAmenitiesIsPending } = usePropertyAmenities()
  const [optionArray, setOptionArray] = useState<string[]>([])
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const modal = document.getElementById('amenities');
      if (modal && !modal.contains(target)) {
        setShowOptions(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [showOptions]);

  const deleteOption = (item: string) => {
    // Check if the item is already in the coverList
    if (!optionArray.includes(item)) {
      // If not, do nothing
      return
    } else {
      // If already in the list, remove it
      const updatedList = optionArray.filter((cover: string) => cover !== item);
      setOptionArray(updatedList);
    }
  };

  const addToOptions = (item: string) => {
    // Check if the item is already in the coverList
    if (!optionArray.includes(item)) {
      // If not, create a new array with the item added
      setOptionArray([...optionArray, item]);
    } else {
      // If already in the list, remove it
      const updatedList = optionArray.filter((cover: string) => cover !== item);
      setOptionArray(updatedList);
    }
  }

  const saveDescription = (data: any) => {
    console.log({ data })
    setTokenIssuanceData({ ...tokenIssuanceData, description: { ...data, amenities: [...optionArray]} })
    if (currentIndex < 7) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    console.log({ tokenIssuanceData })
  }, [tokenIssuanceData])


  return (
    <form className='space-y-5 h-full mx-auto w-full ' onSubmit={handleSubmit(saveDescription)}>
      <div className='relative'>
        <p className='text-sm mb-1'>Amenities</p>
        <div className='relative flex items-center overflow-x-scroll'>
          <div className='border border-[#838383] w-full min-h-12 rounded-md flex flex-wrap gap-2 items-center p-2 transition cursor-pointer ' onClick={() => setShowOptions(prev => !prev)}>
            {optionArray.length < 1 && (
              <p className='text-sm text-[#838383]'>Select amenities...</p>
            )}
            {optionArray?.map((option: string, index: number) => (
              <div key={index} className='bg-[#E5E5E5] text-[#838383] rounded-md px-2 py-1 text-sm text-center flex items-center gap-1.5 transition z-50'>
                <span className='text-sm'>{option}</span>
                <span>
                  <X size={14} className='cursor-pointer hover:scale-110 hover:text-red-700 transition' onClick={() => {
                    deleteOption(option)
                    setShowOptions(prev => !prev)
                  }} />
                </span>
              </div>
            ))}
          </div>
          <ChevronDown className={`absolute right-2 transition ${showOptions && "rotate-180"}`} strokeWidth={1} onClick={() => setShowOptions(prev => !prev)} />
        </div>
        {showOptions && <ul id='amenities' className='bg-white rounded-md w-full border px-1 py-2 text-sm absolute mt-6 shadow-sm'>
          {propertyAmenities?.data?.map((item: {id: number; amenity: string}) => (
            <li
              key={item.id}
              className='hover:bg-gray-100 px-3 cursor-pointer py-2 rounded-sm flex items-center gap-2'
              onClick={() => addToOptions(item.amenity)}
            >
              <div className='w-4 '>
                {propertyAmenitiesIsPending && <p>loading...</p>}
                {optionArray?.includes(item.amenity) && <Check size={16} />}
              </div>
              <span>{item.amenity}</span>
            </li>
          ))}
        </ul>}
        <p className='text-[#6A6A6A] text-sm mt-1'>You can select up to 5 amenities</p>
        {/* </div> */}
      </div>
            
      <div>
        <textarea
          {...register('propertyDescription', { required: true })} // Register the textarea with required validation
          className="w-full border border-[#838383] rounded-md p-2 outline-none"
          rows={5}
          placeholder="Enter text here..."
        />
        {errors.propertyDescription && <p className="text-red-500 text-xs">This field is required.</p>}
      </div>
      {/* </div> */}

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

export default Description