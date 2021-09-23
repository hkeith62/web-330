class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <div id="footer-container">
           <div id="footer">
            <div class="footer-lists">
              <div class="footer-title"><h5>Quick Links</h5></div>
                <a href="#">My GitHub Repository</a>
                <a href="#">Bellevue Web Development</a>
                <a href="#">Course's YouTube</a>
                <a href="#">Web-330's GitHub</a>
            </div>
            <div class="footer-lists">
              <div class="footer-title"><h5>Social Media</h5></div>
                <a href="#">LinkedIn</a>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
            <div class="footer-lists">
              <div class="footer-title"><h5>Contact</h5></div>
                <div class="card-contact">
                  <div class="card-title"></div>
                  <div class="card-content" id="projects-container"></div>
			    </div>
            </div>
          </div>
        </div>
        <div id="copy-right">
           <span>Copyright &copy; &nbsp; Terms &nbsp; Privacy</span>
        </div>
        `;
    }
}

customElements.define("footer-component", Footer);