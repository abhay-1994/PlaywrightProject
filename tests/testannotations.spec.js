// import { test, expect } from '@playwright/test';

// test.describe('Annotation Examples', () => {
//     test('basic annotation example', async ({ page }) => {
//         await page.goto('https://example.com');
//         await expect(page).toHaveTitle(/Example/);
//     });

//     test.skip('this test is skipped', async ({ page }) => {
//         await page.goto('https://example.com');
//     });

//     test.only('only this test runs', async ({ page }) => {
//         await page.goto('https://example.com');
//     });

//     test('test with fixme annotation', async ({ page }) => {
//         test.fixme();
//         await page.goto('https://example.com');
//         // This test will be marked as fixme
//     });

//     test('test with slow annotation', async ({ page }) => {
//         test.slow();
//         await page.goto('https://example.com');
//         // This test will have triple timeout
//     });

//     test.describe('conditional skip', () => {
//         test.skip(process.env.SKIP_TESTS === 'true', 'Skipping tests');
        
//         test('conditional skip example', async ({ page }) => {
//             await page.goto('https://example.com');
//         });
//     });
// });