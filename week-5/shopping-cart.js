/*
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/06/2021
    Modified By: Keith Hall 
    Description: Exported shopping cart module.
*/
export class ShoppingCart {
    constructor() {
        this.productId = [];
    }
        count() {  
        return 
    }
        add(productName) {

        }
        *generatorFunction() {
         yield "Oil Change"
         yield "Filter Replacement"
         yield "Wiper Fluid Refill"
         } 
}
const myShoppingCart = new ShoppingCart();
const generator = myShoppingCart.generatorFunction()
// Iterate over Generator object
for (const value of generator) {
  console.log(value)
}
 