import {SCREEN_SHOW_REQUEST,SCREEN_SHOW_SUCCESS,SCREEN_SHOW_FAIL} from '../Constant/ScreenShow'
import axios from '../axios'

export const movielistAction = (fetchURL) => async(dispatch)=>{
   try {
       dispatch({type: SCREEN_SHOW_REQUEST})
       const {data} = await axios.get(fetchURL)
       dispatch({
           type: SCREEN_SHOW_SUCCESS,
           payload: data
       })
       
   } catch (error) {
       dispatch({
           type: SCREEN_SHOW_FAIL,
           payload: error.response && error.response.data.message ?
           error.response.data.message : error.message,
       })
       
   }

}