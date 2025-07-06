import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { scrapeExtensionData } from './scrapeExtension';

const prisma = new PrismaClient();
const urlsPath = path.join(__dirname, 'urls.json');

async function scrapeAll() {
  try {
    const urls: string[] = JSON.parse(fs.readFileSync(urlsPath, 'utf-8'));

    for (const url of urls) {
      try {
        console.log(`🔍 Scraping: ${url}`);
        const scraped = await scrapeExtensionData(url);

        if (!scraped) {
          console.warn(`⚠️ Skipping failed scrape for: ${url}`);
          continue;
        }

        const { id, data } = scraped;

        const saved = await prisma.extension.upsert({
          where: { id },
          update: { ...data, updatedAt: new Date() },
          create: { id, ...data, updatedAt: new Date() },
        });

        console.log(`✅ Saved extension to DB: ${saved.name} (${saved.id})`);
      } catch (err) {
        console.error(`❌ Failed on ${url}:`, err);
      }
    }
  } catch (err) {
    console.error('Error loading urls.json:', err);
  } finally {
    await prisma.$disconnect();
  }
}

scrapeAll();
