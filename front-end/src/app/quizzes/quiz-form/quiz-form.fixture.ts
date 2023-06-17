import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class QuizFormFixture extends E2EComponentFixture {

  private inputQuiz = this.page.locator('app-quiz-form input[type="text"]');

  private select = this.page.locator('app-quiz-form select').first();

  private buttonQuiz = this.page.locator('app-quiz-form button[type="submit"]');


  fillNomDuQuiz(name : string){
    return this.inputQuiz.fill(name);
  }

  selectTheFirstTheme(){
    return this.select.selectOption({ index: 0 });
  }

  clickOnCreer(){
    return this.buttonQuiz.click();

  }



}
