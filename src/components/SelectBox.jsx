// src/fields/SelectBox.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const SelectBox = ({ label, name, options }) => (
  <div style={{ marginBottom: '10px' }}>
    <label>{label}</label><br />
    <Field name={name} as="select">
      <option value="">Select one</option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </Field>
    <ErrorMessage name={name} component="div" style={{ color: 'red' }} />
  </div>
);

export default SelectBox;
