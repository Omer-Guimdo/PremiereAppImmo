import React, { Component }  from 'react';
import site_touristique from "./site_touristique.svg"
import guide_touristique from "./guide_touristique.svg"
import maison_meublee from "./maison_meublee.svg"
import hotel from "./hotel.svg"

class Espace_touriste extends Component{


    render(){
        return (
            <div className="Espace_touriste_g">
                <h1 className="espace_touristique_titre">Nos services touristique</h1>
            <div className="Espace_touriste">
                <div>
                   <a href="#"><img src={site_touristique} alt="Sites touristiques" title="Sites touristiques"/>
                    <h3> Sites touristiques</h3></a> 
                </div>
                <div>
                   <a href="#"> <img src={guide_touristique} alt="Guide touristique" title="Guide touristique"/>
                    <h3> Guides touristiques</h3></a>
                </div>
                <div>
                   <a href="#"> <img src={maison_meublee} alt="Guide touristique" title="Guide touristique"/>
                    <h3> Maisons Meublees</h3></a>
                </div>
                <div>
                   <a href="#"> <img src={hotel} alt="Guide touristique" title="Hotel"/>
                    <h3> Hotel</h3></a>
                </div>
            </div>
            </div>

        );
    }
}

export default Espace_touriste;