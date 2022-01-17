import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import userDataReducer from '../reducers/userData'

//Use Thunk to dispatch asynchronous actions to change the state in the store.
//userData is not currently tracking state related to userData

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
      auth: authReducer,
      userData: userDataReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
    
export default store

