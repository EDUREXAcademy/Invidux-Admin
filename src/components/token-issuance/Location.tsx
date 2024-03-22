"use client"
import React, { useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { TextField } from '../reusable/FormInput'
import { useForm } from 'react-hook-form'
import useStore from '@/store'
import { useCountries } from '@/hooks/queries'
import { Button, ForwardButton } from '../reusable/Buttons'
import { ArrowLeft } from 'lucide-react'


type Props = {}

const Location = (props: Props) => {
  const { control, handleSubmit, setValue, getValues } = useForm();
  const { data: countries, isPending: countryIsPending } = useCountries();

  const { tokenIssuanceData, setTokenIssuanceData, currentIndex, setCurrentIndex } = useStore()

  const handleCountryChange = (value: any) => {
    if (!value) {
      console.error("Event object or event target is undefined.");
      return;
    }
    setValue('countryId', value);
  };

  const saveLocation = (data: any) => {
    console.log({ data })
    setTokenIssuanceData({ ...tokenIssuanceData, location: { ...data, countryId: Number(data.countryId) } })
    setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
    console.log({ tokenIssuanceData })
  }, [tokenIssuanceData])

  return (
    <form className='space-y-5 h-full mx-auto ' onSubmit={handleSubmit(saveLocation)}>
      <div>
        <Select name='countryId' onValueChange={handleCountryChange} >
          {/* <FormControl> */}
          <label htmlFor="countryId" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Country</label>
          <SelectTrigger className="h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          {/* </FormControl> */}
          <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
            {countries?.data?.map((country: any) => (
              <SelectItem key={country.id} value={`${country.id}`}>
                {country.name}
              </SelectItem>
            ))}
            {countryIsPending && <SelectItem value="loading">loading...</SelectItem>}
          </SelectContent>
        </Select>
      </div>


      <TextField
        name='state'
        label="State"
        control={control}
        variant="xlong"
        placeholder='Lagos'
        rules={{ required: 'This filed is required' }}
      />
      <TextField
        name='city'
        label="City"
        control={control}
        variant="xlong"
        placeholder='Ikeja'
        rules={{ required: 'This filed is required' }}
      />
      <TextField
        name='lga'
        label="LGA"
        control={control}
        variant="xlong"
        placeholder='Ikeja Local Government'
      // rules={{ required: 'This filed is required' }}
      />
      <TextField
        name='area'
        label="Area"
        control={control}
        variant="xlong"
        placeholder='Airport way'
      // rules={{ required: 'This filed is required' }}
      />
      <TextField
        name='estate'
        label="Estate"
        control={control}
        variant="xlong"
        placeholder='Estate name'
      // rules={{ required: 'This filed is required' }}
      />

      <div className='w-full flex gap-4'>
        <TextField
          name='streetName'
          label="Street Name"
          control={control}
          placeholder='ABC avenue'
          rules={{ required: 'This filed is required' }}
        />

        {/* Last Name Input */}
        <TextField
          name='houseNumber'
          label="House Number"
          control={control}
          placeholder='00'
          rules={{ required: 'This filed is required' }}
        />
      </div>

      <div className="flex justify-end gap-x-2 mt-6">
        <Button onClick={() => setCurrentIndex(currentIndex - 1)}>
          <span className='flex gap-1.5'>
            <ArrowLeft className='' /> Back
          </span>
        </Button>
        <ForwardButton type='submit' variant="dark">
          Continue
        </ForwardButton>
      </div>

    </form>
  )
}

export default Location