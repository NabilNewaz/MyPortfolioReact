import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                {/*================Header Menu Area =================*/}
                <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container box_1620">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <NavLink className="navbar-brand logo_h" to='/'><b style={{color: '#FFF'}} ><font size={5}>NABIL NEWAZ</font></b></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul className="nav navbar-nav menu_nav ml-auto">
                            <li className="nav-item"><NavLink className="nav-link active" to='/'>Home</NavLink></li> 
                            <li className="nav-item"><NavLink className="nav-link" to='/about'>About</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to='/services'>Services</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to='/projects'>Projects</NavLink></li> 
                            <li className="nav-item"><NavLink className="nav-link" to='/contact'>Contact</NavLink></li>
                        </ul>
                        </div> 
                    </div>
                    </nav>
                </div>
                </header>
                {/*================Header Menu Area =================*/}
            </div>
        );
    }
}

export default Navbar;