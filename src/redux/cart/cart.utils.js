//Utility functions allow us to keep our files clean and
//organize functions that we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if(exisitingCartItem){
      return cartItems.map(cartItem => 
        cartItem.id === cartItemToAdd.id?{...cartItem,quantitiy:cartItem.quantitiy+1}
        :cartItem
        )
  }


  return [...cartItems,{...cartItemToAdd,quantitiy:1}]

};
