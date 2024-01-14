// authPage.js
class AuthPage {
    constructor(page) {
      this.page = page;
      this.usernameField = page.locator('#username');
      this.passwordField = page.locator('#password');
      this.loginButton = page.locator('button[type="submit"]');
      this.flashMessage = page.locator('#flash');
    }
  
    async navigate() {
      await this.page.goto('https://the-internet.herokuapp.com/login');
    }
  
    async login(username, password) {
      await this.usernameField.fill(username);
      await this.passwordField.fill(password);
      await this.loginButton.click();
    }
  
    async getFlashMessage() {
      return this.flashMessage.textContent();
    }
  }
  module.exports = AuthPage;  