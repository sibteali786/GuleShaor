import { Container } from "@mui/material";
import React from "react";
import "./Courses.scss";
import { Player, BigPlayButton } from "video-react";
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
                <strong>Height : </strong>5 Ft{" "}
              </li>
              <li>
                <strong>Shade : </strong>Olive green
              </li>
              <li>
                <strong>Decoration: </strong>balls and bells
              </li>
              <li>
                <strong>Material: </strong>Eco-Friendly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
