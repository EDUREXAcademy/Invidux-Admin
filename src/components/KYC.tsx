"use client"
import { PenLine, UploadCloud } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button, ForwardButton } from './reusable/Buttons'
import { TextField } from './reusable/FormInput'
import { useForm } from 'react-hook-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { toast } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'
import useStore from '@/store'

type Props = {
    userData: {
        kyc: {
            level: string
            idType: string
            idNumber: string
            expiryDate: string
        }
    }
}

const KYC = ({ userData }: Props) => {
    const { control, handleSubmit } = useForm()
    const [editMode, setEditMode] = useState(false)
    const [onDrag, setOnDrag] = useState(false)
    const [files, setFiles] = useState<FileList | null>(null)


    // const store = useStore()


    // console.log(data)


    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        // console.log(file)
        setOnDrag(true)
    }
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setOnDrag(false)
        setFiles(e.dataTransfer.files);
        console.log(files)
    }

    const extractNumber = (string: string) => {
        return string?.match(/\d+/);
    }


    useEffect(() => {
        console.log(files);
    }, [files]);
    return (
        <div>
            <div className={` w-full py-10 px-4 ${!editMode ? "animate-in flex justify-between" : "animate-out hidden"}`}>
                <div className='flex flex-col gap-y-4 font-[400] w-full md:w-[80%]'>
                    <div className='flex md:justify-between'>
                        <div className='md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Registered Company Name</p>
                            <p className='text-[#838383]'>{userData?.kyc?.idType ? userData?.kyc?.idType : "-"}</p>
                        </div>
                    </div>
                    <div className='flex md:justify-between'>
                        <div className='md:min-w-28'>
                            <p className='text-sm text-[#090909]'>RC Number</p>
                            <p className='text-[#838383]'>{userData?.kyc?.idType ? userData?.kyc?.idType : "-"}</p>
                        </div>
                    </div>
                    <div className='flex md:justify-between'>
                        <div className='md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Tax Identification Number (TIN)</p>
                            <p className='text-[#838383]'>{userData?.kyc?.idType ? userData?.kyc?.idType : "-"}</p>
                        </div>
                    </div>
                    <div className='flex md:justify-between'>
                        <div className='md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Year of Incorporation</p>
                            <p className='text-[#838383]'>{userData?.kyc?.idType ? userData?.kyc?.idType : "-"}</p>
                        </div>
                    </div>
                    <div className='flex md:justify-between'>
                        <div className='md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Company Address</p>
                            <p className='text-[#838383]'>{userData?.kyc?.idType ? userData?.kyc?.idType : "-"}</p>
                        </div>
                    </div>
                    
                    <div className='flex md:justify-between'>
                        <div className='md:min-w-28'>
                            <p className='text-sm text-[#090909]'>State</p>
                            <p className='text-sm md:text-base text-[#838383]'>{userData?.kyc?.expiryDate ? userData?.kyc?.expiryDate : "-"}</p>
                        </div>
                    </div>
                    <div className='flex md:justify-between'>
                        <div className='md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Country of Operation</p>
                            <p className='text-sm md:text-base text-[#838383]'>{userData?.kyc?.expiryDate ? userData?.kyc?.expiryDate : "-"}</p>
                        </div>
                    </div>
                    <div className='flex md:justify-between'>
                        <div className='md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Company size</p>
                            <p className='text-sm md:text-base text-[#838383]'>{userData?.kyc?.expiryDate ? userData?.kyc?.expiryDate : "-"}</p>
                        </div>
                    </div>
                    <div className='flex md:justify-between'>
                        <div className='md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Company Bio</p>
                            <p className='text-sm md:text-base text-[#838383]'>{userData?.kyc?.expiryDate ? userData?.kyc?.expiryDate : "-"}</p>
                        </div>
                    </div>

                    <button className='w-full border border-black py-2 rounded-md mt-5 md:hidden' onClick={() => setEditMode(true)}>Edit Profile</button>
                </div>

                <div className='hidden text-[16px] w-[30%] md:flex gap-2 items-center h-fit cursor-pointer' onClick={() => setEditMode(true)}>
                    Edit details
                    <PenLine size={18} />
                </div>
            </div>


            <div className={`pb-10 transition-all ${editMode ? "animate-accordion-up block" : "animate-out hidden"}`}>
                <form className="flex flex-col gap-4 w-fit px-12  mx-auto mt-5">
                    {/* Level Input */}
                    <div className='opacity-50 w-fit flex flex-col gap-4'>
                        <TextField
                            name='level'
                            label="Level"
                            disabled
                            readOnly
                            placeholder="2"
                            control={control}
                        // rules={{ required: 'This filed is required' }}
                        />
                    </div>

                    {/* ID Type */}
                    <div className='mb-3'>
                        <Select defaultValue="">
                            {/* <FormControl> */}
                            <SelectTrigger className="max-w-[486px] h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
                                <SelectValue placeholder="Select ID Type" />
                            </SelectTrigger>
                            {/* </FormControl> */}
                            <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
                                <SelectItem value="passport">International Passport</SelectItem>
                                <SelectItem value="nin">NIN</SelectItem>
                                <SelectItem value="license">{"Driver's License"}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* ID Number */}
                    <TextField
                        name='idNumber'
                        label="ID Number"
                        placeholder="FKJ123456789"
                        control={control}
                    // rules={{ required: 'This filed is required' }}
                    />

                    <TextField
                        type='date'
                        name='dob'
                        label="Expiry Date"
                        placeholder=""
                        control={control}
                    // rules={{ required: 'This filed is required' }}
                    />

                    <div className="">
                        <p className='text-sm'>Upload ID Card</p>
                        <label 
                        htmlFor='uploadID' 
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                            className={`border group transition-all ${files ? " border-2 border-dashed border-green-300" : "border-[#E8E8E8]"}  max-w-[486px] h-[116px] rounded-md mt-1.5 flex items-center justify-center cursor-pointer`}>
                        <input type="file" name="uploadID" id="uploadID" hidden multiple accept='image' onChange={(e)=> setFiles(e.target.files)} />
                            {files ? (
                                <ul className='flex items-center justify-center '>
                                    <p className='text-sm mr-1 text-green-500'>Uploaded file(s):</p>
                                    {Array.from(files).map((file, index) => (
                                        <li key={file.name} className='appearance-none text-xs text-gray-500 px-0.5'>{file.name}{Array.from(files).length - 1 === index ? "" : ","}</li>
                                    ))}
                                </ul>
                            ) : (<div className='flex flex-col items-center gap-y-1'>
                                <UploadCloud color='#B1924E' className='group-hover:animate-bounce' />
                                <p>
                                    <span className='text-[#B1924E]'>Upload a file</span>
                                    {" "}or drag and drop
                                </p>
                                <p className='text-[#737373] font-[400] text-sm'>PNG, JPG, GIF upto 5MB</p>
                            </div>)}
                        </label>
                    </div>


                    <div className='flex justify-end gap-5 h-fit mt-10'>
                        <Button variant='light'>
                            Save
                        </Button>
                        <ForwardButton variant='dark'>
                            Save and Continue
                        </ForwardButton>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default KYC