/*
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 08/29/2021
    Modified By: Keith Hall 
    Description: MainCourses module. Imports product class, extends, and exports.  
*/
import {Product} from "./product.js";

export class MainCourse extends Product
{
	constructor(name, price)
	{
		super(name, price);
	}
}