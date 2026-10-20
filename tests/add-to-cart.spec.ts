import {test, expect} from '@playwright/test';

test('add to chart',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    const username=page.getByPlaceholder('Username');
    await username.fill('standard_user');
    await expect(username).toHaveValue('standard_user');

    const password=page.getByPlaceholder('Password');
    await password.fill('secret_sauce');
    await expect(password).toHaveValue('secret_sauce');

    await page.getByRole('button',{name:'Login'}).click();
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();

    const product=page.getByText('Sauce Labs Bolt T-Shirt').locator('..').locator('..');
    const addToCartButton=product.getByRole('button',{name:'Add to cart'});
    await addToCartButton.click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1');
})