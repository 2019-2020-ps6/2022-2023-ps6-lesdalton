import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class AppFixture extends E2EComponentFixture {
  getTitle() {
    return this.page.getByText('Quiz For All', { exact:true });
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
