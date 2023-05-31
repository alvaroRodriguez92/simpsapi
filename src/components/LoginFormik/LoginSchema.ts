import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please, enter a valid email")
    .required("Required"),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Must contain at least 5 characters, 1 uppercase, 1 lowercase and 1 number",
    })
    .required("Required"),
});

