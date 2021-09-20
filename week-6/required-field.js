/**
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/15/2021
    Modified By: Keith Hall 
    Description: This is the required-field module for the Future Value App-web-330 assignment 6.   
*/
export default class RequiredField {
    constructor(name, field) {
      this.name = name;
      this.field = field;
    }
    validate() {
        return Boolean(this.field); //Returns true if this.field is a string value and false if not.
    }
    getMessage() {
      return `${this.name} is a required field`;  // Uses template literals (``) and string interpolation- ${...} to insert expression inside of string.
  }
}