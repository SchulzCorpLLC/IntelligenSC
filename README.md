# IntelligenSC

🧠 IntelligenSC is a full-stack SaaS tool that scrapes the Chrome Web Store, enriches extension metadata with keyword and traffic insights via DataForSEO, and visualizes it in a modern dashboard for developers, marketers, and analysts.

> Inspired by a growth insight from @iannuttall — this platform helps you spot high-potential Chrome extensions, underserved niches, and SEO opportunities with zero guesswork.

---

## 🚀 What’s Done So Far

- ✅ **Project scaffolding** with clear folder structure and environment config  
- ✅ **Prisma ORM** connected to a Neon-hosted PostgreSQL database  
- ✅ **Database schema** defined and migrations run (`prisma migrate dev`)  
- ✅ **Seed script** created and run to load example extension data  
- ✅ **Express backend API** serving extension data at `/api/extensions`  
- ✅ **CORS configured** to allow frontend integration  
- ✅ **Local API server verified returning JSON data**  
- ✅ **Scraper implemented** using Puppeteer to fetch Chrome Web Store data  
- ✅ **Scraper tested and fixed for Codespaces/Ubuntu 24.04 compatibility**  
- ✅ **Scraped data saved to PostgreSQL via Prisma `upsert()` logic**

---

## 🛠️ What’s Next (Step-by-Step Roadmap)

### 1. 🌐 Expand Scraper Functionality

- Add support for batch scraping from a list of URLs  
- Implement error handling and retry logic for flaky pages  
- Optionally: Extract more metadata like changelogs, version history, etc.

### 2. 📊 Integrate DataForSEO API

- Connect to DataForSEO to enrich scraped extensions with:  
  - Keyword search volume  
  - CPC (Cost-per-click)  
  - Competition metrics  
- Save enriched data in the DB (`enrichedData` field)

### 3. ⚙️ Extend Backend API

- Add endpoints for:  
  - Filtering/sorting extensions by installs, rating, keyword volume  
  - Searching by keywords or categories  
  - Serving enriched data separately  
- Add pagination for scalability

### 4. 🧑‍🎨 Build Frontend Dashboard

- React + Tailwind app that consumes the API  
- Visualize key insights: installs, ratings, keyword trends  
- Allow users to filter, sort, and export data  
- Responsive design for desktop and mobile

### 5. 🔐 Authentication & User Management (Optional)

- Add login/signup flows for users  
- Protect Pro-tier features behind auth  
- Track API usage and rate-limit

### 6. 💰 Monetization & Deployment

- Finalize Free vs Pro feature sets  
- Set up CI/CD with Vercel or Fly.io for frontend/backend  
- Implement payment gateways and subscription plans

---

## 📁 Current Project Structure

```
intelligensc/
├── api/          # Express backend API
├── client/       # React frontend app
├── data/         # Raw and enriched JSON datasets
├── prisma/       # Prisma schema & migrations
├── scripts/      # Seed and utility scripts
├── scraper/      # Puppeteer scraper
├── types/        # Shared TypeScript types/interfaces
├── .env.example  # Template for environment variables
├── package.json  # Node.js dependencies and scripts
└── README.md     # This file
```

---

## ⚙️ Setup Instructions (GitHub Codespaces)

### Prerequisites

- GitHub Codespaces environment or local dev setup  
- Node.js & npm installed (already available in Codespaces)

### Steps

1. Clone repo (done if Codespaces opened here)  
2. Install dependencies:

```bash
npm install
cd client && npm install && cd ..
```

3. Duplicate `.env.example` → `.env` and fill in your values:

```
DATABASE_URL=postgresql://youruser:yourpassword@yourdb.neon.tech/dbname?sslmode=require&channel_binding=require
DATAFORSEO_LOGIN=your_dataforseo_login
DATAFORSEO_PASSWORD=your_dataforseo_password
```

4. Run database migrations:

```bash
npx prisma migrate dev --name init
```

5. Seed the database:

```bash
npx ts-node scripts/seed.ts
```

6. Start the API server:

```bash
npx ts-node api/server.ts
```

7. Start the frontend (in a separate terminal):

```bash
cd client
npm run dev
```

---

## 💡 How It Works

- **Scraper:** Puppeteer fetches Chrome extension metadata  
- **Backend:** Stores and serves data, enriches with DataForSEO insights  
- **Frontend:** Visualizes data for user exploration and analysis

---

## 💼 Monetization Strategy

- **Free tier:** Basic data and filters  
- **Pro tier:** Full enrichment, trend tracking, CSV exports  
- **Custom:** Alerts, dashboards for investors and enterprise

---

## 🔐 Security Notes

- Never commit your real `.env` file or secrets to GitHub  
- Use `.env.example` for reference  
- Add `.env` to `.gitignore`

---

## 📬 Contact & Contributions
Made by SchulzCorp 
License: MIT  
Inspired by growth insights from [@iannuttall](https://x.com/iannuttall/status/1941470870528241795)

Feel free to fork and contribute — pull requests welcome!
