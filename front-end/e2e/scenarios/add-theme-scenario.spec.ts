import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import { User } from "../../src/models/user.models";

test('Add theme', async ({ page }) => {
  await page.goto(testUrl +'/actions');

  const button = await page.locator('button.button-card[routerLink="/password-quiz"]');
  await button.click();
  await expect(page).toHaveURL(testUrl+'/password-quiz')
  const input = await page.locator('input#password');
  await input.fill('1234');
  const buttonValider = await page.locator('button.button-card[type="submit"]');
  await buttonValider.click();

  await expect(page).toHaveURL(testUrl+'/add-quiz');

  // Remplir l'input du thème avec "Géographie"
  const inputTheme = await page.locator('app-theme-form input[type="text"]');
  await inputTheme.fill("Géographie");

// Cliquer sur le bouton "Créer"
  const buttonTheme = await page.locator('app-theme-form button[type="submit"]');
  await buttonTheme.click();


});
