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