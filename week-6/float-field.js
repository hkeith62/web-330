/**
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/15/2021
    Modified By: Keith Hall 
    Description: This is the float-field module for the Future Value App-web-330 assignment 6.2.   
*/
export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    validate() {
        const floatVal = parseFloat(this.field);  //  This parses this.field string for the first numeric value (if it is parseFloatable) or outputs NaN.
        return isNaN(floatVal) ? false : true;    // If this.field is parseFloatable, isNaN(floatVal) will return true, otherwise false.
    }
     
getMessage() {
    return `${this.name} must be a float value. You entered ${this.field}`;  // Uses template literals (``) and string interpolation- ${...} to insert expressions inside of strings"
    }
}
