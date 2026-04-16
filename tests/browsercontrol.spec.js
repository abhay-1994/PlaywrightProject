import { chromium, test } from "@playwright/test";
test("BROWSER CONTROL", async ({ page, browser }) => {
  //     await page.goto("https://www.google.com/");
  //    let size= await page.viewportSize();//This will return the current viewport size of the page in array format [width, height]
  //     console.log(size);

  //     let size1=await page.setViewportSize({width: 1000, height: 500});// this will set the viewport size to 1000x500
  //     console.log(size1);

  //     console.log(await page.title());//This will print the title of the page

  //     console.log(await page.url());//This will print the current URL of the page

//   let context = await browser.newContext();
//   let page1 = await context.newPage();
//   await page1.goto("https://www.google.com/");
//   console.log(await context.cookies());//This will print the cookies of the page
  

});

test("instance", async()=>{
    //let browser =await chromium.launch()//This will launch a new  chromium browser instance
    
    let context =await browser.newContext()
    let page =await context.newPage()
   await page.goto("https://www.flipkart.com/")


})
