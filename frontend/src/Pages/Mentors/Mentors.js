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
const Mentors = () => {
  const dispatch = useDispatch();
  const mentorList = useSelector((state) => state.mentorList);
  const { loading, error, mentors, page, pages } = mentorList;
  var errorMentor = "";
  if (mentors?.length === 0) {
    errorMentor = "No mentors found";
  }
  const params = useParams();
  const keyword = params?.keyword;
  const pageNumber = params?.pageNumber || 1;
  const [optionValue, setOptionValue] = React.useState("Name");
  useEffect(() => {
    if (optionValue) {
      dispatch(listMentors(keyword, pageNumber, optionValue));
    }
  }, [dispatch, keyword, pageNumber, optionValue]);

  return (
    <div className="pt-[4rem] flex flex-col justify-center content-center px-[4rem]">
      <SearchBox optionValue={optionValue} setOptionValue={setOptionValue} />
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="pt-[5rem] h-[100vh] px-[4rem] flex flex-col justify-center content-center">
          <Message>{error}</Message>
        </div>
      ) : !errorMentor ? (
        <div className="flex flex-col justify-center content-center mb-4">
          <Grid
            container
            spacing={2}
            rowSpacing={4}
            className="px-[4rem] pt-[2rem] pb-4"
            style={{ marginTop: "0" }}
          >
            {mentors.map((mentor) => (
              <Grid key={mentor._id} item xs={12} sm={6} md={4} lg={3}>
                <Users mentor={mentor} />
              </Grid>
            ))}
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
