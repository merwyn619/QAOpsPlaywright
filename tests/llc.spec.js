import {test, expect} from '@playwright/test';

test('Playwright Special locators', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    // 5 seconds default timeout for expect assertions --{timeout:10000} Step level
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:10000});
    await page.getByRole("link", {name: 'Shop'}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

}); 

//40 sec - test timeout error
test('Playwright Test level time out', async ({page})=>
{
    test.setTimeout(60000);
    // waitFor()
    const slowExpect=expect.configure({timeout: 9000});
    page.setDefaultTimeout(9000);
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole("link", {name: 'Shop'}).click();
    await slowExpect(page.locator(".my-4").first().hasText("Shop"));
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

}); 

