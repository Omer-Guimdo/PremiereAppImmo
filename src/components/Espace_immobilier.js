import React, { Component }  from 'react';
import site_touristique from "./site_touristique.svg"
import guide_touristique from "./guide_touristique.svg"
import maison_meublee from "./maison_meublee.svg"
import maison_a_louer from "./maison_a_louer.svg"
import demenagement from "./demenagement.svg"
import hotel from "./hotel.svg"
import renovation from "./renovation.svg"
import immo_a_vendre from "./immo_a_vendre.svg"
import profil from "./profil.svg"
import jobs from "./jobs.svg"

class Espace_immobilier extends Component{


    render(){
        return (
            <div className="Espace_immobilier_g">
                <h1 className="espace_immobilier_titre">Nos services Immobiliers</h1>
                <div className="Espace_immobilier1">
                    <div>
                    <a href="#"><img src={maison_a_louer} alt="maison à louer" title="maison à louer"/>
                        <h3> Maison à louer</h3></a> 
                    </div>
                    <div>
                    <a href="#"> <img src={demenagement} alt="Déménagement" title="Déménagement"/>
                        <h3> Déménagement</h3></a>
                    </div>
                    <div>
                    <a href="#"> <img src={renovation} alt="Rénovation" title="Rénovation"/>
                        <h3> Rénovation</h3></a>
                    </div>
                </div>

                <div className="Espace_immobilier2">
                    <div>
                    <a href="#"><img src={immo_a_vendre} alt="Immobilier à vendre" title="Immobilier à vendre"/>
                        <h3> Immobilier à vendre</h3></a> 
                    </div>
                    <div>
                    <a href="#"> <img src={profil} alt="Mon Profil" title="Mon Profil"/>
                        <h3> Mon profil</h3></a>
                    </div>
                    <div>
                    <a href="#"> <img src={jobs} alt="Mini-Jobs" title="Mini-Jobs"/>
                        <h3> Bon Jobs</h3></a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Espace_immobilier;