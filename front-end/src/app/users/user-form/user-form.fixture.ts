import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class UserFormFixture extends E2EComponentFixture {
  static getInput(arg0: string) {
      throw new Error("Method not implemented.");
  }
  fillLastName(arg0: string) {
      throw new Error('Method not implemented.');
  }
  fillFirstName(arg0: string) {
      throw new Error('Method not implemented.');
  }
  getUserForm() {
    return this.page.waitForSelector('app-user-form');
  }

  getInput(id: string) {
    const selector = `app-user-form input[id="${id}"]`;
    return this.page.waitForSelector(selector);
  }

  getCreateButton() {
    return this.page.getByRole('button', { name: 'Créer' });
  }

  clickCreateButton() {
    return this.getCreateButton().click();
  }

  getVisualizeButton() {
    return this.page.getByRole('button', { name: 'Visualiser' });
  }

  clickVisualizeButton() {
    return this.getVisualizeButton().click();
  }






  getAjusterButton() {
    return this.page.getByRole('button', { name: 'Ajuster la page' });
  }

  clickAjusterButton() {
    return this.getAjusterButton().click();
  }






  getValidateButton() {
    return this.page.getByRole('button', { name: 'Valider' });
  }

  clickValidateButton() {
    return this.getValidateButton().click();
  }


  getMaj() {
    return this.page.waitForSelector('app-user-config input[name="maj"]');
  }

}