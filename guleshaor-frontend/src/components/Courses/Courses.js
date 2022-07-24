import React from "react";
import "./Courses.scss";
const Courses = ({ course, mentor }) => {
  return (
    <>
      <div id="container">
        <div class="product-details">
          <h1>{course.name}</h1>
          <span class="hint-star star">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half" aria-hidden="true"></i>
          </span>

          <p class="information">
            {course.details}
          </p>

          <div class="control">
            <button class="btn">
              <span class="price">$250</span>
              <span class="shopping-cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span class="buy">Get now</span>
            </button>
          </div>
        </div>

        <div class="product-image">
          <img src={course.poster} alt="" />

          <div class="info">
            <h2> Description</h2>
            <ul>
              <li>
                <strong>{Object.keys(course.description)[0]} : </strong>{course.description.chapters}{" "}
              </li>
              <li>
                <strong>{Object.keys(course.description)[1]} :</strong>{course.description.hours}
              </li>
              <li>
                <strong>{Object.keys(course.description)[2]} : </strong>{course.description.type}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
