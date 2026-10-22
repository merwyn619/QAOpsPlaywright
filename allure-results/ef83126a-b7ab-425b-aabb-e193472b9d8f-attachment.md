# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart2.spec.js >> @API Browser Context Playwright Test
- Location: tests\WebAPIPart2.spec.js:18:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.card-body b').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [aria-hidden] [ref=e24]: 
          - text: Sign Out
  - text:    
  - generic [ref=e25]:
    - paragraph [ref=e26]: Home | Search
    - heading "Filters" [level=4] [ref=e28]
    - generic [ref=e29]:
      - textbox "search" [ref=e31]
      - generic [ref=e32]:
        - heading "Price Range" [level=6] [ref=e33]
        - generic [ref=e34]:
          - textbox "Min Price" [ref=e36]
          - textbox "Max Price" [ref=e38]
      - generic [ref=e39]:
        - heading "Categories" [level=6] [ref=e40]
        - generic [ref=e41]: 
        - generic [ref=e43]:
          - checkbox [ref=e44]
          - generic [ref=e45]: fashion
        - generic [ref=e46]:
          - checkbox [ref=e47]
          - generic [ref=e48]: electronics
        - generic [ref=e49]:
          - checkbox [ref=e50]
          - generic [ref=e51]: household
      - generic [ref=e52]:
        - heading "Sub Categories" [level=6] [ref=e53]
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - checkbox [ref=e57]
          - generic [ref=e58]: t-shirts
        - generic [ref=e59]:
          - checkbox [ref=e60]
          - generic [ref=e61]: shirts
        - generic [ref=e62]:
          - checkbox [ref=e63]
          - generic [ref=e64]: shoes
        - generic [ref=e65]:
          - checkbox [ref=e66]
          - generic [ref=e67]: mobiles
        - generic [ref=e68]:
          - checkbox [ref=e69]
          - generic [ref=e70]: laptops
      - generic [ref=e71]:
        - heading "Search For" [level=6] [ref=e72]
        - generic [ref=e73]: 
        - generic [ref=e75]:
          - checkbox [ref=e76]
          - generic [ref=e77]: men
        - generic [ref=e78]:
          - checkbox [ref=e79]
          - generic [ref=e80]: women
  - generic [ref=e81]:
    - generic [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]: Showing 7 results |
        - generic [ref=e85]: User can only see maximum 9 products on a page
      - generic [ref=e86]:
        - generic [ref=e90]:
          - heading "ADIDAS ORIGINAL" [level=5] [ref=e91]
          - generic [ref=e92]: $ 11500
          - button "View" [ref=e94] [cursor=pointer]:
            - generic [aria-hidden] [ref=e95]: 
            - text: View
          - button " Add To Cart" [ref=e96] [cursor=pointer]:
            - generic [ref=e97]: 
            - text: Add To Cart
        - generic [ref=e101]:
          - heading "ZARA COAT 3" [level=5] [ref=e102]
          - generic [ref=e103]: $ 11500
          - button "View" [ref=e105] [cursor=pointer]:
            - generic [aria-hidden] [ref=e106]: 
            - text: View
          - button " Add To Cart" [ref=e107] [cursor=pointer]:
            - generic [ref=e108]: 
            - text: Add To Cart
        - generic [ref=e112]:
          - heading "iphone 13 pro" [level=5] [ref=e113]
          - generic [ref=e114]: $ 55000
          - button "View" [ref=e116] [cursor=pointer]:
            - generic [aria-hidden] [ref=e117]: 
            - text: View
          - button " Add To Cart" [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: 
            - text: Add To Cart
        - generic [ref=e123]:
          - heading "qwerty" [level=5] [ref=e124]
          - generic [ref=e125]: $ 11500
          - button "View" [ref=e127] [cursor=pointer]:
            - generic [aria-hidden] [ref=e128]: 
            - text: View
          - button " Add To Cart" [ref=e129] [cursor=pointer]:
            - generic [ref=e130]: 
            - text: Add To Cart
        - generic [ref=e134]:
          - heading "qwerty" [level=5] [ref=e135]
          - generic [ref=e136]: $ 11500
          - button "View" [ref=e138] [cursor=pointer]:
            - generic [aria-hidden] [ref=e139]: 
            - text: View
          - button " Add To Cart" [ref=e140] [cursor=pointer]:
            - generic [ref=e141]: 
            - text: Add To Cart
        - generic [ref=e145]:
          - heading "qwerty" [level=5] [ref=e146]
          - generic [ref=e147]: $ 11500
          - button "View" [ref=e149] [cursor=pointer]:
            - generic [aria-hidden] [ref=e150]: 
            - text: View
          - button " Add To Cart" [ref=e151] [cursor=pointer]:
            - generic [ref=e152]: 
            - text: Add To Cart
        - generic [ref=e156]:
          - heading "Automation" [level=5] [ref=e157]
          - generic [ref=e158]: $ 11500
          - button "View" [ref=e160] [cursor=pointer]:
            - generic [aria-hidden] [ref=e161]: 
            - text: View
          - button " Add To Cart" [ref=e162] [cursor=pointer]:
            - generic [ref=e163]: 
            - text: Add To Cart
    - list "Pagination" [ref=e168]:
      - listitem [ref=e169]:
        - text: «
        - generic [ref=e170]:
          - text: Previous
          - generic [ref=e171]: page
      - listitem [ref=e172]:
        - generic [ref=e173]: You're on page
        - text: "1"
      - listitem [ref=e174]:
        - generic [ref=e175]:
          - text: Next
          - generic [ref=e176]: page
        - text: »
  - generic [ref=e177]: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | const {test, expect}=require('@playwright/test');
  2  | const email="merwyn619@gmail.com";
  3  | let webContext;
  4  | 
  5  | test.beforeAll(async({browser})=>
  6  | {
  7  |     const context=await browser.newContext();
  8  |     const page=await context.newPage();
  9  |     await page.goto("https://rahulshettyacademy.com/client");
  10 |     await page.locator("#userEmail").fill(email);
  11 |     await page.locator("#userPassword").fill("Mychoice456");
  12 |     await page.locator("#login").click();
  13 |     await page.waitForLoadState('networkidle');
  14 |     await context.storageState({path:'state.json'});
  15 |     webContext=await browser.newContext({storageState:'state.json'});
  16 | });
  17 | 
  18 | test('@API Browser Context Playwright Test', async ()=>
  19 | {
  20 |     const productName="ZARA COAT 3";
  21 |     const page=await webContext.newPage();
  22 |     await page.goto("https://rahulshettyacademy.com/client");
  23 |     const products=page.locator(".card-body");
> 24 |     await page.locator(".card-body b").first().waitFor();
     |                                                ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  25 |     const titles=await page.locator(".card-body b").allTextContents();
  26 |     console.log(titles);
  27 |     const count=await products.count();
  28 |     for(let i=0;i<count;i++)
  29 |     {
  30 |         if(await products.nth(i).locator('b').textContent() === productName)
  31 |         {
  32 |            await products.nth(i).locator("text= Add To Cart").click();
  33 |            break;
  34 |         }
  35 |     }
  36 |     await page.locator("[routerlink*='cart']").click();  
  37 |     await page.locator("div li").first().waitFor();  
  38 |     const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  39 |     expect(bool).toBeTruthy();
  40 |     await page.locator("text=Checkout").click();
  41 |     await page.locator("[placeholder*='Co']").pressSequentially("ind");
  42 |     const dropdown=page.locator(".ta-results");
  43 |     await dropdown.waitFor();
  44 |     const optionsCount=await dropdown.locator("button").count();
  45 |     for(let i=0; i<optionsCount; i++)
  46 |     {
  47 |         const text=await dropdown.locator("button").nth(i).textContent();
  48 |         if(text===" India")
  49 |         {
  50 |             await dropdown.locator("button").nth(i).click();
  51 |             break;
  52 |         }
  53 |     }
  54 |     await expect(page.locator(".user__name [type='text']").first()).toHaveText(email); 
  55 |     await page.locator(".action__submit").click();
  56 |     await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  57 |     const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  58 |     console.log(orderId);
  59 |     await page.locator("button[routerlink*='myorders']").click();
  60 |     await page.locator("tbody").waitFor();
  61 |     const rows=page.locator("tbody tr");
  62 |     const rowsCount=await rows.count();
  63 |     for(let i=0;i<rowsCount;i++)
  64 |     {
  65 |         const rowOrderId=await rows.nth(i).locator("th").textContent();
  66 |         if(orderId.includes(rowOrderId))
  67 |         {
  68 |             await rows.nth(i).locator("button").first().click();
  69 |             break;
  70 |         }
  71 |     }
  72 |     const orderIdDetails=await page.locator(".col-text").textContent();
  73 |     expect(orderId.includes(orderIdDetails)).toBeTruthy();
  74 | 
  75 | }); 
  76 | 
  77 | test('Test Case 2', async ()=>
  78 | {
  79 |     const productName="ZARA COAT 3";
  80 |     const page=await webContext.newPage();
  81 |     await page.goto("https://rahulshettyacademy.com/client");
  82 |     const products=page.locator(".card-body");
  83 |     await page.locator(".card-body b").first().waitFor();
  84 |     const titles=await page.locator(".card-body b").allTextContents();
  85 |     console.log(titles);
  86 | }); 
```