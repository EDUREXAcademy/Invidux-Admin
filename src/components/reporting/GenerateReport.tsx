import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { ForwardButton } from '../reusable/Buttons'
import { TextField } from '../reusable/FormInput'
import { useForm } from 'react-hook-form'

type Props = {}

const GenerateReport = (props: Props) => {

  const { control, handleSubmit, setValue, getValues } = useForm()
  return (
    <form className={`py-10 transition-all space-y-7 h-full mx-auto max-w-[400px] `}>
      <div>
        <Select name='employmentStatus' onValueChange={(value: any)=> alert(value)}>
          {/* <FormControl> */}
          <label htmlFor="employment" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Report Type</label>
          <SelectTrigger className="max-w-[486px] h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
            <SelectValue placeholder="Select Report Type" />
          </SelectTrigger>
          {/* </FormControl> */}
          <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
            <SelectItem value="stock">Stock Report</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='flex justify-between gap-3'>
        <TextField
          type='date'
          name='fromDate'
          label="From"
          placeholder=""
          control={control}
        // rules={{ required: 'This filed is required' }}
        />
        <TextField
          type='date'
          name='toDate'
          label="To"
          placeholder=""
          control={control}
        // rules={{ required: 'This filed is required' }}
        />
      </div>
      <div>
        <Select name='format' onValueChange={(value: any) => alert(value)}>
          {/* <FormControl> */}
          <label htmlFor="employment" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Export Format</label>
          <SelectTrigger className="max-w-[486px] h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
            <SelectValue placeholder="Select Export Format" />
          </SelectTrigger>
          {/* </FormControl> */}
          <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
            <SelectItem value="csv">CSV</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='flex justify-end'>
        <ForwardButton variant='dark' >
          Export report
        </ForwardButton>
      </div>
    </form>
  )
}

export default GenerateReport