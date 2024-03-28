import React, { useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useInvestmentTypes, useListingStatus, usePropertyClass } from '@/hooks/queries'
import { useForm } from 'react-hook-form'
import { ForwardButton } from '../reusable/Buttons'
import useStore from '@/store'

type Props = {}

const TokenType = (props: Props) => {

  const { data: listingStatus, isPending: listingStatusIsPending } = useListingStatus()
  // const { data: propertyClass, isPending: propertyClassIsPending } = usePropertyClass()
  const { data: investmentType, isPending: investmentTypeIsPending } = useInvestmentTypes()
  const { control, handleSubmit, setValue, getValues } = useForm()

  const { tokenIssuanceData, setTokenIssuanceData, currentIndex, setCurrentIndex } = useStore()

  const handleInvestmentType = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('investmentType', value); 
  };
  const handleListingStatus = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('listingStatus', value); 
  };
  // const handlePropertyClass = (value: any) => {
  //   if (!value) {
  //     console.error("Event object or event target is undefined.");
  //     return;
  //   }
  //   setValue('propertyClass', value); 
  // };

  const saveTokenType = (data: any) => {
    console.log({data})
    setTokenIssuanceData({...tokenIssuanceData, tokenType: {...data}})
      setCurrentIndex(currentIndex + 1)
  }

  
  useEffect(() => {
    console.log({tokenIssuanceData})
  }, [tokenIssuanceData])
  
  return (
    <form className='space-y-5 h-full mx-auto ' onSubmit={handleSubmit(saveTokenType)}>
      <div>
        <Select name='listingStatus' onValueChange={handleListingStatus} >
          {/* <FormControl> */}
          <label htmlFor="listingStatus" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Listing Status</label>
          <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
            <SelectValue placeholder="Select Lisiting Status" />
          </SelectTrigger>
          {/* </FormControl> */}
          <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
            {listingStatus?.data?.filter((item: { status: string }) => item?.status == "Off-Plan" || item?.status == "Selling" || item?.status == "Wait-listed") 
            .map((item: { status: string, id: number }) => (
              <SelectItem key={item?.id} value={item?.status}>{item?.status}</SelectItem>
            ))}
            {/* {<SelectItem key={item?.id} value={item?.status}>{item?.status}</SelectItem>} */}

          </SelectContent>
        </Select>
      </div>
      {/* <div>
        <Select name='propertyClass' onValueChange={handlePropertyClass}>
          <label htmlFor="" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Property Class</label>
          <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
            <SelectValue placeholder="Select Property Class" />
          </SelectTrigger>
          <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
            {propertyClass?.data?.map((item: { class: string, id: number }) => (
              <SelectItem key={item?.id} value={item?.class}>{item?.class}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div> */}
      <div>
        <Select name='investmentType' onValueChange={handleInvestmentType}>
          {/* <FormControl> */}
          <label htmlFor="investmentType" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Investment Type</label>
          <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
            <SelectValue placeholder="Select Investment Type" />
          </SelectTrigger>
          {/* </FormControl> */}
          <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
            {investmentType?.data?.map((item: { type: string, id: number }) => (
              <SelectItem key={item?.id} value={item?.type}>{item?.type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* <TextField
        name='projectionLink'
        label="Financial Projection Link"
        control={control}
        variant='xlong'
        placeholder='https://drive.google.com/syuijndsd'
      // rules={{ required: 'This filed is required' }}
      /> */}

      <div className="flex justify-end gap-x-2 mt-6">
        <ForwardButton type='submit' variant="dark">
          Continue
        </ForwardButton>
      </div>
    </form>
  )
}

export default TokenType