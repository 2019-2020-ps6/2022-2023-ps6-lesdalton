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
  
    // validate background-color
    
    const btn = await page.locator(".dropbtn");
    await page.waitForTimeout(2000);
  
    const color = await btn.evaluate((element) =>
      window.getComputedStyle(element).getPropertyValue("background-color")
    );
  
    await console.log(`${color}`);
  
    await expect(btn).toHaveCSS('background-color',color);
    // validate font-size

  const text = await page.locator("a[href='http://localhost:4200/'%5D >> nth=0");
  const textprop = await text.evaluate((element) =>
    window.getComputedStyle(element).getPropertyValue("font-size")
  );
  await console.log(`${textprop}`);

await expect(text).toHaveCSS('font-size',textprop);

  
  
});