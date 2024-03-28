"use client"
import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useForm } from 'react-hook-form'
import { ArrowLeft, Plus } from 'lucide-react'
import useStore from '@/store'
import { useGetRoles, useUnitTypes } from '@/hooks/queries'
import { TextField } from '@/components/reusable/FormInput'
import { Button, ForwardButton } from '@/components/reusable/Buttons'
import { useAddNewUser } from '@/hooks/mutations'


const NextOKin = ({setIsAddUser}:any) => {
  const { control, handleSubmit, setValue, getValues,reset, formState: {isSubmitSuccessful}  } = useForm();
  const { addUserData, setAddUserData, newUserCurrentIndex, setNewUserCurrentIndex } = useStore()
  const {data: roles, isPending: roleIsPending} = useGetRoles()
  const [role, setRole] = useState('')
  const [subRoles, setSubRoles] = useState([])
  const [subRoleId, setSubRoleId] = useState('')
  const {mutate, isPending} = useAddNewUser()

  const addNewUser = (data: any) => {
    console.log({ data })
    mutate({
      ...addUserData,
      nextOfKin: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        relationship: data.relationship,
      },
      roleInfo: {
        role: role,
        subRoleId: subRoleId
      }
    })
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      setIsAddUser(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  return (
    <form className='space-y-5 h-full mx-auto ' onSubmit={handleSubmit(addNewUser)}>
      <p className='text-bold'>Next of Kin</p>

      <div className='w-full flex gap-4'>
        <TextField
          type='text'
          name='name'
          label="Full Name"
          placeholder='John Doe'
          control={control}
          rules={{ required: 'This filed is required' }}
        />

        <TextField
          type='email'
          name='email'
          placeholder='Doe@gmail.com'
          label="Email"
          control={control}
          rules={{ required: 'This filed is required' }}
        />
      </div>
      <div className='w-full flex gap-4'>
        <TextField
          type='number'
          name='phone'
          label="Phone Number"
          placeholder='09034672843'
          control={control}
          rules={{ required: 'This filed is required' }}
        />

        <TextField
          type='text'
          name='relationship'
          placeholder='Spouse'
          label="Relationship"
          control={control}
          rules={{ required: 'This filed is required' }}
        />
      </div>

      <p className='font-bold'>Role Info</p>
      <div className="w-full flex gap-x-4">
        <div className="w-full -mt-2">
          <label
            htmlFor={"incomeRange"}
            className="block text-neutral-950 text-sm font-normal mb-[6px]"
          >
            User Role
          </label>
          <select
            className="w-full h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 outline-none focus-within text-base font-normal leading-normal focus:bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              roles?.filter((item:any)=>{
                if(item.roleName === e.target.value){
                  setSubRoles(item.subRoles)
                  console.log(item.subRoles)
                }
              })
            }}
          >
            <option value="">Select User role</option>
            {roles?.map((role: any) => (
              <option key={role.id} value={role.roleName}>
                {role.roleName}
              </option>
            ))}
            {roleIsPending && <option value="">loading...</option>}
          </select>
        </div>

        <div className={`w-full -mt-2`}>
          <label
            htmlFor={"incomeRange"}
            className="block text-neutral-950 text-sm font-normal mb-[6px]"
          >
            User Subrole
          </label>
          <select
            className="w-full h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 outline-none focus-within text-base font-normal leading-normal focus:bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            value={subRoleId}
            onChange={(e) => {
              setSubRoleId(e.target.value);
            }}
          >
            <option value="">Select User role</option>
            {subRoles?.map((subRole: any) => (
              <option key={subRole.id} value={subRole.id}>
                {subRole.name}
              </option>
            ))}
            {roleIsPending && <option value="">loading...</option>}
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-x-2 mt-6">
        <Button onClick={() => setNewUserCurrentIndex(newUserCurrentIndex - 1)}>
          <span className='flex gap-1.5'><ArrowLeft className='' /> Back</span>
        </Button>
        <ForwardButton type='submit' variant="dark">
          Submit
        </ForwardButton>
      </div>

    </form>
  )
}

export default NextOKin