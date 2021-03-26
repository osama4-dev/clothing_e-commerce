import React from "react";

import "./collection-preview.styles.scss";
import CollectionItem from '../collection-item/collection-item.component.jsx'

//we also used filter method here we are mapping all the items and we are filtering  out the item and telling to only show 4 items by using a condition
// which will be idx or index < 4

//we also destructured our items and are now passing the rest data using spread opearator otherItemProps 

const CollectionPreiview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id,...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps}/>
        ))}
    </div>
  </div>
);

export default CollectionPreiview;
