import {createSelector} from 'reselect'
// Reselect provides a way to create memorized selector function that can memorize the input and output. 
//If the input is not changed, it will not run the transformation, instead,
// it just returns the memorized result.
//we are here calling the state of the user then using that in selectCurrentUser
const selectUser = state => state.user;

export const selectCurrentUser= createSelector(
    [selectUser],
    (user) => user.currentUser,
    
    )
    