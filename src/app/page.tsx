"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/admin/login')
    }, 1000)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div></div>
  )
}
