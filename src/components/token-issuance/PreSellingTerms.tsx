"use client"
import React, { useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { TextField } from '../reusable/FormInput'
import { useForm } from 'react-hook-form'
import useStore from '@/store'
import { Button, ForwardButton } from '../reusable/Buttons'
import { ArrowLeft } from 'lucide-react'

type Props = {}

const PreSellingTerms = (props: Props) => {
  const { control, handleSubmit, setValue, getValues } = useForm();

  const { tokenIssuanceData, setTokenIssuanceData, currentIndex, setCurrentIndex } = useStore()

  const handleCallFrequencyChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('callFrequency', value);
  };
  const handleMinPledgeChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('minimumPledgeDeposit', value);
  };
  const handleTotalPledgeChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('totalPledgeCap', value);
  };

  const savePreSellingTerms = (data: any) => {
    console.log({ data })
    setTokenIssuanceData({ 
      ...tokenIssuanceData, 
      presellTerms: { 
        ...data,
        minimumPledgeDeposit: Number(data.minimumPledgeDeposit),
        totalPledgeCap: Number(data.totalPledgeCap)
      } 
    })
    // if (currentIndex < 7) {
      setCurrentIndex(currentIndex + 1)
    // }
  }

  useEffect(() => {
    console.log({ tokenIssuanceData })
  }, [tokenIssuanceData])

  return (
    <form className='space-y-5 h-full mx-auto ' onSubmit={handleSubmit(savePreSellingTerms)}>
      <TextField
        type='number'
        name='minimumPledgeDeposit'
        label="Minimum pledge deposit"
        control={control}
        variant='xlong'
        placeholder='10%'
      // rules={{ required: 'This filed is required' }}
      />
      <div>
        <Select name='totalPledgeCap' onValueChange={handleTotalPledgeChange} >
          {/* <FormControl> */}
          <label htmlFor="totalPledgeCap" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Total pledge cap</label>
          <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
            <SelectValue placeholder="Select Total pledge cap" />
          </SelectTrigger>
          {/* </FormControl> */}
          <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
            {/* {employmentData?.data?.status?.map((status: string, index: number) => (
              <SelectItem key={index} value={status}>{status}</SelectItem>
            ))} */}
            <SelectItem value={"20"}>20%</SelectItem>
            <SelectItem value={"50"}>50%</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* <div>
        <Select name='callFrequency' onValueChange={handleCallFrequencyChange}>
          <label htmlFor="callFrequency" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Call frequency</label>
          <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
            <SelectValue placeholder="Select Call frequency" />
          </SelectTrigger>
          <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
            <SelectItem value={"Monthly"}>Monthly</SelectItem>
            <SelectItem value={"Quarterly"}>Quarterly</SelectItem>
            <SelectItem value={"Yearly"}>Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div> */}
      <TextField
        type='date'
        name='firstCallDate'
        label="First Call Date"
        control={control}
        variant='xlong'
      // rules={{ required: 'This filed is required' }}
      />

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

export default PreSellingTerms