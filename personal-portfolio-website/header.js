class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <div id="header"> 
            <span id="logo" style="width:100px; height:40px;"></span>	
 		      <div class="the-hamburger"><a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars fa-lg"></i></a></div>
                <ul class="nav-container">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="projects.html">Projects</a></li>
                  <li><a href="data-base.html">Database Diagrams</a></li>
                  <li><a href="unit-tests.html">API Unit Tests</a></li>
                  <li><a href="about.html">About</a></li>  
                  <li><a href="resume.html">Resume</a></li>
               </ul>
          </div>`
        ;
    }
}
customElements.define("header-component", Header);