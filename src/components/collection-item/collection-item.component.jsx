import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

//id,name,price,imageUrl from shopData.js file
//id, name, price, imageUrl instead of this we place item here
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

//about adding a cart item : so what we did  we made an initial state in cart reducer file as cartItems array then we made an action in action file
//to represent what we were going to do to modify that new property which is our cartItems array next we defined the actual action itself in cart action file
//which is addItem a function which gets the item passing an item as the payload which a reducer then has to listen witht he new case as
//CartActionTypes.ADD_ITEM so that ehenever the action comes in we are returning the new  state of our overall card reducer
//so in this new array of CartActionTypes.ADD_ITEM we spread in existing card items and append a new cart item as the payload then we have to update
//our collection-item component to make sure it pulls in props using mapDispatch so that when we define the actia; addItem prop itself adn then
//passing an item using dispatch from addItem fucntion in cart.action.js file

const mapDispatchToPorps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToPorps)(CollectionItem);
