import {GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL,
    GET_PRODUCT_INFO_REQUEST,GET_PRODUCT_INFO_SUCCESS,GET_PRODUCT_INFO_FAIL} from '../Constant/productConstant'
import axios from 'axios'

export const listProducts = ()=> async(dispatch)=>{
    try {
        dispatch({type:GET_PRODUCT_REQUEST})

        const {data} = await axios.get('/api/products')
        dispatch({
            type:GET_PRODUCT_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
    }
}

export const listProductDetails = (id)=> async(dispatch)=>{
    try {
        dispatch({type:GET_PRODUCT_INFO_REQUEST})

        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
            type:GET_PRODUCT_INFO_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_INFO_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message : error.message,
        })
    }
}