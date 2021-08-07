//Registration Action
import axios from 'axios'
import {USER_REG_REQUEST,USER_REG_SUCCESS,USER_REG_FAIL,
    USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,
    USER_LOGOUT} from '../Constant/userConstant'



//registration action
export const register = (name,email,phone,address,password)=>async(dispatch)=>{
    try {
        dispatch({
            type: USER_REG_REQUEST,
        })


        //set the header for the post method
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        //getting user data including tokens and so..........
        const {data} = await axios.post('/api/users/registration',{name,email,phone,address,password} ,config)
        console.log("Reg Data",data);

        dispatch({
            type: USER_REG_SUCCESS,
            payload: data,
        })

        //convert data in string formate...web receive string formate only
        localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_REG_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}

//Log in Action   
export const login = (email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })


        //set the header for the post method
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        //getting user data including tokens and so..........
        const {data} = await axios.post('/api/users/login',{email , password} ,config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        //convert data in string formate...web receive string formate only
        localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}

//Log out Action
export const logout = ()=> (dispatch)=>{
    localStorage.removeItem('userInfo')
    // localStorage.removeItem('user')
    dispatch({type: USER_LOGOUT})
}