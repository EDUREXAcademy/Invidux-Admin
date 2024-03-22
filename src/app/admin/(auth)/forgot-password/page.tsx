"use client"
import Slider from "@/components/reusable/Slider"
import Link from "next/link"
import logo from '../../../../assets/icons/logo.svg'
import { useForm } from "react-hook-form"
import { TextField } from "@/components/reusable/FormInput"
import { ForwardButton } from "@/components/reusable/Buttons"
import { useForgotPassword } from "@/hooks/mutations"
import Image from "next/image"
import { useRouter } from "next/navigation"
import LoadingOverlay from "@/components/reusable/LoadingOverlay"

const ForgotPassword = () => {
  const {mutate, isPending} = useForgotPassword()
  const {control, handleSubmit} = useForm()
  const router = useRouter();

  const forgotPassword = async(data:any) =>{
    mutate(data)
    console.log(data)
  }

  return (
    <div className="px-[5%] flex justify-center items-center gap-x-16 py-10">
      {isPending && <LoadingOverlay/>}
      <Slider/>
      <div>
        <Image src={logo} alt="EagleView logo" className='w-[100px] block md:hidden mb-6'/>
        <h1 className="w-[251px] md:w-full text-slate-900 text-[28px] md:text-3xl font-bold leading-9 md:leading-[44px] mb-[8px]">Forgot your password?</h1>
        <p className="text-slate-600 text-base font-normal leading-normal mb-[30px]">Enter your registered email address.</p>
        <form onSubmit={handleSubmit(forgotPassword)}>
          <TextField
            name="email"
            label="Email"
            placeholder="me@invidux.com"
            control={control}
            rules={{
              required: 'This field is required',
              pattern: {
                message: 'Enter a valid email',
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              }
            }}
          />
          <div className="w-full md:w-[166px] mt-[30px]">
          <ForwardButton type="submit" variant="dark" fullWidth>Continue</ForwardButton>
          </div>
        </form>
        <div className='flex justify-center md:justify-start items-center gap-2 mt-[40px]'>
          <p className="text-zinc-900 text-base font-normal leading-normal">Remember your password?</p>
          <Link href='/token-issuers/login'> <p className="text-[#B1924E] text-base font-normal underline leading-normal">Login</p></Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword