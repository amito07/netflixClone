import React from 'react'
import "./Registration.css"
import RegisterForm from "./RegistrationForm"

const Registration = () => {
    return(
        <div className="LoginScreen">
            <div className="LoginScreen_background">
                <img className="LoginScreen_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="imgasdasd"/>
                <div className="LoginScreen_gradient"></div>
            </div>
            <div className="LoginScreen_body">
                {
                    <RegisterForm/>     
                }
            </div>
        </div>
    )
}

export default Registration
