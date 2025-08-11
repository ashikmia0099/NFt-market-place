import React from 'react'

import image1 from '../../../../../../../public/BannerImg/17.jpg'
import Image from 'next/image'
import { FaCheck, FaUserLock } from "react-icons/fa6";


export default function My_Profile() {
    return (
        <div className=' p-10 bg-white  rounded-3xl mt-10'>
            <Image src={image1} className=' h-20 w-20 rounded-full'></Image>
            <div className=' mt-5'>
                <h1 className=' text-2xl font-bold'>
                    Welcome, Jannatul Maowa!
                </h1>
                <p className=' text-xl font-normal text-[#9E9E9E] pt-1'> Looks like you are not verified yet. Verify yourself to use the full potential of Xtrader.</p>
            </div>
            <div className=' mt-10'>
                <div className=' flex items-center border-b-2 pb-3'>

                    <p className=''><FaCheck className=' text-2xl bg-[#51BB25] h-10 w-10 rounded-full p-2 text-white' /></p>
                    <p className=' text-lg text-[#6F4EF2]  px-5'> Verify Account</p>
                </div>
                <div className=' flex items-center mt-5'>

                    <p className=''><FaUserLock className=' text-2xl bg-[#51BB25] h-10 w-10 rounded-full p-2 text-white' /></p>
                    <p className=' text-lg text-[#6F4EF2]  px-5'>Two Fector Authentication (2FA)</p>
                </div>
            </div>
        </div>
    )
}
