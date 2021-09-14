/*
    Title: WEB 330 – Enterprise JavaScript II
    Author: Professor Itskovich
    Date: 09/06/2021
    Modified By: Keith Hall 
    Description: This page creates a custom html element.
*/
class CartComponent extends HTMLElement {   // Class inherits HTML functionality.
    constructor() {          
        super();
    }                             
    connectedCallback(data) {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart fa-2x"></i>(<span id="cart-count"></span>)`; //The functionality to be obtained when the element is created.
    }
}
customElements.define("cart-component", CartComponent);  //CartComponent class is registered with the "cart-component" tag name. 

 