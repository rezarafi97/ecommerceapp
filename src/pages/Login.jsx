import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../validation/loginValidation";

import { useDispatch } from "react-redux";
import { login } from "../features/reducers/userSlice";

const Login = () => {
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
          Log in to Exclusive
        </p>
        <p className="font-poppins text-base font-normal">
          Enter your details below
        </p>
      </div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={() => {
          dispatch(login());

          navigate("/");
        }}
        validationSchema={loginSchema}
      >
        <Form className="flex flex-col items-center gap-10 w-96 mx-auto mb-8">
          <div>
            <Field
              type="text"
              name="username"
              className={inputClass}
              placeholder="Username"
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
              className={inputClass}
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              render={(msg) => <div className="text-red-700">{msg}</div>}
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-10 py-2 bg-red-600 text-base font-poppins text-white"
            >
              Log In
            </button>
            <Link
              to="/signup"
              className="font-poppins text-sm font-normal text-red-600 ml-8"
            >
              Forget Password?
            </Link>
          </div>
        </Form>
      </Formik>
      <div className="text-center"></div>
    </div>
  );
};

export default Login;
