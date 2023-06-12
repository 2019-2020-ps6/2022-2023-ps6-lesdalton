import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app.fixture';
import { UserFixture } from 'src/app/users/user/user.fixture';
import { UserFormFixture } from 'src/app/users/user-form/user-form.fixture';



// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Configurer un profil', () => {

    test('Config User', async ({ page }) => {
        await page.goto(testUrl +'/user-list');

        //create all fixtures
        const userFormFixture = new UserFormFixture(page);
        const userFixture = new UserFixture(page);

        await expect(page).toHaveURL("http://localhost:4200/user-list");

        await test.step(`Configure user`, async () => {
            await userFixture.clickButtonOfUser('Alpha', 'Configurer');

            // Sélectionner le bouton radio "Non"
            await page.click('input[value="lowercase"]');

            // Vérifier si le bouton radio "Non" est sélectionné
            /*const nonRadioChecked = await page.$eval('input[value="lowercase"]', (el) => el.checked);
            expect(nonRadioChecked).toBeTruthy;*/

            // Sélectionner le bouton radio "Helvetica"
            await page.click('input[value="Helvetica Black"]');

            // Vérifier si le bouton radio "Helvetica" est sélectionné
            /*const helveticaRadioChecked = await page.$eval('input[value="Helvetica Black"]', (el) => el.checked);
            expect(helveticaRadioChecked).toBeTruthy;*/


            await userFormFixture.clickValidateButton();

        });


    });


});
