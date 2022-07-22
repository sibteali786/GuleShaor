import React, { useRef, useState, useEffect, createRef } from "react";
import "./Navbar.scss";
import { ReactComponent as Logo } from "./../../Assets/LandingPage/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import profileImage from "../../Assets/ProfilesImages/Profile Pic.png";
import gsap from "gsap";
import { Drawer } from "@mui/material";
const items = [
  {
    name: "Mentors",
    color: "#f44336",
    to: "/mentors",
  },
  {
    name: "Pricing",
    color: "#e91e63",
    to: "/pricing",
  },
  {
    name: "Team",
    color: "#9c27b0",
    to: "/team",
  },
  {
    name: "Collaborate",
    color: "#673ab7",
    to: "/collaborate",
  },
  {
    name: "Services",
    color: "#3f51b5",
    to: "/service",
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
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({[anchor]: open });
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
        backgroundColor: `${ location.pathname === "/" ? "transparent" : items[active].color}`,
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
  }, [active,location]);
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
            aciveclassname={`${active === index && location.pathname === item.to ? "active" : ""}`}
          >
            {item.name}
          </NavLink>
        ))}
        <div ref={$indicator1} className="indicator" />
        <div ref={$indicator2} className="indicator" />
      </div>

      <div className="logSign-Desktop">
        <Link to="/login">Log In</Link>
        <Link to="/signIn"> 
          <Button variant="contained">Sign In</Button>
        </Link>
        <Link to="/">
          <img
            src={profileImage}
            style={{ height: "50px", width: "auto" }}
            alt="profile pic"
          />
        </Link>
      </div>
      <div id="webapp_cover" onClick={toggleDrawer('right', true)}>
        <div id="menu_button">
          <input type="checkbox" id="menu_checkbox" />
          <label for="menu_checkbox" id="menu_label">
            <div id="menu_text_bar"></div>
          </label>
        </div>
      </div>
      <Drawer
      anchor="right"
      open={state['right']}
      onClose={toggleDrawer("right", false)}
      className="mobile"
      >
      <Link to="/">
        <Logo className="logo-mobile" />
      </Link>
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
            aciveclassname={`${active === index && location.pathname === item.to ? "active" : ""}`}
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
