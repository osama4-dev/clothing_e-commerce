import React from "react";

import "./SearchBox.styles.scss";

export const SearchBox = ({ placeholder, handleChange ,value}) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    valeu={value}
    //before we will logging our of the setState parameter so we were having problem with ansychrous
    //so we used a , and in the second parameter we logged the result which took place synchronously
    onChange={handleChange}
  />
);
