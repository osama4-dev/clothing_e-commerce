import React from "react";

import CollectionOverview from '../../components/collections-overview/collections-overview.component'

//we moved almost everthing in our collections-overview.component file so whatever is written here was applied 
//here before but now is moved to collections-overview.component
//and we did all that to make our collections in its own component

//SO we basically stored the state in a seprate file called as shop.data.js and we are importing that file as SHOP_DATA
//and then we are using it in our state of this file by calling it

const ShopPage = ({collections}) => (
  
//we mapped our collections data so we destructured our collections state here by 'const {collections}=this.state' so we dont have to write this.state.collections
//whenver we are going to use the state collections, we simply have to write collections now.
//the other thing we did is getting the key id of the shop data as it is necessary always to differentiate the data and we are using other data as well
//using the destructuring same as done in directory.component.jsx so we wont have to write data sepratly visit directory.component to understand 
//in a more better way
  
    <div className="shop-page">
    <CollectionOverview/>
    
    </div>
    )

   

export default ShopPage