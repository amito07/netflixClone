import React,{useState,useEffect} from 'react'
import "./Signup.css"
import {useDispatch , useSelector} from 'react-redux'
import {NavLink,useHistory} from 'react-router-dom'
import {login} from '../Action/userActions'
const Signup = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    useEffect(() => {
        if(userInfo){
            history.push('/home')
        }
    }, [history , userInfo])

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(login(email,password))
    }
    return(
        <div className="LoginScreen">
            <div className="LoginScreen_background">
                <img className="LoginScreen_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="imgasdasd"/>
                <div className="LoginScreen_gradient"></div>
            </div>
            <div className="LoginScreen_body">
            <div className="signupScreen">
                <form onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    {/* Email field */}
                    <input  placeholder="Email" type="email" name="email" id="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    ></input>

                    {/* password field */}
                    <input  placeholder="Password" type="password" name="password" id="password"
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}
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
