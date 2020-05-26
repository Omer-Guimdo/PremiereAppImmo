import React, { Component, useState, useContext, useEffect } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*import Logo from './components/Logo'*/
import {FirebaseContext} from './Firebase'
import Menu from './Menu'
import MenuConnecter from './MenuConnecter'
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

//Avec gestion de la session d'utilisation

const MonAppConnecter = props => {

  const firebase = useContext(FirebaseContext);

  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
     let listener = firebase.auth.onAuthStateChanged(user => {
          user ? setUserSession(user) : props.history.push('/');
      })
      if(!!userSession){
        firebase.user(userSession.uid)
        .get()
        .then(doc => {
          if(doc && doc.exists){
          const myData = doc.data();
          setUserData(myData)
        }
      })
      .catch(error => {
        console.log(error)
      })
      }

      

      return () => {
          listener()
      };
  }, [userSession])


  return  userSession  === null ? (
    <div className="loader">
      <div>Patientez un instant....</div>
      <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    </div>
) : (
      <div>
      <MenuConnecter userData={userData}/>
      <Article />
      <Poster />
      <Espace_touriste />
      <Espace_immobilier />
      <Mobile_app />
      <Footer />
    </div>
    )
}
export default MonAppConnecter;
