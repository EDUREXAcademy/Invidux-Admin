"use client"
import { Eye, PenLine } from 'lucide-react'
import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button, ForwardButton } from './reusable/Buttons'
import { useForm } from 'react-hook-form'
import { useUpdateIncomeInfo } from '@/hooks/mutations'

type Props = {
    userData: {
        income: {
            incomeRange: string;
            employmentStatus: string;
            jobSector: string;
        }
    }
}

const Income = ({ userData }: Props) => {
    const { control, handleSubmit, setValue, getValues } = useForm()
    const [editMode, setEditMode] = useState(false)
    const { mutate, isPending } = useUpdateIncomeInfo();


    const handleEmploymentChange = (value: any) => {
        if (!value) {
            console.error("Event object or event target is undefined.");
            return;
        }
        setValue('employmentStatus', value); // Update the value of the 'relationship' field in the form
    };

    const handleIncomeChange = (value: any) => {
        if (!value) {
            console.error("Event object or event target is undefined.");
            return;
        }
        setValue('incomeRange', value); // Update the value of the 'relationship' field in the form
    };

    const handleSectorChange = (value: any) => {
        if (!value) {
            console.error("Event object or event target is undefined.");
            return;
        }
        setValue('jobSector', value); // Update the value of the 'relationship' field in the form
    };

    const updateContact = async (data: any) => {
        // alert(JSON.stringify(data, null, 2))
        const incomeRange = getValues("incomeRange");
        const employmentStatus = getValues("employmentStatus");
        const jobSector = getValues("jobSector");
        mutate({
            incomeRange,
            employmentStatus,
            jobSector
        });
        setEditMode(false)
    };
    return (
        <div className='h-[calc(100vh) '>
            <div className={`flex justify-between w-full py-4 md:py-10 px-4 ${!editMode ? "animate-in flex justify-between" : "animate-out hidden"}`}>
                <div className='flex flex-col gap-y-4 font-[400] w-full md:w-[80%]'>
                    <div className='flex md:justify-between'>
                        <div className='w-1/2 md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Employment Status</p>
                            <p className='text-[#838383]'>{userData?.income?.employmentStatus ? userData?.income?.employmentStatus : "-"}</p>
                        </div>
                        <div className='w-1/2 md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Work Sector</p>
                            <p className='text-[#838383]'>{userData?.income?.employmentStatus ? userData?.income?.jobSector : "-"}</p>
                        </div>
                    </div>
                    <div className='flex md:justify-between'>
                        <div className='w-1/2 md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Monthly Income Range</p>
                            <p className='text-[#838383]'>{userData?.income?.incomeRange ? userData?.income?.incomeRange : "-"}</p>
                        </div>
                        <div className='w-1/2 md:min-w-28'>
                            <p className='text-sm text-red-500'>BVN</p>
                            <div className='flex gap-1'>
                                <span className='text-[#838383] h-fit'>**********</span>
                                <Eye size={14} className='mt-[2px] cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <button className='w-full border border-black py-2 rounded-md mt-5 md:hidden'>Edit Profile</button>
                </div>

                <div className='hidden text-[16px] w-[30%] md:flex gap-2 items-center h-fit cursor-pointer' onClick={()=> setEditMode(true)}>
                    Edit details
                    <PenLine size={18} />
                </div>
            </div>
            <form className={`py-10 transition-all space-y-5 h-full mx-auto max-w-[486px] ${editMode ? "animate-accordion-up block" : "animate-out hidden"}`} onSubmit={handleSubmit(updateContact)}>
                <div>
                    <Select defaultValue={userData?.income?.employmentStatus} name='employmentStatus' onValueChange={handleEmploymentChange}>
                        {/* <FormControl> */}
                        <label htmlFor="employment" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Employment Status</label>
                        <SelectTrigger className="max-w-[486px] h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
                            <SelectValue placeholder="Select Employment Status" />
                        </SelectTrigger>
                        {/* </FormControl> */}
                        <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
                            <SelectItem value="employed">Employed</SelectItem>
                            <SelectItem value="unemployed">Unemployed</SelectItem>
                            <SelectItem value="self-employed">Self-Employed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Select defaultValue={userData?.income?.jobSector} name='jobSector' onValueChange={handleSectorChange}>
                        {/* <FormControl> */}
                        <label htmlFor="sector" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Work Sector</label>
                        <SelectTrigger className="max-w-[486px] h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
                            <SelectValue placeholder="Select Work Sector" />
                        </SelectTrigger>
                        {/* </FormControl> */}
                        <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
                            <SelectItem value="banking">Banking</SelectItem>
                            <SelectItem value="it">IT</SelectItem>
                            <SelectItem value="health">Health</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Select defaultValue={userData?.income?.incomeRange} name='incomeRange' onValueChange={handleIncomeChange}>
                        {/* <FormControl> */}
                        <label htmlFor="income" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Monthly Income Range</label>
                        <SelectTrigger className="max-w-[486px] h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
                            <SelectValue placeholder="Select Income Range" />
                        </SelectTrigger>
                        {/* </FormControl> */}
                        <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
                            <SelectItem value="$500,000,000 - $1,000,000,000">$500,000,000 - $1,000,000,000</SelectItem>
                            <SelectItem value="$1,000,000,000 - $2,000,000,000">$1,000,000,000 - $2,000,000,000</SelectItem>
                            <SelectItem value="$2,000,000,000 - $3,000,000,000">$2,000,000,000 - $3,000,000,000</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className='flex justify-end gap-5 mt-auto h-fit max-w-[486px]'>
                    <Button variant='light'>
                        Save
                    </Button>
                    <ForwardButton variant='dark' type='submit'>
                        Save and Continue
                    </ForwardButton>
                </div>

            </form>
        </div>
    )
}

export default Income