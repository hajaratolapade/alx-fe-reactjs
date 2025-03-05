import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  // Local state for form fields (controlled components)
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

  // Handle direct state change when input values change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form Data", values);
        setFormData(values); // Update local state
        setSubmitting(false);
        alert("Registration successful!");
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">User Registration</h2>

          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">Username:</label>
            <Field
              type="text"
              name="username"
              value={formData.username} // Controlled input
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email:</label>
            <Field
              type="email"
              name="email"
              value={formData.email} // Controlled input
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password:</label>
            <Field
              type="password"
              name="password"
              value={formData.password} // Controlled input
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white p-2 rounded">
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;