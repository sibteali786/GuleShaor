/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./Users.scss";
import { useLocation } from "react-router-dom";
const Users = ({ mentor }) => {
  const location = useLocation();
  return (
    <div className="card-container border rounded-2 shadow">
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
          className="round d-inline"
          src={
            location.pathname === "/mentors"
              ? mentor.mentorDetails.image
              : mentor.studentDetails.image
          }
          alt={mentor.name}
        />
      </Link>
      <h5 className="xs:text-lg md:text-xl my-1">{mentor.name}</h5>
      <a
        href="#"
        alt="username"
        className="text-gray-500 hover:text-blue-800 my-1"
      >
        {location.pathname === "/mentors"
          ? mentor.mentorDetails.username
          : mentor.studentDetails.username}
      </a>
      {location.pathname === "/mentors" ? (
        <p className="py-1 my-0 xs:text-md md:text-lg">
          {mentor?.mentorDetails?.designation}
        </p>
      ) : (
        <p className="py-1 my-0 xs:text-md md:text-lg">
          {mentor?.studentDetails?.designation}
        </p>
      )}
      <div className="buttons">
        <button className="primary mx-2 px-1">Message</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {mentor.about.skills.slice(0, 3).map((skill, idx) => (
            <li className="py-1 px-2 mx-1 mb-2 rounded-1" key={idx}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
