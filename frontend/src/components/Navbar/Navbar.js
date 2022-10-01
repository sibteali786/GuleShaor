import React, { useState } from "react";
import "./Navbar.scss";
import { ReactComponent as Logo } from "./../../Assets/LandingPage/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import profileImage from "../../Assets/ProfilesImages/Profile Pic.png";
import {
  Avatar,
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
const items = [
  {
    name: "Mentors",
    to: "/mentors",
  },
  {
    name: "Team",
    to: "/team",
  },
  {
    name: "Students",
    to: "/students",
  },
  {
    name: "Services",
    to: "/service",
  },
  {
    name: "Resources",
    to: "/resources",
  },
  {
    name: "FAQs",
    to: "/faq",
  },
  {
    name: "Referrals",
    to: "/referral",
  },
];
const Navbar = () => {
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  };
  const [active, setActive] = useState(0);
  const location = useLocation();
  const [state, setState] = React.useState({
    right: false,
  });
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navContainer px-[4rem] py-1" id="navbar">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="menu">
        {userInfo
          ? items.map((item, index) => (
              <NavLink
                key={item.name}
                className={`item`}
                onClick={() => {
                  setActive(index);
                }}
                to={item.to}
                exact="true"
                aciveclassname={`${
                  active === index && location.pathname === item.to
                    ? "active"
                    : ""
                }`}
              >
                {item.name}
              </NavLink>
            ))
          : items
              .filter(
                (item) => item.name !== "Mentors" && item.name !== "Students"
              )
              .map((item, index) => (
                <NavLink
                  key={item.name}
                  className={`item`}
                  onClick={() => {
                    setActive(index);
                  }}
                  to={item.to}
                  exact="true"
                  aciveclassname={`${
                    active === index && location.pathname === item.to
                      ? "active"
                      : ""
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
      </div>
      <div>
        {userInfo ? (
          <div style={{ marginRight: "2rem" }} className="iconsMenu">
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <img
                  src={profileImage}
                  style={{ height: "50px", width: "auto" }}
                  alt="profile pic"
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              style={{
                textDecoration: "none !important",
                color: "#252c33 !important",
              }}
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <Link to="/settings">
                  <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                  </ListItemIcon>
                  Settings
                </Link>
              </MenuItem>
              <MenuItem onClick={() => logoutHandler()}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="logSign-Desktop">
            <Link to="/login">Log In</Link>
            <Link to="/signup">
              <Button variant="contained">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
      <div id="webapp_cover" onClick={toggleDrawer("right", true)}>
        <div id="menu_button">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        className="mobile"
      >
        <div
          className="webapp_cover-mobile"
          onClick={toggleDrawer("right", false)}
        >
          <div id="menu_button_mobile">
            <i className="fas fa-x"></i>
          </div>
        </div>
        <Link to="/" onClick={toggleDrawer("right", false)}>
          <Logo className="logo-mobile" />
        </Link>
        {userInfo ? (
          <div style={{ margin: "0 auto" }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                style={{ margin: 0 }}
              >
                <img
                  src={profileImage}
                  style={{ height: "50px", width: "auto" }}
                  alt="profile pic"
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              style={{
                textDecoration: "none !important",
                color: "#252c33 !important",
              }}
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <Link to="/settings">
                  <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                  </ListItemIcon>
                  Settings
                </Link>
              </MenuItem>
              <MenuItem onClick={() => logoutHandler()}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="logSign-mobile">
            <Link to="/login" onClick={toggleDrawer("right", false)}>
              Log In
            </Link>
            <Link to="/signup" onClick={toggleDrawer("right", false)}>
              <Button variant="contained">Sign Up</Button>
            </Link>
          </div>
        )}
        <div className="menu-mobile" onClick={toggleDrawer("right", false)}>
          {userInfo
            ? items.map((item, index) => (
                <NavLink
                  key={item.name}
                  className={`item-mobile`}
                  onClick={() => {
                    setActive(index);
                  }}
                  to={item.to}
                  exact="true"
                  aciveclassname={`${
                    active === index && location.pathname === item.to
                      ? "active"
                      : ""
                  }`}
                >
                  {item.name}
                </NavLink>
              ))
            : items
                .filter(
                  (item) => item.name !== "Mentors" && item.name !== "Students"
                )
                .map((item, index) => (
                  <NavLink
                    key={item.name}
                    className={`item-mobile`}
                    onClick={() => {
                      setActive(index);
                    }}
                    to={item.to}
                    exact="true"
                    aciveclassname={`${
                      active === index && location.pathname === item.to
                        ? "active"
                        : ""
                    }`}
                  >
                    {item.name}
                  </NavLink>
                ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
