// dropdownPage.js
class DropdownPage {
    constructor(page) {
      this.page = page;
      this.dropdown = page.locator('select#dropdown');
    }
  
    async navigate() {
      await this.page.goto('https://the-internet.herokuapp.com/dropdown');
    }
  
    async selectOption(value) {
      await this.dropdown.selectOption(value);
    }
  
    async getSelectedOption() {
      return this.dropdown.inputValue();
    }
  }
  module.exports = DropdownPage;  