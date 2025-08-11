"use client"
import React, { useContext, useState } from 'react'
import signUpImage from "../../../../../../public/SignUpImage/SignUpImage.png"
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaFacebook } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from '@/ContextProvider/MyContext';
import { redirect, useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
import { TbBrandOauth } from "react-icons/tb";

function SignUpPages() {

    const {CreateUserEmailAndPassword,setUsers, users, updateUserProfile} = useContext(AuthContext);

   const [showpassword, setshowpasssword] = useState(false);
   const [showconfirmpassword, setshowconfirmpasssword] = useState(false);

   const router = useRouter()

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,20}$/;

    const handleSignUpPages = (e) =>{
        e.preventDefault()
        
        const form = e.target;
        const username = form.username.value
        const email = form.email.value
        const password = form.password.value
        const confirmpassword = form.confirmpassword.value
        
        console.log(username, email, password,confirmpassword)


        if(!passwordRegex.test(password)){

            toast.error('Password must contain at least one number, one uppercase letter, one lowercase letter, one special character, and be 8-20 characters long.')
            return
        }
        

        if(password !== confirmpassword){
            toast.error('Passwords do not match!')
            return
        }



        CreateUserEmailAndPassword(email, password)
        .then((currentuser) => {
           
            const user = currentuser.user 
            console.log(user)
            router.push('/components/MyNft');
        })
        .catch((error) => {
            
           toast.error ('Error', error)
        })
        
            


    }

   



    return (
         <div className='bg-[#2B2B2B]'>
              <div className='max-w-7xl mx-auto pt-20'>
                <div className='h-full lg:h-[700px] grid md:grid-cols-2 gap-10'>
                  <div>
                    <Image src={signUpImage} alt="Sign Up Image" />
                  </div>
                  <div className='py-1 lg:py-20 px-2 md:px-0'>
                    <h2 className='text-3xl lg:text-5xl font-semibold text-white pb-5 md:text-left text-center'>
                      Social Auth
                    </h2>
                    <p className='text-lg lg:text-2xl font-light text-white w-full md:w-[70%] leading-6 lg:leading-10 md:text-left text-center'>
                      Choose a wallet you want to connect. There are several wallet providers.
                    </p>
                    <div className='pt-5 lg:pt-10 space-y-4 mb-3 flex flex-col items-center justify-center md:items-start md:justify-items-start'>
                      <div
                       
                        className='h-[72] w-80 border-2 border-[#A259FF] rounded-[20px] btn bg-[#4c4c4c] shadow-2xs flex items-center gap-4 cursor-pointer'
                      >
                        <span>
                         
                          <FcGoogle  className='h-10 w-10' />
                        </span>
                        <span>
                          <h5 className='text-2xl text-white font-semibold'>Google</h5>
                        </span>
                      </div>
                      <div className='h-[72] w-80 border-2 border-[#A259FF] rounded-[20px] btn bg-[#4c4c4c] shadow-2xs flex items-center gap-4'>
                        <span>
                          
                          <FaFacebook  className='h-10 w-10' />

                        </span>
                        <span>
                          <h5 className='text-2xl text-white font-semibold'>Facebook</h5>
                        </span>
                      </div>
                      <div className='h-[72] w-80 border-2 border-[#A259FF] rounded-[20px] btn bg-[#4c4c4c] shadow-2xs flex items-center gap-4'>
                        <span>
                          
                          <TbBrandOauth  className='h-10 w-10' />
                        </span>
                        <span>
                          <h5 className='text-2xl text-white font-semibold'>Aninumas</h5>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default SignUpPages