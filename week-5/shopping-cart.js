/*
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/06/2021
    Modified By: Keith Hall 
    Description: Exported shopping cart module.
*/
export class ShoppingCart {
    constructor() {
        this.productNames = [233];
    }
    
    countProduct() {  
        return this.productNames.length;
    }

    addProduct(productName) {
        this.productNames.push("productName");
        return this.productNames;
    }

}
 /* 
return this.productNames       
const myShoppingCart = new ShoppingCart();
console.log(myShoppingCart.countProduct, myShoppingCart.addProduct());
 */