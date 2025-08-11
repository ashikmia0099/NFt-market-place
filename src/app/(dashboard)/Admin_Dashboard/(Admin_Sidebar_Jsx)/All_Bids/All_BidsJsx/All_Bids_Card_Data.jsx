

import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { MdFeaturedPlayList } from "react-icons/md";
import { RiFileListFill } from "react-icons/ri";


export default function All_Bids_Card_Data() {
    return (
        <div className=' px-10 pt-10'>
            <div className=' grid grid-cols-4 gap-x-5 '>
                <div className=' bg-white rounded-3xl flex p-5 gap-x-5 items-center '>
                    <div className='bg-[#6F4EF2] p-5 rounded-full'>
                        <FaFileAlt className='text-3xl text-white ' />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>24K</h1>
                        <h4 className='text-xl font-medium text-[#9E9E9E]'>Artworks</h4>
                    </div>
                </div>
                <div className=' bg-white rounded-3xl flex p-5 gap-x-5 items-center '>
                    <div className='bg-[#51BB25] p-5 rounded-full'>
                        <FiFileText className='text-3xl text-white ' />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>44K</h1>
                        <h4 className='text-xl font-medium text-[#9E9E9E]'>Auction</h4>
                    </div>
                </div>
                <div className=' bg-white rounded-3xl flex p-5 gap-x-5 items-center '>
                    <div className='bg-[#F8D62B] p-5 rounded-full'>
                        <MdFeaturedPlayList className='text-3xl text-white ' />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>240</h1>
                        <h4 className='text-xl font-medium text-[#9E9E9E]'>Creators</h4>
                    </div>
                </div>
                <div className=' bg-white rounded-3xl flex p-5 gap-x-5 items-center '>
                    <div className='bg-[#DC3545] p-5 rounded-full'>
                        <RiFileListFill className='text-3xl text-white ' />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>24</h1>
                        <h4 className='text-xl font-medium text-[#9E9E9E]'>Canceled</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
