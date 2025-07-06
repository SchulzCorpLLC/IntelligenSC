# IntelligenSC

🧠 **IntelligenSC** is a full-stack SaaS intelligence platform that scrapes the Chrome Web Store, enriches extension metadata with keyword and traffic insights via DataForSEO, and visualizes this intelligence in a modern dashboard for developers, marketers, and SaaS analysts.

> Inspired by a growth insight from [@iannuttall](https://x.com/iannuttall/status/1941470870528241795) — this platform helps you spot high-potential Chrome extensions, underserved niches, and SEO opportunities with zero guesswork.

---

## 🚀 What’s Done So Far

- ✅ **Project scaffolding** with modular folder structure, `.env` config, and working Typescript setup  
- ✅ **PostgreSQL database** via Neon and fully connected through Prisma ORM  
- ✅ **Database schema** defined and migrated successfully (`prisma migrate dev`)  
- ✅ **Seed script** created and executed for sample extension data  
- ✅ **Scraper system** using Puppeteer to extract Chrome Web Store extension data  
- ✅ **Single URL scraper** tested and validated (via `scrapeExtension.ts`)  
- ✅ **Batch scraper** implemented using `urls.json` input (`scrapeMultipleExtensions.ts`)  
- ✅ **Robust upsert logic** with Prisma to avoid duplicate records  
- ✅ **Scraper tested across multiple Chrome extensions** (✅ 8 verified successful inserts)  
- ✅ **Express backend** serving extensions via `/api/extensions`  
- ✅ **API tested and returns clean JSON**  
- ✅ **CORS configured** and ready for frontend consumption  
- ✅ **Environment working across GitHub Codespaces + Ubuntu 24.04**

---

## 🛠️ What’s Next (Development Roadmap)

### 1. 🔍 Improve Scraper Accuracy

- Improve fallbacks for selectors (installs, ratings, categories, etc.)  
- Track and log failed or incomplete extractions  
- (Optional) Add support for changelogs, last update date, version history

### 2. 📊 Enrich Data with DataForSEO

- Add support for keyword volume, CPC, and competition  
- Query based on extension title + keyword list  
- Save results to a `Json` column in the DB (`enrichedData`)  
- Build `enrichExtensions.ts` script for batch enrichment

### 3. ⚙️ Extend API Functionality

- Add search and filter support (by installs, rating, category, keywords, etc.)  
- Add pagination and sorting support  
- Create endpoints for `/extensions/enriched`, `/extensions/:id`, and keyword discovery tools

### 4. 🧑‍🎨 Build Frontend Dashboard

- React + Tailwind web app  
- Display sortable, filterable table of extensions  
- Visualize installs, competition, CPC, and search volume  
- Add export-to-CSV button  
- Mobile-first, clean UX

### 5. 🔐 User Authentication (Optional)

- Add Supabase or Clerk-based login/signup  
- Protect enrichment + CSV features under Pro plan  
- Track usage and enforce rate limits per user

### 6. 💰 Monetization & Deployment

- Define Free vs Pro feature access  
- Set up Stripe billing for subscriptions  
- CI/CD deployment with Vercel or Fly.io  
- Add webhook support for enrichment usage or billing

---

## 📁 Project Structure

intelligensc/
├── api/ # Express backend API
├── client/ # React frontend (dashboard UI)
├── data/ # JSON datasets (raw or enriched)
├── prisma/ # DB schema + migrations
├── scripts/ # Seeders, enrichers, utility tools
├── scraper/ # Puppeteer-based scraping logic
├── types/ # Shared TS types/interfaces
├── .env.example # Sample environment variable setup
├── package.json # Root-level dependency and scripts
└── README.md # This file


---

## ⚙️ Setup Instructions (GitHub Codespaces or Local)

### Prerequisites

- GitHub Codespaces or local Node.js 18+ environment  
- PostgreSQL access (Neon preferred)  
- DataForSEO credentials

### Steps

1. **Clone repo** (or open Codespace)  
2. **Install dependencies**:

```bash
npm install
cd client && npm install && cd ..

Setup .env:

Copy .env.example → .env and fill in:

DATABASE_URL=postgresql://<user>:<password>@<host>/<db>?sslmode=require
DATAFORSEO_LOGIN=your_login
DATAFORSEO_PASSWORD=your_password
Run migrations:

npx prisma migrate dev --name init
Seed the database:

npx ts-node scripts/seed.ts
Run the API server:

npx ts-node api/server.ts
Scrape Chrome extensions (batch):

npx ts-node scraper/scrapeMultipleExtensions.ts
Start the frontend:

cd client
npm run dev

💡 How It Works
🧠 Scraper: Pulls live metadata from Chrome Web Store using Puppeteer

💾 Database: Stores structured extension data in PostgreSQL via Prisma

📡 API Layer: Serves data via RESTful endpoints (/api/extensions)

📊 Enrichment (Upcoming): Adds SEO metrics from DataForSEO

🎨 Dashboard (Upcoming): Visual exploration of market opportunities

💼 Monetization Strategy
Tier	Features
Free	Basic extension data, search, filters
Pro	Keyword enrichment, CSV export, CPC insights
Enterprise	Investor dashboards, keyword alerts, tracked verticals

🔐 Security Notes
Never commit .env files — use .gitignore

Keep DataForSEO credentials secure

Use .env.example as a reference template

📬 Contact & Contributions
Made by SchulzCorp
License: MIT
Inspired by @iannuttall’s SaaS research insights

Want to contribute? Fork it, run it, and PR your upgrades 🚀