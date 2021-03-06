import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component.jsx";

//we also used filter method here we are mapping all the items and we are filtering  out the item and telling to only show 4 items by using a condition
// which will be idx or index < 4

//we also destructured our items and are now passing the rest data using spread opearator otherItemProps

//instead of ...otherprops we passed item in .map parameter and item={item}

const CollectionPreiview = ({ title, items=[] }) => {
  const [isVisible,setIsVisible]=useState(false)
  const  onToggle=()=> {
    setIsVisible(!isVisible);
}

  return (
    
    <div className="collection-preview">
      <div className="flexit4me">
        <h1 className="title">{title.toUpperCase()}</h1>

        <CustomButton type="button" onClick={()=>onToggle()}>
          see all
        </CustomButton>
      </div>
      {isVisible?(
        <div className="preview">
        {items
          .filter((item) => item )
          .map((item) => (
            <CollectionItem  key={item.id} item={item} />
          ))}
      </div>
        ):(
        <div className="preview">
          {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
        
      )}
    </div>
  );
};

export default CollectionPreiview;
