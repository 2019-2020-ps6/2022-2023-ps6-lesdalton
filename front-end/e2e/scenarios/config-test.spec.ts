import {expect, test} from "@playwright/test";
import {testUrl} from "../e2e.config";
import {UserFormFixture} from "../../src/app/users/user-form/user-form.fixture";
import {UserFixture} from "../../src/app/users/user/user.fixture";

test.describe('Configuration test', () => {
  test('Configurer un profil', async ({ page }) => {
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


      //const configButtonSelector = '.user-list .card:has(h2:has-text("Alpha Roméo")) button.button-card';
      const configButtonSelector = '.user-list .card button.button-card';

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

      //const fontSize = await page.locator('input[type="range"][ngModel="user.config.fontSize"]');
      //await fontSize.fill('40');
      //const lineHeight = await page.locator('input[type="range"][ngModel="user.config.lineHeight"]');
      //await lineHeight.fill('40');
      //const letterSpacing = await page.locator('input[type="range"][ngModel="user.config.letterSpacing"]');
      //await letterSpacing.fill('40');

      await page.evaluate(() => {
        const fontSizeInput = (document.querySelector('input.gauge-input[ngModel="user.config.fontSize"]') as HTMLInputElement);
        if (fontSizeInput) {
          fontSizeInput.value = '40';
          fontSizeInput.dispatchEvent(new Event('input'));
          fontSizeInput.dispatchEvent(new Event('change'));
        }
        const lineHeightInput = (document.querySelector('input.gauge-input[ngModel="user.config.lineHeight"]') as HTMLInputElement);
        if (lineHeightInput) {
          lineHeightInput.value = '35';
          lineHeightInput.dispatchEvent(new Event('input'));
          lineHeightInput.dispatchEvent(new Event('change'));
        }

        const letterSpacingInput = (document.querySelector('input.gauge-input[ngModel="user.config.letterSpacing"]') as HTMLInputElement);
        if (letterSpacingInput) {
          letterSpacingInput.value = '5';
          letterSpacingInput.dispatchEvent(new Event('input'));
          letterSpacingInput.dispatchEvent(new Event('change'));
        }

      });

      await userFormFixture.clickValidateButton();
      await expect(page).toHaveURL("http://localhost:4200/user-list");

    });


  });


});
