import process from 'node:process'
// You’re importing the Drizzle ORM factory function for the better-sqlite3 driver.

// This is how you tell Drizzle you want to use SQLite via the better-sqlite3 library
import { drizzle } from 'drizzle-orm/libsql'

export const db = drizzle({
  connection: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
})
