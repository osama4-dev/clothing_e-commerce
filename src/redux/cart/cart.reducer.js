
import CartActionTypes from './cart.types'
import {addItemToCart} from './cart.utils'
//hidden value to be initially true as we want our our cart model to be hiddien when they first visit our website
const INITIAL_STATE ={
    hidden:true,
    cartItems:[]
}


//in cart items      cartItems:[...state.cartItems,action.payload] over here we are giving our array values and getting the state from initail state

const cartReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
            case CartActionTypes.ADD_ITEM:
                return{
                    ...state,
                    cartItems:addItemToCart(state.cartItems,action.payload)
                }
            default:
                return state;
    }
}
export default cartReducer