
import { Field, ErrorMessage, useFormikContext } from 'formik';

const OptionalGender = () => {
  const { values } = useFormikContext();

  if (values.gender !== 'other') return null;

  return (
    <div style={{ marginBottom: '10px' }}>
      <label>Please specify your gender</label><br />
      <Field name="customGender" type="text" />
      <ErrorMessage name="customGender" component="div" style={{ color: 'red' }} />
    </div>
  );
};

export default OptionalGender;
