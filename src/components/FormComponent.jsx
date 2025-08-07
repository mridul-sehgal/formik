import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputComponent from "./InputComponent";
import RadioGroup from "./RadioGroup";
import SelectBox from "./SelectBox";
import CheckboxGroup from "./CheckBoxGroup";
import OptionalGender from "./OptionalGender";
import CodingExperience from "./CodingExperience";


const FormComponent = () => {


  const validateSchema = Yup.object().shape({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    customGender: Yup.string().when("gender", {
      is: "other",
      then: (schema) => schema.required("Please specify your gender"),
      otherwise: (schema) => schema.notRequired(),
    }),
    interests: Yup.array().min(1, "Select at least one interest"),
    codingExperience: Yup.string().when("interests", {
      is: (interests) => interests.includes("coding"),
      then: (schema) =>
        schema.required("Please describe your coding experience"),
      otherwise: (schema) => schema.notRequired(),
    }),
    country: Yup.string().required("Country is required"),
    bio: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    gender: "",
    customGender: "",
    interests: [],
    codingExperience: "",
    country: "",
  };

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      <h2>Formik Form</h2>
      <div className="form-parent">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validateSchema}
        >
          <Form className="form-box">
            <InputComponent name="name" label="Name" />
            <InputComponent name="email" label="Email" type="email" />

            <RadioGroup
              name="gender"
              label="Gender"
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
            />
            
            <OptionalGender />
            <CheckboxGroup
              name="interests"
              label="Interests"
              options={[
                { label: "Music", value: "music" },
                { label: "Sports", value: "sports" },
                { label: "Coding", value: "coding" },
              ]}
            />
            <CodingExperience />
            <SelectBox
              name="country"
              label="Country"
              options={[
                { label: "India", value: "india" },
                { label: "USA", value: "usa" },
                { label: "Germany", value: "germany" },
              ]}
            />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default FormComponent;
