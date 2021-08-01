import { createStore, combineReducers,applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {screenShowReducer} from '../Reducer/ScreenShowReducer'
import {userRegisterReducer} from '../Reducer/userReducer'
import thunk from 'redux-thunk';

const userinfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

//initial the state
const initialState = {
    userLogin: {userInfo : userinfoFromStorage}
}

const reducer = combineReducers({
    screenShow : screenShowReducer,
    userRegister:userRegisterReducer
})

//it is work as a middleware (thunk)
const middleware = [thunk]

//create the container named store
const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store
