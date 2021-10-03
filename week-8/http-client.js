/**
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 10/0s/2021
    Modified By: Keith Hall 
    Description: This is the float-field module for the Future Value App-web-330 assignment 6.2.   
*/
export class HttpClient {  
    async get(url, params = '') {   
        url = new URL(url);  
        url.search = new URLSearchParams(params);  
        const res = await fetch(url.toString(), {  
            method: 'GET'
        })
        return res.json(); 
    }
}