import { combineReducers } from 'redux'
import { weatherReducer } from './weather/weatherReducer'




const rootReducer = combineReducers({
    weatherReducer: weatherReducer.reduce,
})

export default rootReducer
