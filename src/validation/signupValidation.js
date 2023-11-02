import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  firstname: Yup.string()
    .matches(/^\S*$/, "No whitespaces allowed")
    .matches(/^[^\d]+$/, "No numbers allowed")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Your Firstname is necessary!"),
  lastname: Yup.string()
    .matches(/^\S*$/, "No whitespaces allowed")
    .matches(/^[^\d]+$/, "No numbers allowed")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Your Lastname is required!!"),
  email: Yup.string()
    .email("This isn't a valid email address!!!")
    .required("Email address is required!!!"),
  username: Yup.string()
    .matches(/^\S*$/, "No whitespaces allowed")
    .max(20, "Username must be at most 20 characters"),
  password: Yup.string()
    .matches(/^\S*$/, "No whitespaces allowed")
    .min(4, "Password must be at least 4 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is a required field"),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password"), null], "Password must match!!!!")
});
