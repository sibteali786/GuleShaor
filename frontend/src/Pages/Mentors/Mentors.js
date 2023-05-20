import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import "./Mentors.scss";
import Users from "../../components/Users/Users";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import { listMentors } from "../../actions/mentorActions";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useParams } from "react-router-dom";
import Paginate from "../../components/Paginate/Paginate";
import useMentors from "../../components/CustomHooks/useMentors";
const Mentors = ({ possiblePathsRef }) => {
  const params = useParams();
  const keyword = params?.keyword;
  const pageNumber = params?.pageNumber || 1;
  const [optionValue, setOptionValue] = React.useState("Name");
  const { loading, error, mentors, page, pages } = useMentors(
    optionValue,
    pageNumber,
    keyword
  );
  var errorMentor = "";
  if (mentors?.length === 0) {
    errorMentor = "No mentors found";
  }
  const handleSectionMove = () => {
    const section = document.getElementById("search");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="pt-[4rem] flex flex-col justify-center items-center px-[4rem]">
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="text-xl sm:text-4xl md:text-5xl text-center font-bold w-2/3 font-[Montserrat]">
          Find Your Perfect Mentor <br /> Get Matched with the Right Expert for
          You
        </h1>
        <p className="text-center w-2/3 py-6 text-black text-lg">
          Looking for a mentor to guide you on your career path? Our platform
          matches you with the perfect mentor based on your goals and expertise
          needs. Find your ideal mentor and take the first step towards
          achieving your career aspirations.
        </p>
        <button onClick={handleSectionMove}>
          <i className="fas fa-arrow-down text-xl transform transition hover:scale-125 ease-in-out delay-120 " />
        </button>
      </div>
      <div id="search" className="w-[80%]">
        <SearchBox optionValue={optionValue} setOptionValue={setOptionValue} />
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="pt-[5rem] h-[100vh] px-[4rem] flex flex-col justify-center content-center">
          <Message>{error}</Message>
        </div>
      ) : !errorMentor ? (
        <div className="flex flex-col justify-center items-center mb-4">
          <Grid
            container
            spacing={2}
            rowSpacing={4}
            className="px-[4rem] pt-[2rem] pb-4"
            style={{ marginTop: "0" }}
          >
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {mentors.map((mentor) => (
                <Users mentor={mentor} />
              ))}
            </ul>
          </Grid>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      ) : (
        <div className="pt-[4rem] h-[100vh] flex flex-col justify-start content-center">
          <div className="flex h-full justify-center content-center ">
            <div className="flex justify-center gap-3 items-center divide-x-2 divide-gray-600">
              <h2 className="text-gray-500 text-lg">404</h2>
              <h2 className="pl-3 text-2xl">{errorMentor}</h2>
            </div>
          </div>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      )}
    </div>
  );
};

export default Mentors;
