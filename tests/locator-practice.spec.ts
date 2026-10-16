import {test, expect} from '@playwright/test';
test('practice locator', async({page})=>{
    await page.goto('https://playwright.dev/');

    const getStarttedLink=page.getByRole('link',({name:'Get Started'}));
    await expect(getStarttedLink).toBeVisible();
    
    await getStarttedLink.click();

    await expect(page.getByRole('heading',{name:'Installatio'})).toBeVisible();
}
);