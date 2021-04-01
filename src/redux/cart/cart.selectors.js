import {createSelector} from 'reselect'

//we just need the cart to be selected so we will use state.cart
const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems=>
    cartItems.reduce(
        (accumalatedQuanitity, cartItem) =>
          accumalatedQuanitity + cartItem.quantitiy,
        0
      ),
)