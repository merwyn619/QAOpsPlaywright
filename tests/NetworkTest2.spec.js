const {test, expect} = require('@playwright/test')
const email="merwyn619@gmail.com";

test('Security test request intercept', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Mychoice456");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    await page.locator("button[routerlink*='myorders']").click();
    await page.route(
        "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        async route => route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6ac64e462be7a4bc2b91c28f'})
    );
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");

});