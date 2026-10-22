const {test, expect}=require('@playwright/test');

test('@Web Browser Context Playwright Test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.route("**/*.{jpg,png,jpeg}", route => route.abort());
    const username=page.locator('#username');
    const signIn= page.locator('#signInBtn');
    const cardTitles=page.locator('.card-body a');
    //page.on('request', request => console.log(request.url()));
    //page.on('response', response => console.log(response.url(), response.status()));
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await username.fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await signIn.click();
    //console.log(await page.locator("[style*='block']").textContent());
    //await expect(page.locator("[style*='block']")).toContainText('valid');
    //await username.fill('');
    /*await username.fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await signIn.click();*/
    //console.log(await cardTitles.first().textContent());
    //console.log(await cardTitles.nth(1).textContent());
    const allTitles=await cardTitles.allTextContents();
    console.log(allTitles);
}); 

test('Page Playwright Test', async ({page})=>
{
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});

test('@Web UI Controls', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username=page.locator('#username');
    const signIn=page.locator('#signInBtn');
    const documentLink=page.locator("[href*='s-r']");
    const dropdown=page.locator("select.form-control");
    await dropdown.selectOption('consult');
    await page.locator('.radiotextsty').last().click(); 
    await page.locator('#okayBtn').click();
    console.log(await page.locator('.radiotextsty').last().isChecked());
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");
    //await page.pause();
});

test('Child windows hadl', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username=page.locator('#username');
    const documentLink=page.locator("[href*='s-r']");
    const [newPage]=await Promise.all([
    context.waitForEvent('page'),
    documentLink.click(),
    ])
    const text=await newPage.locator('.red').textContent();
    const arrayText=text.split('@');
    const domain=arrayText[1].split(' ')[0];
    console.log(domain);
    await username.fill(domain);
    //await page.pause();
    console.log(await username.inputValue());
});
