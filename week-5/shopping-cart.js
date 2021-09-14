/*
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/06/2021
    Modified By: Keith Hall 
    Description: Exported shopping cart module.
*/
export class ShoppingCart {
	constructor() {
		// Create a property for products and assigns it an empty array. 
		this.productNames = [];
	}
	//Returns the length of the shoppingCart contructor array.
	countProduct() {
		return this.productNames.length;
	}
	 
	addProduct(productName) {                      // Pushes product oject into the empty array.
		this.productNames.push(productName);
		return this.productNames;
	}

	* getNextProduct() {                      // Generator function that loops over product array.
		for (const x of this.productNames){
			yield x;
		}
	}    
}

//return this.productNames
/*
const myShoppingCart = new ShoppingCart();
myShoppingCart.addProduct({ name: "oil change", price: "19.99" });
myShoppingCart.addProduct({ name: "filter replacement", price: "18.44" });
console.log(myShoppingCart.productNames);
console.log(myShoppingCart.countProduct());
*/