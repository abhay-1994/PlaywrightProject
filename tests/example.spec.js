import {test} from '@playwright/test';

test("First test", async({page})=>{
await page.goto("https://www.google.com/");
})