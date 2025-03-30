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
            <Image src={'./logo.svg'}
            alt='logo'
            width={160}
            height={100}
            />
            {isSignedIn ? <UserButton/> :
            <Link href={'/sign-in'}>
                <Button className='hover:bg-indigo-700 border-indigo-600 bg-[#4845d2]'>Get Started</Button>
            </Link>
             }
            
        </div>
    )
}

export default Header