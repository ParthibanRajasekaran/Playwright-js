const { test, expect } = require("@playwright/test");

test("First Demo Test", async ({ browser, page }) => {
  await page.goto("https://rahulshettyacademy.com/locatorspractice/");

  console.log(await page.title());
  const title = await page.title();
  expect(title).toContain("Login page");

  await page.locator("#inputUsername").type("rahulshetty");
  await page.locator('[type="password"]').type("rahulshetty");
  await page.locator('[type="submit"]').click();

  const errorMessage = await page.locator(".error").textContent();
  console.log(errorMessage);
  expect(errorMessage).toContain("Incorrect username or password");
});

test("Second Demo Test", async ({ browser, page }) => {
  const userName = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const loginBtn = page.locator("#login");

  await page.goto("https://rahulshettyacademy.com/client/");

  console.log(await page.title());
  const title = await page.title();
  expect(title).toContain("Let's Shop");

  await userName.type("rajasekaran.parthiban7@gmail.com");
  await password.type("P@$$w0rd");
  await loginBtn.click();
  // await Promise.all([
  //   page.waitForURL("https://rahulshettyacademy.com/client/dashboard/dash"),
  //   loginBtn.click(),
  // ]);

  await page.waitForLoadState("networkidle"); // Waits for all the network call to be completed

  const products = await page.locator(".card-body b").allTextContents();
  console.log(products);

  const firstProduct = await page.locator(".card-body b").nth(0).textContent();
  console.log(firstProduct);
});

test("DropDown Test", async ({ browser, page }) => {
  const userName = page.locator("#inputUsername");
  const password = page.locator('[type="password"]');
  const signInBtn = page.locator('[type="submit"]');
  const termsCheckBox = page.locator("input#chkboxTwo");

  await page.goto("https://rahulshettyacademy.com/locatorspractice/");

  console.log(await page.title());
  const title = await page.title();
  expect(title).toContain("Login page");

  await userName.type("rahulshetty");
  await password.type("rahulshetty");
  await termsCheckBox.check();

  await expect(termsCheckBox).toBeChecked();

  await signInBtn.click();
});
