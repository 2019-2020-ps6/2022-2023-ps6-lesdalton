import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class ActionsFixture extends E2EComponentFixture {
  getPlayQuizButton() {
    return this.page.getByRole('button', { name: 'Commencer une partie' });
  }

  getDescription() {
    return this.page.getByText('est là pour', { exact: true });
  }

  getConnectButton() {
    return this.page.getByRole('button', { name: 'Se connecter' });
  }

  clickOnConnectButton() {
    return this.getConnectButton().click();
  }

  getSuccessMessage() {
    return this.page.getByText('Wow!');
  }
}
