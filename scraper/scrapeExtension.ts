import puppeteer from 'puppeteer';

export type ExtensionData = {
  name: string;
  description: string;
  installs: number;
  rating: number;
  category: string;
  keywords: string[];
};

/**
 * Scrape one Chrome Web Store extension page for metadata.
 * Returns { id, data } or null on failure.
 */
export async function scrapeExtensionData(
  url: string
): Promise<{ id: string; data: ExtensionData } | null> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    const extensionId = url.split('/').pop() || '';

    // Wait for the name element to ensure the page is loaded
    await page.waitForSelector('h1');

    const data = await page.evaluate(() => {
      const getText = (selector: string) => {
        const el = document.querySelector(selector);
        return el?.textContent?.trim() || '';
      };

      const name = getText('h1');

      const description = getText('div.C-b-p-j-Pb') || getText('[itemprop="description"]');

      const installsRaw = getText('div.e-f-ih');
      const installsMatch = installsRaw.match(/([\d,]+)\+/);
      const installs = installsMatch ? parseInt(installsMatch[1].replace(/,/g, '')) : 0;

      const ratingRaw = document.querySelector('div[aria-label*="stars"]')?.getAttribute('aria-label') || '';
      const ratingMatch = ratingRaw.match(/([0-9.]+) stars/);
      const rating = ratingMatch ? parseFloat(ratingMatch[1]) : 0;

      const category = getText('a.e-f-y') || getText('[itemprop="applicationCategory"]');

      const keywords = Array.from(document.querySelectorAll('a.e-f-n'))
        .map(el => el.textContent?.trim() || '')
        .filter(Boolean);

      return { name, description, installs, rating, category, keywords };
    });

    if (!data.name) {
      console.warn('Missing name — likely a selector or DOM issue.');
      await browser.close();
      return null;
    }

    await browser.close();
    return { id: extensionId, data };
  } catch (error) {
    console.error('Scrape error:', error);
    await browser.close();
    return null;
  }
}
