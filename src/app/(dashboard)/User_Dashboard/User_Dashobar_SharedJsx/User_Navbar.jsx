"use client";
import React from 'react';
import { Input } from "@/components/ui/input"
import { IoNotifications } from 'react-icons/io5';
import { CgProfile } from "react-icons/cg";

export default function User_Navbar() {
    return (
        <div className="sticky top-0 z-20 bg-[#F2F2F2] backdrop-blur-sm px-10 flex justify-between items-center h-20 border-b">
            <div>
                <Input
                    type="search"
                    placeholder="Search Here"
                    className="h-16 text-black w-96 bg-white text-2xl placeholder:text-2xl border-none shadow-none"
                />
            </div>
            <div className="flex items-center gap-5">
                <IoNotifications className="text-4xl text-[#A8A8A8]" />
                <CgProfile className="text-4xl text-[#A8A8A8]" />
            </div>
        </div>
    );
}
