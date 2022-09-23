import React from "react";
import { Link } from "react-router-dom";
import "./NotFound404.scss";
const NotFound404 = () => {
  return (
    <div className="bg-purple">
      <div className="stars">
        <div className="central-body">
          <img
            className="image-404"
            src="images/404.svg"
            width="300px"
            alt="404"
          />
          <Link to="/" className="btn-go-home">
            GO BACK HOME
          </Link>
        </div>
        <div className="objects">
          <img
            className="object_rocket"
            src="images/rocket_1.svg"
            width="40px"
            alt="rocket"
          />
          <div className="earth-moon">
            <img
              className="object_earth"
              src="images/earth.svg"
              width="100px"
              alt="earth"
            />
            <img
              className="object_moon"
              src="images/moon_1.svg"
              width="80px"
              alt="moon"
            />
          </div>
          <div className="box_astronaut">
            <img
              className="object_astronaut"
              src="images/astronaut_1.svg"
              width="140px"
              alt="astronaut"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
