import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app.fixture';
import { UserFixture } from 'src/app/users/user/user.fixture';
import { UserFormFixture } from 'src/app/users/user-form/user-form.fixture';



// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Creer un profil joueur', () => {

    test('User Creation', async ({ page }) => {

      await page.goto(testUrl +'/actions');
      const button = await page.locator('button.button-card[routerLink="/password"]');
      await button.click();
      await expect(page).toHaveURL(testUrl+"/password");
      const input = await page.locator('input#password');
      await input.fill('1234');
      const buttonValider = await page.locator('button.button-card[type="submit"]');
      await buttonValider.click();


      //create all fixtures
        const userFormFixture = new UserFormFixture(page);

        await expect(page).toHaveURL(testUrl+"/user-list");

        await test.step(`User form visible`, async () => {
            const userForm = await userFormFixture.getUserForm();
            const isVisible = await userForm.isVisible();
            expect(isVisible).toBeTruthy();
        });

        await test.step(`Create user`, async () => {
            const inputFirstName = await userFormFixture.getInput('firstName');
            await inputFirstName.type('Alpha');

            const inputLastName = await userFormFixture.getInput('lastName');
            await inputLastName.type('Roméo');

            await userFormFixture.clickCreateButton();

        });


    });


});
