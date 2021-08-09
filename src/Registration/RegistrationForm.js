import React,{useState,useEffect} from 'react'
import "./RegistrationForm.css"
import {useDispatch , useSelector} from 'react-redux'
import {NavLink,useHistory} from "react-router-dom"
import {register} from '../Action/userActions'
import Message from '../Notify/Message'
import Loader from '../Notify/Loader'

const RegisterForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const userRegister = useSelector(state => state.userRegister)
    const {loading , error , userInfo} = userRegister
    console.log(userInfo);
    useEffect(() => {
        if(userInfo){
            history.push('/signup')
        }
    }, [history , userInfo])

    const submitHandle = (e)=>{
        e.preventDefault();
        if(password !== cpassword){
            window.alert('Problem with email or password !!')
        }

        dispatch(register(name,email,phone,address,password))
    }
    return (
        <>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <div className="registerScreen">
            <form onSubmit={submitHandle}>
                <h1>Registration</h1>
                {/* name field */}
                <input  placeholder="Name" type="text" name="name" className="inputform"
                value={name} onChange={(e)=> setName(e.target.value)}></input>
                {/* email field */}
                <input  placeholder="Email" type="email" name="email" className="inputform"
                value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                {/* phone field */}
                <input  placeholder="Phone" type="text" name="phone" className="inputform"
                value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
                {/* address field */}
                <input  placeholder="Address" type="text" name="address" className="inputform"
                value={address} onChange={(e)=> setAddress(e.target.value)}></input>
                {/* password field */}
                <input  placeholder="Password" type="password" name="password" className="inputform"
                value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                {/* cpassword field */}
                <input  placeholder="Confirm Password" type="password" name="cpassword" className="inputform"
                value={cpassword} onChange={(e)=> setCpassword(e.target.value)}></input>

                <button type="submit" className="buttonInput">Sign Up</button>
                <h4>
                    <span className="grey"> Already Registered? </span>
                    {/* <span className="signup_underline">Sign Up Now</span> */}
                    <NavLink to="/signup" className="signup_underline"> Sign In Now</NavLink>
                </h4>
             </form>
        </div>
        
        </>
        
    )
}

export default RegisterForm
