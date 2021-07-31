import React,{useState} from 'react'
import "./RegistrationForm.css"
import {NavLink,useHistory} from "react-router-dom"

const RegisterForm = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    return (
        <div className="registerScreen">
            <form method="POST">
                <h1>Registration</h1>
                <input  placeholder="Name" type="text" name="name" className="inputform"
                value={name}></input>

                <input  placeholder="Email" type="email" name="email" className="inputform"
                value={email}
                ></input>
                <input  placeholder="Phone" type="text" name="phone" className="inputform"
                value={phone}
                ></input>
                <input  placeholder="Address" type="text" name="address" className="inputform"
                value={address}
                ></input>
                <input  placeholder="Password" type="password" name="password" className="inputform"
                value={password}
                ></input>
                <input  placeholder="Confirm Password" type="password" name="cpassword" className="inputform"
                value={cpassword}
                ></input>
                <button type="submit" className="buttonInput">Sign Up</button>
                <h4>
                    <span className="grey"> Already Registered? </span>
                    {/* <span className="signup_underline">Sign Up Now</span> */}
                    <NavLink to="/signup" className="signup_underline"> Sign In Now</NavLink>
                    
                </h4>
             </form>
        </div>
    )
}

export default RegisterForm
