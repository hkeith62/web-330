/**
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 08/22/2021
    Modified By: Keith Hall 
    Description: This is the finance calculator for web-330 assignment 6.2- Future Value App.   
*/
class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;

    static calculateFutureValue(monthlyPayment, rate, years ) {
        const month = years * this.MONTHS_IN_YEAR;
        const interestRate = 1 + (rate/100);
        const presentValue = monthlyPayment * month;
        const futureValue = presentValue * (Math.pow(interestRate, month));
        return futureValue.toFixed(2);
    }
     
}