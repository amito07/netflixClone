import {SCREEN_SHOW_REQUEST,SCREEN_SHOW_SUCCESS,SCREEN_SHOW_FAIL} from '../Constant/ScreenShow'
export const screenShowReducer = (state = {movielist:[]},action) =>{
    switch (action.type) {
        case SCREEN_SHOW_REQUEST:
            return {loading: true , movielist:[]}
        case SCREEN_SHOW_SUCCESS:
            return {loading: false , movielist: action.payload}
        case SCREEN_SHOW_FAIL:
            return {loading: false , error: action.payload}        
        default:
            return state;
    }
}