import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Queries from './QueriesComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component{

  render(){
    return (
    <div>
      <Header />
      <Switch>
          <Route exact path = "/queries" component = {Queries} />
          <Route exact path = "/home" component = {Home} />
          <Redirect to= "/queries" />
      </Switch>
      <Footer />
      
    </div>
    );
  }
}

export default Main;
