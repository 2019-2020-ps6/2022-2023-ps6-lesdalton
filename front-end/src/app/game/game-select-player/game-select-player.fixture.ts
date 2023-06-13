import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class GameSelectPlayerFixture extends E2EComponentFixture {

  getDescription() {
    return this.page.getByText('QUI VEUT JOUER ?');
  }

  getPlayer() {
    return this.page.locator('div.user').first();
  }
}
