import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Alert, Form, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import loginSchema from "../../FormValues/LoginValues/loginValues";
import SubmitButton from "../../SubmitButton/SubmitButton";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import { signInWithGoogle } from "../../../actions/userActions";
import { useDispatch } from "react-redux";

const LoginForm = ({ submitHandler }) => {
  const dispatch = useDispatch();
  const schema = loginSchema;
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
  const isGoogleButtonDisabled =
    userType === "" || userType === "Choose a User-Type";
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
          <FormGroup className="w-full">
            <Form.Label className="w-full text-left text-xs">Email</Form.Label>
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
            <Button
              variant="contained"
              startIcon={<GoogleIcon />}
              onClick={() => dispatch(signInWithGoogle(userType))}
              disabled={isGoogleButtonDisabled}
            >
              {" "}
              Google{" "}
            </Button>
            <Button variant="contained" startIcon={<FacebookIcon />}>
              {" "}
              Facebook{" "}
            </Button>
            <Button variant="contained" startIcon={<GitHubIcon />}>
              {" "}
              Github{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
