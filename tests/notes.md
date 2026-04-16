
# Playwright Fixtures in Detail

## Overview
Fixtures are reusable setup and teardown logic in Playwright Test. They manage test dependencies and lifecycle.

## Basic Fixture Example

```javascript
// fixtures.js
const base = require('@playwright/test');

exports.test = base.test.extend({
    // Define a fixture
    page: async ({ page }, use) => {
        // Setup
        await page.goto('https://example.com');
        
        // Use the fixture
        await use(page);
        
        // Teardown
        await page.close();
    },
});
```

## Test Using Fixture

```javascript
// test.spec.js
const { test } = require('./fixtures');

test('example test', async ({ page }) => {
    // page is automatically set up and torn down
    await expect(page).toHaveTitle(/Example/);
});
```

## Built-in Fixtures

- `page` - Browser page instance
- `context` - Browser context
- `browser` - Browser instance
- `request` - API request helper
- `browserName` - Current browser name

## Fixture with Parameters

```javascript
const test = base.test.extend({
    apiUrl: async ({}, use) => {
        await use(process.env.API_URL || 'http://localhost:3000');
    },
});

test('api test', async ({ apiUrl, request }) => {
    const response = await request.get(`${apiUrl}/users`);
    expect(response.ok()).toBeTruthy();
});
```

## Fixture Scope

```javascript
const test = base.test.extend({
    database: [async ({}, use) => {
        // scope: 'worker' | 'test' (default)
    }, { scope: 'worker' }],
});

'''
## Playwright Commands –>
Basic Execution Commands
npx playwright test
→ Runs all test cases in the project
npx playwright test <file-name>
→ Runs a specific test file
npx playwright test <folder-path>
→ Runs all tests inside a specific folder
Filtering Commands
npx playwright test -g "test name"
→ Runs tests matching a specific test name
npx playwright test --grep @tag
→ Runs tests based on tags (e.g., @smoke, @regression)
Browser Execution
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
→ Runs tests on a specific browser
Debugging Commands
npx playwright test --headed
→ Runs tests with browser UI visible
npx playwright test --debug
→ Opens Playwright Inspector for step-by-step execution
npx playwright test --trace on
→ Captures execution trace for debugging
Retry & Failure Handling
npx playwright test --retries=2
→ Retries failed tests
npx playwright test --last-failed
→ Runs only previously failed tests
Reporting Commands
npx playwright test --reporter=html
→ Generates HTML report
npx playwright show-report
→ Opens the HTML report
Performance & Execution Control
npx playwright test --workers=4
→ Runs tests in parallel using 4 workers
npx playwright test --timeout=60000
→ Sets test timeout (in milliseconds)

=========================================================================================================================
'
# Playwright Browser Control – Notes

## Overview
Browser control in Playwright is used to manage browser instances, contexts, and pages. It enables test execution across different browsers with proper isolation.

---

## 1. Launch Browser

```javascript
const { chromium } = require('playwright');
const browser = await chromium.launch();
Launches a browser instance
Default mode: headless
Headed Mode
const browser = await chromium.launch({ headless: false });
Opens browser with UI
2. Browser Types
chromium → Chrome / Edge
firefox → Mozilla Firefox
webkit → Safari
const { firefox } = require('playwright');
const browser = await firefox.launch();
3. Browser Context
const context = await browser.newContext();
Acts like an incognito session
Provides isolated environment (cookies, cache, storage)
4. Page (Tab)
const page = await context.newPage();
Represents a single browser tab
5. Navigation
await page.goto('https://example.com');
Opens a URL
6. Multiple Tabs
const page1 = await context.newPage();
const page2 = await context.newPage();
Multiple tabs in same context
7. Multiple Browsers
const browser1 = await chromium.launch();
const browser2 = await firefox.launch();
Run tests across different browsers
8. Close Browser / Context / Page
await page.close();
await context.close();
await browser.close();
Always close resources to avoid memory issues
9. Slow Motion Execution
const browser = await chromium.launch({ slowMo: 1000 });
Adds delay between actions for debugging
10. Launch Options
const browser = await chromium.launch({
  headless: false,
  slowMo: 500,
  args: ['--start-maximized']
});
11. Viewport Control
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 }
});
Sets browser screen size
12. Device Emulation
const { devices } = require('playwright');
const iPhone = devices['iPhone 13'];

const context = await browser.newContext({
  ...iPhone
});
Simulates mobile devices
13. Permissions Handling
const context = await browser.newContext({
  permissions: ['geolocation']
});
14. Geolocation Control
const context = await browser.newContext({
  geolocation: { latitude: 28.61, longitude: 77.23 },
  permissions: ['geolocation']
});
15. Storage State (Session Handling)
await context.storageState({ path: 'state.json' });

Reuse session:

const context = await browser.newContext({
  storageState: 'state.json'
});
16. Accept Downloads
const context = await browser.newContext({
  acceptDownloads: true
});
17. Record Video
const context = await browser.newContext({
  recordVideo: { dir: 'videos/' }
});
18. Record Trace
await context.tracing.start({
  screenshots: true,
  snapshots: true
});
Best Practices
Use browser context for isolation
Avoid launching browser repeatedly
Always close browser after execution
Use headless mode in CI/CD
Use slowMo only for debugging
