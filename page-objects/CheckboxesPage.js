// checkboxesPage.js
class CheckboxesPage {
    constructor(page) {
      this.page = page;
      this.checkboxes = page.locator('input[type="checkbox"]');
    }
  
    async navigate() {
      await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }
  
    async toggleCheckbox(index) {
      const checkbox = this.checkboxes.nth(index);
      await checkbox.check();
    }
  
    async isCheckboxChecked(index) {
      return this.checkboxes.nth(index).isChecked();
    }
  }
  module.exports = CheckboxesPage;  