import { useState } from "react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">User Registration (Formik)</h2>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted:", values);
          alert("Registration successful!");
          setFormData(values); // Update local state
          resetForm();
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Username:</label>
              <Field
                type="text"
                name="username"
                value={values.username}
                onChange={(e) => {
                  handleChange(e);
                  setFormData({ ...formData, username: e.target.value });
                }}
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Email:</label>
              <Field
                type="email"
                name="email"
                value={values.email}
                onChange={(e) => {
                  handleChange(e);
                  setFormData({ ...formData, email: e.target.value });
                }}
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Password:</label>
              <Field
                type="password"
                name="password"
                value={values.password}
                onChange={(e) => {
                  handleChange(e);
                  setFormData({ ...formData, password: e.target.value });
                }}
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white p-2 rounded">
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;