const {test, expect, request} = require('@playwright/test')
const {APIUtils} = require('../utils/APIUtils');
const loginPayload = {userEmail: "merwyn619@gmail.com", userPassword: "Mychoice456"};
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]};

let response;

test.beforeAll( async()=>
{
    const apiContext = await request.newContext(); 
    const apiUtils = new APIUtils(apiContext, loginPayload);   
    response = await apiUtils.createOrder(orderPayload);
});

test('@API Place the order', async ({page})=>
{
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);
    
    /*await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Mychoice456");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');*/
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows=page.locator("tbody tr");
    const rowsCount=await rows.count();
    for(let i=0;i<rowsCount;i++)
    {
        const rowOrderId=await rows.nth(i).locator("th").textContent();
        if(response.orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails=await page.locator(".col-text").textContent();
    //await page.pause();
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

}); 