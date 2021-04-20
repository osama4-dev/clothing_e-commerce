import React, { useState } from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

import { SearchBox } from "../../components/SearchBox/SearchBox";

// console.log(collection)
// so we are getting hats in our console.log after passing this console.log(match.params.categoryId) which we
//were passing before but now istead of that we pass collection as we moidified our code
const CollectionPage = ({ collection }) => {
  const [searchField, setSearchField] = useState("");
  const [isFilter, setIsFilter] = useState("name");

  const { title, items } = collection;
  console.log("iem", collection);

  //title and items are coming from collection

  const onSelectChange = (e) => {
    setIsFilter(e.target.value);
  };

  const filterItems = items.filter((item) =>
    item[isFilter].toString().toLowerCase().includes(searchField.toLowerCase())
  );
  //price.toString()
  // console.log("filtered hai ya",filterItems)

  return (
    <CollectionPageContainer>
      <div>
        <label>By name</label>
        <input
          type="radio"
          name="gender"
          value="name"
          onChange={onSelectChange}
          checked={isFilter === "name" && true}
        />
        <label>By Price</label>
        <input
          type="radio"
          name="gender"
          value="price"
          onChange={onSelectChange}
          checked={isFilter === "price" && true}
        />
      </div>
      <SearchBox
        value={searchField}
        placeholder={isFilter === "name" ? "eg: Blue jeans" : "eg: 90"}
        handleChange={(e) => setSearchField(e.target.value)}
      />
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {filterItems.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};
//we pass here the first parameter as 'state' which is the overall reducer state from the top
//the 2nd argument is the 'ownProps' which is the props of the component we are wrapping in the connect

//we are also passing the state here unline the other selectors were passed in prvs files
//that is because it is necessary because unlike other selectors,this selector needs a part of the state
//depending on the URL parameter this is coming from the shop.selector
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

//ya hm araha hai shop.selector.js kee file sa continuing where we use ownProps which gives us all our props that
//is on our collection page component including our mathc object that we are getting from our Route
