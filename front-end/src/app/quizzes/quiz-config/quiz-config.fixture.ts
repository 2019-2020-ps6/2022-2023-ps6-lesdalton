import { E2EComponentFixture } from "e2e/e2e-component.fixture";
export class QuizConfigFixture extends E2EComponentFixture {

  private inputNvQst= this.page.locator('input#text');
  private firstButton = this.page.locator('.list button.button-card').first();


  fillInput(string: string){
    this.inputNvQst.fill(string);
  }

  getButton(name :string) {
    return this.page.locator(name);
  }

  clickButton(name : string) {
    return this.getButton(name).click();
  }
  clickOnFirstQst(){
    this.firstButton.click();
  }

}
