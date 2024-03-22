"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { BackButton, ForwardButton } from './reusable/Buttons'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { useRouter } from 'next/navigation'

type Props = {
    setSecurity: React.Dispatch<React.SetStateAction<string>>
}

let currentOTPIndex: number = 0;

const Change2FA = ({ setSecurity }: Props) => {
    const [seconds, setSeconds] = useState(59);
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

    const router = useRouter()


    // otp continue
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = ({
        target,
    }: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = target;
        // the spread operator help to get all the input value
        const newOTP = [...otp];
        // get the last value of the input
        newOTP[currentOTPIndex] = value.substring(value.length - 1);

        // moke the focus to the next box on each change
        if (!value) setActiveOTPIndex(currentOTPIndex - 1);
        else setActiveOTPIndex(currentOTPIndex + 1);
        // all the input values
        setOtp(newOTP);
    };

    const handleKeyDown = (
        { key }: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        currentOTPIndex = index;
        if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
    };

    useEffect(() => {
        // input box focus
        inputRef.current?.focus();
    }, [activeOTPIndex]);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds(0);
        }
    }, [seconds]);
    
    return (
        <div>
            <Dialog>

                <div className={`py-10 transition-all animate-in`}>
                    <h3 className='text-xl font-semibold mt-3'>Change 2FA Settings</h3>

                    <div className='my-3 flex flex-col gap-4'>
                        <div>
                            <Select defaultValue="" name='relationship'>
                                <label htmlFor="relationship" className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">2FA Type</label>
                                {/* <FormControl> */}
                                <SelectTrigger className="max-w-[486px] h-12 appearance-none outline-none focus-visible:ring-0 border border-[#838383] ">
                                    <SelectValue placeholder="Select 2FA Settings" />
                                </SelectTrigger>
                                {/* </FormControl> */}
                                <SelectContent className='appearance-none outline-none focus-within:appearance-none'>
                                    <SelectItem value="email">Email</SelectItem>
                                    <SelectItem value="daughter">Phone number</SelectItem>
                                    <SelectItem value="son">Google Authenticator</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <p className="block text-neutral-950 text-sm font-normal mb-[6px] leading-tight">Coverage</p>
                            <div className='border border-[#838383] max-w-[486px] min-h-12 rounded-md flex items-center px-4'>
                                <div className="w-24 h-7 px-2 py-0.5 bg-neutral-200 rounded-md justify-start items-center gap-2 inline-flex">
                                    <div className="justify-start items-center gap-1 flex">
                                        <div className="w-4 h-4 justify-center items-center flex">
                                            <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                                        </div>
                                        <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">Login</div>
                                    </div>
                                    <div className="w-4 h-4 justify-center items-center flex">
                                        <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <DialogTrigger asChild>
                    <div className='flex justify-end max-w-[486px]'>
                        <ForwardButton variant='dark'>Continue</ForwardButton>
                    </div>
                </DialogTrigger>
                <DialogContent className='max-w-xl px-10'>
                    <div>
                        <h1 className="w-[251px] md:w-full text-slate-900 font-bold text-[28px] md:text-2xl leading-9 md:leading-[44px] mb-[8px]">Confirm 2FA Setting</h1>
                        <p className="text-slate-600 text-base font-normal leading-normal mb-[32px] md:mb-[48px]">An OTP code was sent to <b>design@invidux.com</b>, enter the code below to verify your email address.</p>
                        <form>
                            {/* otp input boxes */}
                            <div className="mb-2 md:mb-[32px] flex justify-start items-center space-x-[16px]">
                                {otp.map((_, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <input
                                                // make the input box focus start from the first one
                                                ref={
                                                    index === activeOTPIndex ? inputRef : null
                                                }
                                                type="number"
                                                placeholder=""
                                                value={otp[index]}
                                                onChange={handleChange}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                className="w-[44.87px] h-[44.87px] md:w-12 md:h-12 rounded bg-transparent text-center font-semibold text-xl spin-button-none outline-none border border-[#cccccc] focus:border-gray-700 text-[#B1924E] transition"
                                            />
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </form>
                        <p className="text-zinc-900 text-base font-normal leading-normal mb-[24px]">Resend OTP code in <span>{seconds}</span>s</p>
                        <div className="flex gap-x-[9px] mb-[24px]">
                            <p className="text-zinc-900 text-base font-normal leading-normal">Didn’t receive the OTP?</p>
                            <p className="text-[#B1924E] text-base font-normal underline leading-normal cursor-pointer">Resend OTP</p>
                        </div>

                        <div className='flex justify-end max-w-[486px]'>
                            <ForwardButton variant='dark'>Continue</ForwardButton>
                        </div>
                        
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Change2FA