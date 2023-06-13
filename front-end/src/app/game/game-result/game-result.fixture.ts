import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class GameResultFixture extends E2EComponentFixture {

  getRessayerButton() {
    return this.page.locator('app-game-result button').first();
  }

  getDescription() {
    return this.page.getByText('Votre score :');
  }
}
