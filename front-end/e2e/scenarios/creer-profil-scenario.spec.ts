import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app.fixture';
import { UserFixture } from 'src/app/users/user/user.fixture';
import { UserFormFixture } from 'src/app/users/user-form/user-form.fixture';



// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Creer un profil joueur', () => {

    test('User Creation', async ({ page }) => {
        await page.goto(testUrl +'/user-list');

        //create all fixtures
        const userFormFixture = new UserFormFixture(page);
        const userFixture = new UserFixture(page);

        await expect(page).toHaveURL("http://localhost:4200/user-list");

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

            /*const indexUser = await userFixture.getIndexOfFN('Yao');
            expect(await userFixture.getContentFirstName(indexUser)).toEqual('Yew');*/
        });


    });


});
