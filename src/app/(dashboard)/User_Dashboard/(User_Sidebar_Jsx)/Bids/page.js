import React from 'react'
import Bids_Header_Data from './BidsJsx/Bids_Header_Data'
import Card_Data from './BidsJsx/Card_Data'
import All_Biders_Data from './BidsJsx/All_Biders_Data'

export default function Page() {
  return (
    <div className=' mt-10'>
      <Bids_Header_Data></Bids_Header_Data>
      <Card_Data></Card_Data>
      <All_Biders_Data></All_Biders_Data>
    </div>
  )
}
