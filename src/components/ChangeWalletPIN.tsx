"use client"
import React from 'react'
import { TextField } from './reusable/FormInput'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useChangePin } from '@/hooks/mutations'

type Props = {
    setSecurity: React.Dispatch<React.SetStateAction<string>>
}

const ChangeWalletPIN = ({ setSecurity }: Props) => {

    const {mutate, isPending} = useChangePin()
    const schema = z
        .object({
            oldWalletPin: z
                .string()
                .min(4, { message: "Pin must be 4 characters long" })
                .max(20),
            newWalletPin: z
                .string()
                .min(4, { message: "Pin must be 4 characters long" })
                .max(20),
            confirmWalletPin: z
                .string()
                .min(4, { message: "Pin must be 4 characters long" })
                .max(20),
        })
        .refine((data) => data.newWalletPin === data.confirmWalletPin, {
            message: "PINs do not match",
            path: ["confirmWalletPin"],
        });
    const { control, handleSubmit } = useForm({ resolver: zodResolver(schema) })

    const changePin = async (data: any) => {
        try {
            mutate({
                oldWalletPin: data.oldWalletPin,
                newWalletPin: data.newWalletPin
            });
            // Clear the form fields
            setTimeout(() => {
                setSecurity("");
            }, 2000);
        } catch (error) {
            // Password change failed
            console.error('Password change failed:', error);
        }
    }
    return (
        <div>
            <div className={`py-10 transition-all animate-in`}>
                <h3 className='text-xl font-semibold mt-3'>Change Wallet PIN</h3>
                <form className="flex flex-col gap-4 mx-auto mt-5" onSubmit={handleSubmit(changePin)}>
                    {/* Password Input */}
                    <TextField
                        type='password'
                        name='oldWalletPin'
                        label="Current Pin"
                        placeholder="****"
                        control={control}
                    // rules={{ required: 'This filed is required' }}
                    />
                    <TextField
                        type='password'
                        name='newWalletPin'
                        label="New PIN"
                        placeholder="****"
                        control={control}
                    // rules={{ required: 'This filed is required' }}
                    />
                    <TextField
                        type='password'
                        name='confirmWalletPin'
                        label="Confirm PIN"
                        placeholder="****"
                        control={control}
                    // rules={{ required: 'This filed is required' }}
                    />
                    <div className='flex justify-end max-w-[486px]'>
                        <Button variant="outline" className='w-fit border-black h-12 px-6'>Save</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ChangeWalletPIN