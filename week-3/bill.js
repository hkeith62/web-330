export default class Bill
{
	constructor(_beverages[], _appetizers[], _mainCourses[], _desserts[])
	{
		this._beverages[] = _beverages;
		this._appetizers[] = _appetizers;
		this._mainCourse[] = _mainCourse;
        this._desserts[] = _desserts;
	}
	
	addBeverage(beverage) {
		
		this._beverages.push(beverage);
	}
	
	addAppetizer(appetizer) {
		
		this._appetizers.push(appetizer);
	}
	
	addMainCourse(mainCourse) {
		
		this._mainCourse.push(mainCourse);
	}
	
	addDessert(dessert) {
		
		this._desserts.push(dessert);
	}
	
	getTotal() {
		
		let total = 0;
		let beverageTotal = this._beverages.forEach(function(beverage)
		{
			total += parseFloat(beverage.price);
			
			return total;
	    })
	}
	
	getTotal() {
		
		let total = 0;
		let appetizers = this._appetizers.forEach(function(appetizer)
		{
			total += parseFloat(appetizer.price);
			
			return total;
	    })
	}
	
	getTotal() {
		
		let total = 0;
		let mainCourseTotal = this._mainCourse.forEach(function(mainCourse)
		{
			total += parseFloat(mainCourse.price);
			
			return total;
	    })
	}
	
	getTotal() {
		
		let total = 0;
		let desserts = this._desserts.forEach(function(dessert)
		{
			total += parseFloat(dessert.price);
			
			return total;
	    })
	}
	
}
	 