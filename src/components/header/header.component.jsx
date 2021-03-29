import React from "react";

import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

//this current user which we are also using int eh app.js file and have passed as props in our header component in app.js file
//we used ternary operator is the current user is there show the div else show the link and we are also using the onClick and passing the
//signout which is provided to us by firebase

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo className="LOGO" />
    </Link>
    <div className="options">
      <Link className="option" to="./shop">
        SHOP
      </Link>
      <Link className="option" to="./shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='signin'>SIGN IN</Link>
      )}
    </div>
  </div>
);
export default Header;
