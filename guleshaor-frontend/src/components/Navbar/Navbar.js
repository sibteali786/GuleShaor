import React from 'react'
import "./Navbar.scss";
import { ReactComponent as Logo } from './../../Assets/LandingPage/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import profileImage from "../../Assets/ProfilesImages/Profile Pic.png"
const Navbar = () => {
  return (
    <div className='navContainer'>
      <Link to="/" >
        <Logo className="logo"/>
      </Link>
        <div className='pagesDesktop'>
            <NavLink exact="true" aciveclassname="active" to="/mentors">Mentors</NavLink>
            <NavLink exact="true" aciveclassname="active" to="/pricing">Pricing</NavLink>
            <NavLink exact="true" aciveclassname="active" to="/team">Team</NavLink>
            <NavLink exact="true" aciveclassname="active" to="/collaborate">Collaborate</NavLink>
            <NavLink exact="true" aciveclassname="active" to="/service">Services</NavLink>
        </div>

        <div className='logSign-Desktop'>
            <Link to="/login">
                Log In
            </Link>
            <Link to="/signIn"><Button variant="contained">
              Sign In
            </Button></Link>
            <Link to="/" >
            <img src={profileImage} style={{height:"50px",width:"auto"}} alt="profile pic"/>
            </Link>
        </div>
        
    </div>
  )
}

export default Navbar;