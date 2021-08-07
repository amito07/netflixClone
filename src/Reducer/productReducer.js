import {GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL,
    GET_PRODUCT_INFO_REQUEST,GET_PRODUCT_INFO_SUCCESS,GET_PRODUCT_INFO_FAIL} from '../Constant/productConstant'


export const productListReducer = (state = {products:[]},action)=>{
    switch( action.type ){
        case GET_PRODUCT_REQUEST:
            return {loading: true , products:[]}
        case GET_PRODUCT_SUCCESS:
            return {loading: false , products: action.payload}
        case GET_PRODUCT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state        
    }
}

export const productInfoReducer = (state = {product:[]},action)=>{
    switch( action.type ){
        case GET_PRODUCT_INFO_REQUEST:
            return {loading: true , product:[]}
        case GET_PRODUCT_INFO_SUCCESS:
            return {loading: false , product: action.payload}
        case GET_PRODUCT_INFO_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state        
    }
}