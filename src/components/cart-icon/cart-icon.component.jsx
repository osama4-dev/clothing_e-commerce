import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

//using mapStateToProps for itemcount in the span
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
//for the number that is inside the cart icon to work we will do this 0+1=1,1+2=3,3+3=6 Ggiving us na item count of 6
//over here was FUNCTION OF ITEM COUNT now move in selector sepratly as before it kept firing which is 
//it was kept being called even when we were logging in on or logging out so we made a seprate file of selector
//so we use a reselect library which knows  that if the property its pulling from the state and its value hasn't 
//changed and the output  of the selector is not different then it will not pass it into our component,
//it will just pass the old value and react render will know not to render it again,one more use of selector is
//it is also reusable

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
