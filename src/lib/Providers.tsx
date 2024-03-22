"use client"
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient()

const Providers = ({ children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default Providers