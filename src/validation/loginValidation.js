import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^\S*$/, "No whitespaces allowed")
    .max(20, "Username must be at most 20 characters"),
  password: Yup.string()
    .matches(/^\S*$/, "No whitespaces allowed")
    .min(4, "Password must be at least 4 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is a required field"),
});
