import React from "react";
import "./with-spinner.styles.scss";

export const WithSpinner = WrappedComponent => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? <h3>Loading...</h3> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
