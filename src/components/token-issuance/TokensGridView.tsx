import React from 'react'
import TokenDisplay from './TokenDisplay'

type Props = {}

const TokensGridView = (props: Props) => {
  return (
    <div className="mt-5 grid lg:grid-cols-2 gap-5 w-full">
      {assets
        // .filter((item) => menu === "all" || item.id === menu)
        .map((asset, index) => (
          <div key={index} className="col-span-1">
            <TokenDisplay asset={asset} />
          </div>
        ))}
    </div>
  )
}

const assets = [
  {
    image: "/selling.png",
    title: "Co-own",
    label: "Awaiting approval",
    id: "own",
    propClass: "Pre-purchased",
  },
  {
    image: "/offplan.png",
    title: "Co-build",
    label: "Returned",
    id: "build",
    propClass: "Wait-listed",
  },
  {
    image: "/trading.png",
    title: "Rental",
    label: "Selling",
    id: "rental",
    propClass: "Wait-listed",
  },
  {
    image: "/fullysold.png",
    title: "Debt",
    label: "Draft",
    id: "debt",
    propClass: "Wait-listed",
  },
];

export default TokensGridView