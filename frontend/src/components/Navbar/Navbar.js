import React, { useRef, useState, useEffect, createRef } from "react";
import "./Navbar.scss";
import { ReactComponent as Logo } from "./../../Assets/LandingPage/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import profileImage from "../../Assets/ProfilesImages/Profile Pic.png";
import gsap from "gsap";
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
    color: "#f44336",
    to: "/mentors",
  },
  {
    name: "Team",
    color: "#9c27b0",
    to: "/team",
  },
  {
    name: "Students",
    color: "#673ab7",
    to: "/students",
  },
  {
    name: "Services",
    color: "#3f51b5",
    to: "/service",
  },
  {
    name: "Resources",
    color: "#3f51b5",
    to: "/resources",
  },
];
const Navbar = () => {
  const $root = useRef();
  const $indicator1 = useRef();
  const $indicator2 = useRef();
  const $items = useRef(items.map(createRef));
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
  useEffect(() => {
    const animate = () => {
      const menuOffset = $root.current.getBoundingClientRect();
      const activeItem = $items.current[active].current;
      const { width, height, top, left } = activeItem.getBoundingClientRect();

      const settings = {
        x: left - menuOffset.x,
        y: top - menuOffset.y,
        width: width,
        height: height,
        backgroundColor: `${
          location.pathname === "/" ? "transparent" : items[active].color
        }`,
        ease: "elastic.out(.7, .7)",
        duration: 0.8,
      };

      gsap.to($indicator1.current, {
        ...settings,
      });

      gsap.to($indicator2.current, {
        ...settings,
        duration: 1,
      });
    };
    animate();
    window.addEventListener("resize", animate);
    return () => {
      window.removeEventListener("resize", animate);
    };
  }, [active, location]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navContainer">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div ref={$root} className="menu">
        {items.map((item, index) => (
          <NavLink
            key={item.name}
            ref={$items.current[index]}
            className={`item`}
            onClick={() => {
              setActive(index);
            }}
            to={item.to}
            exact="true"
            aciveclassname={`${
              active === index && location.pathname === item.to ? "active" : ""
            }`}
          >
            {item.name}
          </NavLink>
        ))}
        <div ref={$indicator1} className="indicator" />
        <div ref={$indicator2} className="indicator" />
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
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                Settings
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
              <Button variant="contained">Sign In</Button>
            </Link>
          </div>
        )}
      </div>
      <div id="webapp_cover" onClick={toggleDrawer("right", true)}>
        <div id="menu_button">
          <input type="checkbox" id="menu_checkbox" />
          <label htmlFor="menu_checkbox" id="menu_label">
            <div id="menu_text_bar"></div>
          </label>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        className="mobile"
      >
        <Link to="/">
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
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                Settings
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
              <Button variant="contained">Sign In</Button>
            </Link>
          </div>
        )}
        <div ref={$root} className="menu-mobile">
          {items.map((item, index) => (
            <NavLink
              key={item.name}
              ref={$items.current[index]}
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
          <div ref={$indicator1} className="indicator-mobile" />
          <div ref={$indicator2} className="indicator-mobile" />
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
