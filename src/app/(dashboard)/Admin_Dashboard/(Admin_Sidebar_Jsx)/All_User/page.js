import React from 'react'
import All_User_list from './All_User_Jsx/All_User_list'
import All_User_Header_Text from './All_User_Jsx/All_User_Header_Text'

export default function page() {
  return (
    <div>
        <All_User_Header_Text></All_User_Header_Text>
        <All_User_list></All_User_list>
    </div>
  )
}
