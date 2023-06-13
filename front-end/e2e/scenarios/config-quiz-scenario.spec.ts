import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import {QuizCardFixture} from "../../src/app/quizzes/quiz-card/quiz-card.fixture";
import {QuizConfigFixture} from "../../src/app/quizzes/quiz-config/quiz-config.fixture";
import {QuizConfigQuestionFixture} from "../../src/app/quizzes/quiz-config-question/quiz-config-question.fixture";
test.describe('Quiz Feature', () => {
  test('Configurer un quiz', async ({page}) => {
    await page.goto(testUrl + '/actions');

    const button = await page.locator('button.button-card[routerLink="/password-quiz"]');
    await button.click();
    await expect(page).toHaveURL("http://localhost:4200/password-quiz");
    const input = await page.locator('input#password');
    await input.fill('1234');
    const buttonValider = await page.locator('button.button-card[type="submit"]');
    await buttonValider.click();

    await expect(page).toHaveURL("http://localhost:4200/add-quiz");

    await test.step('Click "Configurer" button', async () => {
      const quizCardFixture = new QuizCardFixture(page);
      await quizCardFixture.clickButton('Configurer');
    });

    await test.step('Fill input field and click "Valider" button', async () => {
      const quiConfigFixture=new QuizConfigFixture(page);
      await quiConfigFixture.fillInput('Nouvelle Question');
      await quiConfigFixture.clickButton('button.button-card[type="submit"]');
      await quiConfigFixture.clickOnFirstQst();
    });



    await test.step('Fill input field and click "Valider" button', async () => {
      const quizConfigQstFixture=new QuizConfigQuestionFixture(page);
      await quizConfigQstFixture.fillInput('Nouvelle Réponse test');
      await quizConfigQstFixture.clickButton('input#isCorrect');
      await quizConfigQstFixture.clickButton('button.button-card[type="submit"]')
    });


    await test.step('Validation of the question',async()=>{
      const valider = await page.getByRole('button', {name: 'Valider'});
      await valider.click();
    });

    await test.step('Validation of the quiz',async()=>{
      const valider2 = await page.getByRole('button', {name: 'Valider'});
      await valider2.click();
    });

    await expect(page).toHaveURL("http://localhost:4200/add-quiz");

  });
});
