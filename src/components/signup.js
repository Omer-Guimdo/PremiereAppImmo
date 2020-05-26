import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {FirebaseContext} from './Firebase'
import Menu from "./Menu"
import call from "./call.svg"
import mail from "./mail.svg"
import security from "./security.svg"
import Footer from "./Footer"


const Signup = (props) => {

    const firebase = useContext(FirebaseContext);

const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: ''
}

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handlechange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {email, pseudo, password} = loginData;
        firebase.signupUser(email, password)
        .then(authUser => {
            return firebase.user(authUser.user.uid).set({
                pseudo,
                email
            })
        })
        .then(user => {
            setLoginData({...data});
            props.history.push('/MonAppConnecter');
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }

    const {pseudo, email, password, confirmPassword, checkbox} = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
    ? <button className="btn btn-primary btn-lg" disabled>Inscription</button> : <button className="btn btn-primary btn-lg">Iinscription</button>

    // Gestion des erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>;

    return (
        <div>
            <Menu />
            <div className="signUpLoginBox">
            <h1>BIENVENUE CHEZ IMMOAF</h1>
                <div className="slcontainer">
                    <div className="formBoxLeft">
                        <div className="formContent">
                            <form onSubmit={handleSubmit}>
                            {errorMsg}
                                <h2>Inscription</h2>
                                    <div className="inputBox">
                                        <label>Pseudo</label><br/>
                                        <input onChange={handlechange} value={pseudo} type="text" id="pseudo" autoComplete ="off" required />
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="email">Email</label><br/>
                                        <input onChange={handlechange} value={email} type="email" id="email" autoComplete ="off" required />
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="password">Mot de passe</label><br/>
                                        <input type="password" onChange={handlechange} value={password} id="password" required />
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="password">Confirmer le maot de passe</label><br/>
                                        <input onChange={handlechange} value={confirmPassword} type="password" id="confirmPassword" required />
                                    </div>
                                    <div>
                                        <input type="checkbox" name="datenschutz" id="checkbox4" required />
                                        <label htmlFor="checkbox4">En vous inscrivant, vous utilisez le service Immoaf. Vous recevrez des informations adaptées à vos préoccupations en fonction des données que vous avez saisies, des services utilisés et de notre objectif commercial. Vous pouvez vous opposer à ce service à tout moment à vieprivee@immoaf.com. Vous trouverez de plus amples informations dans la déclaration de protection des données. </label>
                                    </div>
                                    {btn}
                            </form>
                            <div className="linkContainer">
                                <Link className="simpleLink" to="login">Deja inscrit? connectez-vous.</Link>
                            </div>
                     </div>
                     <div className="formBoxRight">
                         <h2>Avez vous des question?</h2>
                         <div className="appel"><img src={call} /><p>Appelez nous au: +237 665661484</p></div>
                         <div className="mail"><img src={mail} /><p>Ecrivez nous à: daniel.guimdo@yahoo.com</p></div>
                         <div className="securite"><img src={security} /><p>En aucun cas, vos données personnelles ne seront transmises à des tiers sans votre consentement.</p></div>
                     </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}
export default Signup;