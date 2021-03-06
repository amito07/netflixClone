import {USER_REG_REQUEST,USER_REG_SUCCESS,USER_REG_FAIL,
    USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,
    USER_LOGOUT} from '../Constant/userConstant'

//user register reducer
export const userRegisterReducer = (state = {},action) =>{
    switch (action.type) {
        case USER_REG_REQUEST:
            return {loading: true}    
        case USER_REG_SUCCESS:
            return {loading: false , userInfo:action.payload} 
        case USER_REG_FAIL:
            return {loading: false , error:action.payload}     
        default:
            return state
    }

}

//user login reducer   
export const userLoginReducer = (state = {},action)=>{
    switch( action.type ){
        case USER_LOGIN_REQUEST:
            return {loading: true }
        case USER_LOGIN_SUCCESS:
            return {loading: false , userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return{}
        default:
            return state        
    }
}