import { test, expect } from '@playwright/test';

test.describe('Regression Suite', () => {

  test('@regression Invalid login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'wrong_user');
    await page.fill('#password', 'wrong_pass');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('@regression Remove product from cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('text=Add to cart');
    await page.click('.shopping_cart_link');

    await page.click('text=Remove');
    await expect(page.locator('.cart_item')).toHaveCount(0);
  });

  test('@regression Checkout flow', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('text=Add to cart');
    await page.click('.shopping_cart_link');

    await page.click('text=Checkout');

    await page.fill('#first-name', 'Abhay');
    await page.fill('#last-name', 'Kumar');
    await page.fill('#postal-code', '122001');

    await page.click('text=Continue');
    await page.click('text=Finish');

    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

});