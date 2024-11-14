import * as yup from "yup";

export const userVerificationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Must be a valid email address"),

  verificationToken: yup
    .string()
    .required("Verification token is required")
    .matches(
      /^[a-f0-9]{64}$/,
      "Verification token must be a valid 64-character hexadecimal string"
    ),
});
