import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;

//our spinner and spinner logic if loading show me the spinner if not just a normal component recienving all the
//props it will recieve,we also made ({isLoading,...otherProps}) modiefied by setting them a vairable called Spinner
//and then returning it at bottom

