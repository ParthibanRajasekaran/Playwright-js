class ShadowDomPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/shadowdom');
  }

  async getFirstParagraphText() {
    // Wait for the custom element 'my-paragraph' to load
    await this.page.waitForSelector('my-paragraph');
    // Retrieve text content from the first 'my-paragraph' element
    return await this.page.textContent('my-paragraph:first-of-type >> p');
  }
}
module.exports = ShadowDomPage;