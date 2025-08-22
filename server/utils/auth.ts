import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { organization } from 'better-auth/plugins'
import { schema } from '../database/schema/auth' // your schema definition;
import { db } from '../utils/drizzle' // your drizzle instance

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite', // or "mysql", "sqlite"
    schema: schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  session: {
    disableSessionRefresh: true,
  },

  plugins: [organization()],
})
