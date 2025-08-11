import { Input } from '@/components/ui/input'
import React from 'react'

function BannerSection() {
    return (
        <div className=' px-10 lg:px-28 max-w-7xl mx-auto border-b-2 border-[#3B3B3B] pt-36'>
            <div className=' h-full md:h-72 bg-[#2B2B2B] pb-5'>
                <h2 className=' text-5xl font-semibold text-white pt-10'>Browse Marketplace</h2>
                <p className=' text-2xl font-extralight pt-7 text-[#888888]'>Browse through more than 50k NFTs on the NFT Marketplace.</p>
                <label className="input w-full mt-7 rounded-full pt-2.5 pb-2.5">

                    <input type="search" className="grow py-4 text-white h-40 text-lg px-5" placeholder="Search your favourite NFTs" />
                    
                </label>
            </div>
        </div>
    )
}

export default BannerSection