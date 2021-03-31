
import CartActionTypes from './cart.types'
//hidden value to be initially true as we want our our cart model to be hiddien when they first visit our website
const INITIAL_STATE ={
    hidden:true
}

const cartReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
            default:
                return state;
    }
}
export default cartReducer