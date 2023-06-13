import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import { User } from "../../src/models/user.models";
import { UserFormFixture } from "src/app/users/user-form/user-form.fixture";

test('Add acount', async ({ page }) => {
  await page.goto(testUrl);

  const button = await page.locator('button.button-card[routerLink="/login"]');
  await button.click();
  await expect(page).toHaveURL("http://localhost:4200/login");
  const userFormFixture = new UserFormFixture(page);

// Remplir le champ "Nom"
const lastNameInput = await userFormFixture.getInput('nom');
await lastNameInput.fill('AMINE');

// Remplir le champ "Prénom"
const firstNameInput = await userFormFixture.getInput('prenom');
await firstNameInput.fill('M9WD');

// Remplir le champ "Email"
const emailInput = await userFormFixture.getInput('email');
await emailInput.fill('7WINI@gmail.com');

// Remplir le champ "Mot de passe"
const passwordInput = await userFormFixture.getInput('password');
await passwordInput.fill('1234');

const passwordconfirmInput = await userFormFixture.getInput('passwordconfirm');
await passwordconfirmInput.fill('1234');

})
