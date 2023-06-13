import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app.fixture';
import { UserFixture } from 'src/app/users/user/user.fixture';
import { UserFormFixture } from 'src/app/users/user-form/user-form.fixture';

// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Creer un compte', () => {
  test('account Creation', async ({ page }) => {
    await page.goto(testUrl + '/login-new-account');
    const button = await page.locator('button.button-card[routerLink="/login-new-account"]');
    await button.click();
    await expect(page).toHaveURL('http://localhost:4200/login-new-account');

    // Auto-completed test code
    const card = await page.locator('.card');
    const firstNameInput = await card.locator('#firstName');
    const lastNameInput = await card.locator('#lastName');
    const submitButton = await card.locator('.button-card');

    await firstNameInput.type('John');
    await lastNameInput.type('Doe');
    await submitButton.click();

    // Add your assertions for successful account creation here
  });
});






