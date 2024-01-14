// testSuite.test.js
const { test, expect } = require('@playwright/test');
const AuthPage = require('../page-objects/AuthPage');
const CheckboxesPage = require('../page-objects/CheckboxesPage');
const DropdownPage = require('../page-objects/DropdownPage');
const InputsPage = require('../page-objects/InputsPage');
const ShadowDomPage = require('../page-objects/ShadowDomPage');

test.describe('The Internet Herokuapp', () => {
  let authPage, checkboxesPage, dropdownPage, inputsPage, shadowDomPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    checkboxesPage = new CheckboxesPage(page);
    dropdownPage = new DropdownPage(page);
    inputsPage = new InputsPage(page);
    shadowDomPage = new ShadowDomPage(page);
  });

  test('should login successfully', async () => {
    await test.step('Navigate to auth page', async () => {
      await authPage.navigate();
    });
    await test.step('Perform login', async () => {
      await authPage.login('tomsmith', 'SuperSecretPassword!');
    });
    await test.step('Verify login success', async () => {
      expect(await authPage.getFlashMessage()).toContain('You logged into a secure area!');
    });
  });
  

  test('should toggle checkboxes', async () => {
    await checkboxesPage.navigate();
    await checkboxesPage.toggleCheckbox(0);
    expect(await checkboxesPage.isCheckboxChecked(0)).toBe(true);
  });

  test('should select an option from the dropdown', async () => {
    await dropdownPage.navigate();
    await dropdownPage.selectOption('1'); // Selects 'Option 1'
    expect(await dropdownPage.getSelectedOption()).toBe('1');
  });

  test('should interact with input fields', async () => {
    await inputsPage.navigate();
    await inputsPage.setInputValue('5');
    expect(await inputsPage.getInputValue()).toBe('5');

    await inputsPage.incrementInput();
    expect(await inputsPage.getInputValue()).toBe('6');

    await inputsPage.decrementInput();
    expect(await inputsPage.getInputValue()).toBe('5');
  });

  test('should interact with shadow DOM elements', async () => {
    await shadowDomPage.navigate();
    const firstParagraphText = await shadowDomPage.getFirstParagraphText();
    expect(firstParagraphText).toContain('My default text');
  });    
});
