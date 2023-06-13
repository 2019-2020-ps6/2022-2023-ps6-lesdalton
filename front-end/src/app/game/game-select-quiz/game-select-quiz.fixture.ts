import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class GameSelectQuizFixture extends E2EComponentFixture {

  getDescription() {
    return this.page.getByText('Choisissez un Quiz');
  }

  getQuiz() {
    return this.page.locator('app-game-select-quiz a').first()
  }
}
