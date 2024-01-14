// inputsPage.js
class InputsPage {
    constructor(page) {
      this.page = page;
      this.numberInput = page.locator('input[type="number"]');
    }
  
    async navigate() {
      await this.page.goto('https://the-internet.herokuapp.com/inputs');
    }
  
    async setInputValue(value) {
      await this.numberInput.fill(value.toString());
    }
  
    async getInputValue() {
      return this.numberInput.inputValue();
    }
  
    async incrementInput() {
      await this.numberInput.press('ArrowUp');
    }
  
    async decrementInput() {
      await this.numberInput.press('ArrowDown');
    }
  }
  module.exports = InputsPage;
  