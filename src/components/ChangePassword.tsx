"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from './reusable/FormInput'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { useChangePassword } from '@/hooks/mutations'
import { z } from "zod";


type Props = {
    setSecurity: React.Dispatch<React.SetStateAction<string>>
}

const ChangePassword = ({ setSecurity }: Props) => {
    const schema = z
        .object({
            oldPassword: z
                .string()
                .min(8, { message: "Password must be at least 8 characters long" })
                .max(20),
            newPassword: z
                .string()
                .min(8, { message: "Password must be at least 8 characters long" })
                .max(20),
            confirmPassword: z
                .string()
                .min(8, { message: "Password must be at least 8 characters long" })
                .max(20),
        })
        .refine((data) => data.newPassword === data.confirmPassword, {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        });
    const { control, handleSubmit } = useForm({ resolver: zodResolver(schema) })

    const {mutate, isPending} = useChangePassword()

    const changePassword = async (data: any) => {
        try {
            mutate({
                oldPassword: data.oldPassword,
                newPassword: data.newPassword
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
                <h3 className='text-xl font-semibold mt-3'>Change Password</h3>
                <form className="flex flex-col gap-4 mx-auto mt-5" onSubmit={handleSubmit(changePassword)}>
                    {/* Password Input */}
                    <TextField
                        type='password'
                        name='oldPassword'
                        label="Current Password"
                        placeholder="********"
                        control={control}
                    />
                    <TextField
                        type='password'
                        name='newPassword'
                        label="New Password"
                        placeholder="********"
                        control={control}
                    />
                    <TextField
                        type='password'
                        name='confirmPassword'
                        label="Confirm Password"
                        placeholder="********"
                        control={control}
                    />
                    <div className='flex justify-end max-w-[486px]'>
                        <Button variant="outline" className='w-fit border-black h-12 px-6'>Save</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ChangePassword