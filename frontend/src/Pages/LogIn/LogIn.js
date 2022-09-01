/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./LogIn.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import Message from "../../components/Message/Message";
import FormLoader from "../../components/FormLoader/FormLoader";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
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
      <div class="container-login" id="container1">
        <div class="form-container sign-in-container">
          <form onSubmit={submitHandler} className="form">
            <h1>Sign in</h1>
            {error && <Message>{error}</Message>}
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
            <span>or use your account</span>
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
              Sign In
            </SubmitButton>
            <NavLink to="/signup">
              New Customer?{" "}
              <SubmitButton variant="contained">Register</SubmitButton>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
