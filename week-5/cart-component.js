/*
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/06/2021
    Modified By: Keith Hall 
    Description: This page creates custom html elements
*/
class CartComponent extends HTMLElement {   // Class inherits HTML functionality.
    constructor() {          
        super();
    }                             
    connectedCallback() {
        this.innerHTML = `
            <span id="cart-count">
                <i id="cartIcon" class="fa fa-shopping-cart fa-2x">
                </i>
            </span>
        `;
    }
}
customElements.define("cart-component", CartComponent);  //CartComponent class is registered with the "cart-component" tag name. 

 