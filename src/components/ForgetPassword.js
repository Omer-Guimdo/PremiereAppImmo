import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {FirebaseContext} from './Firebase';
import Menu from './Menu';
import target from "./target.svg"
import Footer from './Footer';

const ForgetPassword = props => {

    const firebase = useContext(FirebaseContext);
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)


    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordRessert(email)
        .then(() => {
            setError(null);
            setSuccess(`Veillez consulter votre mail ${email} pour changer votre mot de passe`)
            setEmail("");
            setTimeout(() => {
                props.history.push('/Login')
            }, 5000)
        })
        .catch(error => {
            setError(error);
            setEmail("");

        })
    }
    const disabled = email === "";

    return (


    <div>
            <Menu />
            <div className="contenantTitre">
                <h1>BIENVENUE CHEZ IMMOAF</h1>
                <div className="contenantFlexBox">
                    <div className="contenantDesBox">
                        <div className="boxleft">

                        { success && <span 
                        style={{
                            border:"1px solid green",
                            background: "green",
                            color:"#ffffff",
                            }}
                            >
                            {success}
                        </span>}

                        {
                            error && <span style={{color:"red"}}>{error.message}</span>
                        }
                            <h2>Mot de passe oublié?</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="inputBox">
                                    <label htmlFor="email">Email</label><br/>
                                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete ="off" required />
                                </div>
                                <button className="btn btn-primary btn-lg" disabled={disabled}>Recuperer</button>
                            </form>
                        </div>
                        <div className="boxright">
                            <h2>Du nouveau chez ImmoAF?</h2>
                            <div className="target"><img src={target} /><p>Inscription gratuite</p></div>
                            <div className="target"><img src={target} /><p>Fonctions exclusives pour les demandeurs et les fournisseurs de biens</p></div>
                            <div className="target"><img src={target} /><p>Services rapide et facile en quelques étapes</p></div>
                            <div className="loginlinkContainer">
                                <Link className="loginsimpleLink" to="/Login">Deja inscrit? connectez-vous.</Link>
                            </div>

                        </div>
                    </div>
                    <div className="boxbottom">
                        <h2>Note de sécurité: Ne transmettez jamais vos données d'accès à des tiers personnes</h2>
                        <div>Si vous recevez des messages suspects par e-mail ou SMS, demandant vos données d'accès ou vous demandant de visiter un site Web tiers, veuillez nous contacter directement.</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default ForgetPassword
