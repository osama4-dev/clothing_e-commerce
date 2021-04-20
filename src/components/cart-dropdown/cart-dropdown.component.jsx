import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./cart-dropdown.styles.scss";
//cartItems.length telling us with ternnaty operator that if the length is not 0 display the cards
//else show an empty message Your cart is empty

//difference between == and === is "1"==1 is true but "1"===1 is false
//false are 0,false,undefined,null,NaN,"" an empty string are all false
//instead of using mapDispatchToProps we had dispatch property in our ...otherProps when we console logged it
//so we simply use dispatch
const CartDropdown = ({ cartItems, history, dispatch, currentUser }) => {
  toast.configure();
  function notify() {
    toast.error("Please SignUp/Login To Continue");
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
          ))
          ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {currentUser ? (
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
          >
          GO TO CHECKOUT
        </CustomButton>
      ) : (
        <CustomButton
          onClick={() => {
            notify();
            // alert("Please Sign In")
            dispatch(toggleCartHidden());
          }}
          >
          GO TO CHECKOUT
          </CustomButton>
          )}
          
          </div>
          );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
