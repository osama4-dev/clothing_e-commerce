import {UserActionTypes} from './user.types'
//an action created which will be now used in user.reducer.js file which the 2nd value in parameter (state,actions) 

//......................................................redux-3............................................
export const setCurrentUser = user =>({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
})