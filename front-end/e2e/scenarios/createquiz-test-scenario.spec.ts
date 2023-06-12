import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import {User} from "../../src/models/user.models";




test('Test de navigation de page à page', async ({ page }) => {
  await page.goto(testUrl+'/actions');

  // Passer de actions vers select-player

  const button = await page.locator('button.button-card[routerLink="/password-quiz"]');
  await button.click();




});
