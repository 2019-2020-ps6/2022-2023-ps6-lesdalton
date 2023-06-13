import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import { User } from "../../src/models/user.models";

test('Configurer un quiz', async ({ page }) => {
  await page.goto(testUrl +'/actions');

  const button = await page.locator('button.button-card[routerLink="/password-quiz"]');
  await button.click();
  await expect(page).toHaveURL("http://localhost:4200/password-quiz");
  const input = await page.locator('input#password');
  await input.fill('1234');
  const buttonValider = await page.locator('button.button-card[type="submit"]');
  await buttonValider.click();

  await expect(page).toHaveURL("http://localhost:4200/add-quiz");

  const firstDiv = await page.locator('app-quiz-card div').first();
  const configureButton = await firstDiv.getByRole('button', { name: 'Configurer' });
  await configureButton.click();

  const inputNvQst=await page.locator('input#text');
  await inputNvQst.fill('Nouvelle Question');
  const buttonValiderNvQst = await page.locator('button.button-card[type="submit"]');
  await buttonValiderNvQst.click();

  const firstButton = await page.locator('.list button.button-card').first();
  await firstButton.click();



  const inputNvReponse=await page.locator('input#text');
  await inputNvReponse.fill('Nouvelle Reponse');
  const checkbox = await page.locator('input#isCorrect');
  await checkbox.click();
  const buttonAjouterRep = await page.locator('button.button-card[type="submit"]');
  await buttonAjouterRep.click();

  const valider = await page.getByRole('button', { name: 'Valider' });
  await valider.click();
  const valider2 = await page.getByRole('button', { name: 'Valider' });
  await valider2.click();

  await expect(page).toHaveURL("http://localhost:4200/add-quiz");


});
