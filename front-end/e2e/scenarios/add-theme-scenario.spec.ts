import { test, expect } from "@playwright/test";
import { testUrl } from 'e2e/e2e.config';
import { User } from "../../src/models/user.models";
import {ActionsFixture} from "../../src/app/actions/actions.fixture";
import {PasswordQuizFixture} from "../../src/app/password-quiz/password-quiz.fixture";
import {ThemeFormFixture} from "../../src/app/quizzes/theme-form/theme-form.fixture";

test('Add theme', async ({ page }) => {
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

  await test.step('Fill the input and click on Creer for theme', async ()=>{
    const themeFormFixture = new ThemeFormFixture(page);
    await themeFormFixture.fillInputTheme("Géographie");
    await themeFormFixture.clickOnCreer();
  });

});
