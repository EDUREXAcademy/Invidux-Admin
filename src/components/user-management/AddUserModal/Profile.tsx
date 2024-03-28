"use client"
import React, { useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useForm } from 'react-hook-form'
import { ArrowLeft, Plus } from 'lucide-react'
import useStore from '@/store'
import { TextField } from '@/components/reusable/FormInput'
import { Button, ForwardButton } from '@/components/reusable/Buttons'
import { privateApi } from '@/api/adminAxios'
import { toast } from 'react-toastify'


const Profile = () => {
  const { control, handleSubmit, watch, getValues } = useForm();
  const { addUserData, setAddUserData, newUserCurrentIndex, setNewUserCurrentIndex } = useStore()

  const saveProfile = (data: any) => {
    console.log({ data })
    setAddUserData({
      profile: data
    })
    setNewUserCurrentIndex(newUserCurrentIndex + 1)
  }

  const isPhoneNumber = async () => {
    try {
      const phone = getValues("phoneNumber")
      const response = await privateApi.post(
        `api/v1/utilities/registration/phone-exists`,
        {phoneNumber: phone}
      );
    } catch (error: any) {
      let resMessage;
      error?.response?.status === 400
        ? (resMessage = error.response.data.errorMessages)
        : error?.response?.status === 500
        ? (resMessage = error.response.data)
        : (resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString());
      toast.error(resMessage, { toastId: "error1" });
    }
  };

  const isEmail = async () => {
    try {
      const email = getValues("email")
      const response = await privateApi.post(
        `api/v1/utilities/registration/email-exists`,
        {email: email}
      );
    } catch (error: any) {
      let resMessage;
      error?.response?.status === 400
        ? (resMessage = error.response.data.errorMessages)
        : error?.response?.status === 500
        ? (resMessage = error.response.data)
        : (resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString());
      toast.error(resMessage, { toastId: "error1" });
    }
  };

  const isUserName = async () => {
    try {
      const username = getValues("username")
      const response = await privateApi.post(
        `api/v1/utilities/registration/username-exists`,
        {userName: username}
      );
    } catch (error: any) {
      let resMessage;
      error?.response?.status === 400
        ? (resMessage = error.response.data.errorMessages)
        : error?.response?.status === 500
        ? (resMessage = error.response.data)
        : (resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString());
      toast.error(resMessage, { toastId: "error1" });
    }
  };

  useEffect(() => {
    const phone = watch("phoneNumber");
    if(phone?.length === 11){
      isPhoneNumber()
    }
  }, [watch("phoneNumber")]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const email = watch("email");
    if(email?.length > 8){
      isEmail()
    }
  }, [watch("email")]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const username = watch("username");
    if(username?.length > 4){
      isUserName()
    }
  }, [watch("username")]) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <form className='space-y-5 h-full mx-auto ' onSubmit={handleSubmit(saveProfile)}>
      <p className='font-bold'>Profile</p>
      <div className='w-full flex gap-4'>
        <TextField
          type='email'
          name='email'
          label="Email"
          placeholder='John@gmail.com'
          control={control}
          rules={{ required: 'This filed is required' }}
        />

        <TextField
          type='tel'
          name='phoneNumber'
          placeholder='08123567583'
          label="Phone Number"
          control={control}
          rules={{ required: 'This filed is required' }}
        />
      </div>
      <div className='w-full flex gap-4'>
        <TextField
          type='text'
          name='firstName'
          label="First Name"
          placeholder='John'
          control={control}
          rules={{ required: 'This filed is required' }}
        />

        <TextField
          type='text'
          name='middleName'
          placeholder='Doe'
          label="Middle Name"
          control={control}
          rules={{ required: 'This filed is required' }}
        />
      </div>
      <div className='w-full flex gap-4'>
        <TextField
          type='text'
          name='lastName'
          label="Last Name"
          placeholder='Buzz'
          control={control}
          rules={{ required: 'This filed is required' }}
        />

        <TextField
          type='date'
          name='dob'
          label="Date of Birth"
          control={control}
          rules={{ required: 'This filed is required' }}
        />
      </div>
      <div className='w-full flex gap-4'>
        <TextField
          type='text'
          name='gender'
          label="Gender"
          placeholder='Female'
          control={control}
          rules={{ required: 'This filed is required' }}
        />

        <TextField
          type='text'
          name='maritalStatus'
          label="Marital Status"
          placeholder='Married'
          control={control}
          rules={{ required: 'This filed is required' }}
        />
      </div>
      <div className='w-full flex gap-4'>
        <TextField
          type='text'
          name='username'
          label="Username"
          placeholder='John05'
          control={control}
          rules={{ required: 'This filed is required' }}
        />

        <TextField
          type='password'
          name='password'
          label="Password"
          placeholder='********'
          control={control}
          rules={{ required: 'This filed is required' }}
        />
      </div>

      <div className="flex justify-end gap-x-2 mt-6">
        <ForwardButton type='submit' variant="dark">
          Continue
        </ForwardButton>
      </div>

    </form>
  )
}

export default Profile