import React from 'react'
import All_Bids_header_Text from './All_BidsJsx/All_Bids_header_Text'
import All_Bids_Card_Data from './All_BidsJsx/All_Bids_Card_Data'
import All_Bids_List from './All_BidsJsx/All_Bids_List'

function Page() {
  return (
    <div>
        <All_Bids_header_Text></All_Bids_header_Text>
        <All_Bids_Card_Data></All_Bids_Card_Data>
        <All_Bids_List></All_Bids_List>
    </div>
  )
}

export default Page