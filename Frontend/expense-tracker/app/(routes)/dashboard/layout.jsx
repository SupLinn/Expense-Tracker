"use client"
import React, { useEffect, useState } from 'react'
import SideNav from './_components/SideNav'
import DashboardHeader from './_components/DashboardHeader'
import { useUser } from '@clerk/nextjs'
import { Budgets } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/utils/dbConfig'
import { useRouter } from 'next/navigation'

const DashboardLayout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const {user} = useUser();
  const router = useRouter();

  useEffect(()=>{
    user && checkUserBudgets();
  },[user])

  const checkUserBudgets = async () => {
    const result = await db.select()
    .from (Budgets)
    .where(eq(Budgets.createBy,user?.primaryEmailAddress?.emailAddress))
    // console.log(result);

    if (result?.length == 0) {
      router.replace('/dashboard/budgets')
    }
    
  }

  return (
    <div>
        <div className='flex'>
            <SideNav
            isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
        <div className={`flex-1 transition-all duration-500 ${isOpen ? "ml-64" : " ml-0"}`}>
            <DashboardHeader
            isOpen={isOpen} setIsOpen={setIsOpen}/>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout