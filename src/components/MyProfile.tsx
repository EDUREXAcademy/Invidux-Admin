"use client"
import { PenLine } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { TextField } from './reusable/FormInput'
import { useForm, useWatch } from 'react-hook-form'
import { Button, ForwardButton } from './reusable/Buttons'
import SelectInput from './reusable/SelectInput'
import { toast } from 'react-toastify'
import { useUpdatePersonalInfo } from '@/hooks/mutations'
import { formatDate, formatForDateType } from '@/lib/utils'
import { useRouter } from 'next/navigation'

type Props = {
    userData: {
        userName: string
        personalInfo: {
            firstName: string
            lastName: string
            middleName: string
            dob: string
            gender: string
            maritalStatus: string
        }
    }
}

type UpdateDateType = {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    gender: string;
    maritalStatus: string;
}

const MyProfile = ({ userData }: Props) => {
    const { control, handleSubmit, setValue, getValues } = useForm()
    const { mutate, isPending } = useUpdatePersonalInfo();
    const [editMode, setEditMode] = useState(false)
    const [gender, setGender] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")

    const router = useRouter()

    // console.log(gender)
    // console.log(maritalStatus)

    // const maritalStatus = useWatch({
    //     control,
    //     name: 'marital_status',
    //     defaultValue: "single", 
    // })
    // const genderS = useWatch({
    //     control,
    //     name: 'gender',
    //     defaultValue: "female", 
    // })

    useEffect(() => {
        if (userData) {
            setValue('userName', userData?.userName);
            setValue('middleName', userData?.personalInfo?.middleName);
            // setValue('lastName', userData?.personalInfo?.lastName);
            setValue('gender', userData?.personalInfo?.gender);
            setValue('maritalStatus', userData?.personalInfo?.maritalStatus);
            setValue('dob', formatForDateType(userData?.personalInfo?.dob));
            setGender(userData?.personalInfo?.gender)
            setMaritalStatus(userData?.personalInfo?.maritalStatus)
        }
    }, [setValue, userData]);

    // const handleRadioChange = (value: string) => {
    //     setValue('maritalStatus', value);
    //     // Save the selected value to local storage
    //     // localStorage.setItem('maritalStatus', value);
    // };

    const updateProfile_ = async (data: UpdateDateType) => {
        const userName = getValues("userName");
        const middleName = getValues("middleName");
        mutate({
            middleName,
            userName,
            gender,
            maritalStatus,
        });
        setEditMode(false)
    };

    // let token: string | null

    // if (typeof window !== "undefined") {
    //     token = localStorage.getItem("token");
    // }

    // const updateProfileData = async (data: UpdateDateType) => {
    //     // e.preventDefault()

    //     const userName = getValues("userName");
    //     const middleName = getValues("middleName");

    //     alert(JSON.stringify(data, null, 2))
    //     // return

    //     try {

    //         const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/profile/current-user`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             body: JSON.stringify({
    //                 userName,
    //                 middleName,
    //                 maritalStatus,
    //                 gender,
    //             })
    //         });

    //         // Check if the response status is not in the 200-299 range (HTTP OK)
    //         if (!response.ok) {
    //             // Handle non-successful responses (e.g., 404 Not Found, 500 Internal Server Error)
    //             throw new Error(`Request failed with status: ${response.status}`);
    //         }
    //         // Parse the response body as JSON
    //         const responseData = await response.json();
    //         console.log(data)
    //         if (responseData.error) {
    //             toast.error("Unable to update user profile!");
    //         }
    //         toast.success("Profile updated successfully!");
    //         setEditMode(false)
    //         return response
    //     } catch (error) {
    //         // Handle any errors that occurred during the fetch or parsing
    //         console.error("Error fetching profile data:", error);
    //     } finally {
    //         router.refresh()
    //     }
    // };

    const updateProfile = async (data: {}) => {
        alert(JSON.stringify(data, null, 2))
        // localStorage.setItem("userDetails", JSON.stringify(data))
        setTimeout(() => {
            toast.success("Profile details updated successfully")
            setEditMode(false)
        }, 1500);

    }

    // console.log(formatForDateType(userData?.personalInfo?.dob))
    return (
        <div className='w-full'>
            <div className={` w-full py-10 px- ${!editMode ? "animate-in flex justify-between" : "animate-out hidden"}`}>
                <div className='flex flex-col gap-y-4 font-[400] w-full md:w-[90%]'>
                    <div className='flex md:justify-between'>
                        <div className='w-1/2 md:min-w-28'>
                            <p className='text-sm text-[#090909] mb-1'>Username</p>
                            <p className='text-[#838383] lowercase'>{userData?.userName}</p>
                        </div>
                        <div className='w-1/2 md:min-w-28'>
                            <p className='text-sm text-[#090909] mb-1'>Role</p>
                            <p className='text-[#838383]'>Owner</p>
                        </div>
                    </div>

                    <button className='w-full border border-black py-2 rounded-md mt-5 md:hidden'>Edit Profile</button>
                </div>

                <div className='hidden group text-[16px] w-[30%] md:flex gap-2 items-center h-fit cursor-pointer' onClick={() => setEditMode(true)}>
                    Edit details
                    <PenLine size={18} className='group-hover:animate-bounce' />
                </div>
            </div>


            <div className={`py-10 transition-all w-full ${editMode ? "animate-accordion-up block" : "animate-out hidden"}`}>
                {/* @ts-ignore */}
                <form className="flex flex-col gap-4 w-fit px-12  mx-auto mt-5" onSubmit={handleSubmit(updateProfile_)}>
                    {/* Username Input */}
                    <TextField
                        name='userName'
                        label="UserName"
                        placeholder="userName"
                        control={control}
                        // rules={{ required: 'username is required' }}
                        // value={userData?.userName}
                        defaultValue={userData?.userName}
                    />

                    {/* Title */}
                    {/* <div>
                        <SelectInput options={["Mr.", "Mrs.", "Miss"]} label='Title' placeholder='Mr.' />
                    </div> */}
                    {/* First Name Input */}
                    <div className='opacity-50 w-fit flex flex-col gap-4'>
                        <TextField
                            name='firstName'
                            label="First Name"
                            readOnly
                            defaultValue={userData?.personalInfo?.firstName}
                            control={control}
                            // rules={{ required: 'This filed is required' }}
                        />

                        {/* Last Name Input */}
                        <TextField
                            name='lastName'
                            label="Last Name"
                            readOnly
                            defaultValue={userData?.personalInfo?.lastName}
                            control={control}
                        // rules={{ required: 'This filed is required' }}
                        />
                    </div>

                    <TextField
                        name='middleName'
                        label="Middle Name (optional)"
                        placeholder=""
                        control={control}
                        // defaultValue={userData?.personalInfo?.middleName}
                        // value={userData?.personalInfo?.middleName}
                    // rules={{ required: 'This filed is required' }}
                    />


                    <div className='opacity-50 w-fit'>
                        <TextField
                            type='date'
                            name='dob'
                            label="Date of Birth"
                            control={control}
                            readOnly
                            // value={"2024-02-02"}
                            // defaultValue={formatForDateType(userData?.personalInfo?.dob)}
                            // title={userData?.personalInfo?.dob}
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor={"selectBank"} className="block text-neutral-950 text-sm font-normal mb-[6px]">
                            Gender
                        </label>
                        <select
                            className="w-[343px] md:w-[486px] h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 outline-none focus-within text-base font-normal leading-normal focus:bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed mb-4"
                            value={gender}
                            // defaultValue={userData?.personalInfo?.gender}
                            name='gender'
                            onChange={(e) => {
                                setGender(e.target.value);
                            }}
                        >
                          <option value="male">Male </option>
                          <option value="female">Female </option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label htmlFor={"maritalStatus"} className="block text-neutral-950 text-sm font-normal mb-[6px]">
                            Marital Status
                        </label>
                        <select
                            className="w-[343px] md:w-[486px] h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 outline-none focus-within text-base font-normal leading-normal focus:bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed mb-4"
                            value={maritalStatus}
                            name='maritalStatus'
                            // defaultValue={userData?.personalInfo?.maritalStatus}
                            onChange={(e) => {
                                setMaritalStatus(e.target.value);
                            }}
                        >
                          <option value="single">Single </option>
                          <option value="married">Married </option>
                          <option value="others">Others </option>
                        </select>
                    </div>

                    {/* <div className='flex  items-center gap-10'>
                        <p>Gender</p>
                        <label htmlFor="male">
                            <input type="radio" name="gender" id="male" className='mr-1' checked disabled />
                            Male
                        </label>
                        <label htmlFor="female">
                            <input type="radio" name="gender" id="female" className='mr-1' disabled />
                            Female
                        </label>
                    </div> */}

                    {/* Marital Status */}
                    {/* <div className='flex  items-center gap-10'>
                        <p>Marital Status</p>
                        <label htmlFor="single">
                            <input type="radio" name="maritalStatus" id="single" className=' mr-1' onChange={() => handleRadioChange('single')}
                                checked={maritalStatus === 'single'} />
                            Single
                        </label>
                        <label htmlFor="married">
                            <input type="radio" name="maritalStatus" id="married" className=' mr-1' onChange={() => handleRadioChange('married')}
                                checked={maritalStatus === 'married'} />
                            Married
                        </label>
                        <label htmlFor="others">
                            <input type="radio" name="maritalStatus" id="others" className=' mr-1' onChange={() => handleRadioChange('others')}
                                checked={maritalStatus === 'others'} />
                            Others
                        </label>
                    </div> */}

                    <div className='flex justify-end gap-5 mt-5'>
                        <Button variant='light'>
                            Save
                        </Button>
                        <ForwardButton variant='dark' type='submit'>
                            Save and Continue
                        </ForwardButton>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default MyProfile