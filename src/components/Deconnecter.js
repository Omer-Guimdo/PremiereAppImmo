import React from 'react';
import Footer from './Footer'
import Menu from './Menu'
import { Link } from 'react-router-dom';

const Deconnecter = () => {
    return (
        <div className="errorPage">
            <Menu />
            <div className="errorPageTextAndButton">
                <div className="errorPageText">
                    <h1>Bravo...!</h1>
                    <p>Vous vous êtes déconnecté avec succès. Merci et a bientot!</p>
                    <br/>
                    <p>Si vous souhaitez continuer à presenter et trouver d'autres biens, veuillez vous reconnecter.</p>

                </div>
                <Link type="button" className="btn btn-lg btn-primary" disabled to="./Login">Connexion</Link>
            </div>
            <Footer />
        </div>
    )
}
export default Deconnecter;