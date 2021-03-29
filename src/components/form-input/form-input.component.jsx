import React from "react";

import "./form-input.styles.scss";



//otherProps here is all the props we have passed in SignIn component as name,type,value as we import our FormInput in SignIn component

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
        label ? 
        (<label className={`${otherProps.value.length ? 'shrink': ''}form-input-label`}>

        {label}

        </label>)
        :null
    }
  </div>
);
export default FormInput;
