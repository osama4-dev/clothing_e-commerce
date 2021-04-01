
import CartActionTypes from './cart.types'
import {addItemToCart,removeItemFromCart} from './cart.utils'
//hidden value to be initially true as we want our our cart model to be hiddien when they first visit our website
const INITIAL_STATE ={
    hidden:true,
    cartItems:[]
}


//in cart items      cartItems:[...state.cartItems,action.payload] over here we are giving our array values and getting the state from initail state
//For deleting cart item from cart this is "STEP 3"  which is case CartActionTypes.CLEAR_ITEM_FROM_CART:
//in this case we are saying if the cartItem id does not match the item we are trying to filter then return true

//STEP 3 FOR REMOVING ITEM FROM THE ARROWS OF LEFT AND RIGHT WITH QUANTITY NUMBER WRITTEN IN CENTER  by making
//a new case named as  CartActionTypes.REMOVE_ITEM
//After "STEP 4" which is done in cart.utils file we will call that fucntion of removeItemFromCart and use it here


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
                case CartActionTypes.REMOVE_ITEM:
                    return{
                        ...state,
                        cartItems:removeItemFromCart(state.cartItems,action.payload)
                    }
                case CartActionTypes.CLEAR_ITEM_FROM_CART:
                    return{
                        ...state,
                        cartItems:state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
                    }
            default:
                return state;
    }
}
export default cartReducer