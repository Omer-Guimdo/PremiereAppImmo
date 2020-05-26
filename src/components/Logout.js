import React, { useState, useEffect, useContext } from 'react'
import {FirebaseContext} from './Firebase'
import { Link } from 'react-router-dom';


const Logout = () => {

    const firebase = useContext(FirebaseContext)

    const [checked, setChecked] = useState(false);


    useEffect(() => {
        if(checked){
            console.log("Deconnection");
            firebase.signoutUser();
        }
    }, [checked, firebase])

    const handleChange = event => {
        setChecked(event.target.checked);

    }

    return (
                <div className="btn-group-toggle" data-toggle="toggle">
                    <label className="btn btn-secondary">
                        <input
                        onChange={handleChange}
                        type="checkbox" 
                        checked = {checked}
                        /> Deconnectez-vous
                    </label>
                </div>
    )
}

export default Logout;