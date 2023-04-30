/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./Signup.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Message from "../../components/Message/Message";
import { Alert, Tooltip } from "@mui/material";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { register } from "../../actions/userActions";
import FormLoader from "../../components/MutliStepForms/FormLoader/FormLoader";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, FormGroup } from "react-bootstrap";
import SnakBar from "../../components/SnakBar/SnakBar";
const Signup = ({ nextStep, setUserDetails, UserDetails }) => {
  var rank = {
    TOO_SHORT: 0,
    WEAK: 1,
    MEDIUM: 2,
    STRONG: 3,
    VERY_STRONG: 4,
  };

  const rankPassword = (password) => {
    var upper = /[A-Z]/,
      lower = /[a-z]/,
      number = /[0-9]/,
      special = /[^A-Za-z0-9]/,
      minLength = 8,
      score = 0;

    if (password.length < minLength) {
      return rank.TOO_SHORT; // End early
    }

    // Increment the score for each of these conditions
    if (upper.test(password)) score++;
    if (lower.test(password)) score++;
    if (number.test(password)) score++;
    if (special.test(password)) score++;

    // Penalize if there aren't at least three char types
    if (score < 3) score--;

    if (password.length > minLength) {
      // Increment the score for every 2 chars longer than the minimum
      score += Math.floor((password.length - minLength) / 2);
    }

    // Return a ranking based on the calculated score
    if (score < 3) return rank.WEAK; // score is 2 or lower
    if (score < 4) return rank.MEDIUM; // score is 3
    if (score < 6) return rank.STRONG; // score is 4 or 5
    return rank.VERY_STRONG; // score is 6 or higher
  };

  // Test it...
  // var result = rankPassword("password1"),
  //   labels = ["Too Short", "Weak", "Medium", "Strong", "Very Strong"];

  // alert(labels[result]); // -> Weak
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("First Name is required")
      .min(3, "Must be greater or equal to 3 characters")
      .max(30, "Must be less than 30 characters"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .trim()
      .test("validation", "Password must be strong", (value) => {
        return rankPassword(value) >= 3;
      }),
    userType: yup
      .string()
      .trim()
      .test(
        "validation",
        "User should either be mentor or student",
        (value) => {
          if (
            value.toUpperCase() === "MENTOR" ||
            value.toUpperCase() === "STUDENT"
          ) {
            return true;
          } else {
            return false;
          }
        }
      ),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      userType: "Choose a User-Type",
      confirmPassword: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });
  const {
    register: registerHook,
    handleSubmit,
    setValue,
    formState: { touchedFields, errors },
    watch,
  } = form;

  const name = watch("name", "");
  const email = watch("email", "");
  const password = watch("password", "");
  const userType = watch("userType", "");
  const confirmPassword = watch("confirmPassword", "");
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const submitHandler = (data) => {
    console.log("From submit Button", data?.email);
    setUserDetails({
      name: data?.name,
      email: data?.email,
      password: data?.password,
      userType: data?.userType,
    });
    if (UserDetails) {
      dispatch(register(name, email.toLowerCase(), password, userType));
      if (error?.length === 0) {
        nextStep();
      }
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    if (error) {
      handleClick();
    }
  }, [error]);

  return (
    <>
      <SnakBar
        open={open}
        handleClose={handleClose}
        typeOfAlert="error"
        message={error}
      />
      <h1 className="text-gray-700 w-full text-center">Create Account</h1>
      <div className="SignUp-container w-full">
        <div className="container-signup" id="container1">
          <div className="sign-up-container">
            <form
              className="form-signup"
              onSubmit={handleSubmit(submitHandler)}
            >
              {loading && <FormLoader />}
              <div className="social-container w-full text-center">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p className="text-md w-full text-center">OR</p>
              <FormGroup className="w-full ">
                <Form.Label className="w-full text-left text-xs">
                  Name
                </Form.Label>
                <Form.Control
                  {...registerHook("name", { required: true })}
                  type="text"
                  placeholder="Name"
                  value={name}
                  size="md"
                />
                {touchedFields.name && errors.name && (
                  <div className="w-full ">
                    <Alert
                      severity="error"
                      variant="outlined"
                      className="py-0 border-0"
                    >
                      {errors.name.message}
                    </Alert>
                  </div>
                )}
              </FormGroup>
              <FormGroup className="w-full ">
                <Form.Label className="w-full text-left text-xs">
                  Email
                </Form.Label>

                <Form.Control
                  {...registerHook("email", { required: true })}
                  type="email"
                  placeholder="Email"
                  value={email}
                  size="md"
                />
                {touchedFields.email && errors.email && (
                  <div className="w-full ">
                    <Alert
                      severity="error"
                      variant="outlined"
                      className="py-0 border-0"
                    >
                      {errors.email.message}
                    </Alert>
                  </div>
                )}
              </FormGroup>
              <FormGroup className="w-full ">
                <Form.Label className="w-full text-left text-xs">
                  Password
                </Form.Label>
                <Tooltip
                  title="Password be least 8 chars long, have at least 1 uppercase
              letter, 1 lowercase letter, 1 number, and 1 special character"
                >
                  <Form.Control
                    {...registerHook("password", { required: true })}
                    type="password"
                    placeholder="Password"
                    value={password}
                    size="md"
                  />
                </Tooltip>
                {touchedFields.password && errors.password && (
                  <div className="w-full ">
                    <Alert
                      severity="error"
                      variant="outlined"
                      className="py-0 border-0"
                    >
                      {errors.password.message}
                    </Alert>
                  </div>
                )}
              </FormGroup>
              <FormGroup className="w-full ">
                <Form.Label className="w-full text-left text-xs">
                  Confirm Password
                </Form.Label>

                <Form.Control
                  {...registerHook("confirmPassword", { required: true })}
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  size="md"
                />
                {touchedFields.confirmPassword && errors.confirmPassword && (
                  <div className="w-full ">
                    <Alert
                      severity="error"
                      variant="outlined"
                      className="py-0 border-0"
                    >
                      {errors.confirmPassword.message}
                    </Alert>
                  </div>
                )}
              </FormGroup>
              <Form.Label className="text-xs">Choose Your User Type</Form.Label>
              <Form.Select
                aria-label="Mentor"
                {...registerHook("userType", { required: true })}
                name="userType"
                value={userType}
                size="md"
              >
                <option>Choose a User-Type</option>
                <option value="mentor">Mentor</option>
                <option value="student">Student</option>
              </Form.Select>
              {touchedFields.userType && errors.userType && (
                <div className="w-full ">
                  <Alert
                    severity="error"
                    variant="outlined"
                    className="py-0 border-0"
                  >
                    {errors.userType.message}
                  </Alert>
                </div>
              )}
              <a href="#">Forgot your password?</a>
              <SubmitButton
                type="submit"
                variant="contained"
                size="small"
                styleCode={{ padding: "0.3rem 2rem", fontSize: "0.8rem" }}
                onClick={() => {
                  setValue("name", name, { shouldTouch: true });
                  setValue("email", email.toLowerCase(), { shouldTouch: true });
                  setValue("password", password, { shouldTouch: true });
                }}
              >
                Sign Up
              </SubmitButton>
              <span className="my-4 ">
                {" "}
                Already a user? <NavLink to="/login"> Sign In</NavLink>
              </span>
            </form>
          </div>
        </div>
        <div className="svg">
          <img src="/images/signup.svg" alt="form svg" />
        </div>
      </div>
    </>
  );
};

export default Signup;

// TODO:The password did not match field error message should go away after some seconds. or should move away once we resubmit form.
