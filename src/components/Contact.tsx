"use client"
import { PenLine } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, ForwardButton } from './reusable/Buttons'
import { TextField } from './reusable/FormInput'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useUpdateContactInfo } from '@/hooks/mutations'

type Props = {
    userData: {
        contact: {
            email: string
            phone: string
            address: {
                street: string
                city: string
                state: string
                countryName: string
            }
            nextOfKin: {
                email: string
                phone: string
                name: string
                relationship: string
            }
        },
    }
}

const Contact = ({ userData }: Props) => {
    const { control, handleSubmit, setValue, getValues } = useForm()
    const [editMode, setEditMode] = useState(false)
    const { mutate, isPending } = useUpdateContactInfo();

    const handleRelationshipChange = (value: any) => {
        if (!value) {
            console.error("Event object or event target is undefined.");
            return;
        }
        setValue('nextOfKinRelationship', value); // Update the value of the 'relationship' field in the form
    };

    useEffect(() => {
        if (userData) {
            setValue('email', userData?.contact?.email);
            setValue('phoneNumber', userData?.contact?.phone);
            setValue('street', userData?.contact?.address?.street);
            setValue('city', userData?.contact?.address?.city);
            setValue('state', userData?.contact?.address?.state);
            setValue('nextOfKinName', userData?.contact?.nextOfKin?.name);
            setValue('nextOfKinEmail', userData?.contact?.nextOfKin?.email);
            setValue('nextOfKinPhone', userData?.contact?.nextOfKin?.phone);
            setValue('nextOfKinRelationship', userData?.contact?.nextOfKin?.relationship);
        }
    }, [setValue, userData]);

    const updateContact = async (data: any) => {
        // alert(JSON.stringify(data, null, 2))
        const phoneNumber = getValues("phoneNumber");
        const nextOfKinName = getValues("nextOfKinName");
        const nextOfKinEmail = getValues("nextOfKinEmail");
        const nextOfKinPhone = getValues("nextOfKinPhone");
        const nextOfKinRelationship = getValues("nextOfKinRelationship");
        mutate({
            phoneNumber,
            nextOfKin: {
                name:nextOfKinName,
                email:nextOfKinEmail,
                phone: nextOfKinPhone,
                relationship: nextOfKinRelationship 
            }
        });
        setEditMode(false)
    };


    // console.log(userData?.contact)

    return (
        <div className='pb-10'>
            <div className='flex justify-end items-center pt-3 md:hidden' onClick={() => setEditMode(true)}>
                <PenLine size={18} />
            </div>
            <div className={`flex justify-between w-full py-4 md:py-10 px-4 ${!editMode ? "animate-in flex justify-between" : "animate-out hidden"}`}>
                <div className='flex flex-col gap-y-4 font-[400] w-full md:w-[80%]'>
                    <div className='flex flex-col md:flex-row gap-y-4'>
                        <div className='w-1/2 md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Company website</p>
                            <p className='text-sm md:text-base text-[#838383] max-w-40 truncate'>{userData?.contact?.email ? userData?.contact?.email : "-"}</p>
                        </div>
                        <div className='w-1/2 md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Email Address</p>
                            <p className='text-sm md:text-base text-[#838383]'>{userData?.contact?.email ? userData?.contact?.email : "-"}</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-y-4'>
                        <div className='w-1/2 md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Telephone Number</p>
                            <p className='text-sm md:text-base text-[#838383] max-w-40 truncate'>{userData?.contact?.email ? userData?.contact?.email : "-"}</p>
                        </div>
                        <div className='w-1/2 md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Mobile Phone Number</p>
                            <p className='text-sm md:text-base text-[#838383]'>{userData?.contact?.email ? userData?.contact?.email : "-"}</p>
                        </div>
                    </div>
                    {/* <div className='flex md:justify-between'>
                        <div className='w-full md:min-w-28'>
                            <p className='text-sm text-[#090909]'>Residential Address</p>
                            <p className='text-sm md:text-base text-[#838383]'>
                                <span>{userData?.contact?.address?.street}</span>
                                <span>{userData?.contact?.address?.city && userData?.contact?.address?.city + ","}</span>
                                <span>{userData?.contact?.address?.state && userData?.contact?.address?.state + ","}</span>
                                <span>{userData?.contact?.address?.countryName}</span>
                            </p>
                        </div>
                    </div> */}
                </div>

                <div className='hidden text-[16px] w-[30%] md:flex gap-2 items-center h-fit cursor-pointer' onClick={() => setEditMode(true)}>
                    Edit details
                    <PenLine size={18} />
                </div>
            </div>

            <div className={`${!editMode ? "animate-in" : "animate-out hidden"}`}>
                <div className={`flex justify-between items-center  `}>
                    <h3 className='text-lg font-semibold mb-3'>Contact Person/Account Manager</h3>
                    {/* <PenLine size={18} className='md:hidden' onClick={() => setEditMode(true)} /> */}
                </div>
                <div className='flex justify-between w-full px-4'>
                    <div className='flex flex-col gap-y-4 font-[400] w-full md:w-[80%]'>
                        <div className='flex md:justify-between'>
                            <div className='w-1/2 md:min-w-28'>
                                <p className='text-sm text-[#090909]'>Tile</p>
                                <p className='text-sm md:text-base text-[#838383]'>{userData?.contact?.nextOfKin?.name ? userData?.contact?.nextOfKin?.name : "-"}</p>
                            </div>
                            <div className='w-1/2 md:min-w-28'>
                                <p className='text-sm text-[#090909]'>Full Name</p>
                                <p className='text-sm md:text-base text-[#838383]'>{userData?.contact?.nextOfKin?.phone ? userData?.contact?.nextOfKin?.phone : "-"}</p>
                            </div>
                        </div>
                        <div className='flex md:justify-between'>
                            <div className='w-1/2 md:min-w-28'>
                                <p className='text-sm text-[#090909]'>Email Address</p>
                                <p className='text-sm md:text-base text-[#838383]'>{userData?.contact?.nextOfKin?.email ? userData?.contact?.nextOfKin?.email : "-"}</p>
                            </div>
                            <div className='w-1/2 md:min-w-28'>
                                <p className='text-sm text-[#090909]'>Role in the Company</p>
                                <p className='text-sm md:text-base text-[#838383] capitalize'>{userData?.contact?.nextOfKin?.relationship ? userData?.contact?.nextOfKin?.relationship : "-"}</p>
                            </div>
                        </div>
                        <div className='flex md:justify-between'>
                            <div className='w-1/2 md:min-w-28'>
                                <p className='text-sm text-[#090909]'>Valid ID</p>
                                <p className='text-sm md:text-base text-[#838383]'>{userData?.contact?.nextOfKin?.email ? userData?.contact?.nextOfKin?.email : "-"}</p>
                            </div>
                            <div className='w-1/2 md:min-w-28'>
                                <p className='text-sm text-[#090909]'>Identification Number
</p>
                                <p className='text-sm md:text-base text-[#838383] capitalize'>{userData?.contact?.nextOfKin?.relationship ? userData?.contact?.nextOfKin?.relationship : "-"}</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className='hidden text-[16px] w-[30%] md:flex gap-2 items-center h-fit cursor-pointer'>
                        Edit details
                        <PenLine size={18} />
                    </div> */}
                </div>
            </div>

            <div className={`py-10 transition-all ${editMode ? "animate-accordion-up block" : "animate-out hidden"}`}>
                <form className="flex flex-col gap-4 w-fit px-12  mx-auto mt-5" onSubmit={handleSubmit(updateContact)}>
                    {/* User Email and Phone Inputs */}
                    <TextField
                        name='email'
                        label="Email Address"
                        placeholder="email@invidux.com"
                        control={control}
                        defaultValue={userData?.contact?.email}
                    // rules={{ required: 'This filed is required' }}
                    />

                    <TextField
                        name='phoneNumber'
                        label="Phone Number"
                        placeholder=""
                        control={control}
                        defaultValue={userData?.contact?.phone}
                    // rules={{ required: 'This filed is required' }}
                    />

                    <h3 className='text-lg font-semibold mt-3'>Next of Kin</h3>

                    <TextField
                        name='nextOfKinName'
                        label="Name"
                        placeholder=""
                        control={control}
                    // rules={{ required: 'This filed is required' }}
                    />

                    <TextField
                        name='nextOfKinEmail'
                        label="Email Address"
                        placeholder="email@invidux.com"
                        control={control}
                    // rules={{ required: 'This filed is required' }}
                    />

                    <TextField
                        name='nextOfKinPhone'
                        label="Phone Number"
                        placeholder="+23480000000"
                        control={control}
                    // rules={{ required: 'This filed is required' }}
                    />

                    <div className='mb-3'>
                        <Select defaultValue={userData?.contact?.nextOfKin?.relationship} name='nextOfKinRelationship' onValueChange={handleRelationshipChange}>
                            <label htmlFor="nextOfKinRelationship" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Relationship</label>
                            {/* <FormControl> */}
                            <SelectTrigger className="max-w-[486px] h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
                                <SelectValue placeholder="Select Relationship" />
                            </SelectTrigger>
                            {/* </FormControl> */}
                            <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
                                <SelectItem value="brother">Brother</SelectItem>
                                <SelectItem value="daughter">Daughter</SelectItem>
                                <SelectItem value="son">Son</SelectItem>
                                <SelectItem value="spouse">Spouse</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


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

export default Contact