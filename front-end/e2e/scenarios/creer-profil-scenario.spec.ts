import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app.fixture';
import { UserFixture } from 'src/app/users/user/user.fixture';
import { UserFormFixture } from 'src/app/users/user-form/user-form.fixture';



// test.describe is a hook that creates a test group and lets you define lifecycle stages such as beforeEach.
test.describe('Quiz Feature', () => {

    test('User Creation', async ({ page }) => {
        await page.goto(testUrl);

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
            await inputFirstName.type('Yao');

            const inputLastName = await userFormFixture.getInput('lastName');
            await inputLastName.type('cest_le_vieux_père');

            await userFormFixture.clickCreateButton();
            const indexUser = await userFixture.getIndexOfTitle('Quiz E2E');
            expect(await quizFixture.getContentTitleQuiz(indexQuiz)).toEqual(' Quiz E2E ');
        });

        await test.step(`Add questions`, async () => {
            await quizFixture.clickButtonOfQuiz('Quiz E2E', 'Edit');

            const inputLabel = await questionFormFixture.getLabelInput();
            await inputLabel.type('What are the advantages of E2E testing for the web?');
            await questionFormFixture.clickAddAnswerButton(2);
            const inputAnswers = await questionFormFixture.getAllAnswersInputs('text');
            const checkboxAnswers = await questionFormFixture.getAllAnswersInputs('checkbox');

            await inputAnswers[0].type('E2E (End-to-End) testing offers several advantages in the web domain. Firstly, they simulate the entire user journey on a website, testing all interactions between the various components of the system. This includes validating functionalities, checking navigation, data entry and so on. By carrying out these tests, it is possible to detect potential problems and bugs at an early stage, thus guaranteeing better quality of the final product. Whats more, E2E tests can be automated, saving time and reducing the costs associated with manual testing.');
            await checkboxAnswers[0].check();
            await inputAnswers[1].type('E2E testing in the web domain doesnt really offer any significant advantages. They are often costly and time-consuming, as they require a complete test environment to be set up, simulating all possible interactions on the website. Whats more, these tests can be prone to false positives or false negatives, which can make them difficult to interpret. In some cases, E2E tests can also be unreliable, as they depend on the initial state of the system and can be sensitive to changes in the user interface. It is therefore preferable to focus on other types of testing, such as unit testing and regression testing, which can offer better coverage of website functionality and performance.');
            await questionFormFixture.clickCreateButton();

            const question = await page.getByRole('heading', { name: ' What are the advantages of E2E testing for the web?' });
            const goodAnswer = await page.getByText('0 - E2E (End-to-End) testing offers several advantages in the web domain. Firstl');
            const badAnswer = await page.getByText('1 - E2E testing in the web domain doesnt really offer any significant advantages');
            expect(question).toBeVisible();
            expect(goodAnswer).toBeVisible();
            expect(badAnswer).toBeVisible();
        });
    });

    test('Delete Quiz', async ({ page }) => {
        await page.goto(testUrl);
        const quizFixture = new QuizFixture(page);
        const quiz = await page.getByRole('heading', { name: ' Quiz E2E' });
        expect(quiz).toBeVisible();
        await quizFixture.clickButtonOfQuiz('Quiz E2E', 'Delete');
        expect(quiz).not.toBeVisible();
    });

});
