import React,{useState} from 'react'
import "./Signup.css"
import {NavLink,useHistory} from 'react-router-dom'
const Signup = () => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div className="LoginScreen">
            <div className="LoginScreen_background">
                <img className="LoginScreen_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="imgasdasd"/>
                <div className="LoginScreen_gradient"></div>
            </div>
            <div className="LoginScreen_body">
            <div className="signupScreen">
                <form method="POST">
                    <h1>Sign In</h1>
                    <input  placeholder="Email" type="email" name="email" id="email"
                        value={email}
                    ></input>
                    <input  placeholder="Password" type="password" name="password" id="password"
                         value={password}
                    ></input>
                    <button type="submit">Sign In</button>
                    <h4>
                        <span className="grey">New To Netflix? </span>
                        {/* <span className="signup_underline">Sign Up Now</span> */}
                        <NavLink to="/registration" className="signup_underline"> Sign Up Now</NavLink>     
                    </h4>
                </form>

            </div>

            </div>
        </div>       
)
}

export default Signup
