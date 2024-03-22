import { Button } from '@/components/reusable/Buttons'
import congrat from '../../../../assets/icons/congratulation.svg'
import Image from 'next/image'
import Link from 'next/link'


const Success = () => {
  return (
    <div className='paddingX flex flex-col items-center justify-center h-screen'>
      <Image src={congrat} alt="Congratulation" className='mb-[37px]'/>
      <h1 className="text-neutral-950 text-4xl font-bold leading-[44px] mb-[24px]">Success</h1>
      <p className="w-[228px] text-center text-zinc-900 text-sm font-normal leading-tight mb-[39px]">You have successfully completed your account registration.</p>
      <Link href='/token-issuers/dashboard'><Button variant='dark'>Go to Dashboard</Button></Link>
    </div>
  )
}
export default Success