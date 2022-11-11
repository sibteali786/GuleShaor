import React, { useEffect, useState } from "react";
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
  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("navbar").style.top = "0";
  //   } else {
  //     document.getElementById("navbar").style.top = "-70px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // };
  const [active, setActive] = useState(0);
  const location = useLocation();
  const [state, setState] = React.useState({
    right: false,
  });
  const [imgPath, setImgPath] = useState(profileImage);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userUpdateDetails = useSelector((state) => state.userUpdateDetails);
  const { userUpdatedDetails } = userUpdateDetails;
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  // Getting image
  useEffect(() => {
    var imgPath = "";
    if (user?.image?.length > 0) {
      imgPath = "/" + user?.image;
      setImgPath(imgPath);
    } else {
      imgPath = userInfo?.image;
      setImgPath(imgPath);
    }
    if (!imgPath?.includes("/", 0)) {
      imgPath = `/${imgPath}`;
      setImgPath(imgPath);
    }
  }, [user, userInfo, imgPath]);

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
    <div className="navContainer px-[4rem] bg-white py-2" id="navbar">
      <Link to="/">
        <svg
          width="42"
          height="37"
          viewBox="0 0 42 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7376 11.8126C12.7376 11.8126 8.83193 13.7734 12.7376 21.8557C12.7376 21.8557 7.5885 19.7036 4.36834 10.2503L3.20462 5.38819C3.20462 5.38819 2.48725 0.0478242 0.127925 0C0.127925 0 -2.74153 24.9642 18.6997 37C18.6997 37 19.6561 23.9918 17.0258 20.405C17.0418 20.4209 12.4985 13.0879 12.7376 11.8126Z"
            fill="#252C33"
          />
          <path
            d="M28.8703 11.8126C28.8703 11.8126 32.776 13.7734 28.8703 21.8557C28.8703 21.8557 34.0194 19.7036 37.2395 10.2503L38.4033 5.38819C38.4033 5.38819 39.1206 0.0478242 41.48 0C41.48 0 44.3494 24.9642 22.9082 37C22.9082 37 21.9517 23.9918 24.5821 20.405C24.5661 20.4209 29.1094 13.0879 28.8703 11.8126Z"
            fill="#252C33"
          />
        </svg>
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
                  className={`item text-sm`}
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
                className="p-0"
              >
                <img
                  className="rounded-full"
                  src={!imgPath.includes("undefined") ? imgPath : profileImage}
                  style={{ height: "40px", width: "auto" }}
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
                <Link
                  to="/settings"
                  className="text-gray-500 no-underline flex"
                >
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <p className="m-0">Settings</p>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => logoutHandler()}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="logSign-Desktop">
            <Link to="/login">
              <button className="hover:bg-orange-200 text-tertiaryColor text-md py-1 px-2 rounded-md transition-color ease-out delay-100 hover:text-black">
                Log In
              </button>
            </Link>
            <Link to="/profile-forms">
              <button className="hover:bg-orange-200 text-tertiaryColor hover:text-black py-1 px-2 rounded-md transition-color ease-out delay-100">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
      <div id="webapp_cover" onClick={toggleDrawer("right", true)}>
        <div id="menu_button">
          <i className="fas fa-bars text-[#252c33] cursor-pointer"></i>
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
                  className="rounded-full"
                  src={
                    userUpdatedDetails
                      ? "/" + userUpdatedDetails?.image
                      : userInfo?.image
                      ? "/" + userInfo?.image
                      : profileImage
                  }
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
                <Link
                  to="/settings"
                  className="text-gray-500 no-underline flex"
                >
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <p className="m-0">Settings</p>
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
            <Link to="/profile-forms" onClick={toggleDrawer("right", false)}>
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
