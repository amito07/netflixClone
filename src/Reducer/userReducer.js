import {USER_REG_REQUEST,USER_REG_SUCCESS,USER_REG_FAIL} from '../Constant/userConstant'

//user register reducer
export const userRegisterReducer = (state = {},action) =>{
    switch (action.type) {
        case USER_REG_REQUEST:
            return {loading: true}    
        case USER_REG_SUCCESS:
            return {loading: false , payload:action.payload} 
        case USER_REG_FAIL:
            return {loading: false , payload:action.payload}     
        default:
            return state
    }

}