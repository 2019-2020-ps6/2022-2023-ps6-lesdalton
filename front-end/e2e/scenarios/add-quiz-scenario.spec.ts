import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import { User } from "../../src/models/user.models";

test('Add quiz', async ({ page }) => {
  await page.goto(testUrl +'/actions');

  const button = await page.locator('button.button-card[routerLink="/password-quiz"]');
  await button.click();
  await expect(page).toHaveURL("http://localhost:4200/password-quiz");
  const input = await page.locator('input#password');
  await input.fill('1234');
  const buttonValider = await page.locator('button.button-card[type="submit"]');
  await buttonValider.click();

  await expect(page).toHaveURL("http://localhost:4200/add-quiz");

  // Remplir l'input du thème avec "Géographie"
  const inputQuiz = await page.locator('app-quiz-form input[type="text"]');
  await inputQuiz.fill("Géographie");

// Cliquer sur le bouton "Créer"
  const buttonQuiz = await page.locator('app-quiz-form button[type="submit"]');
  await buttonQuiz.click();


});
