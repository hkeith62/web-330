class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <div id="header">  
            <ul class="nav-container">
              <span id="logo" style="width:90px; height:40px;"></span>
                <li><a href="home.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="database-diagrams.html">Database Diagrams</a></li>
                <li><a href="unit-tests.html">API Unit Tests</a></li>
                <li><a href="about.html">About</a></li>  
                <li><a href="resume.html">Resume</a></li>
                <div class="the-hamburger"><a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars fa-lg"></i></div>
            </ul>
          </div>`
        ;
    }
}

customElements.define("header-component", Header);