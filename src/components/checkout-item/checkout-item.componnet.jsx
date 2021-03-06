import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart,addItem,removeItem } from "../../redux/cart/cart.actions";
import { addItemToCart } from "../../redux/cart/cart.utils";

import "./checkout-item.styles.scss";

//for removing cartItem from cart this is "STEP 4" where we are using connect and and importing clearItemFromCart
// from cart actions and then using mapDispatchToProps

//UTHF-8 Dinbiats for remove button from w33school
const CheckoutItem = ({ cartItem,clearItem,addItem,removeItem }) => {
  const { name, imageUrl, price, quantitiy } = cartItem
  return(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
    <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
    <span className="value">{quantitiy}</span>
    
    <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
    </span>
    <span className="price">${price}</span>
    <div className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</div>
  </div>)
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem:item=>dispatch(addItem(item)),
  removeItem:item=>dispatch(removeItem(item))
}); 
export default connect(null, mapDispatchToProps)(CheckoutItem);
