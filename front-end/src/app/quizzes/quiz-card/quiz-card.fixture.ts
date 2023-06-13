import { E2EComponentFixture } from "e2e/e2e-component.fixture";
export class QuizCardFixture extends E2EComponentFixture {


  private firstDiv= this.page.locator('app-quiz-card div').first() ;


  getButton(name: string) {
    return this.firstDiv.getByRole('button', { name: name });
  }

  clickButton(name: string) {
    return this.getButton(name).click();
  }

}
