import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app.fixture';
import { UserFixture } from 'src/app/users/user/user.fixture';
import { UserFormFixture } from 'src/app/users/user-form/user-form.fixture';
import { text } from 'stream/consumers';



// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Configurer un profil', () => {

    test('Config User', async ({ page }) => {
        await page.goto(testUrl + '/actions');
        
        await page.goto(testUrl + '/actions');
        const button = await page.locator('button.button-card[routerLink="/password"]');
        await button.click();
        await expect(page).toHaveURL("http://localhost:4200/password");
        const input = await page.locator('input#password');
        await input.fill('1234');
        const buttonValider = await page.locator('button.button-card[type="submit"]');
        await buttonValider.click();

        //create all fixtures
        const userFormFixture = new UserFormFixture(page);
        const userFixture = new UserFixture(page);

        await expect(page).toHaveURL("http://localhost:4200/user-list");

        await test.step(`Configure user`, async () => {

            //await userFixture.clickButtonOfUser('Alpha Roméo', 'Configurer');
            const configButtonSelector = '.user-list .card:has(h2:has-text("Alpha Roméo")) button.button-card';
            await page.waitForSelector(configButtonSelector);

            // Sélectionner le bouton de configuration
            const configButton = await page.$(configButtonSelector);

            // Effectuer un clic sur le bouton de configuration
            if (configButton) {
                await configButton.click();
            }

            // Sélectionner le bouton radio "Non"
            await page.click('input[value="lowercase"]');

            await page.click('input[value="Helvetica Black"]');

            await userFormFixture.clickVisualizeButton();

            await userFormFixture.clickAjusterButton();

            await userFormFixture.clickValidateButton();

            await userFormFixture.clickValidateButton();

        });


    });


});
