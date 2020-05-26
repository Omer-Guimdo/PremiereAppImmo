import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*import Logo from './components/Logo'*/
import Menu from './Menu'
import Location from './Location'
import Entretien from './Entretien'
import Renovation from './Renovation'
import Vente from './Vente'
import Demenagement from './Demenagement'
import Menage from './Menage'
import ErrorPage from './ErrorPage'
import Article from './Article'
import Poster from './Poster'
import Espace_touriste from './Espace_touriste'
import Espace_immobilier from './Espace_immobilier'
import Mobile_app from './Mobile_app'
import Footer from './Footer'

class App extends Component {
  render(){
    return (
      <div>
        
        <Menu />
        <Article />
        <Poster />
        <Espace_touriste />
        <Espace_immobilier />
        <Mobile_app />
        <Footer />
      </div>
    );
  }
}

export default App;
