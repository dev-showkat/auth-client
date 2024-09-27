import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string()
    .trim()
    .min(3, "Use 3 characters or more for your username")
    .required("Enter username"),
  email: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Enter email address"),
  password: Yup.string()
    .trim()
    .min(6, "Use 6 characters or more for your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
      "Please choose a stronger password. Try a mix of letters, numbers, and symbols."
    )
    .required("Enter password"),
});

export const otpVerifySchema = Yup.object({
  username: Yup.string()
    .trim()
    .min(3, "Use 3 characters or more for your username")
    .required("Enter username"),
  email: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Enter email address"),
  password: Yup.string()
    .trim()
    .min(6, "Use 6 characters or more for your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
      "Please choose a stronger password. Try a mix of letters, numbers, and symbols."
    )
    .required("Enter password"),
  OTP: Yup.string()
    .trim()
    .length(6, "Enter 6 digit OTP")
    .required("Enter 6 digit OTP"),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Enter email address"),
  password: Yup.string().required("Enter password"),
});

export const forgetPasswordSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Enter email address"),
});

export const resetPasswordSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Enter email address"),
  verificationCode: Yup.string()
    .trim()
    .min(13, "Use 13 characters or more for Verification Code")
    .required("Enter Verification Code"),
  password: Yup.string()
    .trim()
    .min(6, "Use 6 characters or more for your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
      "Please choose a stronger password. Try a mix of letters, numbers, and symbols."
    )
    .required("Enter new password"),
});
export const verificationCodeSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Enter email address"),
  verificationCode: Yup.string()
    .trim()
    .min(13, "Use 13 characters or more for Verification Code")
    .required("Enter Verification Code"),
});
