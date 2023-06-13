import { chromium, expect, test } from "@playwright/test";

test.use({ viewport: { width: 1400, height: 1000 } });
test("Launch the Selectors hub test page", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("http://localhost:4200/add-quiz");
  await page.waitForSelector(".dropbtn", {
    state: "visible",
  });
  


  const btn = await page.locator(".dropbtn");
  await page.waitForTimeout(2000);

  const color = await btn.evaluate((element: Element) =>
    window.getComputedStyle(element).getPropertyValue("background-color")
  );

  await console.log(`${color}`);

  await expect(btn).toHaveCSS('background-color',color);

  
  
  
});