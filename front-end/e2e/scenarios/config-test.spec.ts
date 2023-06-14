import {expect, test} from "@playwright/test";
import {testUrl} from "../e2e.config";
import {UserFormFixture} from "../../src/app/users/user-form/user-form.fixture";
import {UserFixture} from "../../src/app/users/user/user.fixture";
import {ActionsFixture} from "../../src/app/actions/actions.fixture";
import {GameSelectPlayerFixture} from "../../src/app/game/game-select-player/game-select-player.fixture";
import {GameSelectThemeFixture} from "../../src/app/game/game-select-theme/game-select-theme.fixture";
import {GameSelectQuizFixture} from "../../src/app/game/game-select-quiz/game-select-quiz.fixture";
import {GameQuestionFixture} from "../../src/app/game/game-question/game-question.fixture";
import {GameResultFixture} from "../../src/app/game/game-result/game-result.fixture";

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

      const fontSize = await page.locator('input#font-size');
      await expect(fontSize).toBeVisible();
      await fontSize.fill('30');

      const lineHeight = await page.locator('input#line-height');
      await lineHeight.fill('50');

      const letterSpacing = await page.locator('input#letter-spacing');
      await expect(letterSpacing).toBeVisible();
      await letterSpacing.fill('8');

      await userFormFixture.clickValidateButton();
      await expect(page).toHaveURL("http://localhost:4200/user-list");

      const HomeButton = await page.locator('header a').first();
      await HomeButton.click();
      await expect(page).toHaveURL("http://localhost:4200/actions" );

    });
      await test.step(`Select a player`, async () => {
        const actionsFixture = new ActionsFixture(page);
        const gameSelectPlayerFixture = new GameSelectPlayerFixture(page);

        const playQuizButton = actionsFixture.getPlayQuizButton();
        await playQuizButton.click();
        const description1 = gameSelectPlayerFixture.getDescription();
        await expect(description1).toBeVisible();
        const user = await gameSelectPlayerFixture.getPlayer();
        await user.click();
      })

      await test.step(`Play the quiz`, async () => {
        const gameSelectThemeFixture = new GameSelectThemeFixture(page);
        const gameSelectQuizFixture = new GameSelectQuizFixture(page);

        const description2 = await gameSelectThemeFixture.getDescription()
        await expect(description2).toBeVisible();

        // Passer de select-theme select-quiz
        const link = await gameSelectThemeFixture.getTheme()
        await link.click();

        const description3 = await gameSelectQuizFixture.getDescription()
        await expect(description3).toBeVisible;

        // Selectionner un quiz
        const quiz = await gameSelectQuizFixture.getQuiz()
        await page.waitForTimeout(1000)
        await quiz.click();

        const gameQuestionFixture = new GameQuestionFixture(page)

        const answer = await gameQuestionFixture.getAnswer()
        const question = await gameQuestionFixture.getQuestion()

        await expect(answer).toBeVisible;
        await expect(question).toBeVisible;

        await expect(answer).toHaveCSS('text-transform','lowercase');
        await expect(answer).toHaveCSS('font-family',"\"Helvetica Black\"");
        await expect(answer).toHaveCSS('font-size','30px');
        await expect(answer).toHaveCSS('line-height','50px');
        await expect(answer).toHaveCSS('letter-spacing','8px');

        await expect(question).toHaveCSS('text-transform','lowercase');
        await expect(question).toHaveCSS('font-family',"\"Helvetica Black\"");
        await expect(question).toHaveCSS('font-size','30px');
        await expect(question).toHaveCSS('line-height','50px');
        await expect(question).toHaveCSS('letter-spacing','8px');

    });
  });


});
