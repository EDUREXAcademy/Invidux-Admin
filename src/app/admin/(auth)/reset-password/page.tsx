'use client'
import { useState } from "react"
import Slider from "@/components/reusable/Slider"
import logo from '../../../../assets/icons/logo.svg'
import { useForm } from "react-hook-form"
import { TextField } from "@/components/reusable/FormInput"
import { ForwardButton } from "@/components/reusable/Buttons"
import { useResetPassword } from "@/hooks/mutations"
import useStore from "@/store"
import eye from '../../../../assets/icons/eye.svg'
import hide from '../../../../assets/icons/hide.svg'
import Image from "next/image"
import { useRouter } from "next/navigation"

const ResetPassword = () => {
  const {mutate, isPending} = useResetPassword();
  const [showPassword, setShowPassword] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)
  const { handleSubmit, control, watch} = useForm();
  const pwd = watch("password");
  const router = useRouter();
  const store = useStore();

  const resetPassword = async(data:any) =>{
    mutate({
      email: store.email,
      password: data.password
    })
  }

  return (
    <div className="px-[5%] flex justify-center items-center gap-x-16 py-10 md:py-6">
      <Slider/>
      <div>
        <Image src={logo} alt="Invidux logo" className='w-[100px] block md:hidden mb-6'/>
        <h1 className="w-[251px] md:w-full text-slate-900 text-[28px] md:text-3xl font-bold leading-9 mb-[8px]">Reset Password</h1>
        <p className="text-slate-600 text-base font-normal leading-normal mb-[20px]">Enter your new password.</p>
        <form onSubmit={handleSubmit(resetPassword)}>
          <div className='relative mb-4'>
            <TextField
              name="password"
              label="Password"
              type={showPassword? 'text' : 'password'}
              placeholder="*********"
              control={control}
              rules={{
                required: 'This field is required',
                pattern: {
                  message: 'Password must contain at least one special character, one Upper case, and one number,',
                  value: /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
                }
              }}
            />
            <Image src={showPassword ? hide : eye} alt="show password" className='absolute top-9 right-3 hover:cursor-pointer w-[20px] h-5' onClick={()=> setShowPassword(!showPassword)}/>
          </div>
          <div className='relative mb-4'>
            <TextField 
              name='confirmPassword' 
              label='Confirm Password' 
              placeholder='********'
              type={passwordShown? 'text' : 'password'}
              control={control}
              rules={{
                required: 'This field is required',
                validate: value => value === pwd || "The passwords do not match"
              }}
            />
            <Image src={passwordShown ? hide : eye} alt="show password" className='absolute top-9 right-3 hover:cursor-pointer w-[20px] h-5' onClick={()=> setPasswordShown(!passwordShown)}/>
          </div>
          <div className="w-full md:w-[219px] mt-[30px]">
            <ForwardButton fullWidth type="submit" variant="dark">Reset Password</ForwardButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword