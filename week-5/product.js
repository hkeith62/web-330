/*
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/0/2021
    Modified By: Keith Hall 
    Description: Exported product module.
*/
export class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2); // Random integer converted to a string at base 16.
    }
}

/*
const myProduct = new Product("Oil Change", 451)
console.log(myProduct.id, myProduct.name, myProduct.price)
*/