import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import {User} from "../../src/models/user.models";




test('Play Quiz', async ({ page }) => {
  await page.goto(testUrl+'/actions');

  // Passer de actions vers select-player

  const button = await page.locator('button.button-card[routerLink="/select-player"]');
  await button.click();


  const description1 = await page.getByText('QUI VEUT JOUER ?');
  expect(description1).toBeVisible();


  // Passer de select-player vers select-theme
  const userDiv = await page.locator('div.user').first();
  await userDiv.click();
  const description2 = await page.getByText('Choisissez un thème')
  expect(description2).toBeVisible();

  // Passer de select-theme select-quiz
  const firstListItem = await page.locator('app-game-select-theme li').first();
  const link = await firstListItem.locator('a');
  await link.click();
  const description3= await page.getByText(' Choisissez un Quiz')
  expect(description3).toBeVisible();
});
