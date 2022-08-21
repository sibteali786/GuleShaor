import React from "react";
import { Link } from "react-router-dom";
import "./Users.scss";
import { useLocation } from "react-router-dom";
const Users = ({ mentor }) => {
  const location = useLocation();
  return (
    <div className="card-container">
      <span
        className={
          location.pathname === "/mentors"
            ? mentor.mentorDetails.userType === "Pro"
              ? "Pro"
              : "Free"
            : mentor.studentDetails.userType === "Pro"
            ? "Pro"
            : "Free"
        }
      >
        {location.pathname === "/mentors"
          ? mentor.mentorDetails.userType
          : mentor.studentDetails.userType}
      </span>
      <Link
        to={
          location.pathname === "/mentors"
            ? `/mentors/${mentor._id}`
            : `/students/${mentor._id}`
        }
      >
        <img
          className="round"
          src={
            location.pathname === "/mentors"
              ? mentor.mentorDetails.profilePicture
              : mentor.studentDetails.profilePicture
          }
          alt={mentor.name}
        />
      </Link>
      <h3>{mentor.name}</h3>
      <h6>
        {location.pathname === "/mentors"
          ? mentor.mentorDetails.username
          : mentor.studentDetails.username}
      </h6>
      {location.pathname === "/mentors" ? (
        mentor.mentorDetails.career
          .split("<br/>")
          .map((text, idx) => <p key={idx}>{text}</p>)
      ) : (
        <p>{mentor.studentDetails.career}</p>
      )}
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary ghost">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {mentor.about.skills.slice(0, 3).map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
