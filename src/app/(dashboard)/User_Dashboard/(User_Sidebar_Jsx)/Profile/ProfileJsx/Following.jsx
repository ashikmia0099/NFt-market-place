
import React from 'react'


import image1 from '../../../../../../../public/BannerImg/17.jpg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Following() {
  return (
       <div className=' pt-10'>
                <div className=' flex justify-between items-center'>
                    <span><h1 className=' text-2xl font-bold py-5'>Following</h1></span>
                    <span><h1 className=' text-2xl font-normal py-3 text-[#6F4EF2]'>See More</h1></span>
                </div>
                <div className='grid grid-cols-2 gap-x-10 gap-y-7'>
    
                    <div className='bg-white  p-5 rounded-2xl space-y-5'>
                        <div className='flex gap-5 items-center justify-between'>
                            <div className=' flex items-center gap-x-3'>
                                <div>
                                    <Image src={image1} className='h-20 w-20 rounded-full'></Image>
                                </div>
                                <div className='rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h2 className='text-2xl font-bold text-[#000000] hover:text-white'>Terry Camacho</h2>
                                    <h4 className=' text-xl text-[#9E9E9E] '>Purchase by you for 0.05 ETH </h4>
    
                                </div>
                            </div>
                            <div className=' rounded-2xl hover:bg-[#6F4EF2] '>
    
                                <Button variant="outline" className="h-10 px-10 border-[#6F4EF2] rounded-full">Follow</Button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-white  p-5 rounded-2xl space-y-5'>
                        <div className='flex gap-5 items-center justify-between'>
                            <div className=' flex items-center gap-x-3'>
                                <div>
                                    <Image src={image1} className='h-20 w-20 rounded-full'></Image>
                                </div>
                                <div className='rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h2 className='text-2xl font-bold text-[#000000] hover:text-white'>Terry Camacho</h2>
                                    <h4 className=' text-xl text-[#9E9E9E] '>Purchase by you for 0.05 ETH </h4>
    
                                </div>
                            </div>
                            <div className=' rounded-2xl hover:bg-[#6F4EF2] '>
    
                                <Button variant="outline" className="h-10 px-10 border-[#6F4EF2] rounded-full">Follow</Button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-white  p-5 rounded-2xl space-y-5'>
                        <div className='flex gap-5 items-center justify-between'>
                            <div className=' flex items-center gap-x-3'>
                                <div>
                                    <Image src={image1} className='h-20 w-20 rounded-full'></Image>
                                </div>
                                <div className='rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h2 className='text-2xl font-bold text-[#000000] hover:text-white'>Terry Camacho</h2>
                                    <h4 className=' text-xl text-[#9E9E9E] '>Purchase by you for 0.05 ETH </h4>
    
                                </div>
                            </div>
                            <div className=' rounded-2xl hover:bg-[#6F4EF2] '>
    
                                <Button variant="outline" className="h-10 px-10 border-[#6F4EF2] rounded-full">Follow</Button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='bg-white  p-5 rounded-2xl space-y-5'>
                        <div className='flex gap-5 items-center justify-between'>
                            <div className=' flex items-center gap-x-3'>
                                <div>
                                    <Image src={image1} className='h-20 w-20 rounded-full'></Image>
                                </div>
                                <div className='rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h2 className='text-2xl font-bold text-[#000000] hover:text-white'>Terry Camacho</h2>
                                    <h4 className=' text-xl text-[#9E9E9E] '>Purchase by you for 0.05 ETH </h4>
    
                                </div>
                            </div>
                            <div className=' rounded-2xl hover:bg-[#6F4EF2] '>
    
                                <Button variant="outline" className="h-10 px-10 border-[#6F4EF2] rounded-full">Follow</Button>
                            </div>
                        </div>
                    </div>
                    
                    
                    
    
                </div>
            </div>
  )
}
