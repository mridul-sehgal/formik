
import { Field, ErrorMessage } from 'formik';

const RadioGroup = ({ label, name, options }) => (
  <div style={{ marginBottom: '10px' }}>
    <label>{label}</label><br />
    {options.map(opt => (
      <label key={opt.value}>
        <Field type="radio" name={name} value={opt.value} />
        {opt.label}
      </label>
    ))}
    <br />
    <ErrorMessage name={name} component="div" style={{ color: 'red' }} />
  </div>
);

export default RadioGroup;
