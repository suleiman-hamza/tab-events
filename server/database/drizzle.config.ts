import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/database/schema/**/*.ts', // Recursive glob
  out: './server/database/migrations',
  dbCredentials: {
    url: 'file:./sqlite.db',
  },
})
