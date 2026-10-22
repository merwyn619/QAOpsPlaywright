const {test, expect, request} = require('@playwright/test')
const {APIUtils} = require('../utils/APIUtils');
const loginPayload = {userEmail: "merwyn619@gmail.com", userPassword: "Mychoice456"};
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]};
const fakePayloadOrders = {data:[],message:"No Orders"};

let response;

test.beforeAll( async()=>
{
    const apiContext = await request.newContext(); 
    const apiUtils = new APIUtils(apiContext, loginPayload);   
    response = await apiUtils.createOrder(orderPayload);
});

test('Place the order', async ({page})=>
{
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);
    
    /*await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Mychoice456");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');*/
    await page.goto("https://rahulshettyacademy.com/client");
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route =>
    {
        const response = await page.request.fetch(route.request());
        let body=JSON.stringify(fakePayloadOrders);
        route.fulfill(
            {
                response,
                body,
            }
    )});
    
    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator(".mt-4").textContent());
    

}); 