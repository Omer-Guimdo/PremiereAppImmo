import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*import Logo from './components/Logo'*/
import MonApp from './components/MonApp'
import MonAppConnecter from './components/MonAppConnecter'
import Menu from './components/Menu'
import Location from './components/Location'
import Entretien from './components/Entretien'
import Renovation from './components/Renovation'
import Vente from './components/Vente'
import Demenagement from './components/Demenagement'
import Menage from './components/Menage'
import ErrorPage from './components/ErrorPage'
import Article from './components/Article'
import Poster from './components/Poster'
import Espace_touriste from './components/Espace_touriste'
import Espace_immobilier from './components/Espace_immobilier'
import Mobile_app from './components/Mobile_app'
import signup from "./components/signup"
import Deconnecter from "./components/Deconnecter"
import Logout from "./components/Logout"
import ForgetPassword from './components/ForgetPassword'


import Footer from './components/Footer'

import './App.css';
import Login from './components/Login';


class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MonApp} />
          <Route path="/MonAppConnecter" component={MonAppConnecter} />
          <Route path="/signup" component={signup} />
          <Route path="/Login" component={Login} />
          <Route path="/MonApp" component={MonApp} />
          <Route path="/Deconnecter" component={Deconnecter} />
          <Route path="/Logout" component={MonAppConnecter} />
          <Route path="/ForgetPassword" component={ForgetPassword} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
