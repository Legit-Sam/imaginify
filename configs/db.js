import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Initialize the Neon client
const client = neon(process.env.NEXT_PUBLIC_DATABASE_URL);

// Initialize Drizzle ORM with the Neon client
export const db = drizzle(client);