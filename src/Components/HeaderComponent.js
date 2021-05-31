import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <>
            <Navbar expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className= "mr-auto" href= "/">
                        <img src="assets/images/bigohealth-logo.png" height="50" width="130" alt="BigOHealth logo"/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className = "nav-link"  to = "/home">
                                 Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link"  to = "/book appointment">
                                 Book Appointment
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link"  to = "/consult online">
                                 Consult Online
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link"  to = "/covid-19">
                                 Covid-19
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link"  to = "/covid home care">
                                 Covid Home Care
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link"  to = "/queries">
                                 Queries
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className = "col-12 col-sm-6">
                            <h1>Expert Advice!</h1>
                            <p>We started an initiative to help the rural population with free doctor consultations and more than 8000 patients have been benefitted from this initiative.</p>
                        </div>
                    </div>
                </div> 
            </Jumbotron>
     
            </> //React.Fragment
        )
    }
}
export default Header;