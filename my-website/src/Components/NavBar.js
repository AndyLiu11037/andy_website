import React, {Component} from 'react'
import './../App.css'
import './../fonts.css'
class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="website-name">Andy Liu's Resume</div>
                <div className="navbar-nav ml-5">
                    <a className="nav-item nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/about">About</a>
                    <a className="nav-item nav-link" href="/projects">Past Projects</a>
                </div>
            </nav>
        )

    }

}
export default NavBar;