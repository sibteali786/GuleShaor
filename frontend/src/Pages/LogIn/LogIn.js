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
import SnakBar from "../../components/SnakBar/SnakBar";
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
      userType: "Choose a User-Type",
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
    if (userInfo) {
      history(redirect);
    }
    if (error) {
      handleClick();
    }
  }, [history, userInfo, redirect, error]);
  return (
    <FormContainer>
      <SnakBar
        open={open}
        handleClose={handleClose}
        typeOfAlert="error"
        message={error}
      />

      <>
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form
                className="space-y-6"
                onSubmit={handleSubmit(submitHandler)}
              >
                <FormGroup className="w-full">
                  <Form.Label className="w-full text-left text-xs">
                    Email
                  </Form.Label>
                  <input
                    {...registerHook("email", { required: true })}
                    placeholder="Email"
                    value={email}
                    size="md"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-700 focus:outline-none focus:ring-gray-700 sm:text-sm"
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
                  <Form.Label className="w-full text-left text-xs">
                    Password
                  </Form.Label>
                  <Form.Control
                    {...registerHook("password", { required: true })}
                    placeholder="Password"
                    type="password"
                    value={password}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-700 focus:outline-none focus:ring-gray-700 sm:text-sm"
                    size="md"
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
                  <Form.Label className="w-full text-left text-xs">
                    UserType
                  </Form.Label>
                  <select
                    aria-label="Mentor"
                    {...registerHook("userType", { required: true })}
                    name="userType"
                    value={userType}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-700 focus:outline-none focus:ring-gray-700 sm:text-sm"
                    size="md"
                  >
                    <option>Choose a User-Type</option>
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
                </FormGroup>

                <div>
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
                </div>
                <NavLink
                  to="/profile-forms"
                  className="text-gray-600 hover:text-gray-900 no-underline text-sm "
                >
                  New Customer? Register
                </NavLink>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div>
                    <a
                      href="#"
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 no-underline"
                    >
                      <span className="sr-only">Sign in with Facebook</span>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 no-underline"
                    >
                      <span className="sr-only">Sign in with Gmail</span>
                      <i className="fab fa-google-plus-g h-5 w-5"></i>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 no-underline"
                    >
                      <span className="sr-only">Sign in with GitHub</span>
                      <i className="fab fa-linkedin-in h-5 w-5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </FormContainer>
  );
};

export default LogIn;
