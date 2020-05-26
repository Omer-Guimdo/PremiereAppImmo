import React, {useState, useEffect, useContext} from 'react'
import {FirebaseContext} from './Firebase'
import {Link} from 'react-router-dom'
import Menu from "./Menu"
import target from "./target.svg"
import ForgetPassword from "./ForgetPassword"
import Footer from "./Footer"

const Login = (props) => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !=='') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();

        firebase.loginUser(email, password)
        .then(user => {
            setEmail('');
            setPassword('');
            props.history.push('/MonAppConnecter');
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })
    }

    return (
        <div>
            <Menu />
            <div className="contenantTitre">
                <h1>BIENVENUE CHEZ IMMOAF</h1>
                <div className="contenantFlexBox">
                    <div className="contenantDesBox">
                        <div className="boxleft">

                            {error !== "" && <span>{error.message}</span>}

                            <h2>Connection</h2>
                            <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <label htmlFor="email">Email</label><br/>
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete ="off" required />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="password">Mot de passe</label><br/>
                                <input type="password" onChange={e => setPassword(e.target.value)} value={password} required />
                            </div>
                            {btn ? <button className="btn btn-primary btn-lg">Connextion</button> : <button className="btn btn-secondary btn-lg" disabled>Connextion</button> }
                            </form>
                            <Link className="forgetPass" to="/ForgetPassword">Mot de passe oublié.</Link>
                        </div>
                        <div className="boxright">
                            <h2>Du nouveau chez ImmoAF?</h2>
                            <div className="target"><img src={target} /><p>Inscription gratuite</p></div>
                            <div className="target"><img src={target} /><p>Fonctions exclusives pour les demandeurs et les fournisseurs de biens</p></div>
                            <div className="target"><img src={target} /><p>Services rapide et facile en quelques étapes</p></div>
                            <div className="loginlinkContainer">
                                <Link className="loginsimpleLink" to="/signup">Creez votre compte gratuitement</Link>
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
export default Login;