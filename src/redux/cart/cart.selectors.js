import { createSelector } from "reselect";
// Reselect provides a way to create memorized selector function that can memorize
//the input and output. If the input is not changed, it will not run the transformation, instead,
// it just returns the memorized result.
//we just need the cart to be selected so we will use state.cart
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuanitity, cartItem) =>
        accumalatedQuanitity + cartItem.quantitiy,
      0
    )
);
//for the the cart page the calculation needed
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuanitity, cartItem) =>
      accumalatedQuanitity + cartItem.quantitiy*cartItem.price,
    0
  )
);
