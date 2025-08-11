import React from 'react'
import My_Profile from './ProfileJsx/My_Profile'
import Profile_header_text_ from './ProfileJsx/Profile_header_text_'
import Following from './ProfileJsx/Following'

export default function Page() {
  return (
    <div>
        <Profile_header_text_></Profile_header_text_>
        <My_Profile></My_Profile>
        <Following></Following>
    </div>
  )
}
