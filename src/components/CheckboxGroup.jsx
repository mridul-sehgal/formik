// src/fields/CheckboxGroup.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CheckboxGroup = ({ label, name, options }) => (
  <div style={{ marginBottom: '10px' }}>
    <label>{label}</label><br />
    {options.map(opt => (
      <label key={opt.value} style={{ display: 'block' }}>
        <Field type="checkbox" name={name} value={opt.value} />
        {opt.label}
      </label>
    ))}
    <ErrorMessage name={name} component="div" style={{ color: 'red' }} />
  </div>
);

export default CheckboxGroup;
