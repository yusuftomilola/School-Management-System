import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import signInImg from "../assets/images/signIn-img.svg";
import { Link,useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  // Initial values for form fields
  const initialValues = {
    email: "",
    password: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .min(5, "Email must be at least 5 characters")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Submit handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    alert("Logged In Successfully!");
    navigate("/home"); // Navigate to the home page after submission
    setSubmitting(false);
    resetForm();
  };

  return (
    <>
      <div className="flex h-[100vh] flex-1 w-[100%]">
        {/* LEFT SIDE  */}
        <div className="relative hidden w-[50%] flex-1 lg:block">
          <img
            alt="boy-img"
            src={signInImg}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[50%] flex flex-1 flex-col relative justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
              Sign In
            </h2>
            {/* Formik Wrapper */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, resetForm }) => (
                <Form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-1">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@gmail.com"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-1">
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="password"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <span className="flex justify-end">
                    <Link> Forgot password? </Link>
                  </span>

                  <div className="flex justify-end gap-5">
                    <button
                      type="button"
                      onClick={() => resetForm()}
                      className="btn bg-white p-2 px-5 font-semibold ring-1 ring-[#5243AA] rounded text-[#5243AA]"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn bg-[#5243AA] p-2 px-5 rounded text-white font-semibold"
                    >
                      {isSubmitting ? "Submitting..." : "Login"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="mt- flex gap-1 absolute bottom-3 ml-10">
              <p>Don't have an account?</p>
              <Link to={"/"} className="text-[#5243AA] font-semibold">
                Register here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
