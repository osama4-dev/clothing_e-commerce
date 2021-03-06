import React from "react";
import { connect } from "react-redux";
//connect is a higher order component that lets us modify our component to have taccess related to redux
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {signOutStart} from '../../redux/user/user.actions'
//this current user which we are also using int eh app.js file and have passed as props in our header component in app.js file
//we used ternary operator is the current user is there show the div else show the link and we are also using the onClick and passing the
//signout which is provided to us by firebase

//our header is now getting this currentUser value from our reducer
const Header = ({ currentUser, hidden,signOutStart }) => (
  
  <div className="header">
    <Link to="/">
      <Logo className="LOGO" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
     
      {currentUser ? (
        <div className="option" onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
    
  </div>
);
//so we are telling here we want root reducer  then we want the user value which will give us our userReducer which is the value we passed as well as the userReducer file
// and then from there we want our value

//with this now we remove currentUser={this.state.currentUser} this from our app.js file Header component which we were passing before as our work is doen through store
const mapStateToProps =  createStructuredSelector ({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden,
});

const mapDispatchToProps=dispatch =>({
  signOutStart:()=>dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
