//root reducer is an object which represents all of the state of our application
//all of the reducers will be written here
//the combine reducer is then combining all the other reducers here

//............................................................redux-2.............................................

import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'

export default combineReducers({
    user:userReducer
})