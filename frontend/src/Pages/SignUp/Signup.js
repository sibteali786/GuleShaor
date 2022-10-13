/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Signup.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import { Alert, Typography } from "@mui/material";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { register } from "../../actions/userActions";
import FormLoader from "../../components/MutliStepForms/FormLoader/FormLoader";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, FormGroup } from "react-bootstrap";
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
      .test(
        "validation",
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        (value) => {
          return rankPassword(value) >= 3;
        }
      ),
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
      userType: "",
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
    setUserDetails({
      name: data?.name,
      email: data?.email,
      password: data?.password,
      userType: data?.userType,
    });
    if (UserDetails) {
      console.log("From Signup", name, email, password, userType);
      dispatch(register(name, email, password, userType));
      nextStep();
    }
  };
  console.log(errors);
  return (
    <div className="SignUp-container">
      <div
        className="container-signup"
        style={{ width: "50%" }}
        id="container1"
      >
        <div className="sign-up-container">
          <form className="form-signup" onSubmit={handleSubmit(submitHandler)}>
            <h1>Create Account</h1>
            {error && <Message variant="outlined">{error}</Message>}
            {loading && <FormLoader />}
            <div className="social-container">
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
            <Typography variant="body1">
              or use your email for registration
            </Typography>
            <FormGroup className="my-2">
              <Form.Label className="w-full text-left">Name</Form.Label>
              <Form.Control
                {...registerHook("name", { required: true })}
                type="text"
                placeholder="Name"
                value={name}
              />
              {touchedFields.name && errors.name && (
                <div className="my-2">
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
            <FormGroup className="my-2">
              <Form.Label className="w-full text-left">Email</Form.Label>

              <Form.Control
                {...registerHook("email", { required: true })}
                type="email"
                placeholder="Email"
                value={email}
              />
              {touchedFields.email && errors.email && (
                <div className="my-2">
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
            <FormGroup className="my-2">
              <Form.Label className="w-full text-left">Password</Form.Label>

              <Form.Control
                {...registerHook("password", { required: true })}
                type="password"
                placeholder="Password"
                value={password}
              />
              {touchedFields.password && errors.password && (
                <div className="my-2">
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
            <FormGroup className="my-2">
              <Form.Label className="w-full text-left">
                Confirm Password
              </Form.Label>

              <Form.Control
                {...registerHook("confirmPassword", { required: true })}
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
              />
              {touchedFields.confirmPassword && errors.confirmPassword && (
                <div className="my-2">
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
            <div className="selectArea">
              <Typography variant="body1" style={{ margin: "0.6rem" }}>
                Choose user type
              </Typography>
              <select
                {...registerHook("userType", { required: true })}
                name="userType"
                value={userType}
              >
                <option value="mentor">Mentor</option>
                <option value="student">Student</option>
              </select>
              {touchedFields.userType && errors.userType && (
                <div className="my-2">
                  <Alert
                    severity="error"
                    variant="outlined"
                    className="py-0 border-0"
                  >
                    {errors.userType.message}
                  </Alert>
                </div>
              )}
            </div>
            <a href="#">Forgot your password?</a>
            <SubmitButton
              type="submit"
              variant="contained"
              size="small"
              styleCode={{ padding: "0.3rem 2rem", fontSize: "0.8rem" }}
              onClick={() => {
                setValue("name", name, { shouldTouch: true });
                setValue("name", email, { shouldTouch: true });
                setValue("name", password, { shouldTouch: true });
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
  );
};

export default Signup;

// TODO:The password did not match field error message should go away after some seconds. or should move away once we resubmit form.
