"use client"

import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function withAuth(Component: any) {
  return function WithAuth(props: any) {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
    }, [])

    

    let token: string | null = null;

    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
    }
    useEffect(() => {
      if(!token) {
        redirect("/token-issuers/login")
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    if(!token) {
      return null
    }
    if (!isMounted) {
      return null
    }

    return <Component {...props} />
  }
}