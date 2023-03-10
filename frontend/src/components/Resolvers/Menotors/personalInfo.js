import moment from "moment";
import * as yup from "yup";
const mentorSchema = yup.object().shape({
  name: yup
    .string()
    .required("First Name is required")
    .min(3, "Must be greater than 3 characters")
    .max(50, "Must be less than 50 characters"),
  email: yup
    .string()
    .email("Format is not correct")
    .required("Email is required"),
  designation: yup
    .string()
    .required("Designation is required")
    .min(3, "Must be greater than 3 characters")
    .max(50, "Must be less than 30 characters"),
  mobile: yup.string().trim().min(11),
  userName: yup
    .string()
    .required("User Name is required")
    .max(20, "Must be less than 20 characters")
    .min(3, "Must be at least 3 characters"),
  image: yup
    .mixed()
    .required("Required")
    .test("maxSize", "Image size must be less than 1 MB", (value) => {
      return true;
    }),
  gender: yup.string().required("Gender is required").min(4),
  company: yup.string().notRequired(),
  city: yup.string().required("City is required").max(20).min(4),
  country: yup.string().required("Country is required").max(20).min(4),
  dob: yup
    .string()
    .nullable()
    .test("dob", "You must be 18 years or older", function (value) {
      return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
    })
    .required("Please enter your age"),
});

export default mentorSchema;
