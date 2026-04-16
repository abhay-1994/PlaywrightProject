import {test} from '@playwright/test';
test("fIXTURES", async ({browser, browserName}) => {

    console.log(browserName);
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    console.log(await page.url());

})