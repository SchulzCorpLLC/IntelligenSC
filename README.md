# IntelligenSC# 🧠 IntelligenSC

IntelligenSC is a full-stack SaaS tool that scrapes the Chrome Web Store, enriches extension metadata with keyword and traffic insights via DataForSEO, and visualizes it in a modern dashboard for developers, marketers, and analysts.

> Inspired by a growth insight from @iannuttall — this platform helps you spot high-potential Chrome extensions, underserved niches, and SEO opportunities with zero guesswork.

---

## 🚀 Features

- 🔍 Scrape Chrome Web Store for extensions and metadata
- 📊 Enrich with SEO traffic data using DataForSEO API
- 📈 View trends by category, install count, rating, and keyword volume
- 🧠 Discover gaps and opportunities in the extension market
- 🧪 Exportable data for reports, investments, or internal dev research

---

## 🏗️ Tech Stack

| Layer       | Technology                 |
|------------|-----------------------------|
| Frontend   | React + TypeScript + Tailwind |
| Backend    | Node.js + Express + Prisma   |
| Scraper    | Puppeteer                    |
| Database   | PostgreSQL (via Prisma ORM)  |
| Enrichment | DataForSEO API               |
| Hosting    | Codespaces (Dev), Vercel/Fly.io (Prod) |

---

## 📁 Project Structure

chrome-extension-insights/
├── scraper/ # Chrome Web Store crawler
├── api/ # Express backend API for frontend + DataForSEO
├── data/ # Raw scraped and enriched JSON datasets
├── client/ # React frontend with Tailwind + Vite
├── scripts/ # Seed or utility scripts
├── prisma/ # Database schema + migrations
├── types/ # Shared TypeScript types
├── .env.example # Environment config template
├── package.json # Project dependencies
└── README.md # You are here

---

## ⚙️ Setup Instructions (GitHub Codespaces)

### ✅ Prerequisites

You’ve already opened this in GitHub Codespaces — great start!

### 1. Clone this repo (already done in Codespaces):

```bash
git clone https://github.com/YOUR_USERNAME/intelligensc.git
cd intelligensc

npm install

Duplicate .env.example as .env and fill in your keys:

bash
Copy
Edit
cp .env.example .env

Then edit .env:

env
Copy
Edit
DATABASE_URL=postgresql://user:password@localhost:5432/intelligensc
DATAFORSEO_LOGIN=youremail@example.com
DATAFORSEO_PASSWORD=your_dataforseo_pass

4. Set up database
bash
Copy
Edit
npx prisma migrate dev --name init

5. Install frontend dependencies
bash
Copy
Edit
cd client
npm install
cd ..

🧪 Dev Scripts
bash
Copy
Edit
# Run the backend API
npx ts-node api/server.ts

# Run the frontend
cd client
npm run dev

🔍 What the Scraper Does
The /scraper script:

Fetches extension metadata from the Chrome Web Store

Captures name, installs, rating, category, etc.

Stores results in /data/extensions.json

The /api/services/dataforseo.ts service:

Uses DataForSEO to get keyword volumes, rankings, and CPC

Maps this data to scraped extensions

Saves enriched output in /data/enriched.json and/or PostgreSQL

💼 Monetization Strategy
Free Tier: View top extensions & basic filtering

Pro Tier: Access full enrichment data, trend tracking, keyword research

Custom: Alerts, data exports, investor dashboards

Target users:

Chrome extension developers

Growth marketers & SEO strategists

SaaS founders

Chrome competitors / investors

🧠 Inspiration
Post that started it all:
https://x.com/iannuttall/status/1941470870528241795

✅ Next Steps
Want to contribute or fork it for your own niche?

git init your Codespace if you haven’t

Commit the scaffolded project

Run the scraper → enrich with DataForSEO → view in dashboard

Let’s build something powerful.

🔐 Security Note
Never commit your real .env file or secrets.
Use .env.example and gitignore the real one.

📬 Contact
Made by SchulzCorp
License: MIT
IntelligenSC — Chrome Market Intelligence, Supercharged