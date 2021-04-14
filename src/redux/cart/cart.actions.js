import CartActionTypes from './cart.types'

//For deleting deleting cart item from cart "STEP 2" making function clearItemFromCart
//STEP 2 FOR REMOVING ITEM FROM THE ARROWS OF LEFT AND RIGHT WITH QUANTITY NUMBER WRITTEN IN CENTER 
//here using the fucntion name as removeItem for this above line

//"STEP 2 " for clearing cart icon from header by making simple "export const clearCart = () => ({
//     type:CartActionTypes.CLEAR_CART
// })" then going to cart.sagas.js file

export const toggleCartHidden = () => ({
    

    type:CartActionTypes.TOGGLE_CART_HIDDEN

})

export const addItem = item => ({
    

    type:CartActionTypes.ADD_ITEM,
    payload:item

})
export const removeItem = item =>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})
export const clearItemFromCart = item => ({
    

    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item

})
export const clearCart = () => ({
    type:CartActionTypes.CLEAR_CART
})