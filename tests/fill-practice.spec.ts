import { test, expect} from '@playwright/test';

test('Fill search', async({page})=>{
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

    await page.getByRole('button',{name:'Search (Control+k)'}).click();

    await page.getByPlaceholder('Search docs').fill('locator');

    await expect(page.getByPlaceholder('Search docs')).toHaveValue('locator');
}
);