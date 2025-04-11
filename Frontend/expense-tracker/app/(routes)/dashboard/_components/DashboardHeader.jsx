import { UserButton } from '@clerk/nextjs'
import { Sidebar } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function DashboardHeader({isOpen, setIsOpen}) {
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  const router = useRouter()
  return (
    <div className='p-5 shadow-md border-b flex justify-between'>
       <div className='flex gap-5'>
       <Sidebar className='cursor-pointer' onClick={()=>{handleToggle()}}/>
        
        <div>
          <Image src={'/logo.svg'}
                              alt='logo'
                              width={100}
                              height={100}
                              className='cursor-pointer'
                              onClick={() => {router.replace('/')}}
                              />
        </div>
       </div>

        <div>
            <UserButton/>
        </div>
    </div>
  )
}

export default DashboardHeader