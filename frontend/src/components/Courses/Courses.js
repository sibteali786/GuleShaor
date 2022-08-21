import React from "react";
import "./Courses.scss";
const Courses = ({ course, mentor }) => {
  return (
    <>
      <div id="container">
        <div className="product-details">
          <h1>{course.name}</h1>
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half" aria-hidden="true"></i>
          </span>

          <p className="information">{course.details}</p>

          <div className="control">
            <button className="btn">
              <span className="price">$250</span>
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span className="buy">Get now</span>
            </button>
          </div>
        </div>

        <div className="product-image">
          <img src={course.poster} alt="" />

          <div className="info">
            <h2> Description</h2>
            <ul>
              <li>
                <strong>{Object.keys(course.description)[0]} : </strong>
                {course.description.chapters}{" "}
              </li>
              <li>
                <strong>{Object.keys(course.description)[1]} :</strong>
                {course.description.hours}
              </li>
              <li>
                <strong>{Object.keys(course.description)[2]} : </strong>
                {course.description.type}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
