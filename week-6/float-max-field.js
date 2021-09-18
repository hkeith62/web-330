/**
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 08/22/2021
    Modified By: Keith Hall 
    Description: This is the float-max-field module for the Future Value App-web-330 assignment 6.2.   
*/
export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }
    validate() {
        const floatVal = parseFloat(this.field);   // ParseFloat for numeric value.
        return(floatVal < this.max) ? false : true; // If the numeric value of this.field is less than this.max, returns false.
    }
    getMessage() {
        `${this.name} must be more than ${this.max}. You entered ${this.field}`;
    }
}