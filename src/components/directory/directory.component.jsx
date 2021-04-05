import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import {selectDirectorySections} from '../../redux/directory/directory.selectors.js'
import {createStructuredSelector} from 'reselect'

import "./directory.styles.scss";
// import { toggleCartHidden } from "../../redux/cart/cart.actions";
// import FormInput from "../form-input/form-input.component";

//the linkUrl given in the array of sections is for the MenuItem component where we have used 'histroy.push'
const Directory = ({sections}) => (
  // as we dont need a state here which we were getting prvsly we change our class component to
  //fucntional component
  //before we were passing this.state.sections.map but now as we changed it into fucntional now we just 
  //pass sections in parameter as the state and use it as sections.map
  //inorder to call the state from reducer we will now use mapStateToProps

  //s0   '...otherSectionProps' we used a spread operator  which is eqvilent to '{title,imageUrl,id,size,linkUrl}' first then we
  //used it in MenuItem COmponent where '...otherSectionProps' is eqvialent to 'title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}'

  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
