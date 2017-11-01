import React from "react";

const Select = props =>
  <select {...props} className="form-group">
    {props.children}
  </select>;

  export default Select