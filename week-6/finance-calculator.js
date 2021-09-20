/**
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/18/2021
    Modified By: Keith Hall 
    Description: This is the finance calculator for the Future Value App- web-330 assignment 6.2.   
*/
export default class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;

    // Finance Calculator
    static calculateFutureValue(monthlyPayment, rate, years ) {   
        const month = years * this.MONTHS_IN_YEAR;    // Converts years into months
        const interestRate = 1 + (rate/100);   // Estimates the effects of compounding interest       
        const presentValue = monthlyPayment * month; 
        const futureValue = presentValue * (Math.pow(interestRate, month));  // Multiplies present value times the base to the exponent power, as in base^exponent (1 + interestRate)=

        return futureValue.toFixed(2);
    } 
    // International currency formatter.
    static convertToCurrency(field) {
        const currencyFormatter = new Intl.NumberFormat("en-US", {  // This uses the locales (en-US) and options (style, currency) objects.
            style: "currency", 
            currency: "USD"
         });
         
         return currencyFormatter.format(field);
    }
}