'use client'
import { useState } from "react";
import { useForm } from "react-hook-form"
import Slider from "@/components/reusable/Slider"
import { TextField } from "@/components/reusable/FormInput"
import logo from '../../../../assets/icons/logo.svg'
import eye from "../../../../assets/icons/eye.svg";
import hide from "../../../../assets/icons/hide.svg";
import { ForwardButton } from "@/components/reusable/Buttons";
import { useLogin } from "@/hooks/mutations";
import google from '../../../../assets/icons/google.svg'
import facebook from '../../../../assets/icons/facebook.svg'
import linkedin from '../../../../assets/icons/linkedin.svg'
import apple from '../../../../assets/icons/apple.svg'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingOverlay from "@/components/reusable/LoadingOverlay";

const Login = () => {
  const {control, handleSubmit} = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const {mutate, isPending} = useLogin();
  const router = useRouter();

  const userLogin = async(data:any) =>{
    mutate(data)
  }

  return (
    <div className="px-[5%] flex justify-center items-center gap-x-16 py-10 md:py-6 md:h-screen">
      {isPending && <LoadingOverlay />}
      <Slider/>
      <div>
        <Image src={logo} alt="EagleView logo" className='w-[100px] block md:hidden mb-6'/>
        <h1 className="text-slate-900 font-bold text-[28px] md:text-3xl leading-9 md:leading-[44px] mb-[8px]">Login to your account</h1>
        <p className="text-slate-600 text-base font-normal leading-normal mb-[20px]">Enter your credentials to gain access to your account.</p>
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(userLogin)}>
          <TextField
            name = 'username'
            label="Email or Username"
            placeholder="hello@smarthomes.com"
            control={control}
            rules={{required:'This filed is required'}}
          />
          <div className='relative'>
            <TextField 
              name='password'
              label="Password"
              placeholder='********'
              type={showPassword? 'text' : 'password'}
              control ={control}
              rules={{required: 'This field is required'}}
            />
            <Image src={showPassword ? hide : eye} alt="show password" className='absolute top-9 right-3 hover:cursor-pointer w-[20px] h-5' onClick={()=> setShowPassword(!showPassword)}/>
          </div>
          <Link href='/token-issuers/forgot-password'><p className="text-sm text-zinc-900 underline font-normal leading-normal relative    mb-[20px]">Forgot password?</p></Link>
          <div className="w-full md:w-[166px]">
          <ForwardButton type="submit" variant="dark" fullWidth>Submit</ForwardButton>
          </div>
        </form>
        <div className='flex flex-col md:flex-row items-center gap-x-[32px] gap-y-2 my-[20px]'>
          <p className="text-zinc-900 text-base font-normal leading-normal">Or Login with</p>
          <div className='flex gap-x-[16px]'>
            <Image src={google} alt="google" />
            <Image src={facebook} alt="facebook" />
            <Image src={linkedin} alt="linkedin" />
            <Image src={apple} alt="apple" />
          </div>
        </div>
        <div className='flex justify-center md:justify-start items-center gap-2'>
          <p className="text-zinc-900 text-base font-normal leading-normal">Do not have an account?</p>
          <Link href='/token-issuers/create-account'> <p className="text-[#B1924E] text-sm font-normal underline leading-normal">Sign up</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Login