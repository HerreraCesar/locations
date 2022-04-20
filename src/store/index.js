import {applyMiddleware, combineReducers, createStore} from 'redux'

import placesReducer from './reducer/places.reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    places: placesReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))