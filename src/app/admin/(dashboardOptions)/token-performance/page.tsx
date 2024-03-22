import TokenPerformanceTable from '@/components/token-performance/TokenPerformanceTable'
import Link from 'next/link'
import React from 'react'

type Props = {}

const TokenPerformancePage = (props: Props) => {
  return (
    <div className=''>
      <div>
        <div className="flex justify-between items-center pt-5 pb-4 px-4 md:px-8">
          <p className="text-sm md:text-2xl font-[500]">Token Performance</p>
        </div>
      </div>

      <TokenPerformanceTable />
    </div>
  )
}

export default TokenPerformancePage