import React from 'react';
import './index.css';

const CustomLabel = ({ htmlFor, value, ...rest }) => (
  <>
    <label className="custom-label" {...rest} htmlFor={htmlFor}>{value}</label>
  </>
);

export default CustomLabel;
