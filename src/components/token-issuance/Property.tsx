"use client"
import React, { useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { TextField } from '../reusable/FormInput'
import { useForm } from 'react-hook-form'
import useStore from '@/store'
import { Button, ForwardButton } from '../reusable/Buttons'
import moment from 'moment'
import { ArrowLeft } from 'lucide-react'


type Props = {}

const Property = (props: Props) => {
  const { control, handleSubmit, setValue, getValues } = useForm();

  const { tokenIssuanceData, setTokenIssuanceData, currentIndex, setCurrentIndex } = useStore()

  const handleCurrencyChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('currency', value);
  };
  const saveProperty = (data: any) => {
    console.log({ data })
    setTokenIssuanceData({ 
      ...tokenIssuanceData, 
      property: { 
        ...data,
        annualReturnEstimate: Number(data.annualReturnEstimate),
        appreciationEstimate: Number(data.appreciationEstimate),
        dealersMinimumSubscriptionUnit: Number(data.dealersMinimumSubscriptionUnit),
        issuePrice: Number(data.issuePrice),
        issueRetainedToken: Number(data.issueRetainedToken),
        minimumSubscriptionUnit: Number(data.minimumSubscriptionUnit),
        propertyValue: Number(data.propertyValue),
        totalTokenVolume: Number(data.totalTokenVolume),
      } 
    })
    // if (currentIndex < 7) {
      setCurrentIndex(currentIndex + 1)
    // }
  }

  var today = moment().format("YYYY-MM-DD");


  useEffect(() => {
    console.log({ tokenIssuanceData })
  }, [tokenIssuanceData])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form className='space-y-5 h-full mx-auto ' onSubmit={handleSubmit(saveProperty)}>
      <TextField
      type='number'
        name='propertyValue'
        label="Property Value"
        control={control}
        variant="xlong"
        placeholder='₦394,600.32'
        rules={{ required: 'This filed is required' }}
      />
      <TextField
        type='number'
        name='totalTokenVolume'
        label="Total Token Volume"
        control={control}
        variant="xlong"
        placeholder='34,444.01'
        // helperText='Issued Price: ₦500.00'
        rules={{ required: 'This filed is required' }}
      />


      <div className='w-full flex gap-4'>
        <TextField
          type='date'
          name='openHouseDate'
          label="Open House Date"
          control={control}
          placeholder='12/2/2024'
          min={today}
          rules={{ required: 'This filed is required' }}
        />

        {/* Cool Off Date Input */}
        <TextField
          type='date'
          name='coolOffExpiresAt'
          label="Cool Off Date"
          control={control}
          min={today}
        // rules={{ required: 'This filed is required' }}
        />
      </div>


      <div className='w-full flex gap-4'>
        <TextField
          type='number'
          name='issuePrice'
          label="Price"
          control={control}
          variant='xlong'
          placeholder='0'
          rules={{ required: 'This filed is required' }}
        />

        {/* Last Name Input */}
        <div className='w-full'>
          <Select name='currency' onValueChange={handleCurrencyChange} >
            {/* <FormControl> */}
            <label htmlFor="currency" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Currency</label>
            <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] w-full flex-shrink-0">
              <SelectValue placeholder="Select Currency" />
            </SelectTrigger>
            {/* </FormControl> */}
            <SelectContent className='appearance-none outline-none focus-within:appearance-none flex-shrink-0'>
              {/* {employmentData?.data?.status?.map((status: string, index: number) => (
              // <SelectItem key={index} value={status}>{status}</SelectItem>
            ))} */}
              <SelectItem value={"Naira"}>₦ - Naira</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='w-full flex gap-4'>
        <TextField
          type='date'
          name='issueStartsAt'
          label="Issuance Start Date"
          control={control}
          placeholder='12/2/2024'
          min={today}
          rules={{ required: 'This filed is required' }}
        />

        {/* Last Name Input */}
        <TextField
          type='date'
          name='issueExpiresAt'
          label="Issuance End Date"
          control={control}
          placeholder='12/2/2024'
          min={today}
          rules={{ required: 'This filed is required' }}
        />
      </div>

      <TextField
        type='date'
        name='dealingExpiresAt'
        label="Dealing End Date"
        control={control}
        variant="xlong"
        placeholder='12/2/2024'
        min={today}
        rules={{ required: 'This filed is required' }}
      />
      <TextField
        type='number'
        name='dealersMinimumSubscriptionUnit'
        label="Dealer Subscription Unit"
        control={control}
        variant='xlong'
        rules={{ required: 'This filed is required' }}
      />

      <TextField
        type='date'
        name='lockdownExpiresAt'
        label="Lockdown Date"
        control={control}
        variant='xlong'
        min={today}
        rules={{ required: 'This filed is required' }}
      />
      <TextField
        type='number'
        name='minimumSubscriptionUnit'
        label="Minimum Subscription Unit"
        control={control}
        variant='xlong'
        placeholder='10'
        rules={{ required: 'This filed is required' }}
      />
      <TextField
        type='number'
        name='issueRetainedToken'
        label="Issuer Retained Token %"
        control={control}
        variant='xlong'
        placeholder='45%'
        rules={{ required: 'This filed is required' }}
      />
      <TextField
        type='number'
        name='annualReturnEstimate'
        label="Annual Returns Estimate"
        control={control}
        variant='xlong'
        placeholder='20%'
        rules={{ required: 'This filed is required' }}
      />
      <TextField
        type='number'
        name='appreciationEstimate'
        label="Annual Appreciation Estimate"
        control={control}
        variant='xlong'
      // rules={{ required: 'This filed is required' }}
      />
      <TextField
        name='videoLink'
        label="Video Link"
        control={control}
        variant='xlong'
        placeholder='https://youtube.com/syuijndsd'
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

export default Property