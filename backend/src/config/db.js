import dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const { Pool } = pg;

// Garantir que DATABASE_URL está disponível
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não está definida');
}

console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'LOADED' : 'NOT LOADED');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
  adapter,
  log: ['error', 'warn'],
});
