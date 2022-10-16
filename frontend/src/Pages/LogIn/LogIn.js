/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./LogIn.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import Message from "../../components/Message/Message";
import FormLoader from "../../components/MutliStepForms/FormLoader/FormLoader";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { Alert, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, FormGroup } from "react-bootstrap";
import FormContainer from "../../components/MutliStepForms/FromContainer/FormContainer";
const LogIn = () => {
  const location = useLocation();
  const history = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
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
  });
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      userType: "",
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
  const email = watch("email", "");
  const password = watch("password", "");
  const userType = watch("userType", "");
  const submitHandler = (data) => {
    // Dispatch Login
    dispatch(login(email, password, userType));
  };
  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [history, userInfo, redirect]);
  return (
    <FormContainer>
      <div className="logInSignIn-container pt-16 w-full h-screen">
        <div>
          <div className="form-container">
            <form onSubmit={handleSubmit(submitHandler)} className="form-login">
              <h1>Sign in</h1>
              {error && <Message>{error}</Message>}
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
              <Typography variant="body1">or use your account</Typography>
              <FormGroup className="w-full">
                <Form.Label className="w-full text-left">Email</Form.Label>
                <Form.Control
                  {...registerHook("email", { required: true })}
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
              <FormGroup className="w-full">
                <Form.Label className="w-full text-left">Password</Form.Label>
                <Form.Control
                  {...registerHook("password", { required: true })}
                  placeholder="Password"
                  type="password"
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
              <FormGroup className="w-full">
                <Form.Label className="w-full text-left">UserType</Form.Label>
                <Form.Select
                  aria-label="Mentor"
                  {...registerHook("userType", { required: true })}
                  name="userType"
                  value={userType}
                >
                  <option value="mentor">Mentor</option>
                  <option value="student">Student</option>
                </Form.Select>
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
              </FormGroup>
              <a href="#">Forgot your password?</a>
              <SubmitButton
                type="submit"
                variant="contained"
                size="small"
                styleCode={{ padding: "0.3rem 2rem", fontSize: "0.8rem" }}
                onClick={() => {
                  setValue("email", email, { shouldTouch: true });
                  setValue("password", password, { shouldTouch: true });
                }}
              >
                Sign In
              </SubmitButton>
              <NavLink to="/signup">
                New Customer?{" "}
                <SubmitButton variant="text">Register</SubmitButton>
              </NavLink>
            </form>
          </div>
        </div>
        <div className="svg">
          <img src="/images/form.svg" alt="form svg" />
        </div>
      </div>
    </FormContainer>
  );
};

export default LogIn;
