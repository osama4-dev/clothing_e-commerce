
//an action created which will be now used in user.reducer.js file which the 2nd value in parameter (state,actions) 
export const setCurrentUser = user =>({
    type:'SET_CURRENT_USER',
    payload:user
})