/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Signup.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import { Typography } from "@mui/material";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { register } from "../../actions/userActions";
import FormLoader from "../../components/MutliStepForms/FormLoader/FormLoader";
const Signup = ({ nextStep, setUserDetails, UserDetails }) => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("mentor");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch Register
    setMessage(""); // to remove error alert as its causing bad visuals
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      setUserDetails({
        name,
        email,
        userType,
      });
      dispatch(register(name, email, password, userType));
      nextStep();
    }
  };

  useEffect(() => {
    if (userInfo) {
      history("/profile-forms");
    }
  }, [history, userInfo, redirect]);

  return (
    <div className="SignUp-container">
      <div
        className="container-signup"
        style={{ width: "50%" }}
        id="container1"
      >
        <div className="sign-up-container">
          <form className="form-signup" onSubmit={submitHandler}>
            <h1>Create Account</h1>
            {message && <Message variant="outlined">{message}</Message>}
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
            <div className="selectArea">
              <Typography variant="body1" style={{ margin: "0.6rem" }}>
                Choose user type
              </Typography>
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
            <SubmitButton
              type="submit"
              variant="contained"
              size="small"
              styleCode={{ padding: "0.3rem 2rem", fontSize: "0.8rem" }}
            >
              Sign Up
            </SubmitButton>
            <NavLink to="/login">
              Already a user?{" "}
              <SubmitButton variant="text" size="small">
                LogIn
              </SubmitButton>
            </NavLink>
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
