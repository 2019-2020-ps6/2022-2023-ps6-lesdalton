import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import {User} from "../../src/models/user.models";




test('Play Quiz', async ({ page }) => {
  await page.goto(testUrl+'/actions');

  // Passer de actions vers select-player

  const button = await page.locator('button.button-card[routerLink="/select-player"]');
  await button.click();


  const description1 = await page.getByText('QUI VEUT JOUER ?');
  await expect(description1).toBeVisible();


  // Passer de select-player vers select-theme
  const userDiv = await page.locator('div.user').first();
  await userDiv.click();
  const description2 = await page.getByText('Choisissez un thème')
  await expect(description2).toBeVisible();

  // Passer de select-theme select-quiz
  const link = await page.locator('app-game-select-theme a').first();
  await link.click();
  const description3= await page.getByText(' Choisissez un Quiz')
  await expect(description3).toBeVisible;

  // Selectionner un quiz
  const quiz = await page.locator('app-game-select-quiz a').first();
  await quiz.click();

  const answer = await page.locator('app-game-question button').first();
  const result = await page.getByText('Votre score :')

  while(await answer.isVisible()){
    await answer.click();
  }
  const ressayerButton = page.getByText('Réessayer')

  await expect(ressayerButton).toBeVisible();
  await ressayerButton.click();
  await expect(answer).toBeVisible();

});
