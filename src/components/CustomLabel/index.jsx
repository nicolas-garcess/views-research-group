import React from 'react';
import './index.css';

const CustomLabel = ({ htmlFor, value }) => (
  <>
    <label htmlFor={htmlFor} className="custom-label">{value}</label>
  </>
);

export default CustomLabel;
