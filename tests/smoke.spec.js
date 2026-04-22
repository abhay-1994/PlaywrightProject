import { test, expect } from '@playwright/test';

test.describe('Smoke Suite', () => {

  test('@smoke Login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);
  });

  test('@smoke Product list visible', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    const products = page.locator('.inventory_item');
    await expect(products).toHaveCount(6);
  });

  test('@smoke Add product to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('text=Add to cart');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

});