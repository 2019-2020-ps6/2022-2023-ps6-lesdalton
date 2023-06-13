import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class UserFixture extends E2EComponentFixture {
  async getFirstNameUser(index:number) {
    const allTitles = await this.getAllFN();
    if (index >= allTitles.length) {
      throw new Error("Wrong Title Quiz Index");
    }
    return allTitles[index];
  }

  async getContentFirstName(index: number) {
    const title = await this.getFirstNameUser(index);
    return title.textContent();
  }

  getButton(name: string) {
    return this.page.getByRole('button', { name: name });
  }

  clickButton(name: string) {
    return this.getButton(name).click();
  }

  getAllFN() {
    return this.page.$$('app-user-list h2');
  }

 
  async getIndexOfFN(firstName: string) {
    const firstNames = await this.getAllFN();
    let indexOfCard = -1;
    for (let index = 0; index < firstNames.length; index++) {
    const textContent = await firstNames[index].textContent();
    if (textContent && textContent.trim() === firstName.trim()) {
      indexOfCard = index;
      }
    }
    return indexOfCard;
  }

  async clickButtonOfUser(firstName: string, buttonName: string) {
    const buttonSelector = `button:has-text("${buttonName}")`;
    const buttons = await this.page.$$(buttonSelector);
    const indexOfCard = await this.getIndexOfFN(firstName);

    if (indexOfCard >= buttons.length) {
      throw new Error(`Wrong User Name`);
    }

    await buttons[indexOfCard].click();
  }

}