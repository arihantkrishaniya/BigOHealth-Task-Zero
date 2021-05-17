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
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className= "mr-auto" href= "/">
                        <img src="assets/images/logo.png" height="60" width="80" alt="Webicoun logo"/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className = "nav-link"  to = "/home">
                                <span className = "fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link"  to = "/blogs">
                                <span className = "fa fa-list fa-lg"></span> Blogs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className = "nav-link"  to = "/webinar">
                                <span className = "fa fa-info fa-lg"></span> Webinars
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
                            <h1>Webicoun India</h1>
                            <p>Webicoun is a health-tech organization focusing on Emotional, Mental and Physical wellness through Webinars and Counselling. We aim at solving any type of challenges/problems faced by an individual so that these problems do not accumulate and become a major problem in long run.</p>
                        </div>
                    </div>
                </div> 
            </Jumbotron>
     
            </> //React.Fragment
        )
    }
}
export default Header;