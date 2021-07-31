import { createStore, combineReducers,applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {screenShowReducer} from '../Reducer/ScreenShowReducer'
import thunk from 'redux-thunk';


const reducer = combineReducers({
    screenShow : screenShowReducer
})

//it is work as a middleware (thunk)
const middleware = [thunk]

//create the container named store
const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store
