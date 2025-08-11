import React from 'react'
import Ether_Price from './(User_Sidebar_Jsx)/UserDashboar_Jsx/Ether_Price'
import My_Details from './(User_Sidebar_Jsx)/UserDashboar_Jsx/My_Details'
import Treanding_Bits from './(User_Sidebar_Jsx)/UserDashboar_Jsx/Treanding_Bits'
import Treanding_Bits_Card from './(User_Sidebar_Jsx)/UserDashboar_Jsx/Treanding_Bits_Card'
import Recent_Activity from './(User_Sidebar_Jsx)/UserDashboar_Jsx/Recent_Activity'
import Top_Creator from './(User_Sidebar_Jsx)/UserDashboar_Jsx/Top_Creator'
import Recent_Bits from './(User_Sidebar_Jsx)/UserDashboar_Jsx/Recent_Bits'


function Page() {
  return (
    <div className='pt-10'>
      <My_Details></My_Details>
      <Treanding_Bits></Treanding_Bits>
      <Treanding_Bits_Card></Treanding_Bits_Card>
      <Recent_Activity></Recent_Activity>
      <Top_Creator></Top_Creator>
      <Recent_Bits></Recent_Bits>
       {/* <Ether_Price></Ether_Price> */}
    </div>
  )
}

export default Page