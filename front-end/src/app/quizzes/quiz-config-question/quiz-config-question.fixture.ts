import { E2EComponentFixture } from "e2e/e2e-component.fixture";
export class QuizConfigQuestionFixture extends E2EComponentFixture {

  private inputNvReponse =this.page.locator('input#text1');

  fillInput(string: string){
    this.inputNvReponse.fill(string);
  }

  getButton(name :string) {
    return this.page.locator(name);
  }

  clickButton(name : string) {
    return this.getButton(name).click();
  }

}
