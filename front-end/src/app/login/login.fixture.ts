import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class LoginFixture extends E2EComponentFixture {

  private link1= this.page.locator('a[routerLink="/actions"] button.button-card');

  private link2= this.page.locator('a[routerLink="/login-new-account"]');


  clickOnLogin(){
    return this.link1.click();
  }

  clickOnLoginNewAccount(){
    return this.link2.click();
  }


}
