import {test} from '@playwright/test';
test("fIXTURES", async ({browser, browserName}) => {

    console.log(browserName);
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");

})