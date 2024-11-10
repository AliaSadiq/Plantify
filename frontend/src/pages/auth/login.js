import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/button";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // const onSubmit = async (values, { setSubmitting, setStatus }) => {
  //   try {
  //     // Make a POST request to the admin login endpoint
  //     const response = await axios.post("http://localhost:5000/api/admin/login", values);
  //     setStatus({ success: "Logged in successfully!" });
  //     // Save the JWT token (you might want to save it in localStorage or use a state management library)
  //     localStorage.setItem("adminToken", response.data.token);
  //     navigate('/');
  //   } catch (error) {
  //     setStatus({ error: error.response?.data?.message || "Failed to log in" });
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/admin/login", values);
      setStatus({ success: "Logged in successfully!" });
      localStorage.setItem("adminToken", response.data.token);
      localStorage.setItem("admin", true); // Optional, if required elsewhere
      navigate('/');
      window.location.reload();
    } catch (error) {
      setStatus({ error: error.response?.data?.message || "Failed to log in" });
    } finally {
      setSubmitting(false);
    }
  };
  
  

  return (
    <div className="min-h-screen bg-navygreen-100 dark:bg-forest-200 flex items-center dark:text-white dark:text-opacity-60 justify-center">
      <div className="dark:bg-forest-100 rounded-pl p-8 max-h-fit w-full max-w-[450px] md:ml-0 md:p-4">
        <h1 className="text-center text-md">Admin Login</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, status }) => (
            <Form className="mt-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium font-semibold">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-2 border text-gray-100 border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium font-semibold">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full p-2 border text-gray-100 border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <Button
                text={isSubmitting ? "Logging in..." : "Login"}
                type="submit"
                className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
                disabled={isSubmitting}
              />

              {status && status.success && (
                <div className="text-green-500 text-sm mt-2">{status.success}</div>
              )}
              {status && status.error && (
                <div className="text-red-500 text-sm mt-2">{status.error}</div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
