import React from 'react'
import Category_Header_Text from './All_Nft_Category_Jsx/Category_Header_Text'
import All_Category_List from './All_Nft_Category_Jsx/All_Category_List'
import All_Category_Form from './All_Nft_Category_Jsx/All_Category_Form'

function Page() {
  return (
    <div>
        <Category_Header_Text></Category_Header_Text>
        <All_Category_List></All_Category_List>
        <All_Category_Form></All_Category_Form>
    </div>
  )
}

export default Page