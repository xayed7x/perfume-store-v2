// src/lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// This function creates a new instance of PrismaClient.
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// A type for our singleton instance.
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// This part is a bit of TypeScript magic to handle the global scope.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

// If a prisma instance doesn't already exist, create one.
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Export the single, shared instance.
export default prisma;

// In development, we store the instance on the global object to preserve it across hot reloads.
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}