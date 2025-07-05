// scripts/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.extension.createMany({
    data: [
      {
        name: 'Grammarly for Chrome',
        description: 'Fix your writing as you type',
        installs: 10000000,
        rating: 4.8,
        category: 'Productivity',
        keywords: ['writing', 'AI', 'grammar'],
      },
      {
        name: 'Dark Reader',
        description: 'Dark mode for every website',
        installs: 5000000,
        rating: 4.6,
        category: 'Accessibility',
        keywords: ['dark', 'accessibility', 'night'],
      },
    ],
  });
}

main()
  .then(() => {
    console.log('Seed complete');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
