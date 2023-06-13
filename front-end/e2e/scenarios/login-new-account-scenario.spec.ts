import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import { User } from "../../src/models/user.models";

test('Add acount', async ({ page }) => {
  await page.goto(testUrl);

  const button = await page.locator('button.button-card[routerLink="/login"]');
  await button.click();
  await expect(page).toHaveURL("http://localhost:4200/login");
})
