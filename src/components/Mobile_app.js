import React, { Component }  from 'react';
import google_play from "./google_play.svg"
import AppStore from "./AppStore.png"

class Mobile_app extends Component{


    render(){
        return (
            <div className="mobile_app_g">
                <h1>Téléchargez nos applications sur <a href="#">App Store</a>  et <a href="#">Google Play</a></h1>
                <div className="mobile_app">
                    <div className="android">
                        <a href="#"><img src={google_play} alt="Application Android" title="Application Android"/></a>
                    </div>
                    <div className="apple">
                        <a href="#"><img src={AppStore} alt="Application ios" title="Application ios"/></a>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Mobile_app;