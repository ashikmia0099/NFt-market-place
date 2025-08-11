
import { Button } from '@/components/ui/button'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'

import image1 from '../../../../../../../public/HowItImg/Icon (1).png'
import { RxCross2 } from "react-icons/rx";


const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        Item_List: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]



export default function All_Bids_List() {
    return (
        <div className=' px-10 pt-10'>
            <div className=' flex items-center justify-between'>
                <span>
                    <h3 className=' text-3xl font-bold'>Active Bids</h3>
                </span>
                <span>
                    <Button className="px-20 h-16 text-2xl rounded-full bg-[#6F4EF2] cursor-pointer">Place a Bid</Button>
                </span>
            </div>

            {/* table bar  */}

            <Table className="mt-16 rounded-2xl">
               
                <TableHeader className=" bg-white h-20 py-10 border-none my-10">
                    <TableRow className='px-5'>
                        <TableHead className="text-xl font-semibold text-center">ID</TableHead>
                        <TableHead className="text-xl font-semibold text-center">Item List</TableHead>
                        <TableHead className="text-xl font-semibold text-center">Open Price	</TableHead>
                        <TableHead className="text-xl font-semibold text-center">Your Offer	</TableHead>
                        <TableHead className="text-xl font-semibold text-center">Recent Offer	</TableHead>
                        <TableHead className="text-xl font-semibold text-center">Time Left	</TableHead>
                        <TableHead className="text-xl font-semibold text-center">Action	</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody className="space-y-5 my-5 bg-white">
                    <TableRow className="bg-white rounded-2xl border-none my-3 space-y-5">
                        <TableCell className="text-4xl font-bold text-center">1</TableCell>
                        <TableCell className="text-center">
                            <div className=' flex items-center gap-x-5'>
                                <span>
                                    <Image src={image1} className=' h-20 w-20'></Image>
                                </span>
                                <span>
                                    <h3 className='text-2xl font-bold '>Cutes Cube Cool</h3>
                                    <p className='text-xl font-medium text-[#9E9E9E] pt-1'>John Abraham</p>
                                </span>
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <p className='text-xl font-medium text-[#9E9E9E] pt-1'>0.0025 ETH</p>
                        </TableCell>
                        <TableCell className="text-center">
                            <p className='text-xl font-medium text-[#9E9E9E] pt-1'>0.0025 ETH</p>
                        </TableCell>
                        <TableCell  className="text-center">
                            <div className=' flex items-center gap-x-5'>
                                <span>
                                    <Image src={image1} className=' h-14 w-14'></Image>
                                </span>
                                <span>

                                    <p className='text-xl font-medium text-[#9E9E9E] pt-1'>0.0025 ETH</p>
                                </span>
                            </div>
                        </TableCell>

                        <TableCell  className="text-center">
                            <p className='text-xl font-medium text-[#9E9E9E] pt-1'>2 Hours 1 min 30s</p>
                        </TableCell>
                        <TableCell  className="text-center">
                            <p className='text-xl font-medium text-[#9E9E9E] pt-1'><RxCross2 /></p>
                        </TableCell>


                    </TableRow>
                </TableBody>
               

            </Table>
        </div>
    )
}



