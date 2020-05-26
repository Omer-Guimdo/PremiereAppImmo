import React, { Component }  from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component{
  
    render(){
        return (
            <div className="header">
                    <div className="Logo">
                        <div className="lesLogos"><Link to="./MonApp"><p className="logo1">immo<strong className="logo2">af.com</strong></p></Link></div>
                        <div className="connecter"><Link to="./Login" ><p className="btn btn-outline-dark" >se connecter</p> </Link></div>
                        <div className="inscrire"><Link to="./signup"><p className="btn btn-dark">s'inscrire</p></Link></div>
                        <div className="recherche">
                            <div className="navbar navbar-light bg-light">
                                <form className="form-inline">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="nav">
                    <ul>
                        <li className="menu-Location"> <a href="vente">Location</a>
                        <ul className="submenu">
                            <li> <a href="#">Chambre</a></li>
                            <li> <a href="#">Studio</a></li>
                            <li> <a href="#">Appartement</a></li>
                            <li> <a href="#">Bureau</a></li>
                            <li> <a href="#">Salle de fête</a></li>
                            <li> <a href="#">Hotel</a></li>
                            <li> <a href="#">Meublé</a></li>
                        </ul>
                        </li>
                        <li className="menu-Vente"> <a href="Vente">Vente</a>
                            <ul className="submenu">
                                <li> <a href="#">Maison</a></li>
                                <li> <a href="#">Terrain</a></li>
                                <li> <a href="#">Meuble</a></li>
                                <li> <a href="#">Appareil numerique</a></li>
                                <li> <a href="#">Appareil elector-menager</a></li>
                                <li> <a href="#">Telephone</a></li>
                                <li> <a href="#">Autres</a></li>
                            </ul>
                        </li>
                        <li className="menu-tourisme"> <a href="Tourisme">Guide touristique</a>
                            <ul className="submenu">
                                <li> <a href="#">Cameroun</a></li>
                                <li> <a href="#">centre</a></li>
                                <li> <a href="#">Litoral</a></li>
                                <li> <a href="#">Ouest</a></li>
                                <li> <a href="#">Est</a></li>
                                <li> <a href="#">Nord-Ouest</a></li>
                                <li> <a href="#">Sud-ouest</a></li>
                                <li> <a href="#">Nord</a></li>
                                <li> <a href="#">Exprem-Nord</a></li>
                                <li> <a href="#">Adamaoua</a></li>
                                <li> <a href="#">Sud-ouest</a></li>
                            </ul>
                        </li>
                        <li className="menu-Renovation"> <a href="Renovation">Renovation</a>
                            <ul className="submenu">
                                <li> <a href="#">Plombier</a></li>
                                <li> <a href="#"> Electricien</a></li>
                                <li> <a href="#">Menuisier</a></li>
                                <li> <a href="#">maçon</a></li>
                                <li> <a href="#">Aluminium</a></li>
                            </ul>
                        </li>
                        <li className="menu-Demenagement"> <a href="Demenagement">déménagement</a>
                            <ul className="submenu">
                                <li> <a href="#">Chargeur</a></li>
                                <li> <a href="#">Moto transporteur</a></li>
                                <li> <a href="#">Taxi transporteur</a></li>
                                <li> <a href="#">cargo transporteur</a></li>
                                <li> <a href="#">gros transporteur</a></li>
                                <li> <a href="#">Autres</a></li>
                            </ul>
                        </li>
                        <li className="menu-Menage"> <a href="Menage">Ménage</a>
                            <ul className="submenu">
                                <li> <a href="#">la ménagère</a></li>
                                <li> <a href="#">service d' entretien</a></li>
                                <li> <a href="#">Autres</a></li>
                                <li> <a href="#">Gardinier</a></li>
                            </ul>
                        </li>
                        <li className="menu-Forum"> <a href="/Forum">Forum</a>
                            <ul className="submenu">
                                <li> <a href="#">Forum</a></li>
                                <li> <a href="#">Forum</a></li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </div>
            )
    }
}
export default Menu;