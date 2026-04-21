import {test} from '@playwright/test';

test("First test", async({page})=>{
await page.goto("https://www.google.com/");
})
test("Second test", async({page})=>{
await page.goto("//www.github.com/");
})
