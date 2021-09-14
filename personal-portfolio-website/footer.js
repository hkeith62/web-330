class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <p>
                    <span>Copyright &copy; 2021>Site by Keith Hall</span>
                </p>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);