import { Button } from '@/components/ui/button'
import React from 'react'

export default function
    () {
    return (
        <div className=' px-10'>
            {/* category section */}


            <div className=' grid grid-cols-2 gap-10 my-20'>
                {/* left site */}
                <div>
                    <h1 className=' text-2xl font-bold py-5'>Balance Details</h1>
                    <div className=' bg-white p-10 rounded-2xl'>

                        <div>
                            <h4 className=' text-xl text-[#9E9E9E]'>Total Balance</h4>
                            <h2 className='text-4xl font-bold text-[#000000] pt-2'>$221,478</h2>
                            <div className=' grid grid-cols-2  gap-5 pt-6 '>
                                <div className='bg-[#F5F6FA] p-6 rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h4 className=' text-xl text-[#9E9E9E] '>Last Month</h4>
                                    <h2 className='text-3xl font-bold text-[#000000] hover:text-white'>$42,678</h2>
                                </div>
                                <div className='bg-[#F5F6FA] p-6 rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h4 className=' text-xl text-[#9E9E9E] '>Expenses</h4>
                                    <h2 className='text-3xl font-bold text-[#000000] hover:text-white'>$42,678</h2>
                                </div>
                                <div className='bg-[#F5F6FA] p-6 rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h4 className=' text-xl text-[#9E9E9E] '>Taxes</h4>
                                    <h2 className='text-3xl font-bold text-[#000000] hover:text-white'>$42,678</h2>
                                </div>
                                <div className='bg-[#F5F6FA] p-6 rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h4 className=' text-xl text-[#9E9E9E] '>Debt</h4>
                                    <h2 className='text-3xl font-bold text-[#000000] hover:text-white'>$42,678</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* right site */}
                <div>
                    <div className=' flex justify-between items-center'>
                        <span><h1 className=' text-2xl font-bold py-5'>Latest Transaction</h1></span>
                        <span><h1 className=' text-2xl font-normal py-3 text-[#6F4EF2]'>See More</h1></span>
                    </div>
                    <div className='space-y-3'>

                        <div className='bg-white  p-5 rounded-2xl space-y-5'>
                            <div className='flex gap-5 items-center justify-between'>
                                <div className='rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h2 className='text-3xl font-bold text-[#000000] hover:text-white'>Terry Camacho</h2>
                                    <h4 className=' text-xl text-[#9E9E9E] '>60 Items </h4>

                                </div>
                                <div className=' rounded-2xl hover:bg-[#6F4EF2] '>

                                    <h2 className='text-3xl font-bold text-[#6F4EF2]'>$42,678</h2>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white  p-5 rounded-2xl space-y-5'>
                            <div className='flex gap-5 items-center justify-between'>
                                <div className='rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h2 className='text-3xl font-bold text-[#000000] hover:text-white'>Terry Camacho</h2>
                                    <h4 className=' text-xl text-[#9E9E9E] '>60 Items </h4>

                                </div>
                                <div className=' rounded-2xl hover:bg-[#6F4EF2] '>

                                    <h2 className='text-3xl font-bold text-[#6F4EF2]'>$42,678</h2>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white  p-5 rounded-2xl space-y-5'>
                            <div className='flex gap-5 items-center justify-between'>
                                <div className='rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h2 className='text-3xl font-bold text-[#000000] hover:text-white'>Terry Camacho</h2>
                                    <h4 className=' text-xl text-[#9E9E9E] '>60 Items </h4>

                                </div>
                                <div className=' rounded-2xl hover:bg-[#6F4EF2] '>

                                    <h2 className='text-3xl font-bold text-[#6F4EF2]'>$42,678</h2>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white  p-5 rounded-2xl space-y-5'>
                            <div className='flex gap-5 items-center justify-between'>
                                <div className='rounded-2xl hover:bg-[#6F4EF2] '>
                                    <h2 className='text-3xl font-bold text-[#000000] hover:text-white'>Terry Camacho</h2>
                                    <h4 className=' text-xl text-[#9E9E9E] '>60 Items </h4>

                                </div>
                                <div className=' rounded-2xl hover:bg-[#6F4EF2] '>

                                    <h2 className='text-3xl font-bold text-[#6F4EF2]'>$42,678</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
