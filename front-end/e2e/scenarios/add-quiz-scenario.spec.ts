import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import { User } from "../../src/models/user.models";
import {ActionsFixture} from "../../src/app/actions/actions.fixture";
import {PasswordQuizFixture} from "../../src/app/password-quiz/password-quiz.fixture";
import {QuizFormFixture} from "../../src/app/quizzes/quiz-form/quiz-form.fixture";

test('Add quiz', async ({ page }) => {
  await page.goto(testUrl +'/actions');

  await test.step('Click "Modifier un quiz" button', async () => {
    const actionFixture = new ActionsFixture(page);
    await actionFixture.ClickOnModifierUnQuiz();
    await expect(page).toHaveURL(testUrl+'/password-quiz');
  });


  await test.step('Fill the input and click on Valider', async () =>{
    const passwordQuizFixture = new PasswordQuizFixture(page);
    await passwordQuizFixture.fillInput();
    await passwordQuizFixture.ClickOnValider();
    await expect(page).toHaveURL(testUrl+'/add-quiz');
  });

  await test.step('Create un quiz with a theme', async () => {
    const quizFormFixture = new QuizFormFixture(page);
    await quizFormFixture.fillNomDuQuiz("Europe");
    await quizFormFixture.selectTheFirstTheme();
    await quizFormFixture.clickOnCreer();

  });


});
