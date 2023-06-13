import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class GameSelectThemeFixture extends E2EComponentFixture {

  getDescription() {
    return this.page.getByText('Choisissez un théme');
  }

  getTheme() {
    return this.page.locator('app-game-select-theme a').first();
  }
}
