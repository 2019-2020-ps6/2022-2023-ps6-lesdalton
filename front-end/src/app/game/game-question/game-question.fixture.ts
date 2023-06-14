import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class GameQuestionFixture extends E2EComponentFixture {
  getAnswer() {
    return this.page.locator('app-game-question button').first();
  }

  getQuestion() {
    return this.page.locator('app-game-question p#question').first();
  }
}
