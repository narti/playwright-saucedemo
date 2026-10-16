import {test, expect} from '@playwright/test';

test('test login valid',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    const username=page.getByPlaceholder('Username');
    await username.fill('standard_user');
    await expect(page.getByPlaceholder('Username')).toHaveValue('standard_user');

    const password=page.getByPlaceholder('Password');
    await password.fill('secret_sauce');
    await expect(password).toHaveValue('secret_sauce');

    await page.getByRole('button',{name:'Login'}).click();
    await expect(page).toHaveURL(/inventory\.html/)
    await expect(page.getByText('Products')).toBeVisible();
});