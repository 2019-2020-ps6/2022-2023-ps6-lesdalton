import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import { User } from "../../src/models/user.models";

test('Test de navigation de page à page', async ({ page }) => {
  await page.goto(testUrl + '/actions');

  // Passer de actions vers select-player
  const button = await page.locator('button.button-card[routerLink="/select-player"]');
  await button.click();

  const description1 = await page.locator('text=QUI VEUT JOUER ?');
  expect(await description1.isVisible()).toBe(true);

  // Passer de select-player vers select-theme
  const userDiv = await page.locator('div.user');
  await userDiv.click();

  const description2 = await page.locator('text=Choisissez un thème');
  expect(await description2.isVisible()).toBe(true);

  // Passer de select-theme select-quiz
  const modifyQuizButton = await page.locator('button.button-card[routerLink="/password-quiz"]');
  await modifyQuizButton.click();

  const description3 = await page.locator('text=Modifier un quiz');
  expect(await description3.isVisible()).toBe(true);
});