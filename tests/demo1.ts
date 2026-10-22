import {expect, type Locator, type Page } from '@playwright/test';

let message2: string = "Hello";
message2="Bye";
console.log(message2);
let age2: number = 30;
console.log(age2);
let isActive2: boolean = true;
console.log(isActive2);
let number2: number[] = [1, 2, 3, 4, 5];

let data: any = "this could be anything";
data=2;  

function add2(a:number, b:number): number
{
    return a + b;
}
console.log(add2(3, 4));

let user: {name:string, age:number, location:string} = {name:"John", age:30, location:"UAE"};
console.log(user);

class CartPage
{
    page:Page;
    cartProducts:Locator;
    productsText:Locator;
    cart:Locator;
    orders:Locator;
    checkout:Locator;
constructor(page: Page)
{
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");

}
}