import React, { Component }  from 'react';

class Forms extends Component{



    render(){
        return (
            <div className="forms">
                <h2 className="titre1">postez ou trouver vos services immobiliers et touristiques</h2>
                    <form>
                        <div className="form">
                        <div className="lieuImmo">
                            <label htmlFor="lieuImmobilier">Ou cherchez vous</label>
                            <input type="text" className="form-control" id="lieuImmobilier" placeholder="Region, Ville, ..."/>
                    </div>
                    <div className="naturImmo">
                        <label htmlFor="select">Que cherchez vous ?</label><br/>
                        <select className="custom-select" id="inputGroupSelect01" name="natureImmobilier">
                            <option>Immobilier, Tourisme, Job</option>
                            <option>Maison a Louer</option>
                            <option>Maison a vendre</option>
                            <option>Terrain a vendre</option>
                            <option>Guide touristique</option>
                            <option>Petit boulot</option>
                            <option>Aide pour demenagement</option>
                            <option>Technicien</option>
                        </select>
                    </div>
                    <div className="prixMin">
                        <label htmlFor="select">Prix Min</label><br/>
                        <select className="custom-select" id="inputGroupSelect01" name="PrixMin">
                            <option>min</option>
                            <option>10000</option>
                            <option>15000</option>
                            <option>20000</option>
                            <option>25000</option>
                            <option>50000</option>
                            <option>100000</option>
                            <option>200000</option>
                            <option>500000</option>
                            <option>1000000</option>
                            <option>5000000</option>

                        </select>
                    </div>
                    <div className="prixMax">
                        <label htmlFor="select">Prix Max</label><br/>
                        <select className="custom-select" id="inputGroupSelect01" name="PrixMin">
                            <option>Max</option>
                            <option>10000</option>
                            <option>15000</option>
                            <option>20000</option>
                            <option>25000</option>
                            <option>50000</option>
                            <option>100000</option>
                            <option>200000</option>
                            <option>500000</option>
                            <option>1000000</option>
                            <option>5000000</option>
                            
                        </select>
                    </div>

                </div>
                    <div>
                        <button className="btn btn-primary" type="submit">Chercher</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Forms;