"use client"
import MobileSidebar from '@/components/MobileSidebar'
import Sidebar from '@/components/Sidebar'
import LoadingOverlay from '@/components/reusable/LoadingOverlay'
import withAuth from '@/components/withAuth'
import { useUser } from '@/hooks/queries'
import React from 'react'

type Props = {
  children: React.ReactNode
}
// eslint-disable-next-line @next/next/no-async-client-component
const Layout = ({children}: Props) => {

  const {data, isPending, isFetched, isLoading, } = useUser()

  return (
    <div className='h-full relative'>
      {isLoading && <LoadingOverlay />}
      <div className='relative'>
        <div className='hidden h-full md:flex md:flex-col md:w-52 lg:w-72 md:fixed md:inset-y-0 bg-gray-900'>
          <Sidebar userData={data} />
        </div>
        <div className='absolute right-4 top-4'>
          <MobileSidebar />
        </div>
      </div>
      <main className='md:pl-52 lg:pl-72'>
        {children}
      </main>
    </div>
  )
}

export default withAuth(Layout)