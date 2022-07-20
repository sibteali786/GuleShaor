import React from "react";
import { Link } from "react-router-dom";
import "./Users.scss";
const Users = ({ user }) => {
  return (
    <div className="card-container">
      <span className={ user.usertype === "Pro" ? "Pro" : "Free"}>{user.usertype}</span>
      <Link to={`/mentors/${user.id}`}>
      <img className="round" src={user.profilePicture} alt={user.name} />
      </Link>
      <h3>{user.name}</h3>
      <h6>{user.username}</h6>
      {user.smallDescription.split("<br/>").map((text,idx) => (
        <p key={idx}>{text}</p>
      ))}
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary ghost">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {user.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
