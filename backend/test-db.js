import dotenv from 'dotenv';
dotenv.config();

import { prisma } from './src/config/db.js';

async function testConnection() {
  try {
    console.log('Testing Prisma connection...');
    await prisma.$connect();
    console.log('✅ Connected successfully!');
    
    // Testar uma query simples
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Query test:', result);
    
    await prisma.$disconnect();
    console.log('✅ Disconnected successfully!');
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.error('Full error:', error);
  }
}

testConnection();