import {test, expect} from '@playwright/test'

test('test login invalid',async({page})=>{
    await page.goto('https://www.saucedemo.com');
    await expect(page).toHaveTitle('Swag Labs');

    const username=page.getByPlaceholder('Username');
    await username.fill('standard_user');
    await expect(username).toHaveValue('standard_user');

    const password=page.getByPlaceholder('Password');
    await password.fill('wrong_password');
    await expect(password).toHaveValue('wrong_password');

    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText(
        'Epic sadface: Username and password do not match any user in this service',{exact:true}
    )).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});