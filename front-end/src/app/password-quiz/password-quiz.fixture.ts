import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class PasswordQuizFixture extends E2EComponentFixture {


  private input = this.page.locator('input#password');
  private buttonValider = this.page.locator('button.button-card[type="submit"]');

  fillInput(){
    return this.input.fill('1234');
  }

  ClickOnValider(){
    return this.buttonValider.click();
  }
}
