"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({

    category_name: z.string().min(2, {
        message: "Category must be at least 2 characters.",
    }),
});

export default function All_Category_Form() {
    // ✅ useForm instance তৈরি
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category_name: "",
        },
    });

    // ✅ সাবমিট ফাংশন
    function onSubmit(values) {
        console.log(values);
    }

    return (
        <div className='px-10 pt-10 mb-20'>
            <div className='flex items-center justify-between'>
                <span>
                    <h3 className='text-3xl font-bold'>NFT Category</h3>
                </span>
            </div>
            {/* form */}
            <div className=" bg-white w-[50%] p-10 mt-10 rounded-2xl mx-auto">
                <div>
                    <h2 className=" text-xl font-bold text-center pb-5">Create Nft Category</h2>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="username"
                            className='w-96'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Category Name" className="h-12 text-lg" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full rounded-full bg-[#A259FF]">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
