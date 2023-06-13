import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app.fixture';
import { UserFixture } from 'src/app/users/user/user.fixture';
import { UserFormFixture } from 'src/app/users/user-form/user-form.fixture';

// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Configurer un profil', () => {
  test('Config User', async ({ page }) => {
    await page.goto(testUrl + '/actions');
    await page.goto(testUrl + '/actions');
    const button = await page.locator('button.button-card[routerLink="/password"]');
    await button.click();
    await expect(page).toHaveURL('http://localhost:4200/password');
    const input = await page.locator('input#password');
    await input.fill('1234');
    const buttonValider = await page.locator('button.button-card[type="submit"]');
    await buttonValider.click();

    // Create all fixtures
    const userFormFixture = new UserFormFixture(page);
    const userFixture = new UserFixture(page);

    await expect(page).toHaveURL('http://localhost:4200/user-list');

    await test.step('Configure user', async () => {
      // Select the configuration button
      const configButtonSelector = '.user-list .card button.button-card';
      await page.waitForSelector(configButtonSelector);

      // Click on the configuration button
      const configButton = await page.$(configButtonSelector);
      if (configButton) {
        await configButton.click();
      }

      // Fill in the form inputs
      await userFormFixture.fillFirstName('John');
      await userFormFixture.fillLastName('Doe');

      // Submit the form
      await userFormFixture.clickCreateButton();

      // Add your assertions for successful form submission here
      // For example:
      // await expect(page).toHaveURL('http://localhost:4200/success-page');
      // Add more assertions as needed
    });
  });
});