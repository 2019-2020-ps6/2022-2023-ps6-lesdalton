import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import {User} from "../../src/models/user.models";
import {ActionsFixture} from "../../src/app/actions/actions.fixture";
import {GameSelectPlayerFixture} from "../../src/app/game/game-select-player/game-select-player.fixture";
import {GameSelectThemeFixture} from "../../src/app/game/game-select-theme/game-select-theme.fixture";
import {GameSelectQuizFixture} from "../../src/app/game/game-select-quiz/game-select-quiz.fixture";
import {GameQuestionFixture} from "../../src/app/game/game-question/game-question.fixture";
import {GameResultComponent} from "../../src/app/game/game-result/game-result.component";
import {GameResultFixture} from "../../src/app/game/game-result/game-result.fixture";




test('Play Quiz', async ({ page }) => {
  await test.step(`Select a player`, async () => {
    await page.goto(testUrl+'/actions');

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
    const gameResultFixture = new GameResultFixture(page)

    const answer = await gameQuestionFixture.getAnswer()
    const result = await gameResultFixture.getDescription()

    await expect(answer).toBeVisible;

    while (await answer.isVisible()) {
      await answer.click();
    }
    const ressayerButton = gameResultFixture.getRessayerButton()

    await expect(result).toBeVisible();
    await ressayerButton.click();
  })

});
