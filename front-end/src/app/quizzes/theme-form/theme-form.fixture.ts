import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class ThemeFormFixture extends E2EComponentFixture {

  private inputTheme = this.page.locator('app-theme-form input[type="text"]');
  private buttonTheme = this.page.locator('app-theme-form button[type="submit"]');

  fillInputTheme(name : string){
    return this.inputTheme.fill(name);
  }

  clickOnCreer(){
    return this.buttonTheme.click();
  }

}
