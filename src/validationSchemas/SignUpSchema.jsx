import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "First name must only contain letters"),

  lastName: yup
    .string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Last name must only contain letters"),

  email: yup
    .string()
    .email("Invalid email")
    .required("Email address is required")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      "Must be a valid email with .com domain"
    ),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/,
      "Password must be at least 8 characters with an uppercase letter and a special character"
    ),
});
