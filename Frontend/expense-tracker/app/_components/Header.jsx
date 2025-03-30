import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 flex justify-between items-center border shadow-md '>
        <Image src={'./logo.svg'}
        alt='logo'
        width={160}
        height={100}
        />
        <Button className='hover:bg-indigo-700 border-indigo-600 bg-[#4845d2]'>Get Started</Button>
    </div>
  )
}

export default Header