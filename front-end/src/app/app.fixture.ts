import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class AppFixture extends E2EComponentFixture {
  getTitle() {
    return this.page.getByText('Quiz For All', { exact:true });
  }

  getDescription() {
    return this.page.getByText('est là pour', { exact: true });
  }

  getShowButton() {
    return this.page.getByRole('button', { name: 'Se connecter' });
  }

  clickOnShowButton() {
    return this.getShowButton().click();
  }

  getSuccessMessage() {
    return this.page.getByText('Wow!');
  }
}
