import CartActionTypes from './cart.types'

//For deleting deleting cart item from cart "STEP 2" making function clearItemFromCart
export const toggleCartHidden = () => ({
    

    type:CartActionTypes.TOGGLE_CART_HIDDEN

})

export const addItem = item => ({
    

    type:CartActionTypes.ADD_ITEM,
    payload:item

})

export const clearItemFromCart = item => ({
    

    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item

})