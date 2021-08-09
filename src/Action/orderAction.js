import {ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,ORDER_PAY_REQUEST,ORDER_PAY_SUCCESS,ORDER_PAY_FAIL,ORDER_PAY_RESET,
    ORDER_MYORDERS_REQUEST,ORDER_MYORDERS_SUCCESS,ORDER_MYORDERS_FAIL} from '../Constant/orderConstant'
import axios from 'axios' 

export const createOrder = (order)=>async(dispatch,getState)=>{
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
        })

        //get the user info
        const {userLogin:{userInfo}} = getState()
        //set the header for the post method
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        //getting user data including tokens and so..........
        const {data} = await axios.post('/api/orders', order,config)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })
        //convert data in string formate...web receive string formate only
        localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}

//SET THE ORDER TO PAID
export const payOrder = (orderId,paymentMethod)=>async(dispatch,getState)=>{
    try {
        dispatch({
            type: ORDER_PAY_REQUEST,
        })

        //get the user info
        const {userLogin:{userInfo}} = getState()
        //set the header for the post method
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        //getting user data including tokens and so..........
        const {data} = await axios.put(`/api/orders/${orderId}/pay`,paymentMethod,config)
        console.log("DATA Returned",data)

        dispatch({
            type: ORDER_PAY_SUCCESS,
        })
        //convert data in string formate...web receive string formate only
        // localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}

//get the order using user_id
export const listMyOrders = ()=>async(dispatch,getState)=>{
    try {
        dispatch({
            type: ORDER_MYORDERS_REQUEST,
        })

        //get the user info
        const {userLogin:{userInfo}} = getState()
        //set the header for the post method
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        //getting user data including tokens and so..........
        const {data} = await axios.get(`/api/orders/myorder`,config)

        dispatch({
            type: ORDER_MYORDERS_SUCCESS,
            payload: data,
        })
        //convert data in string formate...web receive string formate only
        // localStorage.setItem('userInfo',JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: ORDER_MYORDERS_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
        
    }
}