"use client"

import { useUploadProfileImage } from '@/hooks/mutations'
import { extractNumber } from '@/lib/utils'
import { Camera } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type Props = {
  userData: {
    personalInfo: {
      firstName: string
      lastName: string
      imageUrl: string
    }
    role: string
    kyc: {
      level: string
    }
  }
}

const ProfilePic = ({userData}: Props) => {

  const [imageFile, setImageFile] = useState<File | null>(null)
  const { mutate, isPending } = useUploadProfileImage()


  let token: string | null

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const baseUrl = 'http://invidux.somee.com/api/v1'
  // const formData = new FormData();
  // if (imageFile !== null) {
  //   formData.append("profile_picture", imageFile);
  // } else {
  //   // Handles the case where imageFile is null
  // }

  // const uploadImage = async (data: any) => {
  //   mutate(data)
  // }


  // console.log(imageFile)

  // useEffect(() => {
  //   if (imageFile !== null) {
  //   updateProfilePic()
  //   }
  // }, [imageFile])

  const updateProfilePic_ = async (file: any) => {
    if (file === null) {
      // If no file is selected, show an error message
      toast.error("Please select a file.");
      return;
    }
    const formData = new FormData();
    formData.append("formFile", file);
    mutate(formData)
  }
  


  const updateProfilePic = async (file: any) => {
    // e.preventDefault();
    if (file === null) {
      // If no file is selected, show an error message
      toast.error("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("formFile", file);

    // console.log(formData)
    // console.log(formData.entries())
    // console.log(imageFile)
    try {
      const response = await fetch(`${baseUrl}/profile/current-user/upload-photo`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          // "Content-Type": "multipart/form-data"
        },
        body: formData,
      });

      // Check if the response status is not in the 200-299 range (HTTP OK)
      if (!response.ok) {
        // Handle non-successful responses (e.g., 404 Not Found, 500 Internal Server Error)
        // throw new Error(`Request failed with status: ${response.status}`);
        // toast.error("Unable to update profile picture!");
      }
      // Parse the response body as JSON
      const data = await response.json();
      console.log(data);
      if (data.error) {
        toast.error("Unable to update profile picture!");
        return
      }
      toast.success("Profile picture updated successfully!");
      // return response
    } catch (error) {
      // Handle any errors that occurred during the fetch or parsing
      console.error("Unable to upload profile image!:", error);
      toast.error("An error occurred while updating profile picture.");
    }
  };



  return (
    <div className='absolute md:-top-14 pl-4 xl:pl-8 text-center'>
      <div className='h-[60px] w-[60px] md:h-[130px] md:w-[130px] lg:h-[193px] lg:w-[193px] relative'>
        <Image 
        src={imageFile ? URL.createObjectURL(imageFile) : (userData?.personalInfo?.imageUrl ? `${process.env.NEXT_PUBLIC_BASE_URL}/${userData?.personalInfo?.imageUrl}` : '/path/to/placeholder/image.jpg')} 
        alt="" 
        fill 
        priority 
        className='rounded-full' />
        <label htmlFor="displayImage">
          <Camera className="absolute right-4 bottom-4 cursor-pointer" color="#B1924E" size={28} />
        </label>
        <input type="file" name="" id="displayImage" className='hidden' accept="image/*" onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files?.[0])
            // uploadImage(e.target.files[0])
            updateProfilePic_(e.target.files?.[0])
          }
        }} />
      </div>
      <div className='mt-4 flex flex-col gap-0.5'>
        <p className='text-sm font-semibold'>{userData?.personalInfo?.firstName} {userData?.personalInfo?.lastName}</p>
        <p className='text-xs text-[#838383]'>{userData?.role}</p>
        <p className='text-xs text-[#838383]'> Level {" "}{extractNumber(userData?.kyc?.level)}</p>
      </div>
    </div>
  )
}

export default ProfilePic