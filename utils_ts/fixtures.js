const base = require('@playwright/test');
const {request} = require('@playwright/test');
const {APIUtils} = require('./APIUtils.js');
const loginPayload = {userEmail: 'merwyn619@gmail.com', userPassword: 'Mychoice456'};
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]};

exports.customtest = base.test.extend(
    {
        //UI custom fixture
        authenticatedPage: async ({ browser }, use) => {
            const context = await browser.newContext();
            const page=await context.newPage();
            await page.goto("https://rahulshettyacademy.com/client");
            await page.locator("#userEmail").fill("merwyn619@gmail.com");
            await page.locator("#userPassword").fill("Mychoice456");
            await page.locator("#login").click();
            await page.waitForLoadState('networkidle');   
            await use(page);  
            //teardown
            await context.close();
    },
        //API custom fixture
        createOrder: async ({}, use) => {
            const apiContext = await request.newContext(); 
            const apiUtils = new APIUtils(apiContext, loginPayload);   
            const response = await apiUtils.createOrder(orderPayload);
            await use(response);
            //teardown
            await apiContext.dispose();
    },
        //Data-driven custom fixture
        testDataForOrder: {
        productName: "ADIDAS ORIGINAL",
    }
});