//Utility functions allow us to keep our files clean and
//organize functions that we may need in multiple files in one location
//this is performed for our state to show the quantity count as much as user adds the states keep updating and show us the
//quantity count as well as item details

//STEP 4 FOR REMOVING ITEM FROM THE ARROWS OF LEFT AND RIGHT WITH QUANTITY NUMBER WRITTEN IN CENTER making
//another fucntion called removeItemFromCart

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if(exisitingCartItem){
      return cartItems.map(cartItem => 
        cartItem.id === cartItemToAdd.id ? {...cartItem,quantitiy:cartItem.quantitiy+1}
        :cartItem
        )
  }


  return [...cartItems,{...cartItemToAdd,quantitiy:1}]

};


export const removeItemFromCart = (cartItems,cartItemToRemove ) => {
const exisitingCartItem = cartItems.find(
  cartItem=>cartItem.id === cartItemToRemove.id
)
//if the exisiting cartItem quantity = 1 remove it otherwise decrease the quantity and keep the cartItem the exact same way
//as they dont need to be modified
if(exisitingCartItem.quantitiy === 1){
  return cartItems.filter(cartItem=> cartItem.id !== cartItemToRemove.id)
}
return cartItems.map(
  cartItem=>cartItem.id===cartItemToRemove.id ? 
  {...cartItem,quantitiy:cartItem.quantitiy-1}
  : cartItem
)
}
