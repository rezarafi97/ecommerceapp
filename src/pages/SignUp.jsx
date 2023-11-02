import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupSchema } from "../validation/signupValidation";

import { useDispatch } from "react-redux";
import { login } from "../features/reducers/userSlice";

const SignUp = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const inputClass =
    "border-b outline-0 border-gray-400 focus:border-gray-800 pl-4 pr-20 py-2";
    
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="my-24">
      <div className="text-center mb-12">
        <p className="font-inter text-4xl font-medium tracking-widest mb-6">
          Create an account
        </p>
        <p className="font-poppins text-base font-normal">
          Enter your details below
        </p>
      </div>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          username: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={signupSchema}
        onSubmit={() => {
          dispatch(login());

          navigate("/");
        }}
      >
        <Form className="flex flex-col items-center gap-10 w-96 mx-auto mb-8">
          <div>
            <Field
              type="text"
              name="firstname"
              placeholder="Firstname"
              className={inputClass}
            />
            <ErrorMessage
              name="firstname"
              render={(msg) => <div className="text-red-700">{msg}</div>}
            />
          </div>

          <div>
            <Field
              type="text"
              name="lastname"
              placeholder="Lastname"
              className={inputClass}
            />
            <ErrorMessage
              name="lastname"
              render={(msg) => <div className="text-red-700">{msg}</div>}
            />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={inputClass}
            />
            <ErrorMessage
              name="email"
              render={(msg) => <div className="text-red-700">{msg}</div>}
            />
          </div>

          <div>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className={inputClass}
            />
            <ErrorMessage
              name="username"
              render={(msg) => <div className="text-red-700">{msg}</div>}
            />
          </div>

          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={inputClass}
            />
            <ErrorMessage
              name="password"
              render={(msg) => <div className="text-red-700">{msg}</div>}
            />
          </div>

          <div>
            <Field
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              className={inputClass}
            />
            <ErrorMessage
              name="passwordConfirm"
              render={(msg) => <div className="text-red-700">{msg}</div>}
            />
          </div>

          <button
            type="submit"
            className="px-20 py-4 bg-red-600 text-base font-poppins text-white"
          >
            Create Account
          </button>
        </Form>
      </Formik>
      <div className="text-center">
        <span className="font-poppins text-base font-normal opacity-70">
          Already have a account?{" "}
          <Link
            to="/login"
            className="ml-4 font-medium underline underline-offset-8"
          >
            Log In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
