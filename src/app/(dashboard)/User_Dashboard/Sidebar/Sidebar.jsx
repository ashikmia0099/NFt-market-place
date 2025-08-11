'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../../../public/HowItImg/Icon (1).png'
import { MdDashboard } from 'react-icons/md'
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoWalletOutline } from 'react-icons/io5';
import { CiSettings } from 'react-icons/ci';
import { LiaSignOutAltSolid } from "react-icons/lia";
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link'
import { usePathname } from 'next/navigation' // ✅ to get current route

export default function Sidebar() {
    const pathname = usePathname()

    const menuItems = [
        { href: '/User_Dashboard', icon: MdDashboard, label: 'Dashboard' },
        { href: '/User_Dashboard/Bids', icon: PiShoppingBagOpenFill, label: 'Bids' },
        { href: '/User_Dashboard/Saved', icon: MdFavorite, label: 'Saved' },
        { href: '/User_Dashboard/Collection', icon: FaStar, label: 'Collection' },
        { href: '/User_Dashboard/Wallet', icon: IoWalletOutline, label: 'Wallet' },
        { href: '/logout', icon: LiaSignOutAltSolid, label: 'Logout' },
        { href: '/User_Dashboard/Profile', icon: CgProfile, label: 'Profile' },
        { href: '/User_Dashboard/Settings', icon: CiSettings, label: 'Settings' },
    ]

    return (
        <div className='items-center justify-center space-y-10 bg-white mt-5 relative'>
            <div className='flex items-center justify-center'>
                <Image src={logo} className='h-10 w-10' alt="Logo" />
            </div>

            {menuItems.map((item, index) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                    <div key={index} className='relative group flex items-center justify-center'>
                        <Link href={item.href}>
                            <Icon
                                className={`text-4xl transition-colors duration-200 
                                    ${isActive ? 'text-[#442C91]' : 'text-[#A8A8A8] hover:text-[#442C91]'}`}
                            />
                        </Link>
                        <div className="absolute left-14 top-1/2 -translate-y-1/2 
                            opacity-0 group-hover:opacity-100 
                            bg-white text-lg px-2 shadow-sm py-1 rounded 
                            whitespace-nowrap transition-opacity duration-300 z-50 ml-10 font-semibold text-[#442C91]">
                            {item.label}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
