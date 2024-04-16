"use client"
import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { TextField } from '../reusable/FormInput'
import { useForm } from 'react-hook-form'
import useStore from '@/store'
import { Button, ForwardButton } from '../reusable/Buttons'
import moment from 'moment'
import { ArrowLeft } from 'lucide-react'
import { NumericFormat } from 'react-number-format'
import CustomNumericInput from '../reusable/FormattedNumberInput'
import FormattedNumericInput from '../reusable/FormattedNumberInput'


type Props = {}

const Property = (props: Props) => {
  const { control, handleSubmit, setValue, getValues, watch, register, formState: { errors } } = useForm();
  const [volume, setVolume] = useState<any>("")
  const [propertyValue, setPropertyValue] = useState<any>("")
  const [issuePrice, setIssuePrice] = useState<number | null>(null);

  const { tokenIssuanceData, setTokenIssuanceData, currentIndex, setCurrentIndex } = useStore()
  const volumeWatch = watch('totalTokenVolume')
  const propertyValueWatch = watch('propertyValue')

  const handleCurrencyChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('currency', value);
  };

  useEffect(() => {
    setVolume(volumeWatch);
  }, [volumeWatch]);

  useEffect(() => {
    setPropertyValue(propertyValueWatch);
  }, [propertyValueWatch]);

  // console.log(volumeWatch)
  // console.log({propertyValueWatch})

  const saveProperty = (data: any) => {
    console.log({ data })
    setTokenIssuanceData({
      ...tokenIssuanceData,
      property: {
        ...data,
        annualReturnEstimate: Number(data.annualReturnEstimate),
        appreciationEstimate: Number(data.appreciationEstimate),
        dealersMinimumSubscriptionUnit: Number(data.dealersMinimumSubscriptionUnit),
        // issuePrice: Number(issuePrice),
        issueRetainedToken: Number(data.issueRetainedToken),
        minimumSubscriptionUnit: Number(data.minimumSubscriptionUnit),
        propertyValue: Number(data.propertyValue),
        totalTokenVolume: Number(data.totalTokenVolume),
      }
    })
    if (tokenIssuanceData?.tokenType?.listingStatus !== "Selling") {
      setCurrentIndex(currentIndex + 1)
    }
    else {
      setCurrentIndex(currentIndex + 2)
      setTokenIssuanceData({
        ...tokenIssuanceData,
        property: {
        ...data,
        annualReturnEstimate: Number(data.annualReturnEstimate),
        appreciationEstimate: Number(data.appreciationEstimate),
        dealersMinimumSubscriptionUnit: Number(data.dealersMinimumSubscriptionUnit),
        // issuePrice: Number(issuePrice),
        issueRetainedToken: Number(data.issueRetainedToken),
        minimumSubscriptionUnit: Number(data.minimumSubscriptionUnit),
        propertyValue: Number(data.propertyValue),
        totalTokenVolume: Number(data.totalTokenVolume),
      },
        presellTerms: null
      })
    }
  }

  var today = moment().format("YYYY-MM-DD");


  const calculateIssuePrice = () => {
    const parsedPropertyValue = parseFloat(propertyValue);
    const parsedVolume = parseFloat(volume);

    if (!isNaN(parsedPropertyValue) && !isNaN(parsedVolume) && parsedVolume !== 0) {
      const calculatedIssuePrice = parsedPropertyValue / parsedVolume;
      setIssuePrice(calculatedIssuePrice);
    } else {
      // Handle invalid input or division by zero
      setIssuePrice(null);
    }
  };

  // Call calculateIssuePrice whenever propertyValue or volume changes
  useEffect(() => {
    calculateIssuePrice();
  }, [propertyValue, volume]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log({ tokenIssuanceData })
  }, [tokenIssuanceData])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (errors.dealingExpiresAt) {
    console.log(errors?.dealingExpiresAt?.message)
  }
  return (
    <form className='space-y-5 h-full mx-auto ' onSubmit={handleSubmit(saveProperty)}>
      <div className="w-full">
        <label htmlFor="propertyValue" className="block text-sm font-normal mb-1 leading-tight">Property Value</label>
        <NumericFormat
          id="propertyValue"
          {...register("propertyValue")}
          className="inline-flex justify-start items-center gap-2 w-full h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 text-base font-normal leading-normal appearance-none outline-none focus:bg-white disabled:opacity-50 disabled:hover:cursor-not-allowed"
          prefix="₦"
          thousandSeparator=","
          placeholder="₦1,000"
          onValueChange={(values, sourceInfo) => {
            console.log(values, sourceInfo);
            setValue("propertyValue", values.value)
          }
          }
        />
      </div>
      <div className="w-full">
        <label htmlFor="totalTokenVolume" className="block text-sm font-normal mb-1 leading-tight">Total Token Volume</label>
        <NumericFormat
          id="totalTokenVolume"
          {...register("totalTokenVolume")}
          className="inline-flex justify-start items-center gap-2 w-full h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 text-base font-normal leading-normal appearance-none outline-none focus:bg-white disabled:opacity-50 disabled:hover:cursor-not-allowed"
          thousandSeparator=","
          placeholder="1,000"
          onValueChange={(values, sourceInfo) => {
            console.log(values, sourceInfo);
            setValue("totalTokenVolume", values.value)
          }
          }
        />
        <p className='text-xs text-[#B1924E] mt-1'>{issuePrice !== null ? `Issued Price: ₦${issuePrice?.toLocaleString()}` : ""}</p>
      </div>
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
        <FormattedNumericInput
          label="Cool-Off Days"
          name="coolOffExpiresAt"
          placeholder="01 days"
          suffix=" days"
          thousandSeparator=","
          register={register}
          setValue={setValue}
          errors={errors}
        />
      </div>
      <div className='w-full flex gap-4'>
        {/* Currency Change  Select */}
        <div className='w-full'>
          <Select name='currency' onValueChange={handleCurrencyChange} >
            {/* <FormControl> */}
            <label htmlFor="currency" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Currency</label>
            <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] w-full flex-shrink-0">
              <SelectValue placeholder="Select Currency" />
            </SelectTrigger>
            {/* </FormControl> */}
            <SelectContent className='appearance-none outline-none focus-within:appearance-none flex-shrink-0'>
              <SelectItem value={"NGN"}>₦ - Naira</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* <div className='w-full flex gap-4'>
        <TextField
          type='date'
          name='issueStartsAt'
          label="Issuance Start Date"
          control={control}
          placeholder='12/2/2024'
          min={today}
          rules={{ required: 'This filed is required' }}
        />
        <FormattedNumericInput
          label="Issuance Open Days"
          name="issueExpiresAt"
          placeholder="5 days"
          suffix=" days"
          thousandSeparator=","
          register={register}
          setValue={setValue}
          errors={errors}
          required='true'
        />
      </div> */}
      {/* <FormattedNumericInput
        label="Dealing Days"
        name="dealingExpiresAt"
        placeholder="5 days"
        suffix=" days"
        thousandSeparator=","
        register={register}
        setValue={setValue}
        errors={errors}
        required='true'
      />
      <TextField
        type='number'
        name='dealersMinimumSubscriptionUnit'
        label="Dealer Subscription Unit"
        control={control}
        variant='xlong'
        placeholder='20'
        rules={{ required: 'This filed is required' }}
      /> 
      <FormattedNumericInput
        label="Lockdown Days"
        name="lockdownExpiresAt"
        placeholder="5 days"
        suffix=" days"
        thousandSeparator=","
        register={register}
        setValue={setValue}
        errors={errors}
        required='true'
      /> */}
      <TextField
        type='number'
        name='minimumSubscriptionUnit'
        label="Minimum Subscription Unit"
        control={control}
        variant='xlong'
        placeholder='10'
        rules={{ required: 'This filed is required' }}
      />
      <FormattedNumericInput
        label="Issuer Retained Token %"
        name="issueRetainedToken"
        placeholder="5%"
        suffix="%"
        register={register}
        setValue={setValue}
        errors={errors}
        required='true'
      />
      <FormattedNumericInput
        label="Annual Returns Estimate"
        name="annualReturnEstimate"
        placeholder="5%"
        suffix="%"
        register={register}
        setValue={setValue}
        errors={errors}
        required='true'
      />
      <FormattedNumericInput
        label="Annual Appreciation Estimate"
        name="appreciationEstimate"
        placeholder="5%"
        suffix="%"
        register={register}
        setValue={setValue}
        errors={errors}
        required='true'
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