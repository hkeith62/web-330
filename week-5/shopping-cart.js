/*
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/06/2021
    Modified By: Keith Hall 
    Description: Exported shopping cart module.
*/
export class ShoppingCart {
	constructor() {
		//change to product and make array empty
		this.productNames = [];
	}
	//change to count and product
	countProduct() {
		return this.productNames.length;
	}
	//change to add
	//change parameter to product
	//change "" to no quotations
	//return this.product
	addProduct(productName) {
		this.productNames.push(productName);
		return this.productNames;
	}

	displayTable() {
    
  }
}

//return this.productNames
const myShoppingCart = new ShoppingCart();
myShoppingCart.addProduct({ name: "oil change", price: "19.99" });
myShoppingCart.addProduct({ name: "filter replacement", price: "18.44" });
console.log(myShoppingCart.productNames);
console.log(myShoppingCart.countProduct());
