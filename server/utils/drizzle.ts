// You’re importing the Drizzle ORM factory function for the better-sqlite3 driver.

// This is how you tell Drizzle you want to use SQLite via the better-sqlite3 library
import { drizzle } from 'drizzle-orm/libsql'

export const db = drizzle(process.env.DATABASE_URL!)
