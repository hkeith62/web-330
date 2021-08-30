/*
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Krasso
    Date: 08/29/2021
    Modified By: Professor  P. Itskovich, Keith Hall 
    Description: Appetizer module that imports product class, extends, and exports .  
*/
import {Product} from "./product.js";

export class Appetizer extends Product 
{
	constructor(name, price)
	{
		super(name, price);
	}
}