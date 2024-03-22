import GoBackButton from '@/components/token-issuance/GoBackButton'
import React from 'react'

type Props = {
  params: {
    tokenId: string
  }
}

const TokenDisplay = ({params: {tokenId}}: Props) => {
  console.log({ tokenId })
  return (
    <div>
      
      <GoBackButton />
      
      Token Display details here
    </div>
  )
}

export default TokenDisplay