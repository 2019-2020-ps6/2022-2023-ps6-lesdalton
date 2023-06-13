import { chromium, expect, test } from "@playwright/test";

test.use({ viewport: { width: 1400, height: 1000 } });
test("Launch the Selectors hub test page", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("http://localhost:4200/");
  await page.waitForSelector(".dropbtn", {
    state: "visible",
  });
   // we want to mask this locator
   const btn = await page.locator(".dropbtn");
   //await expect(btn).toHaveCSS('background-color','#4CAF50'); // it will fail
   //await expect(btn).toHaveCSS('background-color','rgb(76,175,80)'); // it will also fail due to spaces
   await expect(btn).toHaveCSS('background-color','rgb(76, 175, 80)');
   await page.waitForTimeout(2000);
   await page.close();
   