/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./LogIn.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import FormContainer from "../../components/MutliStepForms/FromContainer/FormContainer";
import SnakBar from "../../components/SnakBar/SnakBar";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import Loading from "../../components/Loader/Loader";
const LogIn = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo, success } = userLogin;

  const submitHandler = (data) => {
    // Dispatch Login
    dispatch(login(data?.email, data?.password, data?.userType));
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
    if (success) {
      navigate(redirect);
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", true);
    } else if (error) {
      handleClick();
    }
  }, [navigate, userInfo, redirect, error]);
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
          {loading ? <Loading /> : <LoginForm submitHandler={submitHandler} />}
        </div>
      </>
    </FormContainer>
  );
};

export default LogIn;
