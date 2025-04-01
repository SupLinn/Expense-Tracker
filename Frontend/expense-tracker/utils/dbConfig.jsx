import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://suplinndb_owner:npg_bmHc5SXseD4Y@ep-autumn-heart-a1wvzbho-pooler.ap-southeast-1.aws.neon.tech/Expense-Tracker?sslmode=require');
const db = drizzle(sql,{schema});