/**
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/17/2021
    Modified By: Keith Hall 
    Description: This is the float-min-field module for the Future Value App- web-330 assignment 6.2.   
*/
export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }
    validate() {
        const floatVal = parseFloat(this.field);   // ParseFloat for numeric value.

        return(floatVal > this.min) ? false : true; // If the numeric value of this.field is greater than this.min, return false.
    }
    getMessage() {
        `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
}