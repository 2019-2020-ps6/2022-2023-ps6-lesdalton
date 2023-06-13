import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import { User } from "../../src/models/user.models";
import { UserFormFixture } from "src/app/users/user-form/user-form.fixture";

test('Add acount', async ({ page }) => {
  await page.goto(testUrl);

  const button = await page.getByRole('button', { name: 'Se connecter' });
  await button.click();
  const link= await page.locator('a[routerLink="/login-new-account"]');
  await link.click();


  // Remplir le champ "Nom"
  const lastNameInput = await page.locator('input#nom');
  await lastNameInput.fill('AMINE');

  // Remplir le champ "Prénom"
  const firstNameInput = await page.locator('input#prenom');
  await firstNameInput.fill('M9WD');

  // Remplir le champ "Email"
  const emailInput = await page.locator('input#email');
  await emailInput.fill('7WINI@gmail.com');

  // Remplir le champ "Mot de passe"
  const passwordInput = await page.locator('input#password');
  await passwordInput.fill('1234');

  const passwordconfirmInput = await page.locator('input#password-confirm');
  await passwordconfirmInput.fill('1234');

  const link1= await page.locator('a[routerLink="/login"]');
  await link1.click();

  const link2= await page.locator('a[routerLink="/actions"] button.button-card');
  await link2.click();

  await expect(page).toHaveURL("http://localhost:4200/actions");


})
