/**
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/18/2021
    Modified By: Keith Hall 
    Description: This is the validator for the Future Value App- web-330 assignment 6.2.   
*/
import RequiredField from "./required-field.js";        
import FloatField from "./float-field.js";           // Imported modules.
import FloatMinField from "./float-min-field.js";
import FloatMaxField from "./float-max-field.js";

export default class Validator {
    validators = []; // Creates two class properties and assigns each an empty array.
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    addRequiredField(name, field) { 
        this.validators.push(new RequiredField(this.name, this.field));   // Creates RequireField objects and pushes a new instance of the class to the validators array. 
    } 
    // Repeat push into validators array for RequiredFloatField, FloatMinField, and FloatMaxField.  
    addRequiredFloatField(){
        this.validators.push(new FloatField(this.name, this.field));  
    }
    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));    // Sets min/max. requirements for input field.
    }
    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max)); 
    }  
    validate() {
        for (const inputValidator of this.validators) {     // Iterates over validators array
            if(!inputValidator.validate()) {               // Calls validate function on iterated objects and if any input is false...
            this.messages.push(inputValidator.getMessage()); // Push the objects getMessage() function to the class properties message array...
            return false;
            }      
        }                      
        return true;        // ...otherwise, validate() function should return a Boolean true and validation was successful.
    }                
}
  
