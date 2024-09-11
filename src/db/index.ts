import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { env } from '../env'

export const client = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
})

export const db = drizzle(client, { logger: true })
