// import React from "react";
// import Button from "../../components/button";

// export default function Login () {
//     return(
//         <div className="min-h-screen bg-navygreen-100 dark:bg-forest-200 flex items-center dark:text-white dark:text-opacity-60 justify-center">
//             <div className="dark:bg-forest-100 rounded-pl p-8 max-h-fit w-[450px]">
//                 <h1 className="text-center text-md">Admin Login</h1>
//                 <form className="mt-4">
//                     <div className='mb-4'>
//                         <label htmlFor="email" className="block text-sm font-medium font-semibold">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                             placeholder="Enter your email"
//                             required
//                         />
//                     </div>
//                     <div className='mb-4'>
//                         <label htmlFor="password" className="block text-sm font-medium font-semibold">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             className="w-full p-2 border border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>
                    
//                     <Button 
//                         text="Login" 
//                         type="button" 
//                         className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
//                     />
//                 </form>
//             </div>
//         </div>
//     );
// }

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../components/button";
import axios from "axios";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:5000/api/admin/login", values);
        alert(response.data.message);
        // Store token in localStorage or context (optional)
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        alert(error.response?.data?.message || "Something went wrong");
      }
    }
  });

  return (
    <div className="min-h-screen bg-navygreen-100 dark:bg-forest-200 flex items-center dark:text-white dark:text-opacity-60 justify-center">
      <div className="dark:bg-forest-100 rounded-pl p-8 max-h-fit w-[450px]">
        <h1 className="text-center text-md">Admin Login</h1>
        <form onSubmit={formik.handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border text-gray-100 border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
              placeholder="Enter your email"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border text-gray-100 border-lightgray rounded-lg focus:outline-none focus:ring focus:ring-palegreen-300"
              placeholder="Enter your password"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            ) : null}
          </div>

          <Button
            text="Login"
            type="submit"
            className="w-full mt-2 py-2 bg-gray-100 text-white shadow-md"
          />
        </form>
      </div>
    </div>
  );
}
