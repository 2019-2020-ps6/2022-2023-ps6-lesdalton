import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app.fixture';

test.describe('Home page display', () => {
  test('Basic test', async ({ page }) => {
    await page.goto(testUrl);
    const appComponentFixture = new AppFixture(page);
    const title = await appComponentFixture.getTitle();
    const description1 = await page.$('text=Quiz For All');
    const description2 = await appComponentFixture.getDescription();
    const description3 = await page.$('div.description:has-text("Start your first app!")');

    expect(await title.isVisible()).toBe(true);
    if (description1) {
      expect(await description1.isVisible()).toBe(true);
    }
    expect(await description2.isVisible()).toBe(true);
    if (description3) {
      expect(await description3.isVisible()).toBe(true);
    }

    // Error case: uncomment the two lines below: "Starting" does not exist
    // const description4 = await page.$('text=Starting your first app');
    // expect(await description4.isVisible()).toBe(true);

    const success = await appComponentFixture.getSuccessMessage();
    expect(await success.isVisible()).toBe(false);

    const showSuccessButton = await appComponentFixture.getShowButton();
    await showSuccessButton.click();

    const updatedSuccess = await appComponentFixture.getSuccessMessage();
    if (updatedSuccess) {
      expect(await updatedSuccess.isVisible()).toBe(true);
    } else {
      throw new Error('Updated success message not found');
    }

    await appComponentFixture.clickOnShowButton();

    const successAfterClick = await appComponentFixture.getSuccessMessage();
    expect(await successAfterClick.isVisible()).toBe(false);
  });

  // TO GO FURTHER :
  // Check the PS6-CORRECTION repo : https://github.com/NablaT/ps6-correction-td1-td2-v2/blob/master/front-end/e2e/scenarios/create-quiz.spec.ts
});