"use client";
import BarChart from '@/components/BarChart'
import LineChart from '@/components/LineChart'
import withAuth from '@/components/withAuth';
import { ChevronsUpDown, DollarSign, Eye, EyeOff, Home, HomeIcon, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'


type Props = {}

const DashboardPage = (props: Props) => {

    const [blurBalance, setBlurBalance] = useState(true)
    const [blurPropertyIssued, setBlurPropertyIssued] = useState(true)
    const [blurPropertyReserved, setBlurPropertyReserved] = useState(true)

    // const [isMounted, setIsMounted] = useState(false)

    // useEffect(() => {
    //     setIsMounted(true)
    // }, [])

    // useEffect(() => {
    //     import('lucide-react').then((Lucide) => {
    //         // Your component logic that depends on Lucide icons
    //     })
    // }, [])

    // if (!isMounted) {
    //     return null
    // }
    
    return (
        <div className="">
            <div className="flex justify-between items-center px-4 md:px-8 py-5">
                <p className="text-sm md:text-2xl font-[500]">Dashboard</p>
            </div>


            {/* Dashboard Cards */}
            <div className='bg-[#F0F2F5] py-5 px-4 md:px-8 flex flex-col gap-y-4'>

                <div className='w-full grid grid-cols-10 gap-x-[10px] overflow-x-auto'>
                    <div className='h-[179px] bg-black col-span-4 text-white px-8 py-9 rounded-md flex flex-col justify-between'>
                        <div>
                            <DollarSign className='' color='#B1924E' />
                        </div>
                        <div className=''>
                            <p className="font-light mb-1 text-sm text-[#D8D8D8]">Wallet balance</p>
                            <div className='flex justify-between items-center w-[95%]'>
                                <div className="flex gap-3 items-center">
                                    <p className={`text-xl md:text-2xl ${blurBalance && "blur-[5px] "}`}>₦239,000,000</p>
                                    <button onClick={() => setBlurBalance(prev => !prev)}>
                                        {blurBalance ? <Eye /> : <EyeOff />}
                                    </button> 
                                </div>
                                <p className='text-xs text-[#989898]'>23%</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[179px] border border-[#585978] col-span-3 text-black px-6 py-9 rounded-md flex flex-col justify-between'>
                        <div>
                            <DollarSign className='' color='#B1924E' />
                        </div>
                        <div className=''>
                            <p className="font-light mb-1 text-sm text-[#585978]">Total Property Issued</p>
                            <div className='flex justify-between items-center'>
                                <div className="flex gap-3 items-center">
                                    <p className={`text-xl md:text-2xl ${blurPropertyIssued && "blur-[5px] "}`}>₦239,000,000</p>
                                    <button onClick={() => setBlurPropertyIssued(prev => !prev)}>
                                        {blurPropertyIssued ? <Eye /> : <EyeOff />}
                                    </button>
                                </div>
                                <p className='text-xs text-[#0C7C2A]'>23%</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[179px] border border-[#585978] col-span-3 text-black px-6 py-9 rounded-md flex flex-col justify-between'>
                        <div>
                            <DollarSign className='' color='#B1924E' />
                        </div>
                        <div className=''>
                            <p className="font-light mb-1 text-sm text-[#585978]">Total Property Reserved</p>
                            <div className='flex justify-between items-center'>
                                <div className="flex gap-3 items-center">
                                    <p className={`text-xl md:text-2xl ${blurPropertyReserved && "blur-[5px] "}`}>₦239,000,000</p>
                                    <button onClick={() => setBlurPropertyReserved(prev => !prev)}>
                                        {blurPropertyReserved ? <Eye /> : <EyeOff />}
                                    </button>
                                </div>
                                <p className='text-xs text-[#0C7C2A]'>23%</p>
                            </div>
                        </div>
                    </div>
                    
                </div> 


                {/* Property Details */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-2 lg:gap-x-8 my-1'>
                        <div className='flex items-center gap-4 bg-white rounded-md p-4'>
                            <div className='h-14 w-14 rounded-full bg-[#F4F7FE] flex justify-center items-center'>
                                <HomeIcon color='#B1924E' />
                            </div>
                            <div>
                                <p className='text-[#585978] text-xs md:text-sm'>All Properties</p>
                                <p className='text-[#13142D] text-3xl'>1,820</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 bg-white rounded-md p-4'>
                            <div className='h-14 w-14 rounded-full bg-[#F4F7FE] flex justify-center items-center'>
                                <HomeIcon color='#B1924E' />
                            </div>
                            <div>
                                <p className='text-[#585978] text-sm'>Pending</p>
                                <p className='text-[#13142D] text-3xl'>100</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 bg-white rounded-md p-4'>
                            <div className='h-14 w-14 rounded-full bg-[#F4F7FE] flex justify-center items-center'>
                                <HomeIcon color='#B1924E' />
                            </div>
                            <div>
                                <p className='text-[#585978] text-sm'>Approved</p>
                                <p className='text-[#13142D] text-3xl'>1,000</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 bg-white rounded-md p-4'>
                            <div className='h-14 w-14 rounded-full bg-[#F4F7FE] flex justify-center items-center'>
                                <HomeIcon color='#B1924E' />
                            </div>
                            <div>
                                <p className='text-[#585978] text-sm'>Rejected</p>
                                <p className='text-[#13142D] text-3xl'>720</p>
                            </div>
                        </div>
                </div>


                {/* Graph and Chart */}
                <div className='h-full lg:h-[345px] w-full grid grid-cols-2 gap-x-3'>
                    <div className='col-span-2 lg:col-span-1 rounded-lg bg-white flex justify-center items-center'>
                        <LineChart />
                        {/* Chart and Graph */}
                    </div>
                    <div className='col-span-2 lg:col-span-1 h-full rounded-lg bg-white py-3 flex justify-center items-center'>
                        <BarChart />
                    </div>
                    
                </div>

                <div className='grid grid-cols-2 gap-x-3 '>
                    <div className='col-span-1 p-2 bg-white rounded-md'>
                        <h3 className='text-lg md:text-xl font-semibold'>Best Selling Properties</h3>
                        <div className=" w-full h-[350px] overflow-y-auto mt-3">
                            <table className="min-w-full bg-white">
                                <thead className='font-normal text-sm'>
                                    <tr className='bg-[#E7DDC8]'>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-1 text-left'>
                                                <p>Property</p>
                                                <button>
                                                    <ChevronsUpDown color='#989898' />
                                                </button>
                                            </div>
                                        </th>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-1 text-left'>
                                                <p>Location</p>
                                                <button>
                                                    <ChevronsUpDown color='#989898' />
                                                </button>
                                            </div>
                                        </th>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-1 text-left'>
                                                <p>Amount</p>
                                                <button>
                                                    <ChevronsUpDown color='#989898' />
                                                </button>
                                            </div>
                                        </th>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-2 text-left'>
                                                <p>Action</p>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=" bg-white h-full text-sm">
                                    {[...Array(10)].map((transaction, index) => (
                                        <tr key={index} className={``}>
                                            <td className="px-4 py-4 whitespace-nowrap text-left flex gap-2">
                                                <Image src={"/propertyImage.svg"} alt='' width={24} height={24} />
                                                INVLEKKI102
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                Ikeja, Lagos
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                $400,033.85
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className='flex justify-center'>
                                                    <Eye size={18} className='cursor-pointer' />
                                                </div>
                                            </td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='col-span-1 p-2 bg-white rounded-md'>
                        <h3 className='text-lg md:text-xl font-semibold'>Token Issued</h3>
                        <div className=" w-full h-[350px] overflow-y-auto mt-3">
                            <table className="min-w-full bg-white">
                                <thead className='font-normal text-sm'>
                                    <tr className='bg-[#E7DDC8]'>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-1 text-left'>
                                                <p>Tokens</p>
                                                <button>
                                                    <ChevronsUpDown color='#989898' />
                                                </button>
                                            </div>
                                        </th>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-1 text-left'>
                                                <p>Spot Price</p>
                                                <button>
                                                    <ChevronsUpDown color='#989898' />
                                                </button>
                                            </div>
                                        </th>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-1 text-left'>
                                                <p>Volume</p>
                                                <button>
                                                    <ChevronsUpDown color='#989898' />
                                                </button>
                                            </div>
                                        </th>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-2 text-left'>
                                                <p>Date</p>
                                                <button>
                                                    <ChevronsUpDown color='#989898' />
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=" bg-white h-full text-sm">
                                    {[...Array(10)].map((transaction, index) => (
                                        <tr key={index} className={``}>
                                            <td className="px-4 py-4 whitespace-nowrap text-left flex gap-2">
                                                <Image src={"/propertyImage.svg"} alt='' width={24} height={24} />
                                                INVLEKKI102
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                ₦400,033.85
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                ₦948.55
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                12th Jan, 2023
                                            </td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>



                {/* Designated Users, Reviews and Notifications */}
                <div className='grid grid-cols-2 gap-x-3 '>
                    <div className='col-span-1 p-2 bg-white rounded-md'>
                        <h3 className='text-lg md:text-xl font-semibold'>Designated Users</h3>
                        <div className=" w-full h-[350px] overflow-y-auto mt-3">
                            <table className="min-w-full bg-white">
                                <thead className='font-normal text-sm'>
                                    <tr className='bg-[#E7DDC8]'>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-1 text-left'>
                                                <p>User</p>
                                                <button>
                                                    <ChevronsUpDown color='#989898' />
                                                </button>
                                            </div>
                                        </th>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-1 text-left'>
                                                <p>Location</p>
                                                <button>
                                                    <ChevronsUpDown color='#989898' />
                                                </button>
                                            </div>
                                        </th>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-1 text-left'>
                                                <p>Amount</p>
                                                <button>
                                                    <ChevronsUpDown color='#989898' />
                                                </button>
                                            </div>
                                        </th>
                                        <th className="py-2 px-4 font-normal">
                                            <div className='flex gap-2 text-left'>
                                                <p>Action</p>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=" bg-white h-full text-sm">
                                    {[...Array(10)].map((transaction, index) => (
                                        <tr key={index} className={``}>
                                            <td className="px-4 py-4 whitespace-nowrap text-left flex gap-2">
                                                <Image src={"/propertyImage.svg"} alt='' width={24} height={24} />
                                                INVLEKKI102
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                Ikeja, Lagos
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                $400,033.85
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className='flex justify-center'>
                                                    <Eye size={18} className='cursor-pointer' />
                                                </div>
                                            </td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='grid grid-cols-11 gap-x-3'>
                            <div className='col-span-5'>
                                <div className='col-span-1 p-2 bg-white rounded-md'>
                                    <div className='flex justify-between'>
                                        <h3 className='text-lg md:text-xl font-semibold'>Reviews</h3>
                                        <Link href="/token-issuers/reviews" className='text-[#585978] underline text-sm'>See all</Link>
                                    </div>
                                    <div className=" w-full h-[350px] overflow-y-auto mt-3 flex flex-col gap-y-4">
                                    {[...Array(15)].map((review, index) => (
                                        <div key={index} className="w-52 h-14 justify-start items-start gap-0.5 inline-flex">
                                            <div className="justify-start items-start gap-2 flex">
                                                <div className='w-8 h-8 relative'>
                                                    <Image className=" rounded-sm" src="/review.svg" fill alt='' />
                                                </div>
                                                <div className="flex-col justify-start items-start inline-flex gap-y-1">
                                                    <div className="flex-col justify-start items-start flex gap-0.5">
                                                        <div className="w-28 text-slate-900 text-sm font-medium">INVLEKKI102</div>
                                                        <div className="w-28 text-slate-600 text-xs font-normal">Lekki Phase 1</div>
                                                    </div>
                                                    <div className="text-slate-400 text-xs font-medium font-['Inter'] leading-none">2h ago</div>
                                                </div>
                                            </div>
                                            <div className="justify-start items-center gap-0.5 flex">
                                                <div className="text-slate-900 text-sm font-semibold font-['Inter'] leading-tight flex items-center gap-1">
                                                    <Star color='#F6CA56' fill='#F6CA56' />
                                                    5.0
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-6'>
                                <div className='col-span-1 p-2 bg-white rounded-md'>
                                    <div className='flex justify-between'>
                                        <h3 className='text-lg md:text-xl font-semibold'>Notifications</h3>
                                        <Link href="/token-issuers/notifications" className='text-[#585978] underline text-sm'>See all</Link>
                                    </div>
                                    <div className=" w-full h-[350px] overflow-y-auto mt-3 flex flex-col gap-y-4">
                                    {[...Array(15)].map((review, index) => (
                                        <div key={index} className=" justify-start items-start gap-0.5 inline-flex">
                                            <div className="justify-start items-start gap-2 flex">
                                                <div className='w-8 h-8 relative flex-shrink-0'>
                                                    <Image className=" rounded-sm" src="/review.svg" fill alt='' />
                                                </div>
                                                <div className="flex-col justify-start items-start inline-flex gap-y-1">
                                                    <div className="flex-col justify-start items-start flex gap-0.5 w-[90%]">
                                                        <div className=" text-slate-900 text-sm font-medium">Technology behind the Blockchain</div>
                                                        <div className=" text-slate-600 text-xs font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
                                                    </div>
                                                    <div className="text-slate-400 text-xs font-medium font-['Inter'] leading-none">2h ago</div>
                                                </div>
                                            </div>
                                            {/* <div className="justify-start items-center gap-0.5 flex">
                                                <div className="text-slate-900 text-sm font-semibold font-['Inter'] leading-tight flex items-center gap-1">
                                                    <Star color='#F6CA56' fill='#F6CA56' />
                                                    5.0
                                                </div>
                                            </div> */}
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default withAuth(DashboardPage)