import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';

import FormInput from "../form-input/form-input.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {cartItems.map((cartItem) => (
      <CartItem  key={cartItem.id} item={cartItem} />
    ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

//instead of this (state) => we are using this 'createStructuredSelector' from reselect 
const mapStateToProps = createStructuredSelector ({
  cartItem:selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);



