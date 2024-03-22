"use client"
import { useState } from 'react'
import { Image as ImageIcon, Camera, PenLine, Loader } from "lucide-react"
import Image from 'next/image'
import MyProfile from '@/components/MyProfile'
import KYC from '@/components/KYC'
import Contact from '@/components/Contact'
import Income from '@/components/Income'
import Security from '@/components/Security'
import { useUser } from '@/hooks/queries'
import useStore from '@/store'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import ProfilePic from '@/components/ProfilePic'
import LoadingOverlay from '@/components/reusable/LoadingOverlay'
import { useUploadCoverImage } from '@/hooks/mutations'
import Payment from '@/components/profile/Payment'
import Document from '@/components/profile/Document'

const Profile = () => {
    const [profileOption, setProfileOption] = useState("myProfile")
    const [imageFile, setImageFile] = useState<File | null>(null)
    const store = useStore()


    // console.log(process.env.NEXT_PUBLIC_BASE_URL)


    const { data, isPending: userIsPending } = useUser();
    const { mutate, isPending: coverImagePending } = useUploadCoverImage()

    const updateCoverPic = async (file: any) => {
        if (file === null) {
            // If no file is selected, show an error message
            toast.error("Please select a file.");
            return;
        }
        const formData = new FormData();
        formData.append("formFile", file);
        mutate(formData)
    }

    // console.log(data)

    // const token = localStorage.getItem("token")
    // console.log(token)
    // const baseUrl = 'http://invidux.somee.com/api/v1'

    // const { data, isLoading, isError } = useQuery({
    //     queryKey: ["user"],
    //     queryFn: async () => {
    //         const response = await fetch(`${baseUrl}/profile/current-user`, {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });

    //         if (!response.ok) {
    //             toast.error("Unable to get the User Info!", {
    //             });
    //             throw new Error("Network response was not ok");
    //         }

    //         // if(isError) {
    //         //   toast.error("Unable to get the Subjects!", {
    //         //     hideProgressBar: false,
    //         //     progress: undefined,
    //         //   });
    //         // }

    //         const data = await response.json();

    //         return data;
    //     },
    // });
    // console.log(data)

    const backgroundImageUrl = imageFile
        ? `url(${URL.createObjectURL(imageFile)})`
        : (data?.data?.personalInfo?.coverImageUrl
            ? `url(${process.env.NEXT_PUBLIC_BASE_URL}/${data?.data?.personalInfo?.coverImageUrl})`
            : 'url(/coverImage.png)');

    return (
        <div>
            <div className=''>
                <div className='md:py-6 p-4 md:px-12 text-xl font-[500]'>
                    Profile
                </div>

                {/* Profile Cover Image */}
                <div
                    style={{ backgroundImage: coverImagePending ? 'url()' : backgroundImageUrl }}
                    className='w-full h-[100px] md:h-[221px] relative px-6 py-3 md:px-12 md:py-6 flex justify-end bg-gray-400 bg-cover bg-center '
                >
                    <label htmlFor='coverImage' className='flex items-center gap-2 p-[2px] md:p-2 border border-white md:border-[#B1924E] w-fit h-fit rounded-sm cursor-pointer text-white md:text-[#B1924E] text-sm md:text-base'
                    >
                        <ImageIcon className='text-white md:text-[#B1924E]' />
                        <p>Change cover</p>
                        <input type="file" id='coverImage' className='hidden' onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                                setImageFile(e.target.files?.[0])
                                updateCoverPic(e.target.files?.[0])
                            }
                        }} />
                    </label>

                    {coverImagePending && (
                        <div className='h-full w-full bg-black absolute'>
                            <Loader />
                        </div>
                    )}

                    <div className='hidden h-12 w-[75%] bottom-0 right-0 bg-white absolute md:block px-4 overflow-visible'>
                        <div className='flex items-center md:justify-between xl:gap-6 h-full border-b border-b-gray-400 '>
                            <div
                                className={`cursor-pointer h-full flex flex-shrink-0 items-center -mb-1 px-2 text-sm lg:text-base xl:px-4 ${profileOption === "myProfile" ? "font-medium text-black border-b-[3px] border-b-black transition-all" : "text-[#838383]"} `}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setProfileOption("myProfile")
                                }}>
                                My profile
                            </div>
                            <div className={`cursor-pointer h-full flex items-center -mb-1 px-2 text-sm lg:text-base xl:px-4  ${profileOption === "kyc" ? "font-medium text-black border-b-[3px] border-b-black transition-all" : "text-[#838383]"} `}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setProfileOption("kyc")
                                }}
                            >
                                KYC
                            </div>
                            <div
                                className={`cursor-pointer h-full flex items-center -mb-1 px-2 text-sm lg:text-base xl:px-4  ${profileOption === "contact" ? "font-medium text-black border-b-[3px] border-b-black transition-all" : "text-[#838383]"} `}
                                onClick={() => setProfileOption("contact")}>
                                Contact
                            </div>
                            <div
                                className={`cursor-pointer h-full flex items-center -mb-1 px-2 text-sm lg:text-base xl:px-4  ${profileOption === "payment" ? "font-medium text-black border-b-[3px] border-b-black transition-all" : "text-[#838383]"} `}
                                onClick={() => setProfileOption("payment")}>
                                Payment
                            </div>
                            <div
                                className={`cursor-pointer h-full flex items-center -mb-1 px-2 text-sm lg:text-base xl:px-4  ${profileOption === "document" ? "font-medium text-black border-b-[3px] border-b-black transition-all" : "text-[#838383]"} `}
                                onClick={() => setProfileOption("document")}>
                                Document
                            </div>
                            <div
                                className={`cursor-pointer h-full flex items-center -mb-1  px-2 text-sm lg:text-base xl:px-4 ${profileOption === "security" ? "font-medium text-black border-b-[3px] border-b-black transition-all" : "text-[#838383]"} `}
                                onClick={() => setProfileOption("security")}>
                                Security
                            </div>
                            {/* <div
                                className={`cursor-pointer h-full flex items-center -mb-1  px-2 text-sm lg:text-base xl:px-4 ${profileOption === "2fa" ? "font-medium text-black border-b-[3px] border-b-black transition-all" : "text-[#838383]"} `}
                                onClick={() => setProfileOption("2fa")}>
                                2FA
                            </div> */}
                        </div>
                    </div>
                </div>


                {/* Profile display for small screens and the Menubar */}
                <div className='md:hidden relative'>
                    <div className='w-full h-[100px] relative flex justify-center '>

                        <div className='absolute -top-[25%] text-center'>
                            <div className='h-[60px] w-[60px] md:h-[193px] md:w-[193px] relative z-50'>
                                <Image src="https://github.com/shadcn.png" alt="" fill priority className='rounded-full overflow-hidden ' />
                                <Camera className="absolute right-[2px] bottom-1 cursor-pointer " color="#B1924E" size={18} />
                            </div>
                            <p className='text-sm font-semibold mt-2'>{data?.data?.personalInfo?.firstName}</p>
                            <p className='text-xs text-[#838383] capitalize'>{data?.data?.role}</p>
                            <p className='text-xs text-[#838383] mt-1'>Level {" "} {data?.data?.kyc?.level}</p>
                        </div>

                    </div>
                    <div className='md:hidden h-12 w-full bg-white  flex items-center gap-10 px-4 overflow-x-auto text-sm'>
                        <div className={`cursor-pointer h-full flex items-center flex-shrink-0 ${profileOption === "myProfile" ? "font-medium text-black border-b-2 border-b-black transition-all" : "text-[#838383]"} `} onClick={() => setProfileOption("myProfile")}>
                            My Profile
                        </div>
                        <div className={`cursor-pointer h-full flex items-center flex-shrink-0  ${profileOption === "kyc" ? "font-medium text-black border-b-2 border-b-black transition-all" : "text-[#838383]"} `} onClick={() => setProfileOption("kyc")}>
                            KYC
                        </div>
                        <div className={`cursor-pointer h-full flex items-center flex-shrink-0  ${profileOption === "contact" ? "font-medium text-black border-b-2 border-b-black transition-all" : "text-[#838383]"} `} onClick={() => setProfileOption("contact")}>
                            Contact
                        </div>
                        <div className={`cursor-pointer h-full flex items-center flex-shrink-0  ${profileOption === "income" ? "font-medium text-black border-b-2 border-b-black transition-all" : "text-[#838383]"} `} onClick={() => setProfileOption("income")}>
                            Income
                        </div>
                        <div className={`cursor-pointer h-full flex items-center flex-shrink-0  ${profileOption === "security" ? "font-medium text-black border-b-2 border-b-black transition-all" : "text-[#838383]"} `} onClick={() => setProfileOption("security")}>
                            Security
                        </div>
                    </div>
                </div>



                {/* Profile Details */}
                <div className='flex'>

                    <div className='hidden md:block md:w-2/5 relative'>
                        <ProfilePic userData={data?.data} />
                    </div>

                    <div className='w-full px-4 md:px-8'>
                        {profileOption === "myProfile" && (
                            <MyProfile userData={data?.data} />
                        )}
                        {profileOption === "kyc" && (
                            <KYC userData={data?.data} />
                        )}
                        {profileOption === "contact" && (
                            <Contact userData={data?.data} />
                        )}
                        {profileOption === "payment" && (
                            <Payment userData={data?.data} />
                        )}
                        {profileOption === "document" && (
                            <Document userData={data?.data} />
                        )}
                        {profileOption === "income" && (
                            <Income userData={data?.data} />
                        )}
                        {profileOption === "security" && (
                            <Security />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile