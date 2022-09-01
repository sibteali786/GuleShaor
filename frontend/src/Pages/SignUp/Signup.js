/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Signup.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import FormLoader from "../../components/FormLoader/FormLoader";
import { Typography } from "@mui/material";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { register } from "../../actions/userActions";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("mentor");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const history = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch Register
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(name, email, password, userType));
    }
  };

  useEffect(() => {
    console.log(password, confirmPassword);
    console.log(userInfo);
    if (userInfo) {
      history(redirect);
    }
  }, [history, userInfo, redirect]);

  return (
    <div className="SignUp-container">
      <div class="container-signup" id="container1">
        <div class="sign-up-container">
          <form className="form-signup" onSubmit={submitHandler}>
            <h1>Create Account</h1>
            {message && <Message variant="outlined">{message}</Message>}
            {error && <Message variant="outlined">{error}</Message>}
            {loading && <FormLoader />}
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <Typography variant="subtitle1">
              or use your email for registration
            </Typography>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div style={{ display: "flex" }}>
              <p style={{ margin: "0.6rem" }}>Choose user type :</p>
              <select
                name="userType"
                onChange={(e) => setUserType(e.target.value)}
                value={userType}
              >
                <option value="mentor">Mentor</option>
                <option value="student">Student</option>
              </select>
            </div>
            <a href="#">Forgot your password?</a>
            <SubmitButton type="submit" variant="contained">
              Sign Up
            </SubmitButton>
            <NavLink to="/login">
              Already a user?{" "}
              <SubmitButton variant="contained">LogIn</SubmitButton>
            </NavLink>
          </form>
        </div>
      </div>
      <div className="svg">
        <img src="/images/form.svg" alt="form svg" />
      </div>
    </div>
  );
};

export default Signup;

// TODO:Add the relevant fields of the signup form derived from the backend models
