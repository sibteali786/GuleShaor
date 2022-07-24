import React from "react";
import { Link } from "react-router-dom";
import "./Users.scss";
const Users = ({ mentor }) => {
  return (
    <div className="card-container">
      <span className={ mentor.mentorDetails.userType === "Pro" ? "Pro" : "Free"}>{mentor.mentorDetails.userType}</span>
      <Link to={`/mentors/${mentor.id}`}>
      <img className="round" src={mentor.mentorDetails.profilePicture} alt={mentor.name} />
      </Link>
      <h3>{mentor.name}</h3>
      <h6>{mentor.mentorDetails.username}</h6>
      {mentor.mentorDetails.career.split("<br/>").map((text,idx) => (
        <p key={idx}>{text}</p>
      ))}
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary ghost">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {mentor.about.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
