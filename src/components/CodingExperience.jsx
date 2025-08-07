
import { Field, ErrorMessage, useFormikContext } from 'formik';

const CodingExperience = () => {
  const { values } = useFormikContext();

  if (!values.interests.includes('coding')) return null;

  return (
    <div style={{ marginBottom: '10px' }}>
      <label>Tell us more about your coding experience</label><br />
      <Field name="codingExperience" as="textarea" rows="4" cols="30" />
      <ErrorMessage name="codingExperience" component="div" style={{ color: 'red' }} />
    </div>
  );
};

export default CodingExperience;
