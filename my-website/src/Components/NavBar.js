import React, {Component} from 'react'
import './../App.css'
import './../fonts.css'
class NavBar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="website-name">Andy Liu's Resume</div>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Features</a>
                    <a class="nav-item nav-link" href="#">Pricing</a>
                    <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
            </nav>
        )

    }

}
export default NavBar;