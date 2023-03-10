import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
  userType: yup
    .string()
    .trim()
    .test("validation", "User should either be mentor or student", (value) => {
      if (
        value.toUpperCase() === "MENTOR" ||
        value.toUpperCase() === "STUDENT"
      ) {
        return true;
      } else {
        return false;
      }
    }),
});

export default loginSchema;
