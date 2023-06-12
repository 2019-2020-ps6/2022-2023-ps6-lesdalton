import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class UserFormFixture extends E2EComponentFixture {
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
}