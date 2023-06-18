import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import { User } from "../../src/models/user.models";
import { UserFormFixture } from "src/app/users/user-form/user-form.fixture";
import {AppFixture} from "../../src/app/app.fixture";
import {LoginFixture} from "../../src/app/login/login.fixture";
import {LoginNewAccountFixture} from "../../src/app/login-new-account/login-new-account.fixture";

test('Add acount', async ({ page }) => {
  await page.goto(testUrl);

  await test.step('Se connecter', async () =>{
    const appFixture = new AppFixture(page);
    await appFixture.clickOnConnectButton();
  })

  await test.step('Access to creation of a new account', async ()=>{
    const loginFixture = new LoginFixture(page);
    await loginFixture.clickOnLoginNewAccount();
  });

  await test.step('Creation of a new account', async ()=>{
    const loginNewAccount = new LoginNewAccountFixture(page);
    await loginNewAccount.fillLastName('Doe');
    await loginNewAccount.fillFirstName('John');
    await loginNewAccount.fillEmail('john.Doe@gmail.com');
    await loginNewAccount.fillPassword('1234');
    await loginNewAccount.fillPasswordConfirm('1234');
    await loginNewAccount.clickOnCreerUnCompte();
  });

  await test.step('Se connecter',async ()=>{
    const loginFixture = new LoginFixture(page);
    await loginFixture.clickOnLogin();
    await expect(page).toHaveURL(testUrl+"/actions");
  });

})
