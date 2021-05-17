import React, { Component } from 'react';
import Header from './HeaderComponent';
import Blogs from './BlogsComponent.js';
import Webinars from './WebinarsComponent.js';
import Home from './HomeComponent'
import Footer from './FooterComponent'
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component{

  render(){
    return (
    <div>
      <Header />
      <Switch>
          <Route exact path = "/home" component = {Home} />
          <Route exact path ="/blogs" component = {Blogs} />
          <Route exact path ="/webinars" component ={Webinars} />
          <Redirect to= "/home" />
      </Switch>
      <Footer />
      
    </div>
    );
  }
}

export default Main;
