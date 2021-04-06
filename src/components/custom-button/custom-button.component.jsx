import React from "react";

import "./custom-button.styles.scss";

//children here is the name we will be passing on our signIn component button
//otherProps are the all the propes given in button like type,value

//isGoogleSign is sepratly used for only google sign in color which we will also be using isGoogleSignIn here and as well as sign in component
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
