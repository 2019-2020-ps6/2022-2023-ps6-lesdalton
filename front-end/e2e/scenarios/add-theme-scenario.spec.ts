import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import { User } from "../../src/models/user.models";

test('Test de navigation de page à page', async ({ page }) => {
  await page.goto(testUrl + '/actions');

  // Passer de actions vers select-player
  const button = await page.locator('button.button-card[routerLink="/password-quiz"]');
  await button.click();

  // Add an input to the card
  await page.evaluate(() => {
    const card = document.querySelector('div.card');
    if (card) {
      const input = document.createElement('input');
      input.type = 'text';
      input.setAttribute('formControl', 'themeForm.controls.inputName');
      input.required = true;
      card.appendChild(input);
    }
  });

  // Perform further actions or assertions on the modified page
});