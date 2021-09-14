class Script extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          function myFunction() {
            var x = document.getElementById("myLinks");
                if (x.style.display === "block") {
                  x.style.display = "none";
                  } else {
                    x.style.display = "block";
                }
            }
        `;
    }
}
customElements.define("script-component", Script);