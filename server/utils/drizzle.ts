// You’re importing the Drizzle ORM factory function for the better-sqlite3 driver.

// This is how you tell Drizzle you want to use SQLite via the better-sqlite3 library
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

const sqlite = new Database('sqlite.db');
export const db = drizzle({ client: sqlite });
