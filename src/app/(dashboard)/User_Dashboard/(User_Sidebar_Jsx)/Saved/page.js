import React from 'react'
import Saved_header_Text from './SavedJsx/Saved_header_Text'
import All_Saved_data from './SavedJsx/All_Saved_data'

export default function page() {
  return (
    <div className=' mt-10'>
        <Saved_header_Text></Saved_header_Text>
        <All_Saved_data></All_Saved_data>
    </div>
  )
}
