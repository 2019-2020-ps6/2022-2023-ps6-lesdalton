import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class LoginNewAccountFixture extends E2EComponentFixture {

  private lastNameInput = this.page.locator('input#nom');

  private firstNameInput = this.page.locator('input#prenom');

  // Remplir le champ "Email"
  private emailInput = this.page.locator('input#email');

  // Remplir le champ "Mot de passe"
  private passwordInput = this.page.locator('input#password');

  private passwordConfirmInput = this.page.locator('input#password-confirm');

  private link1= this.page.locator('a[routerLink="/login"]');


  fillLastName(name :string){
    return this.lastNameInput.fill(name);
  }

  fillFirstName(name :string){
    return this.firstNameInput.fill(name);
  }

  fillEmail(name : string){
    return this.emailInput.fill(name);
  }

  fillPassword(name : string){
    return this.passwordInput.fill(name);
  }

  fillPasswordConfirm(name : string){
    return this.passwordConfirmInput.fill(name);
  }

  clickOnCreerUnCompte(){
    return this.link1.click();
  }

}
