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
    "/query",
    `/query/search/${params?.keyword}`,
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
    <li
      key={mentor.email}
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
    >
      <div className="flex flex-1 flex-col p-8">
        <Link
          to={
            location.pathname.includes("/query") ||
            possiblePathsRef.current.includes(location.pathname)
              ? `/query/${mentor?._id}`
              : `/students/${mentor?._id}`
          }
        >
          <img
            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
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
        <h3 className="mt-6 text-sm font-medium text-gray-900">
          {mentor.name}
        </h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500">
            {location.pathname.includes("/query")
              ? mentor.mentorDetails.designation
              : mentor.studentDetails.designation}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3 space-x-2 space-y-2">
            {location.pathname.includes("/query")
              ? mentor?.mentorDetails?.technical
                  .slice(0, 4)
                  .map((skill) => (
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {skill}
                    </span>
                  ))
              : mentor?.studentDetails?.technical
                  .slice(0, 4)
                  .map((skill) => (
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {skill}
                    </span>
                  ))}
          </dd>
        </dl>
      </div>
      <div></div>
    </li>
  );
};

export default Users;
