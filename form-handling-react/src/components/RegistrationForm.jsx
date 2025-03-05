import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  // Local state for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form Data", values);
        setFormData(values); // Update local state with submitted data
        setSubmitting(false); // Stops the loading state
      }}
    >
      {({ values, isSubmitting, handleChange }) => (
        <Form className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">User Registration</h2>

          {/* Username Field */}
          <div>
            <label htmlFor="username">Username:</label>
            <Field
              type="text"
              name="username"
              value={values.username}
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, username: e.target.value }); // Update local state
              }}
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="username" component="div" className="text-red-500" />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              name="email"
              value={values.email}
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, email: e.target.value }); // Update local state
              }}
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              name="password"
              value={values.password}
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, password: e.target.value }); // Update local state
              }}
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting} className="mt-4 p-2 bg-blue-500 text-white rounded">
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;