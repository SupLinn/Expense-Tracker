"use client"
import { Button } from '@/components/ui/button'
import {useUser, UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Header = () => {

    const {user, isSignedIn} = useUser();

    return (
        <div className='p-5 flex justify-between items-center border shadow-md '>
            <Link href={"/"}>
                    <Image src={'/logo.svg'}
                    alt='logo'
                    width={100}
                    height={100}
                    className='cursor-pointer'
                    onClick={() => console.log("Logo clicked")}
                    />
            </Link>

            {isSignedIn ? <UserButton/> :
            <Link href={'/sign-in'}>
                <Button className='hover:bg-[#4845d2]-indigo-700 border-indigo-600 bg'>Get Started</Button>
            </Link>
             }
            
        </div>
    )
}

export default Header