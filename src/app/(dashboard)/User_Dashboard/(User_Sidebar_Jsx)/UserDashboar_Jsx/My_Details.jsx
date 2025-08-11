import React from 'react'
import image1 from '../../../../../../public/BannerImg/17.jpg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function My_Details() {
  return (
    <div className=' grid grid-cols-2 bg-white rounded-3xl p-10 mx-10 gap-x-10 items-center'>
        <div>
            <Image src={image1} className='rounded-3xl'></Image>
        </div>
        <div className=' space-y-7'>
            <div className='flex items-center gap-3'>
                <Image src={image1} className=' h-12 w-12 rounded-full'></Image>
                <h3 className='text-2xl font-bold'>John Abraham</h3>
            </div>
            <div>
                <h3 className='text-3xl font-bold'>Brighten LQ</h3>
            </div>
             <div className=' flex justify-between'>
              <div>
                <h4 className=' text-xl text-[#9E9E9E]'>Auction Time</h4>
                <h2 className='text-3xl font-bold text-[#6F4EF2] pt-4'>3h 1m 50s</h2>
              </div>
              <div>
                <h4 className=' text-xl text-[#9E9E9E] '>Current Bid :<span className='text-xl pl-3 font-bold text-[#6F4EF2] pt-3'>3h 1m 50s</span></h4>
                <span className='text-3xl font-bold text-[#6F4EF2] pt-4 flex items-end justify-end'>0.15 ETH</span>
              </div>
            </div>
            <div className=' grid grid-cols-2 gap-x-5 px-5'>
                <Button className="h-14 rounded-full w-full text-xl bg-[#6F4EF2]">Place A Bids </Button>
                <Button className="h-14 rounded-full w-full text-xl bg-[#F73164]">Details </Button>
            </div>
        </div>
    </div>
  )
}
