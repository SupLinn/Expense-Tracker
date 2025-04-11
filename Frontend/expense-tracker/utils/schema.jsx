import { integer, numeric, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";


export const Budgets = pgTable('budgets',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    amount:varchar('amount').notNull(),
    icon: varchar('icon'),
    createBy: varchar('createBy').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull()
})

export const Expenses= pgTable('expenses',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    amount:numeric('amount').notNull().default(0),
    budgetId:integer('budgetId').references(()=>Budgets.id),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    createdBy: varchar('created_by').notNull()
})

