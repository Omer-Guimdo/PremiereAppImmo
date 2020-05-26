import React from 'react';
import Footer from './Footer'
import Menu from './Menu'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="errorPage">
            <Menu />
            <div className="errorPageTextAndButton">
                <div className="errorPageText">
                    <h1>Uups...!</h1>
                    <p>Nous n'avons pas trouve la page que vous recherchez</p>
                </div>
                <Link type="button" className="btn btn-lg btn-primary" disabled to="./MonApp">Retournez à la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}
export default ErrorPage;