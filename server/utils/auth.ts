import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '../utils/drizzle' // your drizzle instance
import { user, session, account, verification } from "../database/schema/auth" // your schema definition;

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite', // or "mysql", "sqlite"
    schema: {
      user,
      session,
      account,
      verification
    }
  }),
  emailAndPassword: {
    enabled: true,
  },
})
