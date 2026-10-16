import {test, expect} from "@playwright/test";
test('practice test id',async({page})=>{
    await page.goto('https://playwright.dev/');

    const getStartedLink=page.getByTestId('does-not-exist');
});