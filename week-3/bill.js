/*
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 08/29/2021
    Modified By: Keith Hall 
    Description: Bill module. 
*/
export class Bill             // Creates Bill class and exports
{
	constructor()
	{
		this._beverages = [];
		this._appetizers = [];           // Class properties are assigned empty arrays.
		this._mainCourses = [];
        this._desserts = [];
	}
	
	addBeverage(beverage) {		
		this._beverages.push(beverage);      // Objects are pushed to the arrays.
	}
	
	addAppetizer(appetizer) {		
		this._appetizers.push(appetizer);
	}
	
	addMainCourse(mainCourse) {		
		this._mainCourses.push(mainCourse);
	}
	
	addDessert(dessert) {		
		this._desserts.push(dessert);
	}
	
	getTotal() {                                   
		let total = 0;
		this._beverages.forEach(function(beverage)        // Function that loops over the beverages array
		{
			total += parseFloat(beverage.price);          // This ensures calculated values are a float.
	    })
	
		this._appetizers.forEach(function(appetizer)
		{
			total += parseFloat(appetizer.price);	
	    })	

		this._mainCourses.forEach(function(mainCourse)
		{
			total += parseFloat(mainCourse.price);
	    })
	
		this._desserts.forEach(function(dessert)
		{
			total += parseFloat(dessert.price);
	    })

		return total.toFixed(2);                       //Total vaiable is reurned and set to (2) decimals.
	}
	
}
	 