'use client'
import React, {useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"
import { useVerifyOtp, useResendOtp} from "@/hooks/mutations";
import { useForm } from "react-hook-form";
import useStore from "@/store";
import Slider from "@/components/reusable/Slider";
import logo from '../../../../assets/icons/logo.svg'
import { BackButton } from "@/components/reusable/Buttons";
import Image from "next/image";
import LoadingOverlay from "@/components/reusable/LoadingOverlay";
import OtpInput from "@/components/reusable/OtpInput";

const TwoFA = () => {
  const {mutate, isPending} = useVerifyOtp();
  const {mutate:resendMutate, isPending:resendPending} = useResendOtp();
  const [seconds, setSeconds] = useState(59);
  const { handleSubmit, control, setValue } = useForm();
  const [otp, setOtp] = useState('')
  const store = useStore();
  const router = useRouter()

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
    }
  },[seconds]);

  const verifyUser = async () => {
    mutate({
      otp: otp,
      email: store.email
    });
  };

  useEffect(() => {
    const valueOtp = otp.replace(/\s/g,'')
    if (valueOtp.length === 6){
      verifyUser()
    }
  },[otp]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="px-[5%] flex justify-center items-center gap-x-16 py-10 md:py-6">
      {/* {(isPending ||resendPending) && <LoadingOverlay />} */}
      <Slider/>
      <div>
        <Image src={logo} alt="Invidux logo" className='w-[100px] block md:hidden mb-6'/>
        <h1 className="w-[251px] md:w-full text-slate-900 font-bold text-[28px] md:text-3xl leading-9 md:leading-[44px] mb-[8px]">Verify your email address</h1>
        <p className="text-slate-600 text-base font-normal leading-normal mb-[32px] md:mb-[48px]">An OTP code was sent to <b>{store.email}</b>, enter the code below to verify your email address.</p>
        <form onSubmit={handleSubmit(verifyUser)} className="mb-2 md:mb-[32px]">
          <OtpInput value={otp} valueLength={6} onChange={(value: string) => setOtp(value)} />
        </form>
        <p className="text-zinc-900 text-base font-normal leading-normal mb-[24px]">Resend OTP code in <span>{seconds}</span>s</p>
        <div className="flex gap-x-[9px] mb-[24px]">
          <p className="text-zinc-900 text-base font-normal leading-normal">Didn’t receive the OTP?</p>
          <p className="text-[#B1924E] text-base font-normal underline leading-normal"
            onClick={(e) => {
              e.preventDefault();
              resendMutate({email:store.email})
            }}
          >Resend OTP</p>
        </div>
        <div className="w-full md:w-[239px]"
          onClick={() => router.back()}
        >
          <BackButton fullWidth variant="dark">Change your email</BackButton>
        </div>
      </div>
    </div>
  )
}

export default TwoFA