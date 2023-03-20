/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./Users.scss";
import { useLocation } from "react-router-dom";
const Users = ({ mentor }) => {
  const location = useLocation();
  const params = useParams();
  const possiblePathsRef = useRef();
  // All possible paths
  possiblePathsRef.current = [
    "/mentors",
    `/mentors/search/${params?.keyword}`,
    "/query",
  ];

  const keyword = params?.keyword;
  var imgPath = mentor?.mentorDetails
    ? mentor?.mentorDetails?.image
    : mentor?.studentDetails?.image;
  if (!imgPath?.includes("/", 0)) {
    imgPath = `/${imgPath}`;
  }
  return (
    <div>
      <div className="card-container border rounded-2 shadow">
        <span
          className={
            location.pathname === "/mentors" ||
            location.pathname?.replace("%20", " ") ===
              `/mentors/search/${keyword}` ||
            possiblePathsRef.current.includes(location.pathname)
              ? mentor?.mentorDetails?.userType === "Pro"
                ? "Pro"
                : "Free"
              : mentor?.studentDetails?.userType === "Pro"
              ? "Pro"
              : "Free"
          }
        >
          {location.pathname.includes("/mentors") ||
          possiblePathsRef.current.includes(location.pathname)
            ? mentor?.mentorDetails?.userType
            : mentor?.studentDetails?.userType}
        </span>
        <Link
          to={
            location.pathname.includes("/mentors") ||
            possiblePathsRef.current.includes(location.pathname)
              ? `/mentors/${mentor?._id}`
              : `/students/${mentor?._id}`
          }
        >
          <img
            className="round d-inline"
            src={
              imgPath.length > 0
                ? imgPath.length > 1
                  ? imgPath
                  : "./../../../public/images/profilePic.png"
                : "./../../../public/images/profilePic.png"
            }
            alt={mentor?.name}
          />
        </Link>
        <h5 className="xs:text-lg md:text-xl my-1">{mentor?.name}</h5>
        <a
          href={`/mentors/${mentor?._id}`}
          alt="username"
          className="text-gray-500 hover:text-blue-800 my-1"
        >
          {location.pathname.includes("/mentors") ||
          possiblePathsRef.current.includes(location.pathname)
            ? mentor?.mentorDetails?.username
            : mentor?.studentDetails?.username}
        </a>
        {location.pathname.includes("/mentors") ? (
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
            {mentor?.mentorDetails?.technical.length > 0
              ? mentor?.mentorDetails?.technical
                  ?.slice(0, 5)
                  .map((skill, idx) => (
                    <li className="py-1 px-2 mx-1 mb-2 rounded-1" key={idx}>
                      {skill}
                    </li>
                  ))
              : mentor?.about?.skills?.slice(0, 5).map((skill, idx) => (
                  <li className="py-1 px-2 mx-1 mb-2 rounded-1" key={idx}>
                    {skill}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Users;
