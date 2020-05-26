import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDogFe0XQdkGZ8SkML_Qsom9oX9uzG2VkA",
    authDomain: "immo-af.firebaseapp.com",
    databaseURL: "https://immo-af.firebaseio.com",
    projectId: "immo-af",
    storageBucket: "immo-af.appspot.com",
    messagingSenderId: "986076554706",
    appId: "1:986076554706:web:a15387d4f0a3f47955540b"
  };


class Firebase{
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }
    //inscription
    signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    //connexion
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

    //deconnexion
    signoutUser = () => this.auth.signOut();

    //recuperer le mot de passe
    passwordRessert = email => this.auth.sendPasswordResetEmail(email);

    user = uid => this.db.doc(`users/${uid}`);

}

export default Firebase;