/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./LogIn.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import Message from "../../components/Message/Message";
import FormLoader from "../../components/MutliStepForms/FormLoader/FormLoader";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { Typography } from "@mui/material";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("mentor");
  const location = useLocation();
  const history = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch Login
    dispatch(login(email, password, userType));
  };
  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [history, userInfo, redirect]);
  return (
    <div className="logInSignIn-container">
      <div className="container-login" id="container1" style={{ width: "50%" }}>
        <div className="form-container">
          <form onSubmit={submitHandler} className="form-login">
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
            <div className="selectArea">
              <Typography variant="body1" style={{ margin: "0.6rem" }}>
                Choose user type{" "}
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
              Sign In
            </SubmitButton>
            <NavLink to="/signup">
              New Customer? <SubmitButton variant="text">Register</SubmitButton>
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

export default LogIn;
