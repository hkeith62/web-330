/*
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/06/2021
    Modified By: Keith Hall 
    Description: This page creates custom html elements
*/
export class CartComponent extends HTMLElement {   // Class inherits HTML functionality.
    constructor() {          
        super();
    }                             
        connectedCallBack() {
        this.innerHTML = '<i id="cartIcon" class="fa fa-shopping-cart"></i>;' //innerHTML set to font awesome string.
    }
}
customElements.define("cart-component", CartComponent);  //CartComponent class is registered with the "cart-component" tag name.
 