"use client"
import dashboardIcon from "../assets/icons/dashboard.svg"
import reporting from "../assets/icons/reporting.svg"
import tokenIssuance from "../assets/icons/token-issuance.svg"
import tokenReview from "../assets/icons/token-review.svg"
import dashboardIconActive from "../assets/icons/dashboardActive.svg"
import tokenIssuanceActive from "../assets/icons/token-issuanceActive.svg"
import reportingActive from "../assets/icons/reportingActive.svg"
import tokenReviewActive from "../assets/icons/token-reviewActive.svg"
import logo from "../assets/icons/logo.svg"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import ProfileDialog from "./ProfileDialog"


type Props = {
    userData: {

    }
}
const Sidebar = ({ userData }: Props) => {

    const pathname: string = usePathname();
    // console.log(pathname)

    const routes = [
        // {
        //     label: "Dashboard",
        //     path: "dashboard",
        //     icon: pathname.includes("/admin/dashboard") ? dashboardIconActive : dashboardIcon,
        //     href: "/admin/dashboard",
        // },
        {
            label: "User Management",
            path: "user-management",
            icon: pathname.includes("/admin/user-management/manage-users") ? tokenIssuanceActive : tokenIssuance,
            href: "/admin/user-management/manage-users",
        },
        {
            label: "Token Review",
            path: "token-review",
            icon: pathname.includes("/admin/token-review") ? tokenReviewActive : tokenReview,
            href: "/admin/token-review",
        },
        // {
        //     label: "Profile Management",
        //     path: "profile-management",
        //     icon: pathname.includes("/admin/profile-management") ? reportingActive : reporting,
        //     href: "/admin/profile-management",
        // },
    ]
  return (
      <div className="space-y-4 py-4 flex flex-col h-full bg-[#1B1B1B] text-white text-sm">
          <div className="py-5 flex-1">
              <Link href="admin/dashboard" className="flex items-center pl-10 mb-14">
                  <div className="relative w-full flex">
                      <Image src={logo} alt='' className='w-[111px] h-11' />
                  </div>
              </Link>
              <div className='flex flex-col gap-y-4'>
                  {routes.map((route) => (
                      <Link href={route.href} key={route.href} className={`group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 transition h-[56px]
                          ${pathname.includes(`/admin/${route.path}`) ? "text-[#B1924E] bg-white/10 border-l-4 border-l-[#B1924E] pl-5" : "text-[#545454] pl-6"}`
                      }>
                          <div className="flex gap-2 items-center flex-1">
                              {/* <route.icon /> */}
                              <Image src={route.icon} alt={route.label} />
                              {route.label}
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
        <ProfileDialog userData={userData} />
      </div>
  )
}

export default Sidebar