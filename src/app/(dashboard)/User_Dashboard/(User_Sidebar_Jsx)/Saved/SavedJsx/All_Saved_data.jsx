import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

import image1 from '../../../../../../../public/BannerImg/17.jpg'


export default function All_Saved_data() {
  return (
     <div className=' grid grid-cols-2 gap-10 my-20 px-10'>
            <div className=' bg-white p-10 rounded-2xl'>
              <Image src={image1} className=' rounded-2xl'></Image>
              <div>
                <h1 className='text-3xl font-semibold uppercase py-10'>Liguid Wave</h1>
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
                <div className='my-5 mt-10'>
                  <Button className="text-2xl w-full font-semibold h-14 px-10 rounded-full bg-[#6F4EF2] text-white ">Place A Bid</Button>
                </div>
              </div>
            </div>
            <div className=' bg-white p-10 rounded-2xl'>
              <Image src={image1} className=' rounded-2xl'></Image>
              <div>
                <h1 className='text-3xl font-semibold uppercase py-10'>Liguid Wave</h1>
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
                <div className='my-5 mt-10'>
                  <Button className="text-2xl w-full font-semibold h-14 px-10 rounded-full bg-[#6F4EF2] text-white ">Place A Bid</Button>
                </div>
              </div>
            </div>
            <div className=' bg-white p-10 rounded-2xl'>
              <Image src={image1} className=' rounded-2xl'></Image>
              <div>
                <h1 className='text-3xl font-semibold uppercase py-10'>Liguid Wave</h1>
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
                <div className='my-5 mt-10'>
                  <Button className="text-2xl w-full font-semibold h-14 px-10 rounded-full bg-[#6F4EF2] text-white ">Place A Bid</Button>
                </div>
              </div>
            </div>
            <div className=' bg-white p-10 rounded-2xl'>
              <Image src={image1} className=' rounded-2xl'></Image>
              <div>
                <h1 className='text-3xl font-semibold uppercase py-10'>Liguid Wave</h1>
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
                <div className='my-5 mt-10'>
                  <Button className="text-2xl w-full font-semibold h-14 px-10 rounded-full bg-[#6F4EF2] text-white ">Place A Bid</Button>
                </div>
              </div>
            </div>
            
          </div>
  )
}
