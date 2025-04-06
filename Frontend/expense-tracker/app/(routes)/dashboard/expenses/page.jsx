"use client"
import React, { useEffect, useState } from 'react'
import ExpenseListTable from './_components/ExpenseListTable'
import { db } from '@/utils/dbConfig'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { Budgets, Expenses } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'

function page() {

  const [budgetListExpense, setBudgetListExpense] = useState([])
  const [expensesListExpense, setExpensesListExpense] = useState([])
  const {user} = useUser()

  useEffect(()=>{
    user && getBudgetListExpense()
  },[user])

  const getBudgetListExpense=async()=>{
        
        const result = await db.select({
          ...getTableColumns(Budgets),
          totalSpend:sql `sum(${Expenses.amount})`.mapWith(Number),
          totalItem: sql `count(${Expenses.id})`.mapWith(Number)
        }).from(Budgets)
        .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
        .where(eq(Budgets.createBy,user?.primaryEmailAddress?.emailAddress))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id))
        
        setBudgetListExpense(result)
        getAllExpensesExpense()
        
      }

      const getAllExpensesExpense = async () => {
            const result = await db.select({
              id: Expenses.id,
              name: Expenses.name,
              amount: Expenses.amount,
              createdAt: Expenses.createdAt
            }).from(Budgets)
            .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
            .where(eq(Budgets.createBy,user?.primaryEmailAddress.emailAddress))
            .orderBy(desc(Expenses.id))
            setExpensesListExpense(result)
      
            console.log(result);
            
          }

  return (
    <div className='p-8'>
        <ExpenseListTable
        expensesList={expensesListExpense}
        refreshData={()=>getBudgetListExpense()}/>

        <p>
          
        </p>
    </div>
  )
}

export default page