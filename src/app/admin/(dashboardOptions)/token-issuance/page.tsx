"use client"
import { Button } from '@/components/reusable/Buttons'
import MultiStepForm from '@/components/token-issuance/MultiStepForm'
import TokensGridView from '@/components/token-issuance/TokensGridView'
import TokensTableView from '@/components/token-issuance/TokensTableView'
import { Grid, LayoutGrid, ListFilter, Search, Table2 } from 'lucide-react'
import React, { useState } from 'react'

type Props = {}

const TokenIssuancePage = (props: Props) => {
  const [view, setView] = useState("grid")
  return (
    <div className='px-4 md:px-8 pb-10'>
      <div>
        <div className="flex justify-between items-center pt-5 pb-4 ">
          <p className="text-sm md:text-2xl font-[500]">Property Token Issuance</p>
          <div className='flex gap-4'>
            <Button variant='outline'>View Tokens</Button>
            <MultiStepForm>
              <Button>Issue New Token</Button>
            </MultiStepForm>

          </div>
        </div>
      </div>


      {/* View and Filter setting */}
      <div className="flex items-center md:justify-end gap-2 mt-2">
        <div className='mr-2'>
          {view === "grid" && <Table2 color='#838383' className='cursor-pointer' onClick={() => setView("table")} />}
          {view === "table" && <LayoutGrid color='#585978' className='cursor-pointer' onClick={() => setView("grid")} />}
        </div>
        {/* <TransactionFilter> */}
        <button className="flex gap-2 items-center justify-center border h-10 rounded-md px-2">
          <ListFilter color="#838383" />
          <span className="text-[#838383]">Filters</span>
        </button>
        {/* </TransactionFilter> */}
        <div className="relative flex items-center w-">
          <input
            type="text"
            placeholder="search"
            className="border rounded-md h-10 outline-none pl-3 w"
          />
          <Search className="absolute right-1 " color="#838383" />
        </div>
      </div>

      {/* Display of Token(s) */}
      {view === "grid" && <TokensGridView />}
      {view === "table" && <TokensTableView />}
    </div>
  )
}

export default TokenIssuancePage