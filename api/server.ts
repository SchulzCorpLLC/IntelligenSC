// api/server.ts
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());

app.get('/api/extensions', async (req, res) => {
  const extensions = await prisma.extension.findMany();
  res.json(extensions);
});

app.listen(3000, () => {
  console.log('API server running on http://localhost:3000');
});
