import { PrismaClient } from '@prisma/client';

// Singleton pattern for Prisma Client
function prismaClientSingleton() {
  return new PrismaClient();
}

// Initialize and attach to global object (if not already defined)
globalThis.prisma = globalThis.prisma || prismaClientSingleton();

// Export for usage in other modules
export default globalThis.prisma;

// Conditional assignment for development environments
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = globalThis.prisma; 
}
