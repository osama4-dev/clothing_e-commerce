import React from "react";
import {withRouter} from 'react-router-dom'

import "./menu-item.styles.scss";

//withRouter is an higher order component so what is basically does it takes a component modifies it and returns it in a modified way
//using withRouter on Menu item at export default at bottom now we are applying withRouter properties on MenuItem component so MenuItem is now a more powered up component then before

//we couldnt use 'history' before in the MenuItem  component and to call it from then parent component which was homepage then directors component adn then the MenuItem
//now after giving the MenuItem withRoute we can use history directly from within


//we used 'match' as one of the properties from 'history' which takes us to the dired url and the 'linkUrl' from the directory component and we used 
//and onClick fucntion to push our divs which are the cards to linkUrl which we have provided in the directory component so now clicking on any individual 
//card we will be able to route to its page

const MenuItem = ({ title, imageUrl, size,history,linkUrl,match }) => (
  <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="title">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
